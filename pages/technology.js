import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Technology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-tech-content" className="skip-link">Skip to main content</a>
      
      <div className="technology-page">
        <section className="tech-hero" aria-label="Technology overview hero section">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
              <h1 className="hero-title">KPP Technology Deep Dive</h1>
              <p className="hero-subtitle">
                Understanding the innovative buoyancy-driven power generation system that 
                revolutionizes sustainable energy production
              </p>
            </div>
          </div>
        </section>

        <main id="main-tech-content" className="tech-content">
          <div className="content-container">
            <section className={`core-principle ${isVisible ? 'animate-in' : ''}`} aria-labelledby="core-principle-heading">
              <h2 id="core-principle-heading" className="section-title">Core Principle: Buoyancy Power</h2>
              <div className="principle-grid" role="list">
                <article className="principle-card" role="listitem">
                  <div className="card-header">
                    <div className="card-icon">🌊</div>
                    <h3>Buoyancy Force</h3>
                  </div>
                  <p>
                    The system harnesses the natural buoyancy force that occurs when objects 
                    are submerged in water. As floaters rise and fall, they create continuous 
                    mechanical energy without any external fuel input.
                  </p>
                </article>
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
          </section>

          <section className={`system-components ${isVisible ? 'animate-in' : ''}`} aria-labelledby="system-components-heading">
            <h2 id="system-components-heading" className="section-title">System Components</h2>
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
          </section>

          <section className={`technical-details ${isVisible ? 'animate-in' : ''}`} aria-labelledby="technical-specs-heading">
            <h2 id="technical-specs-heading" className="section-title">Technical Specifications</h2>
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
          </section>

          <section className={`innovation-highlights ${isVisible ? 'animate-in' : ''}`} aria-labelledby="innovation-highlights-heading">
            <h2 id="innovation-highlights-heading" className="section-title">Innovation Highlights</h2>
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
          </section>

          <section className={`cta-section ${isVisible ? 'animate-in' : ''}`} aria-labelledby="cta-heading">
            <div className="cta-content">
              <h2 id="cta-heading">Ready to See Performance Data?</h2>
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
          </section>

          <section className={`kpp-specifications ${isVisible ? 'animate-in' : ''}`} aria-labelledby="kpp-specs-heading">
            <h2 id="kpp-specs-heading" className="section-title">Real KPP Specifications</h2>
            <div className="real-specs-grid">
              <div className="spec-highlight">
                <div className="spec-icon">💰</div>
                <h3>Cost Competitive</h3>
                <div className="spec-value">25 €/MWh</div>
                <p>Levelized Cost of Energy (LCOE) with additional grid balancing benefits</p>
              </div>
              
              <div className="spec-highlight">
                <div className="spec-icon">📐</div>
                <h3>Compact Footprint</h3>
                <div className="spec-value">300 m²/MW</div>
                <p>Compared to 28,000 m²/MW for PV solar and 3,000 m²/MW for wind</p>
              </div>
              
              <div className="spec-highlight">
                <div className="spec-icon">⚡</div>
                <h3>Minimum Capacity</h3>
                <div className="spec-value">5 MW+</div>
                <p>Modular scalable systems supplied from 5 MW upwards</p>
              </div>
              
              <div className="spec-highlight">
                <div className="spec-icon">🌍</div>
                <h3>Location Independent</h3>
                <div className="spec-value">Any Location</div>
                <p>Can be installed anywhere in the world, including remote off-grid areas</p>
              </div>
            </div>
            
            <div className="kpp-advantages">
              <h3>Why Choose KPP Technology?</h3>
              <div className="advantages-list">
                <div className="advantage-item">
                  <div className="advantage-icon">📊</div>
                  <div className="advantage-content">
                    <h4>Scalable Power</h4>
                    <p>The capacity you need, totally dispatchable, with scope for required expansion whenever needed</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🔄</div>
                  <div className="advantage-content">
                    <h4>Continuous Power</h4>
                    <p>Independent of weather conditions, with built-in redundancy to ensure 100% nameplate availability</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🌿</div>
                  <div className="advantage-content">
                    <h4>Clean Power</h4>
                    <p>No inputs (fuel, water, wind, sun…) or emissions (CO2, NOx, SOx), cost-effective alternative to fossil fuels</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🎯</div>
                  <div className="advantage-content">
                    <h4>Decentralized Power</h4>
                    <p>Locate it wherever required, even in remote, off-grid areas with limited infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        </main>
      </div>

      <style jsx>{`
        .technology-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--color-background) 0%, var(--color-secondary-bg) 100%);
          position: relative;
        }
        
        .technology-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(42,87,165,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .tech-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.95) 100%);
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
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--color-text-secondary);
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
          color: var(--color-text);
        }
        
        .principle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .principle-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.95) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(42, 87, 165, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }
        
        .principle-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(42, 87, 165, 0.15);
          border-color: var(--color-primary);
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
          color: var(--color-text);
        }
        
        .principle-card p {
          color: var(--color-text-secondary);
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
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.95) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(42, 87, 165, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }
        
        .component-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(42, 87, 165, 0.15);
          border-color: var(--color-primary);
        }
        
        .component-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
        }
        
        .component-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
        }
        
        .component-content p {
          color: var(--color-text-secondary);
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
          color: var(--accent-primary);
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
          background: linear-gradient(135deg, rgba(44,51,61,0.95) 0%, rgba(33,37,41,0.95) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,186,179,0.2);
        }
        
        .detail-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: var(--text-primary);
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
          border-bottom: 1px solid rgba(0,186,179,0.2);
        }
        
        .spec-label {
          font-weight: 500;
          color: var(--text-light);
        }
        
        .spec-value {
          font-weight: 600;
          color: var(--accent-primary);
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
          background: linear-gradient(135deg, rgba(44,51,61,0.95) 0%, rgba(33,37,41,0.95) 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,186,179,0.2);
          transition: all 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,186,179,0.2);
          border-color: var(--accent-primary);
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
          color: var(--text-primary);
        }
        
        .highlight-card p {
          color: var(--text-light);
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
          background: linear-gradient(135deg, rgba(44,51,61,0.95) 0%, rgba(33,37,41,0.95) 100%);
          padding: 4rem;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,186,179,0.2);
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: var(--text-primary);
        }
        
        .cta-content p {
          font-size: 1.2rem;
          color: var(--text-light);
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
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(42, 87, 165, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(42, 87, 165, 0.4);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(42, 87, 165, 0.3);
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
    </>
  );
}