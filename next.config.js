/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

};

module.exports = withLinaria(nextConfig);
