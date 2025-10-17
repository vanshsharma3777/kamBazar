import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname, // 👈 fixes workspace warning
  webpack(config) {
    config.snapshot = { managedPaths: [] };
    config.watchOptions = {
      ignored: ["**/node_modules", "**/.git", "C:/Users/Vansh/Application Data"],
    };
    return config;
  },
};

export default nextConfig;
