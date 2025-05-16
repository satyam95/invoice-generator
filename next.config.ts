import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: true, // Enable React strict mode
  // experimental: {
  //   esmExternals: "loose", // Ensure ESM dependencies are handled
  // },
  transpilePackages: ["@react-pdf/renderer"],
};

export default nextConfig;
