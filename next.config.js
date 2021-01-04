const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Next.js 运行时符合严格模式。
  reactStrictMode: true,
  // 压缩渲染的内容和静态文件。
  compress: false,
  // 默认情况下，Next.js会将带有斜杠的URL重定向到没有斜杠的URL。例如/about/将重定向到/about。您可以配置此行为以相反的方式进行操作，其中将不带斜杠的网址重定向到带斜杠的对应URL。
  // trailingSlash: true,
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  // i18n: {
  //   locales: ['en-US', 'fr', 'nl-NL'],
  //   defaultLocale: 'en-US',
  // },
};
