import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Keep portraits local until the real image host is known.
    remotePatterns: [],
  },
};

export default nextConfig;
