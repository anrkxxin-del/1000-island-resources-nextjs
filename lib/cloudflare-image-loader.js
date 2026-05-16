export default function cloudflareImageLoader({ src, width, quality }) {
  const base = 'https://assets.1000-island.com';
  // 如果 src 已经是完整 URL，直接返回
  if (src.startsWith('http')) return src;
  return `${base}/${src}`;
}
