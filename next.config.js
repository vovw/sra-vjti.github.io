/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
};
