// next.config.js
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  reactStrictMode: false,
};

module.exports = withPlausibleProxy()(nextConfig);
