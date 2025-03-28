import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      resolveAlias: {
        // Ensure consistent React Server Component bindings
        'react-server-dom-webpack/server.edge': 'react-server-dom-turbopack/server.edge',
        'react-server-dom-webpack': 'react-server-dom-turbopack'
      }
    }
  }
};

export default nextConfig;
