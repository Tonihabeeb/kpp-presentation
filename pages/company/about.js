import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const executiveTeam = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "20+ years in renewable energy, former VP at General Electric Renewable Energy",
      image: "/team/ceo.jpg",
      linkedin: "#"
    },
    {
      name: "Prof. Michael Chen",
      title: "Chief Technology Officer",
      bio: "Lead inventor of KPP technology, 15+ patents in energy systems",
      image: "/team/cto.jpg",
      linkedin: "#"
    },
    {
      name: "David Rodriguez",
      title: "Chief Financial Officer",
      bio: "Former CFO at Tesla Energy, expert in renewable energy financing",
      image: "/team/cfo.jpg",
      linkedin: "#"
    },
    {
      name: "Lisa Wang",
      title: "Chief Operating Officer",
      bio: "Global operations expert, scaled renewable energy projects across 40+ countries",
      image: "/team/coo.jpg",
      linkedin: "#"
    }
  ];

  const keyMetrics = [
    { label: "Founded", value: "2018", icon: "🏢" },
    { label: "Employees", value: "250+", icon: "👥" },
    { label: "Countries", value: "25+", icon: "🌍" },
    { label: "Patents", value: "50+", icon: "💡" },
    { label: "Installations", value: "150+", icon: "⚡" },
    { label: "Funding Raised", value: "$500M", icon: "💰" }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Deep Engineering Co. established with breakthrough KPP technology"
    },
    {
      year: "2019",
      title: "First Commercial Installation",
      description: "100KW pilot project successfully deployed and operational"
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "$50M Series A led by leading energy investors"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Operations launched in Europe, Asia, and North America"
    },
    {
      year: "2022",
      title: "1MW Milestone",
      description: "First 1MW+ installation completed for industrial client"
    },
    {
      year: "2023",
      title: "Series B Funding",
      description: "$200M Series B to accelerate global deployment"
    },
    {
      year: "2024",
      title: "IPO Preparation",
      description: "Preparing for public offering with 500MW+ pipeline"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Leading the Renewable Energy Revolution</h1>
            <p className="hero-subtitle">
              Deep Engineering Co. is the global pioneer in buoyancy-driven power generation, 
              transforming how the world generates and consumes clean energy.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="nav-tabs-section">
        <div className="tabs-container">
          <div className="nav-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Company Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              Leadership Team
            </button>
            <button 
              className={`tab-button ${activeTab === 'milestones' ? 'active' : ''}`}
              onClick={() => setActiveTab('milestones')}
            >
              Company Milestones
            </button>
            <button 
              className={`tab-button ${activeTab === 'investors' ? 'active' : ''}`}
              onClick={() => setActiveTab('investors')}
            >
              Investor Relations
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="tab-content-section">
        <div className="content-container">
          {/* Company Overview Tab */}
          {activeTab === 'overview' && (
            <div className={`tab-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="overview-grid">
                <div className="overview-text">
                  <h2>Our Mission</h2>
                  <p>
                    To revolutionize global energy infrastructure through innovative buoyancy-driven 
                    power generation technology, providing clean, reliable, and cost-effective energy 
                    solutions for businesses and governments worldwide.
                  </p>
                  
                  <h2>Our Vision</h2>
                  <p>
                    A world powered by sustainable energy where every organization has access to 
                    affordable, reliable, and clean electricity, driving economic growth while 
                    protecting our planet for future generations.
                  </p>
                  
                  <h2>Core Values</h2>
                  <div className="values-grid">
                    <div className="value-item">
                      <h4>🔬 Innovation</h4>
                      <p>Continuous R&D and technological advancement</p>
                    </div>
                    <div className="value-item">
                      <h4>🌱 Sustainability</h4>
                      <p>Environmental responsibility in everything we do</p>
                    </div>
                    <div className="value-item">
                      <h4>🤝 Partnership</h4>
                      <p>Collaborative approach with clients and stakeholders</p>
                    </div>
                    <div className="value-item">
                      <h4>📈 Excellence</h4>
                      <p>Highest standards in quality and performance</p>
                    </div>
                  </div>
                </div>
                
                <div className="metrics-sidebar">
                  <h3>Company at a Glance</h3>
                  <div className="metrics-grid">
                    {keyMetrics.map((metric, index) => (
                      <div key={index} className="metric-item">
                        <div className="metric-icon">{metric.icon}</div>
                        <div className="metric-content">
                          <div className="metric-value">{metric.value}</div>
                          <div className="metric-label">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Leadership Team Tab */}
          {activeTab === 'leadership' && (
            <div className={`tab-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="leadership-content">
                <h2>Executive Leadership Team</h2>
                <p>Our leadership team combines decades of experience in renewable energy, technology innovation, and global business operations.</p>
                
                <div className="team-grid">
                  {executiveTeam.map((member, index) => (
                    <div key={index} className="team-card">
                      <div className="team-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-info">
                        <h3>{member.name}</h3>
                        <h4>{member.title}</h4>
                        <p>{member.bio}</p>
                        <a href={member.linkedin} className="linkedin-link">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="board-section">
                  <h3>Board of Directors</h3>
                  <p>Our board includes industry veterans, technology experts, and sustainability leaders who guide our strategic direction.</p>
                  <Link href="/company/governance" className="btn btn-secondary">
                    View Full Board
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Company Milestones Tab */}
          {activeTab === 'milestones' && (
            <div className={`tab-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="milestones-content">
                <h2>Company Milestones</h2>
                <p>From breakthrough innovation to global deployment - our journey to transform renewable energy.</p>
                
                <div className="timeline">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker">
                        <div className="timeline-year">{milestone.year}</div>
                      </div>
                      <div className="timeline-content">
                        <h3>{milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Investor Relations Tab */}
          {activeTab === 'investors' && (
            <div className={`tab-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="investor-content">
                <h2>Investment Opportunity</h2>
                <p>Join us in revolutionizing the global energy infrastructure with proven KPP technology.</p>
                
                <div className="investment-grid">
                  <div className="investment-highlights">
                    <h3>Investment Highlights</h3>
                    <div className="highlights-list">
                      <div className="highlight-item">
                        <div className="highlight-icon">🎯</div>
                        <div className="highlight-content">
                          <h4>$50B+ Addressable Market</h4>
                          <p>Massive opportunity in global renewable energy transition</p>
                        </div>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🏆</div>
                        <div className="highlight-content">
                          <h4>Proven Technology</h4>
                          <p>150+ successful installations with 99.5% uptime</p>
                        </div>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">📈</div>
                        <div className="highlight-content">
                          <h4>Strong Growth</h4>
                          <p>300% YoY revenue growth with expanding global pipeline</p>
                        </div>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🛡️</div>
                        <div className="highlight-content">
                          <h4>IP Protection</h4>
                          <p>50+ patents creating strong competitive moats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="financial-summary">
                    <h3>Financial Summary</h3>
                    <div className="financial-metrics">
                      <div className="financial-item">
                        <div className="financial-label">Total Funding Raised</div>
                        <div className="financial-value">$500M</div>
                      </div>
                      <div className="financial-item">
                        <div className="financial-label">Current Valuation</div>
                        <div className="financial-value">$2.5B</div>
                      </div>
                      <div className="financial-item">
                        <div className="financial-label">Revenue (2024)</div>
                        <div className="financial-value">$150M</div>
                      </div>
                      <div className="financial-item">
                        <div className="financial-label">Project Pipeline</div>
                        <div className="financial-value">$1.2B</div>
                      </div>
                    </div>
                    
                    <div className="investor-actions">
                      <Link href="/investors/deck" className="btn btn-primary">
                        Download Investor Deck
                      </Link>
                      <Link href="/contact" className="btn btn-secondary">
                        Contact Investor Relations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .about-hero {
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
        
        .nav-tabs-section {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        
        .tabs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .nav-tabs {
          display: flex;
          gap: 0;
          overflow-x: auto;
        }
        
        .tab-button {
          padding: 1rem 2rem;
          border: none;
          background: transparent;
          color: #666;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          border-bottom: 3px solid transparent;
        }
        
        .tab-button:hover {
          color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .tab-button.active {
          color: #0070f3;
          border-bottom-color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .tab-content-section {
          padding: 4rem 2rem;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tab-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        
        .tab-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .overview-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .overview-text h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .overview-text p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 2rem 0;
          font-size: 1.1rem;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        
        .value-item {
          padding: 1.5rem;
          background: rgba(255,255,255,0.8);
          border-radius: 12px;
          border-left: 4px solid #0070f3;
        }
        
        .value-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .value-item p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }
        
        .metrics-sidebar {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .metrics-sidebar h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .metrics-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .metric-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 12px;
          transition: transform 0.3s ease;
        }
        
        .metric-item:hover {
          transform: translateX(5px);
        }
        
        .metric-icon {
          font-size: 2rem;
          width: 50px;
          text-align: center;
        }
        
        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0070f3;
        }
        
        .metric-label {
          font-size: 0.9rem;
          color: #666;
        }
        
        .leadership-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .leadership-content > p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 3rem 0;
          font-size: 1.1rem;
          text-align: center;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .team-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
        }
        
        .team-image {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #0070f3;
        }
        
        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .team-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .team-info h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #0070f3;
        }
        
        .team-info p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          font-size: 0.9rem;
        }
        
        .linkedin-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #0070f3;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .linkedin-link:hover {
          color: #0051cc;
        }
        
        .linkedin-link svg {
          width: 16px;
          height: 16px;
        }
        
        .board-section {
          background: rgba(255,255,255,0.8);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
        }
        
        .board-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .board-section p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .milestones-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .milestones-content > p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 3rem 0;
          font-size: 1.1rem;
          text-align: center;
        }
        
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #0070f3, #0051cc);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        
        .timeline-marker {
          position: absolute;
          left: -3rem;
          top: 0;
          width: 60px;
          height: 60px;
          background: #0070f3;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,112,243,0.3);
        }
        
        .timeline-year {
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
        }
        
        .timeline-content {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          margin-left: 2rem;
        }
        
        .timeline-content h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .timeline-content p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .investor-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .investor-content > p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 3rem 0;
          font-size: 1.1rem;
          text-align: center;
        }
        
        .investment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        
        .investment-highlights h3,
        .financial-summary h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .highlight-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255,255,255,0.8);
          border-radius: 12px;
          border-left: 4px solid #0070f3;
        }
        
        .highlight-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .highlight-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .highlight-content p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .financial-summary {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .financial-metrics {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .financial-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
        }
        
        .financial-label {
          color: #666;
          font-weight: 500;
        }
        
        .financial-value {
          color: #0070f3;
          font-weight: 700;
          font-size: 1.1rem;
        }
        
        .investor-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          background: transparent;
          color: #0070f3;
          border: 2px solid #0070f3;
        }
        
        .btn-secondary:hover {
          background: #0070f3;
          color: white;
          transform: translateY(-3px);
        }
        
        @media (max-width: 1024px) {
          .overview-grid,
          .investment-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .nav-tabs {
            justify-content: flex-start;
          }
          
          .tab-button {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
          
          .timeline {
            padding-left: 1rem;
          }
          
          .timeline-marker {
            left: -2rem;
            width: 40px;
            height: 40px;
          }
          
          .timeline-year {
            font-size: 0.8rem;
          }
          
          .timeline-content {
            margin-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
} 