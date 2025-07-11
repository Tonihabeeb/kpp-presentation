const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // recognize MDX pages
  
  // ESLint configuration - ignore during builds for deployment
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during build to deploy faster
    dirs: ['pages', 'components', 'lib', 'utils'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3003',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.siemens-energy.com',
        pathname: '/**',
      },
    ],
    // Legacy domains config for backward compatibility
    domains: [
      'localhost', 
      'static.siemens-energy.com',
      // Add other trusted image domains as needed
    ],
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'],
  },

  // Performance optimizations
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = createMDX()(nextConfig); // Enable MDX transformation 