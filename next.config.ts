// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["robohash.org"], // Allow external images from this domain
//   },
// };

const nextConfig = {
  images: {
    domains: ["robohash.org"], // Allow external images from this domain
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/homepage/dashboard",
        permanent: true, // Set to false if you may change it later
      },
    ];
  },
};

module.exports = nextConfig;