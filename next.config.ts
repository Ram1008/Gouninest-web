import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint entirely during production builds
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Skip type‐checking during production builds
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
