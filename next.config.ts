import type { NextConfig } from "next";

/**
 * Set STATIC_EXPORT=1 to emit a fully static `out/` directory (useful for
 * previewing or hosting on any static host). Leave it unset for Vercel,
 * where the Image Optimization pipeline is available.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? { output: "export" as const, trailingSlash: true }
    : {}),
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
