/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos', 'fastly.picsum.photos'], // <== Domain name
  },
};

module.exports = nextConfig;
