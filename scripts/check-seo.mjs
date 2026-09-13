import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";

// Check rendered responses, so metadata inheritance and route conflicts are caught.
const baseUrl = process.argv[2] || "http://localhost:3000";
const canonicalOrigin = "https://www.notchman.tech";
const appDirectory = new URL("../app/", import.meta.url);
const files = await readdir(appDirectory, { recursive: true });
const paths = files
  .filter((file) => /(^|\/)page\.tsx$/.test(file))
  .map((file) => `/${file.replace(/\/?page\.tsx$/, "")}`);

async function get(path) {
  const response = await fetch(new URL(path, baseUrl), {
    redirect: "manual",
    signal: AbortSignal.timeout(30_000),
  });
  assert.equal(
    response.status,
    200,
    `${path}: must return 200 without a redirect`
  );
  return { response, body: await response.text() };
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ])
  );
}

const { response: sitemapResponse, body: sitemap } = await get("/sitemap.xml");
assert.match(sitemapResponse.headers.get("content-type"), /xml/);
assert.match(
  sitemap,
  /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/
);
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
  (match) => {
    const url = match[1].match(/<loc>(.*?)<\/loc>/)?.[1];
    const modified = match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    assert.ok(url, "Every sitemap entry needs a URL");
    assert.match(modified || "", /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Date.parse(modified) <= Date.now(), `${url}: future lastmod`);
    return url;
  }
);
assert.equal(new Set(entries).size, entries.length, "Duplicate sitemap URLs");
assert.deepEqual(
  entries.toSorted(),
  paths.map((path) => new URL(path, canonicalOrigin).href).toSorted(),
  "Sitemap must include every public page exactly once"
);

const { response: robotsResponse, body: robots } = await get("/robots.txt");
assert.match(robotsResponse.headers.get("content-type"), /text\/plain/);
assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
assert.match(robots, /User-Agent: \*/i);
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im);
assert.match(robots, /^Allow: \/\s*$/im);
const excludedPaths = [...robots.matchAll(/^Disallow:\s*(\S+)\s*$/gim)].map(
  (match) => match[1]
);
assert.deepEqual(
  excludedPaths,
  ["/api/"],
  "Only API routes should be excluded"
);
for (const path of [
  ...paths,
  "/_next/static/site.css",
  "/_next/static/site.js",
  "/_next/image",
  "/profile.jpg",
  "/assets/icons/github.svg",
]) {
  assert.ok(
    !excludedPaths.some((excluded) => path.startsWith(excluded)),
    `${path}: page or asset blocked by robots.txt`
  );
}

const titles = new Set();
const descriptions = new Set();
for (const path of paths) {
  const { body: html } = await get(path);
  const canonical = new URL(path, canonicalOrigin).href;
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) =>
    attributes(tag)
  );
  assert.deepEqual(
    links
      .filter((link) => link.rel === "canonical")
      .map((link) => new URL(link.href).href),
    [canonical],
    `${path}: incorrect or duplicate canonical`
  );
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) =>
    attributes(tag)
  );
  const meta = (name) => {
    const found = metas.filter(
      (entry) => (entry.name || entry.property) === name
    );
    assert.equal(found.length, 1, `${path}: expected one ${name}`);
    return found[0].content;
  };
  const titleMatches = [...html.matchAll(/<title>(.*?)<\/title>/g)];
  assert.equal(titleMatches.length, 1, `${path}: expected one title`);
  const title = titleMatches[0][1];
  const description = meta("description");
  assert.ok(title && description, `${path}: empty metadata`);
  assert.ok(!titles.has(title), `${path}: duplicate title`);
  assert.ok(!descriptions.has(description), `${path}: duplicate description`);
  titles.add(title);
  descriptions.add(description);
  assert.equal(new URL(meta("og:url")).href, canonical);
  assert.equal(meta("og:title"), title);
  assert.equal(meta("twitter:title"), title);
  assert.equal(meta("og:description"), description);
  assert.equal(meta("twitter:description"), description);
  assert.equal(meta("og:locale"), "ja_JP");
  assert.equal(meta("og:image"), `${canonicalOrigin}/profile.jpg`);
  assert.equal(meta("og:image:width"), "3024");
  assert.equal(meta("og:image:height"), "2016");
  assert.equal(meta("twitter:image"), `${canonicalOrigin}/profile.jpg`);
  assert.equal(meta("viewport"), "width=device-width, initial-scale=1");
  assert.ok(
    !metas.some(
      (entry) =>
        /robots|googlebot/.test(entry.name || "") &&
        /noindex/.test(entry.content)
    )
  );
  assert.match(html, /<html[^>]*lang="ja"/);
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${path}: expected one h1`
  );
  assert.ok(
    !html.includes("https://notchman.tech"),
    `${path}: non-www URL remains`
  );

  const structuredData = [
    ...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g),
  ]
    .filter((match) => attributes(match[1]).type === "application/ld+json")
    .flatMap((match) => JSON.parse(match[2]));
  assert.ok(structuredData.some((entry) => entry["@type"] === "Person"));
  assert.ok(structuredData.some((entry) => entry["@type"] === "WebSite"));
  if (path !== "/") {
    const breadcrumbs = structuredData.filter(
      (entry) => entry["@type"] === "BreadcrumbList"
    );
    assert.equal(
      breadcrumbs.length,
      1,
      `${path}: expected one breadcrumb list`
    );
    assert.equal(breadcrumbs[0].itemListElement.at(-1).item, canonical);
  }
  console.log(`OK ${path}`);
}

const notFound = await fetch(new URL("/__seo_missing_page__", baseUrl));
assert.equal(notFound.status, 404);
assert.match(
  await notFound.text(),
  /<meta[^>]*name="robots"[^>]*content="noindex"/
);
console.log(
  `SEO checks passed: ${paths.length} pages, sitemap, robots.txt, and 404.`
);
