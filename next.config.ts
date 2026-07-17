import type { NextConfig } from "next";

const REPO_NAME = "fm-premiumcars";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true,
  images: {
    // GitHub Pages has no server to run Next's image optimizer — serve
    // images as-is. Directus assets are already resized via directusAssetUrl().
    unoptimized: true,
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
