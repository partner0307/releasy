const nextConfig = {
  distDir: process.env.BUILD_DIR || '.next',
  images: {
    domains: ['releasyapp-crm.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
