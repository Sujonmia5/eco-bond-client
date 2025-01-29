import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http' if needed
        hostname: "**", // Matches any hostname
      },
    ],
  },
};

export default nextConfig;
