/** @type {import('next').NextConfig} */

const nextConfig = {
  // 子路径基础路由（关键改变：从子域改为子路径）
  basePath: '/resource',

  // 图片优化
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudflare-image-loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-f27c7933df554a82bf9fd3bc8305630e.r2.dev',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },

  // 国际化（预留多语言）
  i18n: {
    locales: ['en', 'zh', 'es'],
    defaultLocale: 'en',
  },

  // 自定义 headers（SEO + 安全）
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // 重定向规则
  redirects: async () => {
    return [];
  },

  // 重写规则
  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
    };
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
