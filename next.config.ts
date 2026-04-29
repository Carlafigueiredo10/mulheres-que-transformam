import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/poder-do-coletivo',
        destination: '/rede-conecta',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
