import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEOOptimization({ 
  title = "Deep Engineering - Kinetic Power Plant Technology",
  description = "Revolutionary kinetic energy solutions for sustainable industrial power generation. Experience the future of clean energy with KPP technology.",
  keywords = "kinetic power plant, sustainable energy, industrial power, clean technology, energy efficiency, renewable energy, KPP technology",
  image = "/images/og-image.jpg",
  url,
  type = "website",
  author = "Deep Engineering",
  publishedTime,
  modifiedTime
}) {
  const router = useRouter();
  const currentUrl = url || `https://deepengineering.com${router.asPath}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deep Engineering",
    "description": description,
    "url": "https://deepengineering.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://deepengineering.com/images/deep-engineering-logo-main.png",
      "width": 220,
      "height": 55
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "Customer Service",
      "email": "info@deepengineering.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Innovation City",
      "addressRegion": "Tech State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/deepengineering",
      "https://twitter.com/deepengineering",
      "https://youtube.com/deepengineering"
    ],
    "mainEntity": {
      "@type": "Product",
      "name": "Kinetic Power Plant Technology",
      "description": "Revolutionary kinetic energy solutions for sustainable industrial power generation",
      "brand": {
        "@type": "Brand",
        "name": "Deep Engineering"
      },
      "category": "Renewable Energy Technology",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://deepengineering.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "KPP Technology",
        "item": "https://deepengineering.com/technology"
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://deepengineering.com${image}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Deep Engineering" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@deepengineering" />
      <meta name="twitter:creator" content="@deepengineering" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://deepengineering.com${image}`} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#104277" />
      <meta name="msapplication-TileColor" content="#104277" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Publication Times */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
      {/* Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="
          default-src 'self'; 
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; 
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
          font-src 'self' https://fonts.gstatic.com; 
          img-src 'self' data: https: blob:; 
          media-src 'self' https: blob:; 
          connect-src 'self' https://www.google-analytics.com; 
          frame-src 'self' https://www.youtube.com https://player.vimeo.com;
        " 
      />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Alternative Language Versions */}
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
    </Head>
  );
}

// Web App Manifest data
export const webAppManifest = {
  "name": "Deep Engineering - KPP Technology",
  "short_name": "Deep Engineering",
  "description": "Revolutionary kinetic energy solutions for sustainable industrial power generation",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#104277",
  "theme_color": "#104277",
  "orientation": "portrait-primary",
  "categories": ["business", "productivity", "utilities"],
  "lang": "en-US",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "shortcuts": [
    {
      "name": "KPP Technology",
      "short_name": "Technology",
      "description": "Learn about our Kinetic Power Plant technology",
      "url": "/technology",
      "icons": [
        {
          "src": "/icons/shortcut-technology.png",
          "sizes": "96x96"
        }
      ]
    },
    {
      "name": "Contact Us",
      "short_name": "Contact",
      "description": "Get in touch with our team",
      "url": "/contact",
      "icons": [
        {
          "src": "/icons/shortcut-contact.png",
          "sizes": "96x96"
        }
      ]
    }
  ]
};

// Sitemap generation helper
export const generateSitemap = (pages) => {
  const baseUrl = 'https://deepengineering.com';
  const currentDate = new Date().toISOString();
  
  const urlElements = pages.map(page => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${page.lastmod || currentDate}</lastmod>
      <changefreq>${page.changefreq || 'monthly'}</changefreq>
      <priority>${page.priority || '0.8'}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlElements}
    </urlset>
  `;
};

// Robots.txt generation
export const generateRobotsTxt = (baseUrl = 'https://deepengineering.com') => {
  return `User-agent: *
Allow: /

# Block crawling of internal files
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow crawling of important pages
Allow: /
Allow: /technology
Allow: /solutions
Allow: /contact
Allow: /about

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1
`;
};
