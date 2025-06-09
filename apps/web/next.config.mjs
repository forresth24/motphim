import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3001'],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
      },
    ],
    unoptimized: true,
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  transpilePackages: ['@plotwist/ui'],
}

export default withMDX(nextConfig)
