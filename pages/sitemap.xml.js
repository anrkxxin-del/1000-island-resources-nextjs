// pages/sitemap.xml.js
// 注意：此文件位于 /resource/sitemap.xml（因为有 basePath: '/resource'）

function generateSiteMap() {
  const baseUrl = 'https://1000-island.com/resource'; // 改为主域的子路径

  // 获取所有 markdown 文件
  // 这是示例 - 生产环境需要扫描 /content 目录
  const articles = [
    { slug: 'how-to-choose-teacher', category: 'teacher', lastmod: '2026-05-15' },
    { slug: 'top-10-online-tutors', category: 'teacher', lastmod: '2026-05-15' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}</loc>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/teacher</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${baseUrl}/study-abroad</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     ${articles
       .map(({ slug, category, lastmod }) => {
         return `
       <url>
           <loc>${baseUrl}/${category}/${slug}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
