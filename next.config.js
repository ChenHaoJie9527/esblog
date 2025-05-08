/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // 设置路由缓存时间
    staleTimes: {
      // 动态内容的失效时间(秒)
      dynamic: 30,
      // 静态内容的失效时间(秒)
      static: 300,
    }
  },
};

module.exports = nextConfig;
