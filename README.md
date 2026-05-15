# 1000-Island Resources Platform

AI-optimized content platform for Philippines English learning, designed for SEO + AI search optimization.

## 📁 Project Structure

```
1000-island-resources-nextjs/
├── pages/
│   ├── _app.js                 # Global layout
│   ├── _document.js            # HTML document
│   ├── index.js                # Homepage
│   ├── robots.txt              # robots.txt
│   ├── sitemap.xml             # Dynamic sitemap
│   ├── api/
│   │   └── revalidate.js       # ISR revalidation webhook
│   └── resource/
│       ├── index.js            # Resource hub
│       ├── [category]/
│       │   ├── index.js        # Category page
│       │   └── [slug].js       # Individual article
│       ├── teacher/            # Philippines teacher guides
│       ├── study-abroad/       # Study abroad guides
│       ├── faq/                # FAQ pages
│       └── comparison/         # Comparison pages
│
├── content/
│   ├── teacher/
│   │   ├── how-to-choose.mdx
│   │   ├── vs-local-tutor.mdx
│   │   └── ...
│   ├── study-abroad/
│   │   ├── philippines-top-schools.mdx
│   │   └── ...
│   └── faq/
│
├── components/
│   ├── Layout.js              # Main layout wrapper
│   ├── SEO.js                 # Dynamic SEO meta
│   ├── SchemaGenerator.js     # JSON-LD schema
│   ├── Breadcrumb.js
│   └── Navigation.js
│
├── lib/
│   ├── mdx.js                 # MDX utilities
│   ├── files.js               # File system helpers
│   └── seo.js                 # SEO utilities
│
├── scripts/
│   ├── generate-sitemap.js    # Generate sitemap
│   ├── generate-content.js    # Batch content generation
│   └── validate-seo.js        # SEO validation
│
├── public/
│   ├── robots.txt
│   ├── images/
│   └── data/
│
├── styles/
│   └── globals.css
│
└── Configuration files
    ├── next.config.js
    ├── package.json
    ├── .gitignore
    └── tsconfig.json
```

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/1000-island-resources.git
cd 1000-island-resources-nextjs
npm install
```

### 2. Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

## 📝 Content Management

### Adding New Articles

1. Create `.mdx` file in `content/[category]/[slug].mdx`
2. Include frontmatter:

```yaml
---
title: "Article Title"
description: "SEO description"
keywords: ["keyword1", "keyword2"]
slug: "article-slug"
category: "teacher"
date: "2026-05-15"
---

# Article content here...
```

3. File automatically appears at `/resource/[category]/[slug]`

### Batch Content Generation

```bash
# Generate 20 articles from keyword list
npm run generate-content -- --category teacher --count 20 --keywords keywords.json
```

## 🔍 SEO Features

- ✅ Dynamic meta tags + OG images
- ✅ Automatic FAQ Schema generation
- ✅ Breadcrumb Schema
- ✅ Article Schema (JSON-LD)
- ✅ Dynamic sitemap (auto-updates)
- ✅ robots.txt (initial: Disallow all)
- ✅ ISR (Incremental Static Regeneration)
- ✅ Image optimization (Sharp)

## 🌐 Deployment

### Vercel (Recommended)

1. Connect GitHub repo to Vercel
2. Set environment variables
3. Deploy: `vercel --prod`
4. Configure subdomain: `resources.1000-island.com`

### Environment Variables

```env
# .env.production
NEXT_PUBLIC_SITE_URL=https://resources.1000-island.com
REVALIDATE_TOKEN=your-secret-token
```

## 📊 Monitoring

### SEO Health Check

```bash
# Validate all pages for SEO best practices
npm run validate-seo
```

### Key Metrics

- Page Speed (Vercel Analytics)
- SEO Compliance (lighthouse)
- Content Quality (custom validation)

## 🔄 Content Update Workflow

1. Create/edit `.mdx` in `content/`
2. Push to GitHub
3. Vercel auto-builds and deploys
4. ISR revalidates updated pages
5. Sitemap auto-updates

## 📞 Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- Content API: See `lib/mdx.js`
