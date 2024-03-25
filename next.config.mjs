/** @type {import('next').NextConfig} */

const basePath = "/portafolio-2024";

const nextConfig = {
  output: "export", // enables static exports
  basePath, // for github actions deploy
  reactStrictMode: false,
  images: {
    path: `${basePath}`,
    // domains: ["https://aabv21.github.io"],
  },
};

// const nextConfig = {};

export default nextConfig;
