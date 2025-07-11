import Link from 'next/link';
import Head from 'next/head';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Major Projects',
      description: 'Explore our completed and ongoing KPP technology implementations worldwide.',
      icon: '🏗️',
      href: '/resources/projects',
      items: [
        'Industrial Power Generation',
        'Grid Integration Projects', 
        'Remote Energy Solutions',
        'Hybrid System Implementations'
      ]
    },
    {
      title: 'Performance Data',
      description: 'Comprehensive data on KPP system performance, efficiency metrics, and benchmarks.',
      icon: '📊',
      href: '/performance',
      items: [
        'Efficiency Analysis',
        'Power Output Studies',
        'Cost-Benefit Analysis',
        'Environmental Impact Reports'
      ]
    },
    {
      title: 'Economics & ROI',
      description: 'Financial analysis, investment returns, and economic benefits of KPP technology.',
      icon: '💰',
      href: '/resources/economics',
      items: [
        'Investment Analysis',
        'ROI Calculations',
        'Market Comparisons',
        'Financial Projections'
      ]
    },
    {
      title: 'Demo Materials',
      description: 'Interactive demonstrations, videos, and educational content about KPP technology.',
      icon: '🎥',
      href: '/resources/demo',
      items: [
        'Interactive Simulations',
        'Video Presentations',
        'Technical Animations',
        'Virtual Tours'
      ]
    }
  ];

  const downloads = [
    {
      title: 'KPP Technology Whitepaper',
      description: 'Comprehensive technical overview of Kinetic Power Plant technology',
      type: 'PDF',
      size: '2.4 MB',
      href: '/downloads/kpp-whitepaper.pdf'
    },
    {
      title: 'Performance Benchmarks',
      description: 'Detailed performance data and industry comparisons',
      type: 'PDF',
      size: '1.8 MB',
      href: '/downloads/performance-benchmarks.pdf'
    },
    {
      title: 'Technical Specifications',
      description: 'Complete technical specifications and requirements',
      type: 'PDF',
      size: '3.1 MB',
      href: '/downloads/technical-specs.pdf'
    },
    {
      title: 'Implementation Guide',
      description: 'Step-by-step guide for KPP technology implementation',
      type: 'PDF',
      size: '4.2 MB',
      href: '/downloads/implementation-guide.pdf'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources - Deep Engineering KPP Technology</title>
        <meta name="description" content="Access comprehensive resources on KPP technology including projects, performance data, economics, and demo materials." />
      </Head>

      <div className="resources-page">
        <div className="hero-section">
          <div className="container">
            <h1>KPP Technology Resources</h1>
            <p className="hero-subtitle">
              Comprehensive information, data, and materials to help you understand the power of Kinetic Power Plant technology.
            </p>
          </div>
        </div>

        <div className="resources-content">
          <div className="container">
            {/* Resource Categories */}
            <section className="resource-categories">
              <h2>Explore Our Resources</h2>
              <div className="categories-grid">
                {resourceCategories.map((category, index) => (
                  <div key={index} className="category-card">
                    <div className="category-header">
                      <span className="category-icon">{category.icon}</span>
                      <h3>{category.title}</h3>
                    </div>
                    <p className="category-description">{category.description}</p>
                    <ul className="category-items">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <Link href={category.href} className="category-link">
                      Explore {category.title} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Downloads Section */}
            <section className="downloads-section">
              <h2>Technical Downloads</h2>
              <p className="section-subtitle">
                Access detailed technical documentation, performance reports, and implementation guides.
              </p>
              <div className="downloads-grid">
                {downloads.map((download, index) => (
                  <div key={index} className="download-card">
                    <div className="download-info">
                      <h4>{download.title}</h4>
                      <p>{download.description}</p>
                      <div className="download-meta">
                        <span className="file-type">{download.type}</span>
                        <span className="file-size">{download.size}</span>
                      </div>
                    </div>
                    <a href={download.href} className="download-button">
                      📥 Download
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Access */}
            <section className="quick-access">
              <h2>Quick Access</h2>
              <div className="quick-links-grid">
                <Link href="/analytics" className="quick-link">
                  <span className="quick-icon">🚀</span>
                  <span>Advanced Analytics</span>
                </Link>
                <Link href="/technology" className="quick-link">
                  <span className="quick-icon">🔬</span>
                  <span>Technology Overview</span>
                </Link>
                <Link href="/performance" className="quick-link">
                  <span className="quick-icon">📊</span>
                  <span>Performance Data</span>
                </Link>
                <Link href="/contact" className="quick-link">
                  <span className="quick-icon">📞</span>
                  <span>Contact Us</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resources-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .resources-content {
          padding: 4rem 0;
        }

        .resource-categories {
          margin-bottom: 4rem;
        }

        .resource-categories h2,
        .downloads-section h2,
        .quick-access h2 {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #1e293b;
          margin-bottom: 3rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .category-icon {
          font-size: 2rem;
        }

        .category-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .category-description {
          color: #4b5563;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .category-items {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .category-items li {
          padding: 0.5rem 0;
          color: #6b7280;
          border-bottom: 1px solid #f3f4f6;
        }

        .category-items li:before {
          content: '→';
          color: #3b82f6;
          margin-right: 0.5rem;
        }

        .category-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .category-link:hover {
          color: #1e40af;
        }

        .downloads-section {
          margin-bottom: 4rem;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .downloads-grid {
          display: grid;
          gap: 1.5rem;
        }

        .download-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .download-card:hover {
          transform: translateX(5px);
        }

        .download-info h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .download-info p {
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .download-meta {
          display: flex;
          gap: 1rem;
        }

        .file-type,
        .file-size {
          background: #f3f4f6;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .download-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.3s ease;
        }

        .download-button:hover {
          transform: translateY(-2px);
        }

        .quick-access {
          text-align: center;
        }

        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .quick-link {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.2);
          text-decoration: none;
          color: #1e293b;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .quick-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .quick-icon {
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .download-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .quick-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
