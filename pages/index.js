import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="千岛游学 | AI 时代职场英语"
        description="千岛游学，菲律宾外资公司背景老师，成人1对1职场英语。帮助大厂人、出海职场人把英语从应付变成优势。"
        canonical="https://1000-island.com/resource"
      />

      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px', fontFamily: 'sans-serif', lineHeight: '1.8', color: '#1a1a1a' }}>

        <header style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px', letterSpacing: '0.05em' }}>THOUSANDISLAND</p>
          <h1 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 16px' }}>AI 时代，职场英语是稀缺能力</h1>
          <p style={{ fontSize: '17px', color: '#444', maxWidth: '560px' }}>
            AI 可以帮你写邮件，但替不了你开口说。千岛游学提供1对1职场英语训练，老师来自菲律宾外资公司，教的是真实职场里用得上的英语。
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:contact@1000-island.com" style={{ padding: '10px 20px', background: '#1a1a1a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '15px' }}>预约免费体验课</a>
            <a href="/resource/blog" style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '6px', textDecoration: 'none', fontSize: '15px', color: '#1a1a1a' }}>阅读最新文章</a>
          </div>
        </header>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>我们是谁</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { title: '外资公司背景老师', desc: '不是普通菲律宾外教——是在跨国企业、外资机构真实工作过的职场人。' },
              { title: '成人1对1课程', desc: '每节课针对你的真实工作场景：开会、汇报、邮件、谈判。' },
              { title: 'AI + 真人协作', desc: 'AI 工具辅助学习效率，真人老师提供你真正需要的实时反馈。' },
            ].map(item => (
              <div key={item.title} style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
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

        <footer style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid #eee', fontSize: '13px', color: '#999' }}>
          <p>© 2026 千岛游学 Thousandisland · 菲律宾外资公司背景老师 · 成人职场英语1对1</p>
        </footer>

      </main>
    </>
  );
}
