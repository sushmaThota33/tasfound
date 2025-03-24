import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/tasfound' : '',
  assetPrefix: isProd ? '/tasfound/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/tasfound" : ""
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains : ["tas-foundation.org"]
  },
  output:'export',
  distDir : "out",
  trailingSlash: true,
  experimental: { optimizeCss: true },
};

export default nextConfig;
