/** @type {import('next').NextConfig} */

const basePath = "/portafolio-2024";

const nextConfig = {
  output: "export", // enables static exports
  basePath, // for github actions deploy
  reactStrictMode: false,
  // images: {
  //   path: `${basePath}`,
  // },
};

// const nextConfig = {};

export default nextConfig;
