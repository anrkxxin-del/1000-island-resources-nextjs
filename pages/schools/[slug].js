import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import SEO from '../../components/SEO';
import SchoolImage from '../../components/SchoolImage';
import SchoolImageGallery from '../../components/SchoolImageGallery';

const mdxComponents = {
  SchoolImage,
  SchoolImageGallery,
};

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
      <main className="school-page">
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
          <Link href="/schools" style={{ color: '#888', textDecoration: 'none' }}>← 所有学校</Link>
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>{frontmatter.name}</h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '32px' }}>{frontmatter.location} · 最后更新：{frontmatter.updated}</p>

        {/* 锚点导航 */}
        <nav className="anchor-nav" aria-label="学校页面导航">
          <p style={{ fontSize: '12px', color: '#999', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>快速导航</p>
          <div className="anchor-list">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="anchor-link">
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <article><MDXRemote {...mdxSource} components={mdxComponents} /></article>

        {/* 底部 CTA */}
        <div style={{ marginTop: '48px', padding: '24px', background: '#fff8f0', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>对这所学校感兴趣？</p>
          <a href="mailto:contact@1000-island.com"
            style={{ padding: '10px 24px', background: '#f97316', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '15px' }}>
            联系顾问了解详情
          </a>
        </div>
      </main>
      <style jsx>{`
        .school-page {
          max-width: 780px;
          margin: 0 auto;
          padding: 48px 24px;
          font-family: sans-serif;
          line-height: 1.8;
        }

        .anchor-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(249, 249, 249, 0.96);
          padding: 16px 20px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 40px;
          backdrop-filter: blur(8px);
        }

        .anchor-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .anchor-link {
          padding: 6px 14px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          font-size: 13px;
          color: #333;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .school-page {
            padding: 32px 16px;
          }

          .anchor-nav {
            margin-left: -16px;
            margin-right: -16px;
            border-left: 0;
            border-right: 0;
            border-radius: 0;
            padding: 12px 16px;
          }

          .anchor-list {
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 4px;
          }

          .anchor-link {
            flex: 0 0 auto;
            padding: 8px 14px;
            font-size: 14px;
          }
        }
      `}</style>
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
  if (!file) return { notFound: true };
  const { data: frontmatter, content } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return { props: { frontmatter, mdxSource } };
}
