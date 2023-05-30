const withLinaria = require('next-with-linaria');
const nextConfig = {
  reactStrictMode: true, experimental: {
    appDir: true,
  }, images: {
    remotePatterns: [{
      protocol: "https", hostname: "**",
    },],
  },
};

module.exports = withLinaria(nextConfig);
