import Image from 'next/image';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="千岛游学 | AI 时代职场英语 · 菲律宾外企背景老师1对1"
        description="千岛游学，菲律宾外资公司背景老师，成人1对1职场英语。帮助大厂人、出海职场人把英语从应付变成优势。同时提供菲律宾精品游学项目。"
        canonical="https://1000-island.com/resource"
      />

      <main style={{ maxWidth: '100%', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>

        {/* Hero 1 — 在线课 */}
        <section style={{ position: 'relative', width: '100%' }}>
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-online-class-mobile.png" />
            <img
              src="/hero-online-class.png"
              alt="千岛游学 AI时代职场英语 菲律宾外企背景老师1对1"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </picture>
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)' }}>
            <a href="mailto:contact@1000-island.com"
              style={{ padding: '12px 28px', background: '#f97316', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              预约免费体验课
            </a>
          </div>
        </section>

        {/* Hero 2 — 游学 */}
        <section style={{ position: 'relative', width: '100%' }}>
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-study-abroad-mobile.png" />
            <img
              src="/hero-study-abroad.png"
              alt="千岛游学 在菲律宾把英语真正用起来 精品游学项目"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </picture>
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)' }}>
            <a href="mailto:contact@1000-island.com"
              style={{ padding: '12px 28px', background: '#f97316', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              了解游学项目
            </a>
          </div>
        </section>

        {/* 最新文章 */}
        <section style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>最新文章</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { href: '/resource/blog/why-ai-era-needs-spoken-english', title: '为什么 AI 时代更需要口语英语', date: '2026-05-16' },
              { href: '/resource/blog/philippines-corporate-vs-regular-teacher', title: '菲律宾外资公司老师和普通菲教，差距到底在哪', date: '2026-05-16' },
            ].map(post => (
              <li key={post.href} style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
                <a href={post.href} style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '16px', fontWeight: '500' }}>{post.title}</a>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#999' }}>{post.date}</p>
              </li>
            ))}
          </ul>
          <a href="/resource/blog" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: '#555' }}>查看全部文章 →</a>
        </section>

        <footer style={{ borderTop: '1px solid #eee', padding: '24px', textAlign: 'center', fontSize: '13px', color: '#999' }}>
          <p>© 2026 千岛游学 Thousandisland · 菲律宾外资公司背景老师 · 成人职场英语1对1</p>
        </footer>

      </main>
    </>
  );
}
