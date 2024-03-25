/** @type {import('next').NextConfig} */

const basePath = "/portafolio-2024";

const nextConfig = {
  output: "export", // enables static exports
  basePath, // for github actions deploy
  reactStrictMode: true,
  images: {
    path: `${basePath}/_next/image`,
  },
};

// const nextConfig = {};

export default nextConfig;
