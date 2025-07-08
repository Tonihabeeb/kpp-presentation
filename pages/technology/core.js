import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CoreTechnology() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technicalSpecs = [
    { parameter: "Power Output Range", value: "25KW - 10MW+", unit: "" },
    { parameter: "Efficiency", value: "85-92", unit: "%" },
    { parameter: "Capacity Factor", value: "95-98", unit: "%" },
    { parameter: "Operating Temperature", value: "-20 to +50", unit: "°C" },
    { parameter: "System Lifespan", value: "25+", unit: "years" },
    { parameter: "Maintenance Interval", value: "Annual", unit: "" },
    { parameter: "Startup Time", value: "<5", unit: "minutes" },
    { parameter: "Noise Level", value: "<45", unit: "dB" }
  ];

  const performanceData = [
    { metric: "System Uptime", value: "99.5%", description: "Proven across 150+ installations" },
    { metric: "Energy Density", value: "2.5 MW/m²", description: "Compact footprint design" },
    { metric: "Response Time", value: "< 1 second", description: "Grid frequency regulation" },
    { metric: "Load Factor", value: "95%", description: "Consistent power delivery" }
  ];

  const innovationHighlights = [
    {
      title: "Proprietary Buoyancy Engine",
      description: "Advanced buoyancy chamber design with optimized fluid dynamics",
      benefits: ["40% higher efficiency", "Reduced maintenance", "Modular scalability"],
      image: "/technology/buoyancy-engine.jpg"
    },
    {
      title: "Smart Control System",
      description: "AI-powered optimization and predictive maintenance capabilities",
      benefits: ["Real-time optimization", "Predictive analytics", "Remote monitoring"],
      image: "/technology/control-system.jpg"
    },
    {
      title: "Advanced Materials",
      description: "Corrosion-resistant alloys and composite materials for longevity",
      benefits: ["25+ year lifespan", "Minimal degradation", "Weather resistance"],
      image: "/technology/materials.jpg"
    }
  ];

  return (
    <div className="technology-page">
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/technology-demo.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Revolutionary KPP Technology</h1>
            <p className="hero-subtitle">
              Breakthrough buoyancy-driven power generation that transforms how the world creates clean energy
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Patents</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">99.5%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">25+</div>
                <div className="stat-label">Year Lifespan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tech-nav">
        <div className="nav-container">
          <div className="nav-tabs">
            <button 
              className={`tab-btn ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              Technology Overview
            </button>
            <button 
              className={`tab-btn ${activeSection === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveSection('specifications')}
            >
              Technical Specifications
            </button>
            <button 
              className={`tab-btn ${activeSection === 'innovation' ? 'active' : ''}`}
              onClick={() => setActiveSection('innovation')}
            >
              Innovation Highlights
            </button>
            <button 
              className={`tab-btn ${activeSection === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveSection('performance')}
            >
              Performance Data
            </button>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      {activeSection === 'overview' && (
        <section className="tech-overview">
          <div className="content-container">
            <div className={`overview-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="overview-grid">
                <div className="overview-text">
                  <h2>How KPP Technology Works</h2>
                  <p>
                    Kinetic Power Plant technology harnesses the fundamental principle of buoyancy 
                    to generate continuous, clean electricity. Our proprietary system uses a closed-loop 
                    design where buoyant chambers rise and fall in a controlled fluid medium, 
                    driving generators to produce power.
                  </p>
                  
                  <div className="principle-steps">
                    <div className="step-item">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h3>Buoyancy Generation</h3>
                        <p>Specialized chambers filled with low-density material create buoyant force in the fluid medium</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h3>Kinetic Energy Conversion</h3>
                        <p>Rising chambers drive mechanical systems that convert buoyant motion into rotational energy</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h3>Electricity Generation</h3>
                        <p>High-efficiency generators convert mechanical energy into clean electrical power</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h3>Continuous Cycle</h3>
                        <p>Automated control systems ensure continuous operation and optimal power output</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overview-visual">
                  <div className="tech-diagram">
                    <img src="/technology/kpp-diagram.svg" alt="KPP Technology Diagram" />
                    <div className="diagram-labels">
                      <div className="label label-1">Buoyancy Chamber</div>
                      <div className="label label-2">Fluid Medium</div>
                      <div className="label label-3">Generator</div>
                      <div className="label label-4">Control System</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="advantages-section">
                <h2>Key Technology Advantages</h2>
                <div className="advantages-grid">
                  <div className="advantage-card">
                    <div className="advantage-icon">⚡</div>
                    <h3>Continuous Operation</h3>
                    <p>Unlike solar or wind, KPP generates power 24/7 regardless of weather conditions</p>
                  </div>
                  <div className="advantage-card">
                    <div className="advantage-icon">🔧</div>
                    <h3>Minimal Maintenance</h3>
                    <p>Simple mechanical design with few moving parts reduces maintenance requirements</p>
                  </div>
                  <div className="advantage-card">
                    <div className="advantage-icon">📈</div>
                    <h3>Scalable Design</h3>
                    <p>Modular architecture allows scaling from 25KW to 10MW+ installations</p>
                  </div>
                  <div className="advantage-card">
                    <div className="advantage-icon">🌱</div>
                    <h3>Zero Emissions</h3>
                    <p>No combustion, no fuel consumption, no greenhouse gas emissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {activeSection === 'specifications' && (
        <section className="tech-specs">
          <div className="content-container">
            <div className={`specs-content ${isVisible ? 'animate-in' : ''}`}>
              <h2>Technical Specifications</h2>
              <p>Detailed engineering specifications for KPP technology systems</p>
              
              <div className="specs-grid">
                <div className="specs-table">
                  <h3>System Parameters</h3>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Value</th>
                          <th>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {technicalSpecs.map((spec, index) => (
                          <tr key={index}>
                            <td>{spec.parameter}</td>
                            <td className="spec-value">{spec.value}</td>
                            <td>{spec.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="specs-details">
                  <h3>Engineering Details</h3>
                  <div className="detail-sections">
                    <div className="detail-section">
                      <h4>Mechanical System</h4>
                      <ul>
                        <li>Precision-engineered buoyancy chambers</li>
                        <li>Corrosion-resistant materials (316L stainless steel)</li>
                        <li>High-efficiency gear systems (98% efficiency)</li>
                        <li>Vibration dampening and noise reduction</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Electrical System</h4>
                      <ul>
                        <li>Synchronous generators (95% efficiency)</li>
                        <li>Advanced power electronics and inverters</li>
                        <li>Grid-tie and off-grid capabilities</li>
                        <li>Power quality optimization (THD &lt; 3%)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Control System</h4>
                      <ul>
                        <li>AI-powered optimization algorithms</li>
                        <li>Real-time monitoring and diagnostics</li>
                        <li>Remote operation and maintenance</li>
                        <li>Predictive maintenance capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Innovation Highlights */}
      {activeSection === 'innovation' && (
        <section className="tech-innovation">
          <div className="content-container">
            <div className={`innovation-content ${isVisible ? 'animate-in' : ''}`}>
              <h2>Innovation Highlights</h2>
              <p>Breakthrough technologies that set KPP apart from conventional power generation</p>
              
              <div className="innovation-grid">
                {innovationHighlights.map((innovation, index) => (
                  <div key={index} className="innovation-card">
                    <div className="innovation-image">
                      <img src={innovation.image} alt={innovation.title} />
                    </div>
                    <div className="innovation-content-inner">
                      <h3>{innovation.title}</h3>
                      <p>{innovation.description}</p>
                      <div className="innovation-benefits">
                        <h4>Key Benefits:</h4>
                        <ul>
                          {innovation.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="patent-section">
                <h3>Intellectual Property Portfolio</h3>
                <div className="patent-stats">
                  <div className="patent-stat">
                    <div className="patent-number">50+</div>
                    <div className="patent-label">Patents Granted</div>
                  </div>
                  <div className="patent-stat">
                    <div className="patent-number">25+</div>
                    <div className="patent-label">Patents Pending</div>
                  </div>
                  <div className="patent-stat">
                    <div className="patent-number">15</div>
                    <div className="patent-label">Countries Protected</div>
                  </div>
                </div>
                <p>Our comprehensive patent portfolio protects core innovations in buoyancy-driven power generation, 
                ensuring competitive advantages and technology leadership.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Performance Data */}
      {activeSection === 'performance' && (
        <section className="tech-performance">
          <div className="content-container">
            <div className={`performance-content ${isVisible ? 'animate-in' : ''}`}>
              <h2>Real-World Performance Data</h2>
              <p>Proven results from 150+ installations worldwide</p>
              
              <div className="performance-grid">
                {performanceData.map((data, index) => (
                  <div key={index} className="performance-card">
                    <div className="performance-metric">
                      <div className="metric-value">{data.value}</div>
                      <div className="metric-label">{data.metric}</div>
                    </div>
                    <div className="metric-description">{data.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="performance-charts">
                <div className="chart-container">
                  <h3>Power Output Consistency</h3>
                  <div className="chart-placeholder">
                    <canvas id="powerChart" width="400" height="200"></canvas>
                  </div>
                </div>
                <div className="chart-container">
                  <h3>System Efficiency Over Time</h3>
                  <div className="chart-placeholder">
                    <canvas id="efficiencyChart" width="400" height="200"></canvas>
                  </div>
                </div>
              </div>
              
              <div className="case-study-preview">
                <h3>Featured Case Study</h3>
                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="/case-studies/industrial-plant.jpg" alt="Industrial Installation" />
                  </div>
                  <div className="case-study-content">
                    <h4>Industrial Manufacturing Plant - 2MW Installation</h4>
                    <p>Large-scale manufacturing facility achieving 98% uptime and 45% energy cost reduction</p>
                    <div className="case-study-stats">
                      <div className="stat">
                        <span className="stat-value">2MW</span>
                        <span className="stat-label">Capacity</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">98%</span>
                        <span className="stat-label">Uptime</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">45%</span>
                        <span className="stat-label">Cost Reduction</span>
                      </div>
                    </div>
                    <Link href="/resources/case-studies" className="btn btn-secondary">
                      Read Full Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="tech-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Implement KPP Technology?</h2>
            <p>Our engineering team is ready to design a custom solution for your specific requirements</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                <span>Request Technical Consultation</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/resources/documentation" className="btn btn-secondary">
                <span>Download Technical Specs</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .technology-page {
          min-height: 100vh;
        }
        
        .tech-hero {
          position: relative;
          height: 80vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,112,243,0.4) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          color: white;
          text-align: center;
        }
        
        .hero-text {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .hero-text.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          opacity: 0.9;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #0070f3;
        }
        
        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .tech-nav {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .nav-tabs {
          display: flex;
          gap: 0;
          overflow-x: auto;
        }
        
        .tab-btn {
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
        
        .tab-btn:hover {
          color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .tab-btn.active {
          color: #0070f3;
          border-bottom-color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .tech-overview,
        .tech-specs,
        .tech-innovation,
        .tech-performance {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .overview-content,
        .specs-content,
        .innovation-content,
        .performance-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .overview-content.animate-in,
        .specs-content.animate-in,
        .innovation-content.animate-in,
        .performance-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-bottom: 4rem;
        }
        
        .overview-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .overview-text p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 2rem 0;
          font-size: 1.1rem;
        }
        
        .principle-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .step-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .step-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .step-content p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .overview-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .tech-diagram {
          position: relative;
          max-width: 100%;
        }
        
        .tech-diagram img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .diagram-labels {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .label {
          position: absolute;
          background: rgba(0,112,243,0.9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0,112,243,0.3);
        }
        
        .label-1 { top: 20%; left: 10%; }
        .label-2 { top: 50%; right: 10%; }
        .label-3 { bottom: 30%; left: 15%; }
        .label-4 { bottom: 20%; right: 15%; }
        
        .advantages-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .advantage-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }
        
        .advantage-card:hover {
          transform: translateY(-10px);
        }
        
        .advantage-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .advantage-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .advantage-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .specs-content h2,
        .innovation-content h2,
        .performance-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .specs-content > p,
        .innovation-content > p,
        .performance-content > p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 3rem 0;
          font-size: 1.1rem;
          text-align: center;
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        
        .specs-table h3,
        .specs-details h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .table-container {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        th {
          background: #0070f3;
          color: white;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
        }
        
        td {
          padding: 1rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .spec-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .detail-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .detail-section {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .detail-section h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .detail-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .detail-section li {
          padding: 0.5rem 0;
          color: #666;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .detail-section li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .innovation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .innovation-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .innovation-card:hover {
          transform: translateY(-10px);
        }
        
        .innovation-image {
          height: 200px;
          overflow: hidden;
        }
        
        .innovation-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .innovation-content-inner {
          padding: 2rem;
        }
        
        .innovation-content-inner h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .innovation-content-inner p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .innovation-benefits h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .innovation-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .innovation-benefits li {
          padding: 0.3rem 0;
          color: #666;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .innovation-benefits li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .patent-section {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .patent-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .patent-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .patent-stat {
          text-align: center;
        }
        
        .patent-number {
          font-size: 3rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .patent-label {
          font-size: 1.1rem;
          color: #666;
        }
        
        .patent-section p {
          color: #666;
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .performance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .performance-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .performance-card:hover {
          transform: translateY(-5px);
        }
        
        .performance-metric {
          margin-bottom: 1rem;
        }
        
        .metric-value {
          font-size: 3rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .metric-description {
          color: #666;
          line-height: 1.6;
        }
        
        .performance-charts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .chart-container {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .chart-container h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .chart-placeholder {
          height: 200px;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }
        
        .case-study-preview h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .case-study-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: 300px 1fr;
          align-items: center;
        }
        
        .case-study-image {
          height: 200px;
          overflow: hidden;
        }
        
        .case-study-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .case-study-content {
          padding: 2rem;
        }
        
        .case-study-content h4 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .case-study-content p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .case-study-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0070f3;
          display: block;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #666;
        }
        
        .tech-cta {
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
          .overview-grid,
          .specs-grid,
          .performance-charts {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .case-study-card {
            grid-template-columns: 1fr;
          }
          
          .case-study-image {
            height: 150px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            gap: 2rem;
          }
          
          .stat-value {
            font-size: 2rem;
          }
          
          .innovation-grid {
            grid-template-columns: 1fr;
          }
          
          .patent-stats {
            gap: 2rem;
          }
          
          .patent-number {
            font-size: 2rem;
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