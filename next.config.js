// next.config.js
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlausibleProxy()(nextConfig);
