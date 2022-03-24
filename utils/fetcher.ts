export const ogpFetcher = (url: string) =>
  fetch(url)
    .then((res) => res.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((res) => {
      const headEls = res.head.children;
      Array.from(headEls).map((v) => {
        const prop = v.getAttribute("property");
        if (!prop) return;
        console.log(prop, v.getAttribute("content"));
        const ogp = v.getAttribute("content");
        return {
          ogpData: {
            imageUrl: ogp["og:image"],
            siteName: ogp["og:site_name"],
            title: ogp["og:title"],
            desc: ogp["og:description"],
            siteUrl: ogp["og:url"],
          },
        };
      });
    });
