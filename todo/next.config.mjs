/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 1. Enable static export
  output: 'export',
  
  // 2. Set the basePath
  // REPLACE '<your-repo-name>' WITH YOUR REPO NAME
  // You already have 'next_to_do' which looks correct.
  basePath: process.env.NODE_ENV === 'production' ? '/next_to_do' : '',
  
  // 3. Disable image optimization
  images: {
    unoptimized: true,
  },
};

// Use ES Module syntax instead of module.exports
export default nextConfig;
