/** @type {import('next').NextConfig} */
const withLinaria = require("next-with-linaria");

const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 85],
    // Cards are at most 544px wide; include useful mobile and high-DPI sizes.
    deviceSizes: [640, 768, 1088, 1200, 1632],
    imageSizes: [24, 32, 48, 64, 96, 128, 256, 320, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withLinaria(nextConfig);
