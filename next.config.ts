import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Отдаём статику напрямую: исходники уже сжаты (7–34 КБ), а динамический
    // /_next/image — лишняя точка отказа и задержка на медленных каналах.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Старый статический сайт: сохраняем ссылочный вес и не отдаём 404 на проиндексированные URL.
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      {
        source:
          '/:page(about|bonuses|compare|disclosure|privacy|responsible|1win|jetton|cass|home|main).html',
        destination: '/',
        permanent: true,
      },
      { source: '/1win', destination: '/#1win', permanent: true },
      { source: '/jetton', destination: '/#jetton', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
