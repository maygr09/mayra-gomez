import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/my-journey", destination: "/artist", permanent: true },
    ];
  },
};

export default nextConfig;
