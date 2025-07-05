/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig; 