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
            <li><Link href="/teachers">外教团队</Link></li>
            <li><Link href="/study-abroad">Study Abroad</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/comparison">Compare</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 1000 Island Resources. All rights reserved.</p>
          <p>Making English education accessible in the Philippines.</p>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="https://www.1000-island.com">Back to Main Site</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
