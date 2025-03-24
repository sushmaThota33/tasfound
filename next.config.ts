import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1"; // Detect Vercel environment

const nextConfig: NextConfig = {
  basePath: isProd && !isVercel ? '/tasfound' : '', // Static for GitHub Pages, none for Vercel
  assetPrefix: isProd && !isVercel ? '/tasfound/' : '', // Same logic
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && !isVercel ? "/tasfound" : ""
  },
  images: {
    unoptimized: isProd && !isVercel // Only unoptimize for static export (GitHub Pages)
  },
  trailingSlash: true, // Optional, keep if needed for consistency
  experimental: { optimizeCss: false }, // Keep if CSS issues persist
};

export default nextConfig;