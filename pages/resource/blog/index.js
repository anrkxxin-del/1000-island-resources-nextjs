import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import SEO from '../../../components/SEO';

export default function BlogIndex({ posts }) {
  return (
    <>
      <SEO
        title="Blog"
        description="Latest English learning articles and updates from 1000 Island"
        canonical="https://1000-island.com/resource/blog"
      />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>Blog</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post.slug} style={{ marginBottom: '24px' }}>
                <h2>
                  <Link href={`/resource/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.description && <p>{post.description}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts yet.</p>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const posts = files.map(file => {
    const { data } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
    return {
      title: data.title,
      description: data.description || '',
      slug: data.slug,
    };
  });

  return { props: { posts } };
}
