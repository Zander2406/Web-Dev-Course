/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    KEY_ID: process.env.KEY_ID
  }
};

export default nextConfig;
