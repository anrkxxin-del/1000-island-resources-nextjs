import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import SEO from '../../../components/SEO';

export default function BlogArticle({ frontmatter, mdxSource }) {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={`https://1000-island.com/resource/blog/${frontmatter.slug}`}
      />
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>{frontmatter.title}</h1>
        <MDXRemote {...mdxSource} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const paths = files.map(file => ({
    params: { slug: matter(fs.readFileSync(path.join(contentDir, file), 'utf8')).data.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const file = files.find(f => {
    const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf8'));
    return data.slug === params.slug;
  });
  const { data: frontmatter, content } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
  const mdxSource = await serialize(content);
  return { props: { frontmatter, mdxSource } };
}
