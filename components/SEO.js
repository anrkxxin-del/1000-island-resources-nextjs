import Head from 'next/head';

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'article',
  twitterHandle = '@1000island',
  children,
}) {
  const siteUrl = 'https://1000-island.com';
  const ogImageUrl = ogImage || `${siteUrl}/og-default.jpg`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title} | 1000 Island</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph (Social Media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:site_name" content="1000 Island" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="author" content="1000 Island" />
      <meta name="copyright" content="2026 1000 Island" />
      <meta name="robots" content="noindex, nofollow" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Additional children if passed */}
      {children}
    </Head>
  );
}
