import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep the old Framer URLs working.
  async redirects() {
    return [
      { source: "/productpage", destination: "/projects/product", permanent: true },
      { source: "/productpage/esports", destination: "/projects/product/esports", permanent: true },
      { source: "/productpage/illume", destination: "/projects/product/illume", permanent: true },
      { source: "/brandgraphicpage", destination: "/projects/brand", permanent: true },
      { source: "/brandgraphicpage/auis", destination: "/projects/brand/auis", permanent: true },
      { source: "/brandgraphicpage/posters", destination: "/posters", permanent: true },
      { source: "/brandgraphicpage/uoacs", destination: "/projects/brand/uoacs", permanent: true },
      { source: "/socialmedia", destination: "/projects/social-media", permanent: true },
      { source: "/videoediting", destination: "/projects/video-editing", permanent: true },
    ];
  },
};

export default nextConfig;
