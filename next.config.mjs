/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", //her skal api'et ind
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
