import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PartnershipsEcosystem() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('strategic');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strategicPartners = [
    {
      name: "Siemens Energy",
      type: "Technology Partner",
      description: "Advanced power electronics and grid integration solutions",
      logo: "/logos/siemens.png",
      partnership: "Joint R&D on grid-scale systems",
      since: "2023"
    },
    {
      name: "ABB Group",
      type: "Technology Partner", 
      description: "Electrical equipment and automation technology",
      logo: "/logos/abb.png",
      partnership: "Control systems and monitoring solutions",
      since: "2023"
    },
    {
      name: "Schneider Electric",
      type: "Technology Partner",
      description: "Energy management and automation solutions",
      logo: "/logos/schneider.png", 
      partnership: "Smart energy management systems",
      since: "2024"
    }
  ];

  const distributionPartners = [
    {
      region: "North America",
      partners: ["Energy Solutions Inc.", "PowerTech Distributors", "Green Energy Partners"],
      coverage: "US, Canada, Mexico",
      established: "2024"
    },
    {
      region: "Europe",
      partners: ["European Energy Alliance", "Nordic Power Group", "Mediterranean Energy Co."],
      coverage: "EU, UK, Norway",
      established: "2024"
    },
    {
      region: "Asia Pacific",
      partners: ["Asia Energy Solutions", "Pacific Power Partners", "APAC Green Tech"],
      coverage: "Japan, Australia, Singapore",
      established: "2024"
    }
  ];

  const collaborationOpportunities = [
    {
      type: "Research & Development",
      description: "Joint technology development and innovation programs",
      benefits: ["Shared R&D costs", "Accelerated innovation", "Market access"],
      requirements: ["Technical expertise", "R&D investment", "IP sharing agreement"]
    },
    {
      type: "Manufacturing",
      description: "Licensed manufacturing and assembly partnerships",
      benefits: ["Local production", "Reduced costs", "Market proximity"],
      requirements: ["Manufacturing capability", "Quality standards", "Investment commitment"]
    },
    {
      type: "Distribution",
      description: "Regional and global distribution partnerships",
      benefits: ["Market expansion", "Local expertise", "Customer relationships"],
      requirements: ["Sales network", "Technical support", "Market knowledge"]
    }
  ];

  return (
    <div className="partnerships-page">
      <section className="partnerships-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Partnership Ecosystem</h1>
            <p className="hero-subtitle">
              Building strategic alliances and collaborative networks to accelerate 
              the global adoption of KPP technology
            </p>
          </div>
        </div>
      </section>

      <section className="partnership-tabs">
        <div className="content-container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'strategic' ? 'active' : ''}`}
              onClick={() => setActiveTab('strategic')}
            >
              Strategic Partners
            </button>
            <button 
              className={`tab-btn ${activeTab === 'distribution' ? 'active' : ''}`}
              onClick={() => setActiveTab('distribution')}
            >
              Distribution Network
            </button>
            <button 
              className={`tab-btn ${activeTab === 'opportunities' ? 'active' : ''}`}
              onClick={() => setActiveTab('opportunities')}
            >
              Collaboration Opportunities
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'strategic' && (
        <section className="strategic-partners">
          <div className="content-container">
            <h2>Strategic Technology Partners</h2>
            <div className="partners-grid">
              {strategicPartners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-header">
                    <div className="partner-logo">
                      <img src={partner.logo} alt={partner.name} />
                    </div>
                    <div className="partner-info">
                      <h3>{partner.name}</h3>
                      <span className="partner-type">{partner.type}</span>
                    </div>
                  </div>
                  <p className="partner-description">{partner.description}</p>
                  <div className="partnership-details">
                    <div className="detail">
                      <strong>Partnership:</strong> {partner.partnership}
                    </div>
                    <div className="detail">
                      <strong>Since:</strong> {partner.since}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'distribution' && (
        <section className="distribution-network">
          <div className="content-container">
            <h2>Global Distribution Network</h2>
            <div className="distribution-grid">
              {distributionPartners.map((region, index) => (
                <div key={index} className="region-card">
                  <h3>{region.region}</h3>
                  <div className="region-info">
                    <div className="coverage">
                      <strong>Coverage:</strong> {region.coverage}
                    </div>
                    <div className="established">
                      <strong>Established:</strong> {region.established}
                    </div>
                  </div>
                  <div className="partners-list">
                    <h4>Key Partners</h4>
                    <ul>
                      {region.partners.map((partner, partnerIndex) => (
                        <li key={partnerIndex}>{partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'opportunities' && (
        <section className="collaboration-opportunities">
          <div className="content-container">
            <h2>Partnership Opportunities</h2>
            <div className="opportunities-grid">
              {collaborationOpportunities.map((opportunity, index) => (
                <div key={index} className="opportunity-card">
                  <h3>{opportunity.type}</h3>
                  <p>{opportunity.description}</p>
                  <div className="opportunity-details">
                    <div className="benefits">
                      <h4>Benefits</h4>
                      <ul>
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="requirements">
                      <h4>Requirements</h4>
                      <ul>
                        {opportunity.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="partnership-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Join Our Partnership Network</h2>
            <p>Collaborate with us to accelerate the global transition to clean energy</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Become a Partner</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .partnerships-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .partnerships-hero {
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
        
        .partnership-tabs {
          background: white;
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .tabs-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .tab-btn {
          padding: 1rem 2rem;
          border: 2px solid #0070f3;
          background: transparent;
          color: #0070f3;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tab-btn:hover,
        .tab-btn.active {
          background: #0070f3;
          color: white;
        }
        
        .strategic-partners,
        .distribution-network,
        .collaboration-opportunities {
          padding: 4rem 0;
        }
        
        .strategic-partners h2,
        .distribution-network h2,
        .collaboration-opportunities h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .partners-grid,
        .distribution-grid,
        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .partner-card,
        .region-card,
        .opportunity-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .partner-card:hover,
        .region-card:hover,
        .opportunity-card:hover {
          transform: translateY(-5px);
        }
        
        .partner-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .partner-logo {
          width: 60px;
          height: 60px;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .partner-logo img {
          max-width: 40px;
          max-height: 40px;
        }
        
        .partner-info h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        
        .partner-type {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
        }
        
        .partner-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .partnership-details {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }
        
        .detail {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        
        .region-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .region-info {
          margin-bottom: 1.5rem;
        }
        
        .coverage,
        .established {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        
        .partners-list h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .partners-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .partners-list li {
          padding: 0.25rem 0;
          color: #666;
          font-size: 0.9rem;
        }
        
        .opportunity-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .opportunity-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .opportunity-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .benefits h4,
        .requirements h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .benefits ul,
        .requirements ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .benefits li,
        .requirements li {
          padding: 0.25rem 0;
          color: #666;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1rem;
        }
        
        .benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00aa00;
          font-weight: bold;
        }
        
        .requirements li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .partnership-cta {
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
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
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
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .tabs-nav {
            flex-direction: column;
            align-items: center;
          }
          
          .partners-grid,
          .distribution-grid,
          .opportunities-grid {
            grid-template-columns: 1fr;
          }
          
          .opportunity-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 