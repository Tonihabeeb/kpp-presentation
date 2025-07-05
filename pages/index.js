import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    projectType: '',
    energyRequirement: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send to your CRM/backend
  };

  const keyMetrics = [
    { value: '500+', label: 'MW Installed Capacity', icon: '⚡' },
    { value: '150+', label: 'Global Installations', icon: '🌍' },
    { value: '99.5%', label: 'System Uptime', icon: '🔧' },
    { value: '$2B+', label: 'Energy Cost Savings', icon: '💰' }
  ];

  const heroSlides = [
    {
      title: 'Revolutionary Buoyancy-Driven Power Generation',
      subtitle: 'Transform your energy infrastructure with KPP technology - delivering 24/7 clean power with zero fuel costs and minimal maintenance.',
      image: 'linear-gradient(135deg, #0070f3 0%, #0051cc 100%)',
      cta: 'Explore Technology'
    },
    {
      title: 'Enterprise-Scale Energy Solutions',
      subtitle: 'From 100KW to 10MW+ installations - scalable, reliable, and cost-effective power generation for industrial and commercial applications.',
      image: 'linear-gradient(135deg, #00aa00 0%, #00cc00 100%)',
      cta: 'View Solutions'
    },
    {
      title: 'Proven Performance & ROI',
      subtitle: 'Join 150+ organizations worldwide achieving 3-5 year payback periods and 500%+ ROI with KPP technology implementations.',
      image: 'linear-gradient(135deg, #ff8800 0%, #ffaa00 100%)',
      cta: 'Calculate ROI'
    }
  ];

  return (
    <div className="enterprise-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-video-container">
            <div 
              className="hero-video"
              style={{
                background: 'linear-gradient(135deg, #0070f3 0%, #0051cc 100%)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            >
            </div>
            <div className="hero-overlay"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <div className={`hero-badge ${isVisible ? 'animate-in' : ''}`}>
                <span className="badge-icon">🏆</span>
                <span>Global Leader in Renewable Energy Innovation</span>
              </div>
              
              <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <div className={`hero-cta ${isVisible ? 'animate-in' : ''}`}>
                <Link href="/technology" className="btn btn-primary btn-large">
                  <span>{heroSlides[currentSlide].cta}</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/demo" className="btn btn-secondary btn-large">
                  <span>Schedule Demo</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="hero-form-container">
              <div className={`hero-form ${isVisible ? 'animate-in' : ''}`}>
                <h3>Get Your Custom Energy Solution</h3>
                <p>Connect with our experts for a personalized consultation</p>
                
                <form onSubmit={handleSubmit} className="lead-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name*"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Project Type*</option>
                        <option value="new-installation">New Installation</option>
                        <option value="retrofit">Retrofit/Upgrade</option>
                        <option value="feasibility">Feasibility Study</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        name="energyRequirement"
                        value={formData.energyRequirement}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Energy Requirement*</option>
                        <option value="25-100kw">25-100 KW</option>
                        <option value="100kw-1mw">100 KW - 1 MW</option>
                        <option value="1mw-10mw">1 MW - 10 MW</option>
                        <option value="10mw+">10 MW+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Project Details (Optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="form-textarea"
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-full">
                    <span>Get Custom Quote</span>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  
                  <p className="form-disclaimer">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="trust-container">
          <div className={`trust-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Trusted by Industry Leaders Worldwide</h2>
            <div className="client-logos">
              <div className="logo-item">
                <div className="placeholder-logo">Client 1</div>
              </div>
              <div className="logo-item">
                <div className="placeholder-logo">Client 2</div>
              </div>
              <div className="logo-item">
                <div className="placeholder-logo">Client 3</div>
              </div>
              <div className="logo-item">
                <div className="placeholder-logo">Client 4</div>
              </div>
              <div className="logo-item">
                <div className="placeholder-logo">Client 5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className={`metrics-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Proven Results Across Global Installations</h2>
            <div className="metrics-grid">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="value-section">
        <div className="value-container">
          <div className={`value-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="value-header">
              <h2>Why Choose KPP Technology?</h2>
              <p>Revolutionary advantages that transform your energy infrastructure</p>
            </div>
            
            <div className="value-grid">
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>24/7 Continuous Power</h3>
                <p>Unlike solar or wind, KPP generates consistent power around the clock, regardless of weather conditions.</p>
                <div className="value-stats">
                  <span>99.5% Uptime</span>
                  <span>Zero Weather Dependency</span>
                </div>
              </div>
              
              <div className="value-card">
                <div className="value-icon">💰</div>
                <h3>Superior Economics</h3>
                <p>Achieve 3-5 year payback periods with zero fuel costs and minimal maintenance requirements.</p>
                <div className="value-stats">
                  <span>$0 Fuel Costs</span>
                  <span>500%+ ROI</span>
                </div>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Zero Emissions</h3>
                <p>Completely clean energy generation with no combustion, no pollution, and minimal environmental impact.</p>
                <div className="value-stats">
                  <span>0 CO2 Emissions</span>
                  <span>ESG Compliant</span>
                </div>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🔧</div>
                <h3>Minimal Maintenance</h3>
                <p>Engineered for reliability with simple mechanical systems requiring minimal maintenance.</p>
                <div className="value-stats">
                  <span>Annual Service</span>
                  <span>25+ Year Lifespan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Transform Your Energy Infrastructure?</h2>
            <p>Join the renewable energy revolution with proven KPP technology. Our experts are ready to design a custom solution for your organization.</p>
            
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start Your Project</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/resources/case-studies" className="btn btn-secondary btn-large">
                <span>View Case Studies</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .enterprise-home {
          min-height: 100vh;
        }
        
        .hero-section {
          position: relative;
          height: 100vh;
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
        
        .hero-video-container {
          position: relative;
          width: 100%;
          height: 100%;
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
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,112,243,0.3) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          color: white;
        }
        
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .hero-badge.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .badge-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }
        
        .hero-title.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          opacity: 0.9;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
        }
        
        .hero-subtitle.animate-in {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .hero-cta {
          display: flex;
          gap: 1rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
        }
        
        .hero-cta.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-form-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
        }
        
        .hero-form-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-form {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .hero-form h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .hero-form p {
          color: #666;
          margin: 0 0 1.5rem 0;
        }
        
        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-input,
        .form-select,
        .form-textarea {
          padding: 0.75rem 1rem;
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          background: white;
          color: #1a1a1a;
        }
        
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 0 3px rgba(0,112,243,0.1);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }
        
        .form-disclaimer {
          font-size: 0.8rem;
          color: #666;
          text-align: center;
          margin: 0;
        }
        
        .hero-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 3;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: white;
        }
        
        .trust-section {
          padding: 4rem 0;
          background: #f8f9fa;
        }
        
        .trust-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .trust-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .trust-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .trust-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
        }
        
        .client-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        
        .logo-item {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .logo-item:hover {
          opacity: 1;
        }
        
        .placeholder-logo {
          width: 120px;
          height: 60px;
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
          border: 2px solid #ddd;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #666;
          font-size: 0.9rem;
        }
        
        .metrics-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
        }
        
        .metrics-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .metrics-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .metrics-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .metrics-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .metric-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-5px);
        }
        
        .metric-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .metric-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .value-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }
        
        .value-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .value-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .value-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .value-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .value-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .value-header p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }
        
        .value-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .value-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .value-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .value-card p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .value-stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .value-stats span {
          background: rgba(0,112,243,0.1);
          color: #0070f3;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
        }
        
        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .cta-content {
          text-align: center;
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
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .client-logos {
            gap: 2rem;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .value-grid {
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