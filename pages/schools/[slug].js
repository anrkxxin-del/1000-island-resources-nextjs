import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import SEO from '../../components/SEO';

export default function SchoolPage({ frontmatter, mdxSource }) {
  const sections = [
    { id: 'overview', label: '学校简介' },
    { id: 'courses', label: '课程与费用' },
    { id: 'accommodation', label: '住宿安排' },
    { id: 'reviews', label: '学生评价' },
    { id: 'faq', label: '常见问题' },
  ];
  return (
    <>
      <SEO
        title={`${frontmatter.name} | 菲律宾英语学校介绍 | 千岛游学`}
        description={frontmatter.description}
        canonical={`https://1000-island.com/resource/schools/${frontmatter.slug}`}
      />
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
          <a href="/resource/schools" style={{ color: '#888', textDecoration: 'none' }}>← 所有学校</a>
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>{frontmatter.name}</h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '32px' }}>{frontmatter.location} · 最后更新：{frontmatter.updated}</p>

        {/* 锚点导航 */}
        <nav style={{ background: '#f9f9f9', padding: '16px 20px', borderRadius: '8px', marginBottom: '40px' }}>
          <p style={{ fontSize: '12px', color: '#999', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>快速导航</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{ padding: '6px 14px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '20px', fontSize: '13px', color: '#333', textDecoration: 'none' }}>
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <article><MDXRemote {...mdxSource} /></article>

        {/* 底部 CTA */}
        <div style={{ marginTop: '48px', padding: '24px', background: '#fff8f0', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>对这所学校感兴趣？</p>
          <a href="mailto:contact@1000-island.com"
            style={{ padding: '10px 24px', background: '#f97316', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '15px' }}>
            联系顾问了解详情
          </a>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content/schools');
  if (!fs.existsSync(contentDir)) return { paths: [], fallback: false };
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const paths = files.map(file => ({
    params: { slug: matter(fs.readFileSync(path.join(contentDir, file), 'utf8')).data.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), 'content/schools');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const file = files.find(f => {
    const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf8'));
    return data.slug === params.slug;
  });
  const { data: frontmatter, content } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
  const mdxSource = await serialize(content);
  return { props: { frontmatter, mdxSource } };
}
