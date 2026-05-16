import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import SEO from '../../components/SEO';

export default function SchoolsIndex({ schools }) {
  return (
    <>
      <SEO
        title="菲律宾英语学校介绍 | 千岛游学"
        description="千岛游学精选菲律宾英语学校，包含课程、费用、住宿、真实评价，帮你找到最适合的游学方案。"
        canonical="https://1000-island.com/resource/schools"
      />
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>菲律宾英语学校介绍</h1>
        <p style={{ color: '#555', marginBottom: '40px' }}>千岛游学精选学校，每所均有顾问实地考察，信息持续更新。</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {schools.map(s => (
            <li key={s.slug} style={{ padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
              <Link href={`/schools/${s.slug}`} style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textDecoration: 'none' }}>{s.name}</Link>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#888' }}>{s.location}</p>
              {s.description && <p style={{ margin: '10px 0 0', color: '#555', fontSize: '15px', lineHeight: '1.7' }}>{s.description}</p>}
            </li>
          ))}
        </ul>
      </main>
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
        name: data.name,
        slug: data.slug || file.replace(/\.mdx$/, ''),
        location: data.location || '',
        description: data.description || '',
        updated: data.updated || '',
      };
    })
    .filter(s => s.slug && s.name)
    .sort((a, b) => a.name.localeCompare(b.name));

  return { props: { schools } };
}
