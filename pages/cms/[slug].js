import Head from 'next/head';
import { useState, useEffect } from 'react';
import { strapiApi } from '../lib/strapi';
import DynamicContentRenderer from '../components/DynamicContentRenderer';

export default function DynamicPage({ pageData }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!pageData) {
    return (
      <div className="container">
        <Head>
          <title>Page Not Found</title>
        </Head>
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  const { title, content, seo } = pageData;

  return (
    <div className={`container dynamic-page ${isVisible ? 'animate-in' : ''}`}>
      <Head>
        <title>{seo?.metaTitle || title}</title>
        {seo?.metaDescription && (
          <meta name="description" content={seo.metaDescription} />
        )}
        {seo?.keywords && (
          <meta name="keywords" content={seo.keywords} />
        )}
        {seo?.canonicalURL && (
          <link rel="canonical" href={seo.canonicalURL} />
        )}
        {seo?.metaImage && (
          <meta property="og:image" content={strapiApi.getImageUrl(seo.metaImage)} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <DynamicContentRenderer content={content} />
      </main>
    </div>
  );
}

// This function gets called at build time and request time
export async function getServerSideProps({ params, query }) {
  const slug = params?.slug || query?.slug || 'home';
  
  try {
    const pageData = await strapiApi.getPageBySlug(slug);
    
    return {
      props: {
        pageData,
        slug,
      },
    };
  } catch (error) {
    return {
      props: {
        pageData: null,
        slug,
      },
    };
  }
}
