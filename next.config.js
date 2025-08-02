/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
    domains: [
      "sorbannaga.com",
      "mitra.sorbannaga.com",
      // "192.168.50.168", // optional: uncomment jika pakai IP lokal
    ],
  },
};

module.exports = nextConfig;
