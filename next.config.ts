import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "85.204.104.155",
        port: "9000",
        pathname: "/seepan-media/**",
      },
    ],
  },
};
export default nextConfig;
