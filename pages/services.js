import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState('kpp');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = {
    kpp: {
      title: 'KPP Solutions',
      subtitle: 'Revolutionary Kinetic Power Plant Technology',
      description: 'Kinetic Power Plant (KPP) offers an innovative approach to clean, continuous renewable electricity, with potential to take a significant share of future needs in both mature and emerging markets.',
      features: [
        {
          icon: '🔄',
          title: 'Scalable Power',
          description: 'The capacity you need, totally dispatchable, with scope for required expansion whenever required.'
        },
        {
          icon: '⚡',
          title: 'Continuous Power',
          description: 'Continuous power independent of weather conditions, with built-in redundancy to ensure 100% nameplate availability.'
        },
        {
          icon: '💰',
          title: 'Competitive Power',
          description: 'At 25 €/MWh on a levelized cost basis (plant LCOE) with additional benefits in terms of grid balancing and reduced transmission costs.'
        },
        {
          icon: '🌱',
          title: 'Clean Power',
          description: 'No inputs (fuel, water, wind, sun…) or emissions (CO2, NOx, SOx), cost-effective alternatives to traditional fossil fuels.'
        }
      ]
    },
    oilgas: {
      title: 'Oil & Gas Services',
      subtitle: 'Comprehensive Industrial Solutions',
      description: 'Taking into consideration the unique requirements of the Oil & Gas Industry, we have systematically developed a product portfolio by partnering with international vendors and employing engineering with technical background from international oil and gas service providers.',
      features: [
        {
          icon: '🔍',
          title: 'Inspection Services',
          description: 'Oil and gas inspection industry operations according to stringent standards that primarily strive to keep equipment running efficiently while maintaining workplace safety.'
        },
        {
          icon: '🏗️',
          title: 'EPC Projects',
          description: 'Engineering, Procurement, Construction - a prominent form of contracting agreement. Deep Engineering is an established supplier of process solutions.'
        },
        {
          icon: '♻️',
          title: 'Waste Management',
          description: 'Effective environmental services and hazardous waste disposal solutions. We specialize in managing hazardous waste with expert consultation.'
        },
        {
          icon: '⚙️',
          title: 'Mechanical Parts',
          description: 'Design and manufacture heat pipes, heat pipe exchangers, tank construction and repair for use in various fields to restore industrial waste heat.'
        }
      ],
      supplies: [
        {
          title: 'Fuel Product Supply',
          description: 'High-quality fuel products that meet industry standards and regulatory requirements with timely and efficient delivery.'
        },
        {
          title: 'KPP for Oil & Gas',
          description: 'Revolutionary renewable energy power station ideal for oil and gas fields and refineries with significantly lower production costs.'
        },
        {
          title: 'Chemical Supply',
          description: 'High-quality chemicals meeting industry standards and regulatory requirements with technical support and assistance.'
        },
        {
          title: 'Mechanical Parts Supply',
          description: 'Critical components for oil and gas operations meeting industry standards with technical support and timely delivery.'
        }
      ]
    },
    consultancy: {
      title: 'Business Consultancy',
      subtitle: 'Strategic Business Growth Solutions',
      description: 'Our experienced team and partners provide tailored consultations to ensure efficient strategies and expert advice, facilitating business growth through comprehensive market insights.',
      features: [
        {
          icon: '📋',
          title: 'Project Consultancy',
          description: 'Help local businesses with project planning, document preparation, and risk management with a tailored approach to ensure project success.'
        },
        {
          icon: '💼',
          title: 'Financial Services',
          description: 'Specialized team helping local businesses secure capital to finance projects and achieve business goals with extensive experience in financial analysis and due diligence.'
        },
        {
          icon: '📊',
          title: 'Accounting Services',
          description: 'Help small and medium-sized businesses streamline accounting functions, from data entry to financial statement preparation with latest software and tools.'
        },
        {
          icon: '🎯',
          title: 'Strategic Planning',
          description: 'Business planning, financial management, marketing, and human resources management for comprehensive business development.'
        }
      ]
    }
  };

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              We provide the best integrated services and high expertise to ensure you grow your business and increase your profits
            </p>
          </div>
        </div>
      </div>

      <div className="services-content">
        <div className="content-container">
          <div className={`service-selector ${isVisible ? 'animate-in' : ''}`}>
            <div className="selector-buttons">
              <button 
                className={`selector-btn ${activeService === 'kpp' ? 'active' : ''}`}
                onClick={() => setActiveService('kpp')}
              >
                <span className="btn-icon">⚡</span>
                <span>KPP Solutions</span>
              </button>
              <button 
                className={`selector-btn ${activeService === 'oilgas' ? 'active' : ''}`}
                onClick={() => setActiveService('oilgas')}
              >
                <span className="btn-icon">🛢️</span>
                <span>Oil & Gas</span>
              </button>
              <button 
                className={`selector-btn ${activeService === 'consultancy' ? 'active' : ''}`}
                onClick={() => setActiveService('consultancy')}
              >
                <span className="btn-icon">💼</span>
                <span>Consultancy</span>
              </button>
            </div>
          </div>

          <div className={`service-details ${isVisible ? 'animate-in' : ''}`}>
            <div className="service-header">
              <h2 className="service-title">{services[activeService].title}</h2>
              <p className="service-subtitle">{services[activeService].subtitle}</p>
              <p className="service-description">{services[activeService].description}</p>
            </div>

            <div className="service-features">
              <h3>Key Services</h3>
              <div className="features-grid">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {activeService === 'oilgas' && services[activeService].supplies && (
              <div className="service-supplies">
                <h3>Oil & Gas Supplies</h3>
                <div className="supplies-grid">
                  {services[activeService].supplies.map((supply, index) => (
                    <div key={index} className="supply-card">
                      <h4>{supply.title}</h4>
                      <p>{supply.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss how our services can help grow your business.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  <span>Contact Us Now</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/demo" className="btn btn-secondary">
                  <span>Schedule Consultation</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .services-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 6rem 2rem;
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
        
        .services-content {
          padding: 4rem 2rem;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-selector {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }
        
        .service-selector.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .selector-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .selector-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .selector-btn:hover {
          border-color: #0070f3;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.15);
        }
        
        .selector-btn.active {
          background: #0070f3;
          border-color: #0070f3;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.25);
        }
        
        .btn-icon {
          font-size: 1.2rem;
        }
        
        .service-details {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
        }
        
        .service-details.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .service-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .service-subtitle {
          font-size: 1.4rem;
          color: #0070f3;
          margin: 0 0 1.5rem 0;
          font-weight: 600;
        }
        
        .service-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .service-features {
          margin-bottom: 4rem;
        }
        
        .service-features h3,
        .service-supplies h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          text-align: center;
          color: #1a1a1a;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .feature-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .feature-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .service-supplies {
          margin-bottom: 4rem;
        }
        
        .supplies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .supply-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #0070f3;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .supply-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: #1a1a1a;
        }
        
        .supply-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }
        
        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
        }
        
        .cta-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-content h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .cta-content p {
          font-size: 1.1rem;
          color: #666;
          margin: 0 0 2rem 0;
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
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: #0070f3;
          color: white;
          border: 2px solid #0070f3;
        }
        
        .btn-primary:hover {
          background: #0051cc;
          border-color: #0051cc;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.25);
        }
        
        .btn-secondary {
          background: transparent;
          color: #0070f3;
          border: 2px solid #0070f3;
        }
        
        .btn-secondary:hover {
          background: #0070f3;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.25);
        }
        
        .btn-icon {
          width: 18px;
          height: 18px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .selector-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .selector-btn {
            width: 100%;
            max-width: 300px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
