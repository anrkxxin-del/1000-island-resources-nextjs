import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/resource/logo.png" alt="千岛游学" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </Link>
          <ul className={styles.navList}>
            <li><Link href="/schools">选校指南</Link></li>
            <li><Link href="/blog">游学攻略</Link></li>
            <li><a href="/resource/teachers.html" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>外教团队</a></li>
            <li><Link href="/about">关于千岛</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>联系千岛游学</p>
          <p>微信号：<strong>qdyx001</strong> / <strong>qdyx002</strong></p>
          <p>电话：<a href="tel:+8613902599527" style={{ color: 'inherit' }}>139-0259-9527</a></p>
          <p>邮箱：<a href="mailto:thousandisland@aliyun.com" style={{ color: 'inherit' }}>thousandisland@aliyun.com</a></p>
          <nav className={styles.footerNav}>
            <Link href="/schools">选校指南</Link>
            <Link href="/about">关于千岛</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="https://www.1000-island.com">主站</Link>
          </nav>
          <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>&copy; 2026 千岛游学 Thousandisland ESL · 菲律宾英语游学专业顾问</p>
        </div>
      </footer>
    </div>
  );
}
