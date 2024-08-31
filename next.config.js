/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    async redirects() {
        return [
            {
                source: '/:path*', // Match all paths
                destination: 'https://www.hookerhillstudios.com/:path*', // Redirect to the same path on the main domain
                permanent: true, // This makes it a 301 permanent redirect
            },
        ];
    },
};

module.exports = withContentlayer({ ...nextConfig });
