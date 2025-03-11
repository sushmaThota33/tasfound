import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/tasfound' : '',
  assetPrefix: isProd ? '/tasfound/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/tasfound" : ""
  },
  trailingSlash: true,
};

export default nextConfig;
