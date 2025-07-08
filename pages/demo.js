import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    projectType: '',
    energyRequirement: '',
    timeline: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Thank you for your demo request! We will contact you within 24 hours.');
  };

  return (
    <div className="demo-page">
      <Head>
        <title>Request KPP Technology Demo - Deep Engineering Co.</title>
        <meta name="description" content="Schedule a live demonstration of KPP technology at your facility. See the revolutionary buoyancy-driven power generation system in action." />
      </Head>

      <div className="page-hero">
        <div className="hero-content">
          <div className="demo-header">
            <div className="demo-logo-section">
              <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="demo-logo" />
            </div>
            <h1>KPP Technology Demo Request</h1>
            <p>Experience the future of renewable energy firsthand</p>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="demo-container">
          <div className="demo-info">
            <h2>Why Schedule a Demo?</h2>
            <div className="demo-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">🔬</div>
                <h3>Live Technology Showcase</h3>
                <p>See KPP technology in action with real-time power generation and performance data</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h3>Performance Analysis</h3>
                <p>Review actual efficiency metrics, ROI calculations, and operational data</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💡</div>
                <h3>Custom Solutions</h3>
                <p>Discuss how KPP technology can be tailored to your specific energy needs</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <h3>Expert Consultation</h3>
                <p>Meet with our engineering team to address your technical questions</p>
              </div>
            </div>

            <div className="demo-locations">
              <h3>Available Demo Locations</h3>
              <div className="location-grid">
                <div className="location-card">
                  <h4>Thailand R&D Facility</h4>
                  <p>100KW and 500KW operational demonstration units</p>
                  <span className="location-status">Available for Site Visits</span>
                </div>
                <div className="location-card">
                  <h4>Mobile Demo Unit</h4>
                  <p>Portable demonstration system for on-site presentations</p>
                  <span className="location-status">Worldwide Availability</span>
                </div>
                <div className="location-card">
                  <h4>Virtual Demo</h4>
                  <p>Live-streamed demonstration with real-time data</p>
                  <span className="location-status">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-form-container">
            <div className="demo-form">
              <h3>Request Your Demo</h3>
              <p>Fill out the form below and our team will contact you within 24 hours to schedule your demonstration</p>
              
              <form onSubmit={handleSubmit} className="demo-request-form">
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
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
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
                </div>
                
                <div className="form-row">
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
                  <div className="form-group">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Project Timeline</option>
                      <option value="immediate">Immediate (0-6 months)</option>
                      <option value="short-term">Short-term (6-12 months)</option>
                      <option value="medium-term">Medium-term (1-2 years)</option>
                      <option value="long-term">Long-term (2+ years)</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="Project Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Additional Requirements or Questions"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="form-textarea"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  <span>Request Demo</span>
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

      <style jsx>{`
        .demo-page {
          background: #f8f9fa;
          min-height: 100vh;
        }
        
        .page-hero {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }
        
        .hero-content p {
          font-size: 1.3rem;
          margin: 0;
          opacity: 0.9;
        }
        
        .page-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .demo-container {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 4rem;
          align-items: start;
        }
        
        .demo-info h2 {
          font-size: 2.5rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .demo-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .benefit-item {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .benefit-item:hover {
          transform: translateY(-5px);
        }
        
        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .benefit-item h3 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .benefit-item p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .demo-locations h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        
        .location-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border-left: 4px solid #0070f3;
        }
        
        .location-card h4 {
          font-size: 1.1rem;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .location-card p {
          color: #666;
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
          line-height: 1.5;
        }
        
        .location-status {
          background: rgba(0,112,243,0.1);
          color: #0070f3;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .demo-form-container {
          position: sticky;
          top: 100px;
        }
        
        .demo-form {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .demo-form h3 {
          font-size: 1.8rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .demo-form p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }
        
        .demo-request-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: border-color 0.3s ease;
          background: white;
        }
        
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #0070f3;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 100px;
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
        
        .btn-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .btn:hover .btn-icon {
          transform: translateX(3px);
        }
        
        .form-disclaimer {
          font-size: 0.8rem;
          color: #999;
          text-align: center;
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .demo-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .demo-form-container {
            position: static;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content p {
            font-size: 1.1rem;
          }
          
          .demo-info h2 {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .demo-benefits {
            grid-template-columns: 1fr;
          }
          
          .location-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .demo-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .demo-logo-section {
          margin-bottom: 1.5rem;
        }
        
        .demo-logo {
          width: 100px;
          height: 60px;
          object-fit: contain;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
} 