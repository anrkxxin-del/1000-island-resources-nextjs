export default function cloudflareImageLoader({ src, width, quality }) {
  const base = 'https://pub-f27c7933df554a82bf9fd3bc8305630e.r2.dev';
  // 如果 src 已经是完整 URL，直接返回
  if (src.startsWith('http')) return src;
  return `${base}/${src}`;
}
