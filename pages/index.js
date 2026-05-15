import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="1000 Island English Learning Resources"
        description="Comprehensive guides to Philippines English tutors, study abroad programs, and IELTS preparation"
        canonical="https://1000-island.com/resource"
      />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>1000 Island Learning Resources</h1>
        <p>Your go-to guide for English learning in the Philippines.</p>

        <section>
          <h2>Resource Categories</h2>
          <ul>
            <li><a href="/teacher">Philippines English Teachers</a></li>
            <li><a href="/study-abroad">Study Abroad Programs</a></li>
            <li><a href="/faq">Frequently Asked Questions</a></li>
            <li><a href="/comparison">Service Comparisons</a></li>
          </ul>
        </section>

        <section>
          <h2>Popular Topics</h2>
          <ul>
            <li>How to choose the right online English teacher</li>
            <li>Best Philippines study abroad destinations</li>
            <li>IELTS preparation guides</li>
            <li>Workplace English tips</li>
          </ul>
        </section>

        <footer style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', color: '#666' }}>
          <p>&copy; 2026 1000 Island. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
