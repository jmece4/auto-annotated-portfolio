/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
    swcMinify: true
};

module.exports = nextConfig;
