import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/tasfound' : '',
  assetPrefix: isProd ? '/tasfound/' : '',
  trailingSlash: true,
};

export default nextConfig;
