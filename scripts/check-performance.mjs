import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import { createServer } from "node:net";
import { resolve } from "node:path";
import { gzipSync } from "node:zlib";

// Run against a completed production build, without touching an active dev server.
const probe = createServer();
await new Promise((done) => probe.listen(0, "127.0.0.1", done));
const { port } = probe.address();
await new Promise((done) => probe.close(done));
const server = spawn(
  process.execPath,
  [
    resolve("node_modules/next/dist/bin/next"),
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    String(port),
  ],
  { stdio: ["ignore", "pipe", "pipe"] }
);
let logs = "";
server.stdout.on("data", (data) => {
  logs += data;
});
server.stderr.on("data", (data) => {
  logs += data;
});
const base = `http://127.0.0.1:${port}`;
const routes = [
  "/",
  "/career",
  "/works",
  "/contact",
  "/ai",
  "/webdev",
  "/consulting",
  "/training",
  "/backend",
  "/frontend",
  "/infra",
  "/legacy",
];
const decode = (value) => value.replaceAll("&amp;", "&");
const report = { routes: {}, images: {} };

try {
  for (let attempt = 0; !logs.includes("Ready"); attempt++) {
    assert(server.exitCode === null && attempt < 100, logs);
    await new Promise((done) => setTimeout(done, 100));
  }
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    for (const tag of ["header", "main", "footer"]) {
      assert.equal(
        (html.match(new RegExp(`<${tag}[ >]`, "g")) || []).length,
        1,
        `${route}: one ${tag}`
      );
    }
    const schemas = [
      ...html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
      ),
    ];
    assert(schemas.length > 0, `${route}: JSON-LD in initial HTML`);
    for (const [, schema] of schemas) JSON.parse(schema);
    const scripts = [
      ...new Set(
        [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) =>
          decode(m[1])
        )
      ),
    ];
    let jsGzipBytes = 0;
    for (const src of scripts) {
      const asset = await fetch(base + src);
      assert.equal(asset.status, 200, src);
      jsGzipBytes += gzipSync(Buffer.from(await asset.arrayBuffer())).length;
    }
    const name = route === "/" ? "index" : route.slice(1);
    const segment = await readFile(
      `.next/server/app/${name}.segments/${route === "/" ? "" : `${name}/`}__PAGE__.segment.rsc`,
      "utf8"
    );
    assert(!segment.includes('["$","header"'), `${route}: header is shared`);
    assert(!segment.includes('["$","footer"'), `${route}: footer is shared`);
    const prefetch = await fetch(base + route, {
      headers: {
        RSC: "1",
        "Next-Router-Prefetch": "1",
        "Next-Router-Segment-Prefetch": "/_tree",
      },
    });
    assert.equal(prefetch.status, 200, `${route}: prefetch`);
    assert(prefetch.headers.get("content-type").includes("text/x-component"));
    await prefetch.arrayBuffer();
    report.routes[route] = {
      jsGzipBytes,
      jsRequests: scripts.length,
      pageSegmentGzipBytes: gzipSync(segment).length,
      jsonLdScripts: schemas.length,
    };
    if (route === "/") {
      assert.match(html, /rel="preload"[^>]*as="image"/);
      const image = html.match(/<img[^>]*src="([^"]*q=85)"[^>]*>/)?.[1];
      assert(image, "Profile image remains quality 85");
      const imageResponse = await fetch(base + decode(image));
      assert.equal(imageResponse.status, 200);
      await imageResponse.arrayBuffer();
      const source = new URL(decode(image), base).searchParams.get("url");
      assert(source.startsWith("/_next/static/media/"));
      const original = await fetch(base + source);
      assert.match(original.headers.get("cache-control"), /immutable/);
      await original.arrayBuffer();
    }
    if (route === "/works") {
      const images = [...html.matchAll(/<img[^>]*>/g)];
      assert.equal(images.length, 6);
      for (const [tag] of images) {
        assert.match(tag, /loading="lazy"/);
        assert.match(tag, /sizes="\(max-width: 600px\)/);
      }
    }
  }
  for (const route of ["/robots.txt", "/sitemap.xml", "/api/hello"]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    await response.arrayBuffer();
  }
  const missing = await fetch(`${base}/performance-check-missing`);
  assert.equal(missing.status, 404);
  await missing.arrayBuffer();
  // Same source, quality and WebP format. At 390px / DPR 2 the card is 262 CSS px:
  // old fixed 544px srcset selected 1200px; the responsive srcset needs 640px.
  for (const file of await readdir("public/assets/works")) {
    if (!file.endsWith(".jpg")) continue;
    const sizes = {};
    for (const width of [1200, 640]) {
      const url = `/_next/image?url=${encodeURIComponent(`/assets/works/${file}`)}&w=${width}&q=75`;
      const response = await fetch(base + url, {
        headers: { Accept: "image/webp" },
      });
      assert.equal(response.status, 200, url);
      assert.match(response.headers.get("content-type"), /image\/webp/);
      sizes[width] = (await response.arrayBuffer()).byteLength;
    }
    report.images[file] = { beforeBytes: sizes[1200], afterBytes: sizes[640] };
  }
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  console.error(logs);
  throw error;
} finally {
  server.kill("SIGTERM");
  const forceStop = setTimeout(() => server.kill("SIGKILL"), 5000);
  forceStop.unref();
  server.once("close", () => clearTimeout(forceStop));
}
