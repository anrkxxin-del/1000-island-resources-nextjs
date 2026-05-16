import SEO from '../../components/SEO';

const schools = [
  { slug: 'cia', name: 'CIA — Cebu International Academy', location: '宿务 Mactan（拉普拉普市）' },
  { slug: 'cpils', name: 'CPILS — Center for Premier International Language Studies', location: '宿务市区' },
  { slug: 'ev-academy', name: 'EV Academy', location: '宿务市区' },
  { slug: 'cg-academy', name: 'CG Academy — Cebu Globalization ESL Center', location: '宿务 Talisay / Banilad' },
  { slug: 'beci', name: 'BECI — Baguio English Communication International', location: '碧瑶市' },
  { slug: 'smeag', name: 'SMEAG Global Education', location: '宿务市' },
];

export default function SchoolsIndex() {
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
              <a href={`/resource/schools/${s.slug}`} style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textDecoration: 'none' }}>{s.name}</a>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#888' }}>{s.location}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
