import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "directus.scalise.ar",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
