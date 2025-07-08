import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('small');
  const [configuratorData, setConfiguratorData] = useState({
    powerRequirement: '100',
    application: 'commercial',
    location: 'urban',
    gridConnection: 'grid-tied',
    backup: false,
    storage: false
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutionTypes = {
    small: {
      title: 'Small Scale Solutions',
      range: '25KW - 100KW',
      description: 'Perfect for residential communities, small businesses, and remote locations',
      applications: ['Residential Communities', 'Small Commercial', 'Remote Facilities', 'Backup Power'],
      features: ['Plug-and-play installation', 'Minimal footprint', 'Low maintenance', 'Quick ROI'],
      price: '$125K - $500K',
      installation: '2-4 weeks',
      roi: '5-7 years',
      image: '/solutions/small-scale.jpg'
    },
    medium: {
      title: 'Medium Scale Solutions',
      range: '100KW - 1MW',
      description: 'Ideal for commercial buildings, medium industries, and institutional facilities',
      applications: ['Office Buildings', 'Manufacturing', 'Hospitals', 'Shopping Centers'],
      features: ['Modular expansion', 'Grid integration', 'Remote monitoring', 'Professional support'],
      price: '$500K - $5M',
      installation: '4-8 weeks',
      roi: '3-5 years',
      image: '/solutions/medium-scale.jpg'
    },
    large: {
      title: 'Large Scale Solutions',
      range: '1MW - 10MW+',
      description: 'Designed for large industrial facilities, power plants, and utility-scale applications',
      applications: ['Industrial Plants', 'Utility Scale', 'Data Centers', 'Mining Operations'],
      features: ['Custom engineering', 'Utility integration', 'Advanced controls', 'Full service'],
      price: '$5M - $50M+',
      installation: '8-16 weeks',
      roi: '2-4 years',
      image: '/solutions/large-scale.jpg'
    }
  };

  const handleConfiguratorChange = (field, value) => {
    setConfiguratorData({
      ...configuratorData,
      [field]: value
    });
  };

  const calculateEstimate = () => {
    const basePrice = parseInt(configuratorData.powerRequirement) * 3000; // $3000 per KW
    const multipliers = {
      application: { residential: 1.0, commercial: 1.1, industrial: 1.2 },
      location: { urban: 1.0, suburban: 0.95, rural: 0.9, remote: 1.15 },
      gridConnection: { 'grid-tied': 1.0, 'off-grid': 1.2, hybrid: 1.15 }
    };
    
    let estimate = basePrice;
    estimate *= multipliers.application[configuratorData.application] || 1.0;
    estimate *= multipliers.location[configuratorData.location] || 1.0;
    estimate *= multipliers.gridConnection[configuratorData.gridConnection] || 1.0;
    
    if (configuratorData.backup) estimate *= 1.1;
    if (configuratorData.storage) estimate *= 1.3;
    
    return Math.round(estimate);
  };

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Complete Energy Solutions Portfolio</h1>
            <p className="hero-subtitle">
              From 25KW residential systems to 10MW+ utility-scale installations - 
              scalable, reliable, and cost-effective KPP technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solution Types Navigation */}
      <section className="solution-nav">
        <div className="nav-container">
          <div className="solution-tabs">
            <button 
              className={`solution-tab ${selectedSolution === 'small' ? 'active' : ''}`}
              onClick={() => setSelectedSolution('small')}
            >
              <div className="tab-icon">🏠</div>
              <div className="tab-content">
                <h3>Small Scale</h3>
                <p>25KW - 100KW</p>
              </div>
            </button>
            <button 
              className={`solution-tab ${selectedSolution === 'medium' ? 'active' : ''}`}
              onClick={() => setSelectedSolution('medium')}
            >
              <div className="tab-icon">🏢</div>
              <div className="tab-content">
                <h3>Medium Scale</h3>
                <p>100KW - 1MW</p>
              </div>
            </button>
            <button 
              className={`solution-tab ${selectedSolution === 'large' ? 'active' : ''}`}
              onClick={() => setSelectedSolution('large')}
            >
              <div className="tab-icon">🏭</div>
              <div className="tab-content">
                <h3>Large Scale</h3>
                <p>1MW - 10MW+</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="solution-details">
        <div className="content-container">
          <div className={`solution-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="solution-grid">
              <div className="solution-info">
                <div className="solution-header">
                  <h2>{solutionTypes[selectedSolution].title}</h2>
                  <div className="solution-range">{solutionTypes[selectedSolution].range}</div>
                </div>
                
                <p className="solution-description">
                  {solutionTypes[selectedSolution].description}
                </p>
                
                <div className="solution-specs">
                  <div className="spec-item">
                    <div className="spec-label">Investment Range</div>
                    <div className="spec-value">{solutionTypes[selectedSolution].price}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">Installation Time</div>
                    <div className="spec-value">{solutionTypes[selectedSolution].installation}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">ROI Period</div>
                    <div className="spec-value">{solutionTypes[selectedSolution].roi}</div>
                  </div>
                </div>
                
                <div className="solution-applications">
                  <h3>Ideal Applications</h3>
                  <div className="applications-list">
                    {solutionTypes[selectedSolution].applications.map((app, index) => (
                      <div key={index} className="application-item">
                        <span className="app-icon">✓</span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="solution-features">
                  <h3>Key Features</h3>
                  <div className="features-list">
                    {solutionTypes[selectedSolution].features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-icon">⚡</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="solution-actions">
                  <Link href={`/solutions/${selectedSolution}-scale`} className="btn btn-primary">
                    <span>Learn More</span>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    <span>Get Quote</span>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="solution-visual">
                <div className="solution-image">
                  <img src={solutionTypes[selectedSolution].image} alt={solutionTypes[selectedSolution].title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Configurator */}
      <section className="configurator-section">
        <div className="content-container">
          <div className={`configurator-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="configurator-header">
              <h2>Solution Configurator</h2>
              <p>Configure your custom KPP solution and get an instant estimate</p>
            </div>
            
            <div className="configurator-grid">
              <div className="configurator-form">
                <div className="form-section">
                  <h3>Power Requirements</h3>
                  <div className="form-group">
                    <label>Power Requirement (KW)</label>
                    <input
                      type="range"
                      min="25"
                      max="1000"
                      value={configuratorData.powerRequirement}
                      onChange={(e) => handleConfiguratorChange('powerRequirement', e.target.value)}
                      className="power-slider"
                    />
                    <div className="slider-value">{configuratorData.powerRequirement} KW</div>
                  </div>
                </div>
                
                <div className="form-section">
                  <h3>Application Type</h3>
                  <div className="radio-group">
                    {['residential', 'commercial', 'industrial'].map((type) => (
                      <label key={type} className="radio-option">
                        <input
                          type="radio"
                          name="application"
                          value={type}
                          checked={configuratorData.application === type}
                          onChange={(e) => handleConfiguratorChange('application', e.target.value)}
                        />
                        <span className="radio-label">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="form-section">
                  <h3>Location Type</h3>
                  <select
                    value={configuratorData.location}
                    onChange={(e) => handleConfiguratorChange('location', e.target.value)}
                    className="form-select"
                  >
                    <option value="urban">Urban</option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
                
                <div className="form-section">
                  <h3>Grid Connection</h3>
                  <select
                    value={configuratorData.gridConnection}
                    onChange={(e) => handleConfiguratorChange('gridConnection', e.target.value)}
                    className="form-select"
                  >
                    <option value="grid-tied">Grid-Tied</option>
                    <option value="off-grid">Off-Grid</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div className="form-section">
                  <h3>Additional Options</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-option">
                      <input
                        type="checkbox"
                        checked={configuratorData.backup}
                        onChange={(e) => handleConfiguratorChange('backup', e.target.checked)}
                      />
                      <span className="checkbox-label">Backup Power System</span>
                    </label>
                    <label className="checkbox-option">
                      <input
                        type="checkbox"
                        checked={configuratorData.storage}
                        onChange={(e) => handleConfiguratorChange('storage', e.target.checked)}
                      />
                      <span className="checkbox-label">Energy Storage Integration</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="configurator-results">
                <div className="results-card">
                  <h3>Your Custom Solution</h3>
                  
                  <div className="result-summary">
                    <div className="summary-item">
                      <div className="summary-label">Power Output</div>
                      <div className="summary-value">{configuratorData.powerRequirement} KW</div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-label">Application</div>
                      <div className="summary-value">{configuratorData.application.charAt(0).toUpperCase() + configuratorData.application.slice(1)}</div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-label">Configuration</div>
                      <div className="summary-value">{configuratorData.gridConnection.charAt(0).toUpperCase() + configuratorData.gridConnection.slice(1)}</div>
                    </div>
                  </div>
                  
                  <div className="estimate-section">
                    <div className="estimate-label">Estimated Investment</div>
                    <div className="estimate-value">${calculateEstimate().toLocaleString()}</div>
                    <div className="estimate-note">*Preliminary estimate - final pricing depends on site assessment</div>
                  </div>
                  
                  <div className="roi-projection">
                    <h4>ROI Projection</h4>
                    <div className="roi-metrics">
                      <div className="roi-item">
                        <span className="roi-label">Payback Period</span>
                        <span className="roi-value">3.5 years</span>
                      </div>
                      <div className="roi-item">
                        <span className="roi-label">25-Year Savings</span>
                        <span className="roi-value">${(calculateEstimate() * 4).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="results-actions">
                    <button className="btn btn-primary btn-full">
                      <span>Request Detailed Quote</span>
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    <button className="btn btn-secondary btn-full">
                      <span>Schedule Consultation</span>
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="services-section">
        <div className="content-container">
          <div className={`services-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Complete Implementation Services</h2>
            <p>End-to-end support from initial consultation to ongoing maintenance</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🔍</div>
                <h3>Site Assessment</h3>
                <p>Comprehensive evaluation of your site conditions, energy requirements, and optimal system configuration</p>
                <ul>
                  <li>Energy audit and load analysis</li>
                  <li>Site feasibility study</li>
                  <li>Environmental impact assessment</li>
                  <li>Regulatory compliance review</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">⚙️</div>
                <h3>Custom Engineering</h3>
                <p>Tailored system design and engineering to meet your specific requirements and site conditions</p>
                <ul>
                  <li>Custom system design</li>
                  <li>Performance optimization</li>
                  <li>Integration planning</li>
                  <li>Technical documentation</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Professional Installation</h3>
                <p>Expert installation by certified technicians with quality assurance and testing</p>
                <ul>
                  <li>Certified installation team</li>
                  <li>Quality assurance testing</li>
                  <li>Commissioning and startup</li>
                  <li>Performance validation</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Monitoring & Support</h3>
                <p>24/7 remote monitoring and comprehensive support to ensure optimal performance</p>
                <ul>
                  <li>Real-time monitoring</li>
                  <li>Predictive maintenance</li>
                  <li>Technical support</li>
                  <li>Performance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Transform Your Energy Infrastructure?</h2>
            <p>Our solution experts are ready to design the perfect KPP system for your specific needs</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start Your Project</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/demo" className="btn btn-secondary btn-large">
                <span>Schedule Demo</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .solutions-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .solutions-hero {
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
        
        .solution-nav {
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
        
        .solution-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
        }
        
        .solution-tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem 3rem;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }
        
        .solution-tab:hover {
          background: rgba(0,112,243,0.05);
        }
        
        .solution-tab.active {
          background: rgba(0,112,243,0.05);
          border-bottom-color: #0070f3;
        }
        
        .tab-icon {
          font-size: 2rem;
        }
        
        .tab-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.3rem 0;
          color: #1a1a1a;
        }
        
        .tab-content p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }
        
        .solution-details {
          padding: 4rem 0;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .solution-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .solution-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .solution-header {
          margin-bottom: 2rem;
        }
        
        .solution-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .solution-range {
          font-size: 1.2rem;
          color: #0070f3;
          font-weight: 600;
        }
        
        .solution-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          margin: 0 0 2rem 0;
        }
        
        .solution-specs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .spec-item {
          background: rgba(255,255,255,0.8);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .spec-label {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        .spec-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0070f3;
        }
        
        .solution-applications,
        .solution-features {
          margin-bottom: 2rem;
        }
        
        .solution-applications h3,
        .solution-features h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .applications-list,
        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        
        .application-item,
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }
        
        .app-icon,
        .feature-icon {
          color: #0070f3;
          font-weight: bold;
        }
        
        .solution-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .solution-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .solution-image {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .solution-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .configurator-section {
          background: white;
          padding: 6rem 0;
        }
        
        .configurator-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .configurator-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .configurator-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .configurator-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .configurator-header p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }
        
        .configurator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        .configurator-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .form-section {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .form-section h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          font-weight: 500;
          color: #666;
        }
        
        .power-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #ddd;
          outline: none;
          -webkit-appearance: none;
        }
        
        .power-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0070f3;
          cursor: pointer;
        }
        
        .slider-value {
          text-align: center;
          font-weight: 600;
          color: #0070f3;
          font-size: 1.1rem;
        }
        
        .radio-group {
          display: flex;
          gap: 1rem;
        }
        
        .radio-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .radio-label {
          font-weight: 500;
          color: #666;
        }
        
        .form-select {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          font-size: 1rem;
        }
        
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .checkbox-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .checkbox-label {
          font-weight: 500;
          color: #666;
        }
        
        .configurator-results {
          display: flex;
          align-items: flex-start;
        }
        
        .results-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          width: 100%;
        }
        
        .results-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .result-summary {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
        }
        
        .summary-label {
          font-weight: 500;
          color: #666;
        }
        
        .summary-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .estimate-section {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(0,112,243,0.1);
          border-radius: 12px;
        }
        
        .estimate-label {
          font-size: 1rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        .estimate-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .estimate-note {
          font-size: 0.8rem;
          color: #666;
          font-style: italic;
        }
        
        .roi-projection {
          margin-bottom: 2rem;
        }
        
        .roi-projection h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .roi-metrics {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .roi-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background: rgba(255,255,255,0.8);
          border-radius: 6px;
        }
        
        .roi-label {
          font-size: 0.9rem;
          color: #666;
        }
        
        .roi-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .results-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .services-section {
          padding: 6rem 0;
        }
        
        .services-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .services-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .services-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .services-content > p {
          font-size: 1.2rem;
          color: #666;
          margin: 0 0 4rem 0;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        
        .service-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .service-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .service-card p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-card li {
          padding: 0.3rem 0;
          color: #666;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .service-card li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .solutions-cta {
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
        
        .btn-full {
          width: 100%;
          justify-content: center;
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
          .solution-grid,
          .configurator-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .solution-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .applications-list,
          .features-list {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .solution-tab {
            padding: 1.5rem 2rem;
          }
          
          .tab-icon {
            font-size: 1.5rem;
          }
          
          .services-grid {
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