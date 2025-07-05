import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Excellence: 2MW Industrial Installation",
      client: "Global Manufacturing Corp",
      category: "industrial",
      location: "Michigan, USA",
      capacity: "2MW",
      savings: "45%",
      roi: "3.2 years",
      uptime: "99.7%",
      image: "/case-studies/manufacturing.jpg",
      challenge: "High energy costs affecting competitiveness and sustainability goals",
      solution: "Custom 2MW KPP system with grid-tie and backup capabilities",
      results: [
        "$2.1M annual energy cost savings",
        "Zero downtime since installation",
        "Achieved carbon neutrality goals",
        "Improved operational efficiency by 15%"
      ],
      testimonial: {
        quote: "KPP technology has transformed our energy infrastructure. The consistent power generation and cost savings have exceeded our expectations.",
        author: "Sarah Johnson",
        title: "VP of Operations"
      }
    },
    {
      id: 2,
      title: "Healthcare Reliability: Critical Power for Regional Hospital",
      client: "Regional Medical Center",
      category: "healthcare",
      location: "Texas, USA",
      capacity: "1.5MW",
      savings: "38%",
      roi: "4.1 years",
      uptime: "99.9%",
      image: "/case-studies/hospital.jpg",
      challenge: "Need for reliable backup power and reduced energy costs",
      solution: "Hybrid KPP system with emergency backup integration",
      results: [
        "100% power reliability for critical systems",
        "$1.8M annual savings",
        "Reduced carbon footprint by 60%",
        "Enhanced patient safety systems"
      ],
      testimonial: {
        quote: "The reliability of KPP technology gives us peace of mind knowing our patients are always protected.",
        author: "Dr. Michael Chen",
        title: "Chief Medical Officer"
      }
    },
    {
      id: 3,
      title: "Commercial Innovation: Smart Office Complex",
      client: "Tech Hub Plaza",
      category: "commercial",
      location: "California, USA",
      capacity: "800KW",
      savings: "52%",
      roi: "3.8 years",
      uptime: "99.5%",
      image: "/case-studies/office.jpg",
      challenge: "High electricity costs and tenant sustainability requirements",
      solution: "Scalable KPP system with smart building integration",
      results: [
        "Reduced common area charges by 60%",
        "Attracted premium eco-conscious tenants",
        "Increased property value by 25%",
        "LEED Platinum certification achieved"
      ],
      testimonial: {
        quote: "Our tenants love the sustainable energy solution. It's become a major competitive advantage.",
        author: "Lisa Wang",
        title: "Property Manager"
      }
    },
    {
      id: 4,
      title: "Remote Power: Off-Grid Mining Operation",
      client: "Northern Mining Ltd",
      category: "mining",
      location: "Alaska, USA",
      capacity: "1.2MW",
      savings: "65%",
      roi: "2.8 years",
      uptime: "99.3%",
      image: "/case-studies/mining.jpg",
      challenge: "Expensive diesel generators in remote location",
      solution: "Off-grid KPP system with battery storage",
      results: [
        "Eliminated 500,000 gallons/year diesel consumption",
        "$3.2M annual operational savings",
        "Reduced logistics complexity",
        "Zero emissions at site"
      ],
      testimonial: {
        quote: "KPP eliminated our dependence on diesel fuel delivery. The cost savings and environmental benefits are remarkable.",
        author: "Robert Davis",
        title: "Operations Director"
      }
    },
    {
      id: 5,
      title: "Educational Excellence: University Campus Microgrid",
      client: "State University",
      category: "education",
      location: "New York, USA",
      capacity: "1.8MW",
      savings: "41%",
      roi: "4.5 years",
      uptime: "99.6%",
      image: "/case-studies/university.jpg",
      challenge: "Rising energy costs and sustainability commitments",
      solution: "Campus-wide KPP microgrid with research integration",
      results: [
        "$2.5M annual budget savings",
        "Carbon neutral campus achieved",
        "Student research opportunities created",
        "Emergency power for critical facilities"
      ],
      testimonial: {
        quote: "The KPP system serves as both our power source and a living laboratory for our engineering students.",
        author: "Prof. Amanda Rodriguez",
        title: "Dean of Engineering"
      }
    },
    {
      id: 6,
      title: "Data Center Efficiency: 24/7 Critical Power",
      client: "CloudTech Data Centers",
      category: "technology",
      location: "Virginia, USA",
      capacity: "3MW",
      savings: "35%",
      roi: "3.5 years",
      uptime: "99.99%",
      image: "/case-studies/datacenter.jpg",
      challenge: "Massive power requirements and uptime demands",
      solution: "Redundant KPP systems with N+1 configuration",
      results: [
        "Zero service interruptions",
        "$4.2M annual energy savings",
        "Improved PUE from 1.8 to 1.3",
        "Enhanced client SLA compliance"
      ],
      testimonial: {
        quote: "KPP technology provides the reliability our data center operations demand while significantly reducing costs.",
        author: "James Wilson",
        title: "Facilities Director"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Industries', count: caseStudies.length },
    { id: 'industrial', label: 'Industrial', count: caseStudies.filter(cs => cs.category === 'industrial').length },
    { id: 'healthcare', label: 'Healthcare', count: caseStudies.filter(cs => cs.category === 'healthcare').length },
    { id: 'commercial', label: 'Commercial', count: caseStudies.filter(cs => cs.category === 'commercial').length },
    { id: 'mining', label: 'Mining', count: caseStudies.filter(cs => cs.category === 'mining').length },
    { id: 'education', label: 'Education', count: caseStudies.filter(cs => cs.category === 'education').length },
    { id: 'technology', label: 'Technology', count: caseStudies.filter(cs => cs.category === 'technology').length }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const overallStats = {
    totalInstallations: caseStudies.length,
    totalCapacity: caseStudies.reduce((sum, cs) => sum + parseFloat(cs.capacity), 0),
    averageSavings: Math.round(caseStudies.reduce((sum, cs) => sum + parseFloat(cs.savings), 0) / caseStudies.length),
    averageUptime: (caseStudies.reduce((sum, cs) => sum + parseFloat(cs.uptime), 0) / caseStudies.length).toFixed(1)
  };

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Success Stories & Case Studies</h1>
            <p className="hero-subtitle">
              Real-world implementations demonstrating the transformative power of KPP technology 
              across diverse industries and applications
            </p>
          </div>
        </div>
      </section>

      {/* Overall Statistics */}
      <section className="stats-section">
        <div className="stats-container">
          <div className={`stats-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Proven Results Across Industries</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-value">{overallStats.totalInstallations}+</div>
                <div className="stat-label">Successful Installations</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-value">{overallStats.totalCapacity.toFixed(1)}MW</div>
                <div className="stat-label">Total Capacity Deployed</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-value">{overallStats.averageSavings}%</div>
                <div className="stat-label">Average Cost Savings</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔧</div>
                <div className="stat-value">{overallStats.averageUptime}%</div>
                <div className="stat-label">Average System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="tab-label">{category.label}</span>
                <span className="tab-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-section">
        <div className="content-container">
          <div className={`case-studies-grid ${isVisible ? 'animate-in' : ''}`}>
            {filteredCaseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="case-study-card">
                <div className="case-study-image">
                  <img src={caseStudy.image} alt={caseStudy.title} />
                  <div className="case-study-overlay">
                    <div className="overlay-stats">
                      <div className="overlay-stat">
                        <span className="stat-value">{caseStudy.capacity}</span>
                        <span className="stat-label">Capacity</span>
                      </div>
                      <div className="overlay-stat">
                        <span className="stat-value">{caseStudy.savings}</span>
                        <span className="stat-label">Savings</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="case-study-content">
                  <div className="case-study-header">
                    <h3>{caseStudy.title}</h3>
                    <div className="case-study-meta">
                      <span className="client-name">{caseStudy.client}</span>
                      <span className="location">{caseStudy.location}</span>
                    </div>
                  </div>
                  
                  <div className="case-study-metrics">
                    <div className="metric-item">
                      <span className="metric-label">Capacity:</span>
                      <span className="metric-value">{caseStudy.capacity}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Cost Savings:</span>
                      <span className="metric-value">{caseStudy.savings}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">ROI Period:</span>
                      <span className="metric-value">{caseStudy.roi}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Uptime:</span>
                      <span className="metric-value">{caseStudy.uptime}</span>
                    </div>
                  </div>
                  
                  <div className="case-study-challenge">
                    <h4>Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="case-study-solution">
                    <h4>Solution</h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  
                  <div className="case-study-results">
                    <h4>Results</h4>
                    <ul>
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="case-study-testimonial">
                    <blockquote>
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                      <strong>{caseStudy.testimonial.author}</strong>
                      <span>{caseStudy.testimonial.title}</span>
                    </div>
                  </div>
                  
                  <div className="case-study-actions">
                    <Link href={`/resources/case-studies/${caseStudy.id}`} className="btn btn-primary">
                      <span>Read Full Case Study</span>
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <div className="content-container">
          <div className={`testimonials-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "The KPP technology has exceeded our expectations in every way. The reliability, cost savings, and environmental benefits make it a game-changer for our operations."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>David Thompson</strong>
                    <span>CEO, Energy Solutions Inc.</span>
                  </div>
                  <div className="company-logo">
                    <img src="/clients/energy-solutions.png" alt="Energy Solutions Inc." />
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "Implementing KPP technology was one of the best decisions we've made. The system pays for itself and provides energy independence we never thought possible."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Maria Rodriguez</strong>
                    <span>CFO, Manufacturing Excellence Corp.</span>
                  </div>
                  <div className="company-logo">
                    <img src="/clients/manufacturing-excellence.png" alt="Manufacturing Excellence Corp." />
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "The support team at Deep Engineering is exceptional. From installation to ongoing maintenance, they ensure our system operates at peak performance."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>John Anderson</strong>
                    <span>Facilities Manager, Tech Campus</span>
                  </div>
                  <div className="company-logo">
                    <img src="/clients/tech-campus.png" alt="Tech Campus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Become Our Next Success Story?</h2>
            <p>Join the growing list of organizations transforming their energy infrastructure with KPP technology</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start Your Project</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-secondary btn-large">
                <span>Explore Solutions</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .case-studies-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .case-studies-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          backdrop-filter: blur(10px);
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
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
        
        .stats-section {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          padding: 4rem 0;
        }
        
        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .stats-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .stats-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .stat-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .filter-section {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        
        .filter-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .filter-tabs {
          display: flex;
          gap: 0;
          overflow-x: auto;
          justify-content: center;
        }
        
        .filter-tab {
          padding: 1rem 2rem;
          border: none;
          background: transparent;
          color: #666;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          border-bottom: 3px solid transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .filter-tab:hover {
          color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .filter-tab.active {
          color: #0070f3;
          border-bottom-color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .tab-count {
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        .case-studies-section {
          padding: 4rem 0;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .case-studies-grid.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .case-study-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .case-study-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .case-study-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .case-study-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .case-study-card:hover .case-study-image img {
          transform: scale(1.05);
        }
        
        .case-study-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,112,243,0.4) 100%);
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }
        
        .overlay-stats {
          display: flex;
          gap: 2rem;
        }
        
        .overlay-stat {
          text-align: center;
          color: white;
        }
        
        .overlay-stat .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          display: block;
        }
        
        .overlay-stat .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .case-study-content {
          padding: 2rem;
        }
        
        .case-study-header {
          margin-bottom: 1.5rem;
        }
        
        .case-study-header h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .case-study-meta {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        
        .client-name {
          font-weight: 600;
          color: #0070f3;
        }
        
        .location {
          font-size: 0.9rem;
          color: #666;
        }
        
        .case-study-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
        }
        
        .metric-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }
        
        .metric-label {
          color: #666;
        }
        
        .metric-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .case-study-challenge,
        .case-study-solution,
        .case-study-results {
          margin-bottom: 1.5rem;
        }
        
        .case-study-challenge h4,
        .case-study-solution h4,
        .case-study-results h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .case-study-challenge p,
        .case-study-solution p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .case-study-results ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .case-study-results li {
          padding: 0.3rem 0;
          color: #666;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .case-study-results li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .case-study-testimonial {
          background: rgba(0,112,243,0.1);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        
        .case-study-testimonial blockquote {
          font-style: italic;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        
        .testimonial-author strong {
          color: #0070f3;
          font-size: 0.9rem;
        }
        
        .testimonial-author span {
          color: #666;
          font-size: 0.8rem;
        }
        
        .case-study-actions {
          text-align: center;
        }
        
        .testimonials-section {
          background: white;
          padding: 6rem 0;
        }
        
        .testimonials-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .testimonials-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .testimonials-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        
        .testimonial-quote {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        
        .author-info strong {
          color: #0070f3;
          font-size: 1rem;
        }
        
        .author-info span {
          color: #666;
          font-size: 0.9rem;
        }
        
        .company-logo {
          width: 60px;
          height: 40px;
          opacity: 0.7;
        }
        
        .company-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
        }
        
        .case-studies-cta {
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
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .btn-large {
          padding: 1rem 2rem;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(0, 112, 243, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 112, 243, 0.4);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .btn:hover .btn-icon {
          transform: translateX(3px);
        }
        
        @media (max-width: 1024px) {
          .case-studies-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .filter-tabs {
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          
          .case-study-metrics {
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