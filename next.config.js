/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // IMPORTANT: prevents GSAP double-init in dev
  experimental: {
    optimizePackageImports: ['gsap', 'three'],
  },
}

module.exports = nextConfig
