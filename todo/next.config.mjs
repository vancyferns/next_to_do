// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 1. Enable static export
  output: 'export',
  
  // 2. Set the basePath
  // REPLACE '<your-repo-name>' WITH YOUR REPO NAME
  basePath: process.env.NODE_ENV === 'production' ? '/next_to_do' : '',
  
  // 3. Disable image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;