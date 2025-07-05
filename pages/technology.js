import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Technology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="technology-page">
      <div className="tech-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">KPP Technology Deep Dive</h1>
            <p className="hero-subtitle">
              Understanding the innovative buoyancy-driven power generation system that 
              revolutionizes sustainable energy production
            </p>
          </div>
        </div>
      </div>

      <div className="tech-content">
        <div className="content-container">
          <div className={`core-principle ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Core Principle: Buoyancy Power</h2>
            <div className="principle-grid">
              <div className="principle-card">
                <div className="card-header">
                  <div className="card-icon">🌊</div>
                  <h3>Buoyancy Force</h3>
                </div>
                <p>
                  The system harnesses the natural buoyancy force that occurs when objects 
                  are submerged in water. As floaters rise and fall, they create continuous 
                  mechanical energy without any external fuel input.
                </p>
              </div>
              <div className="principle-card">
                <div className="card-header">
                  <div className="card-icon">⚖️</div>
                  <h3>Gravity Integration</h3>
                </div>
                <p>
                  Gravity works in harmony with buoyancy to create a perpetual motion system. 
                  The weight of the floaters ensures consistent downward force while buoyancy 
                  provides the upward force.
                </p>
              </div>
              <div className="principle-card">
                <div className="card-header">
                  <div className="card-icon">🔄</div>
                  <h3>Continuous Cycle</h3>
                </div>
                <p>
                  The system operates in a continuous cycle where floaters move up and down 
                  in sequence, ensuring uninterrupted power generation 24 hours a day.
                </p>
              </div>
            </div>
          </div>

          <div className={`system-components ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">System Components</h2>
            <div className="components-grid">
              <div className="component-item">
                <div className="component-number">01</div>
                <div className="component-content">
                  <h3>Floater Assembly</h3>
                  <p>66 specially designed floaters that rise and fall in water, each optimized for maximum buoyancy force and minimal resistance.</p>
                  <div className="component-specs">
                    <span>Material: High-density polymer</span>
                    <span>Size: Optimized for 3m water depth</span>
                    <span>Count: 66 units</span>
                  </div>
                </div>
              </div>
              <div className="component-item">
                <div className="component-number">02</div>
                <div className="component-content">
                  <h3>Mechanical Drive System</h3>
                  <p>Sophisticated gear mechanism that converts the vertical motion of floaters into rotational energy for power generation.</p>
                  <div className="component-specs">
                    <span>Type: Multi-stage gear reduction</span>
                    <span>Efficiency: &gt;95% mechanical conversion</span>
                    <span>Maintenance: Minimal moving parts</span>
                  </div>
                </div>
              </div>
              <div className="component-item">
                <div className="component-number">03</div>
                <div className="component-content">
                  <h3>Power Generation Unit</h3>
                  <p>High-efficiency generators that convert rotational energy into electrical power with optimal voltage and frequency output.</p>
                  <div className="component-specs">
                    <span>Output: 100KW continuous</span>
                    <span>Voltage: 400V AC</span>
                    <span>Frequency: 50Hz/60Hz</span>
                  </div>
                </div>
              </div>
              <div className="component-item">
                <div className="component-number">04</div>
                <div className="component-content">
                  <h3>Control & Monitoring</h3>
                  <p>Advanced control system that monitors performance, optimizes efficiency, and ensures safe operation of the entire system.</p>
                  <div className="component-specs">
                    <span>Real-time monitoring</span>
                    <span>Automated optimization</span>
                    <span>Safety protocols</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`technical-details ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Technical Specifications</h2>
            <div className="details-grid">
              <div className="detail-section">
                <h3>Physical Dimensions</h3>
                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-label">Tower Height:</span>
                    <span className="spec-value">15 meters</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Water Depth:</span>
                    <span className="spec-value">3 meters</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Base Area:</span>
                    <span className="spec-value">25m²</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Total Weight:</span>
                    <span className="spec-value">15 tons</span>
                  </div>
                </div>
              </div>
              <div className="detail-section">
                <h3>Power Output</h3>
                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-label">Rated Power:</span>
                    <span className="spec-value">100KW</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Voltage:</span>
                    <span className="spec-value">400V AC</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Frequency:</span>
                    <span className="spec-value">50Hz/60Hz</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Efficiency:</span>
                    <span className="spec-value">&gt;85%</span>
                  </div>
                </div>
              </div>
              <div className="detail-section">
                <h3>Operational Parameters</h3>
                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-label">Operating Hours:</span>
                    <span className="spec-value">24/7</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Temperature Range:</span>
                    <span className="spec-value">-20°C to +50°C</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Water Quality:</span>
                    <span className="spec-value">Fresh/Salt water</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Maintenance:</span>
                    <span className="spec-value">Annual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`innovation-highlights ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Innovation Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">💡</div>
                <h3>Zero Fuel Technology</h3>
                <p>First-ever power generation system that operates entirely without fuel, using only natural buoyancy and gravity forces.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🌱</div>
                <h3>100% Clean Energy</h3>
                <p>Zero emissions, zero pollution, and zero environmental impact during operation or maintenance.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⚡</div>
                <h3>Continuous Operation</h3>
                <p>Unlike solar or wind, KPP operates continuously regardless of weather, time, or environmental conditions.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🔧</div>
                <h3>Simple & Reliable</h3>
                <p>Minimal moving parts and simple mechanical design ensure high reliability and low maintenance requirements.</p>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to See Performance Data?</h2>
              <p>Explore real-world performance metrics, efficiency data, and operational statistics of the KPP system.</p>
              <div className="cta-buttons">
                <Link href="/performance" className="btn btn-primary">
                  <span>View Performance</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </Link>
                <Link href="/applications" className="btn btn-secondary">
                  <span>Applications</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .technology-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .technology-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,112,243,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .tech-hero {
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
        
        .tech-content {
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .core-principle {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
          margin-bottom: 6rem;
        }
        
        .core-principle.animate-in {
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
        
        .principle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .principle-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .principle-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .card-icon {
          font-size: 2.5rem;
        }
        
        .principle-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          color: #1a1a1a;
        }
        
        .principle-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .system-components {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
          margin-bottom: 6rem;
        }
        
        .system-components.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .components-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .component-item {
          display: flex;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .component-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .component-number {
          font-size: 2rem;
          font-weight: 800;
          color: #0070f3;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
        }
        
        .component-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .component-content p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .component-specs {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        
        .component-specs span {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
        }
        
        .technical-details {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
          margin-bottom: 6rem;
        }
        
        .technical-details.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .detail-section {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .detail-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .spec-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,112,243,0.1);
        }
        
        .spec-label {
          font-weight: 500;
          color: #666;
        }
        
        .spec-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .innovation-highlights {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
          margin-bottom: 6rem;
        }
        
        .innovation-highlights.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .highlight-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .highlight-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .highlight-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .cta-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 1s;
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
          
          .principle-grid,
          .components-grid,
          .details-grid,
          .highlights-grid {
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