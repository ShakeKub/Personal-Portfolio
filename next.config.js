/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true, // This will help with hydration mismatches
  },
};

export default nextConfig;
