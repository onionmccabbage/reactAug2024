/** @type {import('next').NextConfig} */
const nextConfig = {
  // this next lines change how npm run build works: here we export to static deployable files
  output: 'export',
  images: {
    unoptimized: true,
  },
  // default
  reactStrictMode: true,
};

export default nextConfig;
