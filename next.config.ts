import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.cmssy.io" },
      { protocol: "https", hostname: "**.cmssy.dev" },
    ],
  },
};

export default nextConfig;
