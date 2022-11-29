/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'i.pravatar.cc',
      'images.unsplash.com',
    ],
  },
  swcMinify: true,
}

module.exports = nextConfig;
