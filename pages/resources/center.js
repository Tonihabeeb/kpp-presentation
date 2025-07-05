import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ResourcesCenter() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resources = [
    {
      id: 1,
      title: "KPP Technology White Paper",
      category: "whitepapers",
      type: "PDF",
      size: "2.3 MB",
      description: "Comprehensive technical overview of Kinetic Power Plant technology and applications",
      downloadUrl: "/resources/kpp-whitepaper.pdf",
      featured: true
    },
    {
      id: 2,
      title: "Installation & Maintenance Guide",
      category: "technical",
      type: "PDF",
      size: "1.8 MB",
      description: "Complete guide for KPP system installation, commissioning, and maintenance procedures",
      downloadUrl: "/resources/installation-guide.pdf",
      featured: false
    },
    {
      id: 3,
      title: "Renewable Energy Market Report 2024",
      category: "reports",
      type: "PDF",
      size: "4.2 MB",
      description: "Industry analysis and market trends in renewable energy sector",
      downloadUrl: "/resources/market-report-2024.pdf",
      featured: true
    },
    {
      id: 4,
      title: "Safety Standards & Compliance",
      category: "technical",
      type: "PDF",
      size: "1.2 MB",
      description: "Safety protocols and regulatory compliance documentation",
      downloadUrl: "/resources/safety-standards.pdf",
      featured: false
    },
    {
      id: 5,
      title: "Financial Models & ROI Calculator",
      category: "tools",
      type: "Excel",
      size: "850 KB",
      description: "Interactive financial modeling tool for KPP investment analysis",
      downloadUrl: "/resources/roi-calculator.xlsx",
      featured: false
    },
    {
      id: 6,
      title: "Case Study: Manufacturing Facility",
      category: "case-studies",
      type: "PDF",
      size: "1.5 MB",
      description: "Real-world implementation case study from industrial manufacturing client",
      downloadUrl: "/resources/case-study-manufacturing.pdf",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'whitepapers', name: 'White Papers', count: resources.filter(r => r.category === 'whitepapers').length },
    { id: 'technical', name: 'Technical Docs', count: resources.filter(r => r.category === 'technical').length },
    { id: 'reports', name: 'Industry Reports', count: resources.filter(r => r.category === 'reports').length },
    { id: 'case-studies', name: 'Case Studies', count: resources.filter(r => r.category === 'case-studies').length },
    { id: 'tools', name: 'Tools & Calculators', count: resources.filter(r => r.category === 'tools').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const webinars = [
    {
      title: "Introduction to KPP Technology",
      date: "2024-02-15",
      duration: "45 min",
      presenter: "Dr. Sarah Chen, CTO",
      description: "Overview of KPP technology principles and applications",
      registrationUrl: "/webinars/intro-kpp"
    },
    {
      title: "Financial Benefits of KPP Systems",
      date: "2024-02-22",
      duration: "30 min",
      presenter: "Michael Rodriguez, CFO",
      description: "ROI analysis and financial modeling for KPP investments",
      registrationUrl: "/webinars/financial-benefits"
    },
    {
      title: "KPP vs Traditional Renewable Energy",
      date: "2024-03-01",
      duration: "60 min",
      presenter: "Engineering Team",
      description: "Comparative analysis of KPP technology against solar and wind",
      registrationUrl: "/webinars/technology-comparison"
    }
  ];

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Resource Center</h1>
            <p className="hero-subtitle">
              Access comprehensive technical documentation, industry reports, 
              and educational resources for KPP technology
            </p>
          </div>
        </div>
      </section>

      <section className="featured-resources">
        <div className="content-container">
          <h2>Featured Resources</h2>
          <div className="featured-grid">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="featured-card">
                <div className="resource-type">{resource.type}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-meta">
                  <span className="resource-size">{resource.size}</span>
                  <a href={resource.downloadUrl} className="download-btn">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-library">
        <div className="content-container">
          <div className="library-header">
            <h2>Resource Library</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="library-content">
            <div className="categories-sidebar">
              <h3>Categories</h3>
              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <span className="count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="resources-grid">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="resource-header">
                    <div className="resource-type-badge">{resource.type}</div>
                    <div className="resource-size">{resource.size}</div>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-actions">
                    <a href={resource.downloadUrl} className="btn btn-primary">
                      Download
                    </a>
                    <button className="btn btn-secondary">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="webinars-section">
        <div className="content-container">
          <h2>Upcoming Webinars</h2>
          <div className="webinars-grid">
            {webinars.map((webinar, index) => (
              <div key={index} className="webinar-card">
                <div className="webinar-date">{webinar.date}</div>
                <h3>{webinar.title}</h3>
                <p>{webinar.description}</p>
                <div className="webinar-details">
                  <div className="detail">
                    <strong>Duration:</strong> {webinar.duration}
                  </div>
                  <div className="detail">
                    <strong>Presenter:</strong> {webinar.presenter}
                  </div>
                </div>
                <a href={webinar.registrationUrl} className="btn btn-primary">
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Need Additional Resources?</h2>
            <p>Can't find what you're looking for? Contact our technical team for custom documentation and support</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Contact Support</span>
              </Link>
              <Link href="/solutions" className="btn btn-secondary btn-large">
                <span>View Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .resources-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .resources-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 6rem 2rem 4rem;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-text {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .hero-text.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #0070f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
        
        .featured-resources,
        .resources-library,
        .webinars-section {
          padding: 4rem 0;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .featured-resources h2,
        .resources-library h2,
        .webinars-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .featured-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          border-left: 4px solid #0070f3;
        }
        
        .featured-card:hover {
          transform: translateY(-5px);
        }
        
        .resource-type {
          background: #0070f3;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .featured-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .featured-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .resource-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .resource-size {
          font-size: 0.9rem;
          color: #666;
        }
        
        .download-btn {
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .download-btn:hover {
          background: #0051cc;
          transform: translateY(-2px);
        }
        
        .resources-library {
          background: white;
        }
        
        .library-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .search-bar {
          flex: 1;
          max-width: 300px;
        }
        
        .search-bar input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        .search-bar input:focus {
          outline: none;
          border-color: #0070f3;
        }
        
        .library-content {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 3rem;
        }
        
        .categories-sidebar h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .category-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .category-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .category-btn:hover,
        .category-btn.active {
          border-color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .count {
          font-size: 0.8rem;
          color: #666;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .resource-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        
        .resource-card:hover {
          transform: translateY(-3px);
        }
        
        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .resource-type-badge {
          background: #f8f9fa;
          color: #666;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .resource-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .resource-card p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .resource-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .btn {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary {
          background: #0070f3;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0051cc;
        }
        
        .btn-secondary {
          background: #f8f9fa;
          color: #666;
          border: 1px solid #e0e0e0;
        }
        
        .btn-secondary:hover {
          background: #e9ecef;
        }
        
        .webinars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .webinar-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .webinar-card:hover {
          transform: translateY(-5px);
        }
        
        .webinar-date {
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .webinar-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .webinar-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .webinar-details {
          margin-bottom: 1.5rem;
        }
        
        .detail {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        
        .resources-cta {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          padding: 6rem 0;
        }
        
        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }
        
        .cta-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .cta-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-large {
          padding: 1rem 2rem;
          font-size: 1rem;
        }
        
        .btn-primary.btn-large {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          box-shadow: 0 8px 25px rgba(0, 112, 243, 0.3);
        }
        
        .btn-primary.btn-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 112, 243, 0.4);
        }
        
        .btn-secondary.btn-large {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary.btn-large:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }
        
        @media (max-width: 1024px) {
          .library-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .categories-sidebar {
            order: 2;
          }
          
          .resources-grid {
            order: 1;
          }
          
          .category-list {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .library-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-bar {
            max-width: none;
          }
          
          .featured-grid,
          .resources-grid,
          .webinars-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
} 