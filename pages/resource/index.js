import SEO from '../../components/SEO';

export default function ResourceHub() {
  return (
    <>
      <SEO
        title="Learning Resource Hub"
        description="Discover comprehensive guides about Philippines English teachers, study abroad, and language learning"
        canonical="https://1000-island.com/resource"
      />

      <article>
        <h1>Learning Resources</h1>
        <p>Welcome to our comprehensive resource center for English learning in the Philippines.</p>

        <section>
          <h2>Main Categories</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '20px 0' }}>
            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h3><a href="/teacher">Philippines English Teachers</a></h3>
              <p>Everything you need to know about finding and working with English tutors in the Philippines.</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h3><a href="/study-abroad">Study Abroad Programs</a></h3>
              <p>Comprehensive guides to studying English in the Philippines, including schools and programs.</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h3><a href="/faq">Frequently Asked Questions</a></h3>
              <p>Quick answers to common questions about English learning in the Philippines.</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h3><a href="/comparison">Comparisons</a></h3>
              <p>Side-by-side comparisons to help you make informed decisions about English learning services.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Why These Resources?</h2>
          <p>The Philippines has become a major hub for English education, both for international students and online learners. Our resources help you:</p>
          <ul>
            <li>Understand the Philippine English education landscape</li>
            <li>Find quality teachers and programs</li>
            <li>Make informed decisions about study options</li>
            <li>Prepare for language proficiency exams (IELTS, TOEFL, etc.)</li>
          </ul>
        </section>

        <section>
          <h2>How to Use This Resource Hub</h2>
          <p>Browse through our categories above or use the navigation menu to explore specific topics. Each guide is designed to be comprehensive yet easy to understand.</p>
        </section>
      </article>
    </>
  );
}
