import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Hosts allowed to serve product photography. Add a host here if you point
     * a product's `image` in `src/lib/constants.ts` at a new CDN. Photos stored
     * in `/public` need no entry.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
