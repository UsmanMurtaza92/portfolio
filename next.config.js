/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Serve images as-is instead of through /_next/image, which the
    // legacy Netlify Next.js runtime (v4) fails to handle.
    unoptimized: true,
  },
}

module.exports = nextConfig
