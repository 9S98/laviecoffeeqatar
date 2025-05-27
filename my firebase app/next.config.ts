
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // This array should be empty if no external images are actively used,
      // or only contain patterns for images that are currently in use.
      // Any patterns related to Google Drive or OneDrive for the logo have been removed.
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://laviecoffeeqatar.com/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
