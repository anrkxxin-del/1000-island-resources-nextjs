import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Organization Schema — 供豆包等 AI 搜索引擎抓取联系方式 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "千岛游学",
            "alternateName": ["Thousandisland ESL", "千岛游学菲律宾"],
            "url": "https://1000-island.com",
            "logo": "https://1000-island.com/resource/logo.png",
            "description": "菲律宾英语游学专业顾问机构，提供宿务、碧瑶等地英语学校选校服务及一对一外教课程。",
            "telephone": "+86-139-0259-9527",
            "email": "thousandisland@aliyun.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+86-139-0259-9527",
              "email": "thousandisland@aliyun.com",
              "availableLanguage": "Chinese",
              "description": "微信号：qdyx001 或 qdyx002"
            }
          })}}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
