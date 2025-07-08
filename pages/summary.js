import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Summary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="summary-page">
      <div className="summary-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">KPP Technology Overview</h1>
            <p className="hero-subtitle">
              Revolutionary buoyancy-driven energy generation system that operates continuously 
              without fuel consumption or emissions
            </p>
          </div>
        </div>
      </div>

      <div className="summary-content">
        <div className="content-container">
          <div className={`overview-section ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">How KPP Works</h2>
            <div className="overview-grid">
              <div className="overview-card">
                <div className="card-icon">🌊</div>
                <h3>Buoyancy Principle</h3>
                <p>
                  The system uses 66 floaters that rise and fall in water, creating continuous 
                  mechanical energy through buoyancy forces.
                </p>
              </div>
              <div className="overview-card">
                <div className="card-icon">⚙️</div>
                <h3>Mechanical Conversion</h3>
                <p>
                  The up and down motion of floaters is converted into rotational energy through 
                  a sophisticated gear system.
                </p>
              </div>
              <div className="overview-card">
                <div className="card-icon">⚡</div>
                <h3>Power Generation</h3>
                <p>
                  The rotational energy drives generators to produce electricity continuously, 
                  day and night, regardless of weather conditions.
                </p>
              </div>
            </div>
          </div>

          <div className={`key-features ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>Zero Fuel Consumption</h3>
                  <p>Operates entirely on buoyancy and gravity, requiring no external fuel sources.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>24/7 Operation</h3>
                  <p>Continuous power generation regardless of time, weather, or environmental conditions.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>Zero Emissions</h3>
                  <p>Completely clean energy production with no greenhouse gas emissions or pollution.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-number">04</div>
                <div className="feature-content">
                  <h3>Scalable Design</h3>
                  <p>Modular system that can be scaled from small units to large power plants.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-number">05</div>
                <div className="feature-content">
                  <h3>Low Maintenance</h3>
                  <p>Simple mechanical design with minimal moving parts reduces maintenance requirements.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-number">06</div>
                <div className="feature-content">
                  <h3>High Efficiency</h3>
                  <p>Optimized design maximizes energy conversion from buoyancy forces to electricity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`technical-specs ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-card">
                <div className="spec-icon">⚡</div>
                <div className="spec-value">100KW</div>
                <div className="spec-label">Power Output</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">🔗</div>
                <div className="spec-value">66</div>
                <div className="spec-label">Floaters</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">📏</div>
                <div className="spec-value">15m</div>
                <div className="spec-label">Tower Height</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">💧</div>
                <div className="spec-value">3m</div>
                <div className="spec-label">Water Depth</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">🔄</div>
                <div className="spec-value">24/7</div>
                <div className="spec-label">Operation</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">🌱</div>
                <div className="spec-value">0%</div>
                <div className="spec-label">Emissions</div>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to Explore More?</h2>
              <p>Discover the detailed technology, performance metrics, and real-world applications of KPP.</p>
              <div className="cta-buttons">
                <Link href="/technology" className="btn btn-primary">
                  <span>View Technology</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </Link>
                <Link href="/performance" className="btn btn-secondary">
                  <span>Performance Data</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className={`company-section ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">About Deep Engineering</h2>
            <div className="company-overview">
              <div className="company-text">
                <p className="company-intro">
                  Deep Engineering is a pioneering technology company specializing in revolutionary 
                  Kinetic Power Plant (KPP) technology and comprehensive engineering solutions. 
                  We provide integrated services with high expertise to ensure business growth 
                  and increased profitability.
                </p>
                
                <div className="company-services">
                  <h3>Our Core Services</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-icon">⚡</div>
                      <h4>KPP Solutions</h4>
                      <p>Innovative approach to clean, continuous renewable electricity with significant market potential in mature and emerging markets.</p>
                    </div>
                    <div className="service-item">
                      <div className="service-icon">🛢️</div>
                      <h4>Oil & Gas Services</h4>
                      <p>Efficient team cooperation providing equipment, testing, and materials needed for successful project completion.</p>
                    </div>
                    <div className="service-item">
                      <div className="service-icon">💼</div>
                      <h4>Business Consultancy</h4>
                      <p>Experienced team providing tailored consultations for efficient strategies and expert advice facilitating business growth.</p>
                    </div>
                  </div>
                </div>
                
                <div className="company-projects">
                  <h3>Major Projects</h3>
                  <div className="projects-list">
                    <div className="project-item">
                      <div className="project-details">
                        <h4>300 MW KPP Plant - Kurdistan</h4>
                        <p>Partnership with Ministry of Electricity, Kurdistan Regional Government</p>
                      </div>
                    </div>
                    <div className="project-item">
                      <div className="project-details">
                        <h4>90 MW KPP Plant - Iraq</h4>
                        <p>Collaboration with Board of Investment, Al-Muthana City, Iraq</p>
                      </div>
                    </div>
                    <div className="project-item">
                      <div className="project-details">
                        <h4>6000 TPD Cement Plant</h4>
                        <p>Industrial project implementation in Kurdistan region</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="company-culture">
                  <h3>Entrepreneurial Culture</h3>
                  <p>
                    At Deep Engineering, we encourage entrepreneurial mindset and foster an environment 
                    where our people empower themselves. We provide freedom, encouragement, and confidence 
                    to take the lead and make positive change through innovation, creativity, and calculated risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .summary-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .summary-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,112,243,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .summary-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          backdrop-filter: blur(10px);
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          z-index: 1;
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
        
        .summary-content {
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .overview-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
          margin-bottom: 6rem;
        }
        
        .overview-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
        }
        
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .overview-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .overview-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .overview-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .overview-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .key-features {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
          margin-bottom: 6rem;
        }
        
        .key-features.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .feature-number {
          font-size: 2rem;
          font-weight: 800;
          color: #0070f3;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
        }
        
        .feature-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .feature-content p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .technical-specs {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
          margin-bottom: 6rem;
        }
        
        .technical-specs.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .spec-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .spec-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .spec-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .spec-value {
          font-size: 2rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .spec-label {
          font-size: 1rem;
          color: #666;
          font-weight: 600;
        }
        
        .cta-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
        }
        
        .cta-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-content {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 4rem;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          color: #666;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn:hover::before {
          left: 100%;
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
          background: rgba(255, 255, 255, 0.9);
          color: #0070f3;
          border: 2px solid #0070f3;
          backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
          background: #0070f3;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 112, 243, 0.3);
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .btn:hover .btn-icon {
          transform: translateX(3px);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .overview-grid,
          .features-grid,
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-content {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}