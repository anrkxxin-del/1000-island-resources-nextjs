import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SEO from '../../components/SEO';

const CITY_ORDER = ['宿务', '碧瑶', '克拉克', '伊罗伊罗', '马尼拉', '其他城市'];
const CDN = 'https://assets.1000-island.com';

export default function SchoolsIndex({ schoolsByCity }) {
  return (
    <>
      <SEO
        title="菲律宾英语学校一览 | 千岛游学"
        description="千岛游学精选菲律宾英语学校，按城市分类：宿务、碧瑶、克拉克等，含课程、费用、住宿、真实评价，帮你找到最适合的游学方案。"
        canonical="https://1000-island.com/resource/schools"
      />

      <style jsx>{`
        .page { max-width: 960px; margin: 0 auto; padding: 48px 24px; }
        h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .subtitle { color: #666; margin-bottom: 48px; font-size: 15px; }
        .city-section { margin-bottom: 48px; }
        .city-title {
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #888; margin-bottom: 20px;
          padding-bottom: 10px; border-bottom: 1px solid #eee;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
        .card {
          border: 1px solid #eee; border-radius: 10px;
          overflow: hidden; text-decoration: none; color: inherit;
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s;
        }
        .card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .card-img {
          width: 100%; aspect-ratio: 16/10;
          object-fit: cover; display: block; background: #f5f5f5;
        }
        .card-img-placeholder {
          width: 100%; aspect-ratio: 16/10; background: #f0f0f0;
          display: flex; align-items: center; justify-content: center;
          color: #bbb; font-size: 13px;
        }
        .card-body { padding: 14px 16px 18px; flex: 1; }
        .card-name { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .card-location { font-size: 12px; color: #999; margin-bottom: 8px; }
        .card-desc { font-size: 13px; color: #555; line-height: 1.6; margin-bottom: 12px; }
        .card-link { font-size: 13px; color: #e05c2a; font-weight: 500; }
      `}</style>

      <div className="page">
        <h1>菲律宾英语学校一览</h1>
        <p className="subtitle">千岛游学精选学校，顾问实地考察，信息持续更新。</p>

        {CITY_ORDER.filter(city => schoolsByCity[city]?.length > 0).map(city => (
          <div key={city} className="city-section">
            <div className="city-title">{city}</div>
            <div className="grid">
              {schoolsByCity[city].map(s => (
                <a key={s.slug} href={`/resource/schools/${s.slug}`} className="card">
                  {s.coverImage
                    ? <img className="card-img" src={`${CDN}/${s.coverImage}`} alt={`${s.name} 校区`} loading="lazy" />
                    : <div className="card-img-placeholder">图片即将上线</div>
                  }
                  <div className="card-body">
                    <div className="card-name">{s.name}</div>
                    <div className="card-location">{s.location}</div>
                    <div className="card-desc">{s.description?.slice(0, 60)}{s.description?.length > 60 ? '…' : ''}</div>
                    <span className="card-link">查看详情 →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), 'content/schools');
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
    : [];

  const schools = files
    .map(file => {
      const { data } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
      return {
        name: data.name || '',
        slug: data.slug || file.replace(/\.mdx$/, ''),
        location: data.location || '',
        description: data.description || '',
        city: data.city || '其他城市',
        coverImage: data.coverImage || '',
        updated: data.updated || '',
      };
    })
    .filter(s => s.slug && s.name);

  // Group by city
  const schoolsByCity = {};
  for (const s of schools) {
    if (!schoolsByCity[s.city]) schoolsByCity[s.city] = [];
    schoolsByCity[s.city].push(s);
  }

  return { props: { schoolsByCity } };
}
