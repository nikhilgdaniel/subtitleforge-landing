/** @type {import('next').NextConfig} */
const nextConfig = {
  // No output: 'export' — let Vercel serve Next.js natively (SSR/ISR)
  images: { unoptimized: true },
}

module.exports = nextConfig
