import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Applications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="applications-page">
      <div className="app-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">KPP Applications & Use Cases</h1>
            <p className="hero-subtitle">
              Discover the diverse range of applications where KPP technology can revolutionize 
              energy generation across industries and communities worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="content-container">
          <div className={`market-overview ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Market Overview & Opportunities</h2>
            <div className="market-grid">
              <div className="market-card">
                <div className="market-icon">🏭</div>
                <h3>Industrial Applications</h3>
                <p>Manufacturing facilities, processing plants, and industrial complexes requiring reliable, continuous power supply.</p>
                <div className="market-stats">
                  <span>Power Range: 100KW - 10MW</span>
                  <span>ROI: 3-5 years</span>
                  <span>Uptime: 99.5%</span>
                </div>
              </div>
              <div className="market-card">
                <div className="market-icon">🏢</div>
                <h3>Commercial Buildings</h3>
                <p>Office complexes, shopping centers, hotels, and commercial facilities seeking sustainable energy solutions.</p>
                <div className="market-stats">
                  <span>Power Range: 50KW - 2MW</span>
                  <span>ROI: 4-6 years</span>
                  <span>Space: Minimal footprint</span>
                </div>
              </div>
              <div className="market-card">
                <div className="market-icon">🏘️</div>
                <h3>Residential Communities</h3>
                <p>Housing developments, apartment complexes, and residential areas requiring clean, affordable energy.</p>
                <div className="market-stats">
                  <span>Power Range: 25KW - 500KW</span>
                  <span>ROI: 5-7 years</span>
                  <span>Maintenance: Annual</span>
                </div>
              </div>
              <div className="market-card">
                <div className="market-icon">🏥</div>
                <h3>Healthcare Facilities</h3>
                <p>Hospitals, clinics, and medical centers needing reliable backup power and sustainable energy solutions.</p>
                <div className="market-stats">
                  <span>Power Range: 100KW - 5MW</span>
                  <span>ROI: 3-4 years</span>
                  <span>Reliability: Critical</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`specific-applications ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Specific Application Categories</h2>
            <div className="applications-grid">
              <div className="application-category">
                <h3>🏭 Industrial & Manufacturing</h3>
                <div className="app-list">
                  <div className="app-item">
                    <h4>Steel & Metal Processing</h4>
                    <p>High-energy manufacturing processes requiring continuous power for furnaces, rolling mills, and processing equipment.</p>
                    <div className="app-benefits">
                      <span>Reduces energy costs by 60-80%</span>
                      <span>Eliminates fuel dependency</span>
                      <span>Improves sustainability metrics</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Chemical & Petrochemical</h4>
                    <p>Chemical plants and refineries needing reliable power for pumps, compressors, and processing systems.</p>
                    <div className="app-benefits">
                      <span>Zero emissions compliance</span>
                      <span>Continuous operation capability</span>
                      <span>Reduced operational risks</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Food & Beverage Processing</h4>
                    <p>Processing facilities requiring clean energy for production lines, refrigeration, and packaging systems.</p>
                    <div className="app-benefits">
                      <span>Clean energy for food safety</span>
                      <span>Reduced carbon footprint</span>
                      <span>Cost-effective operation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="application-category">
                <h3>🏢 Commercial & Retail</h3>
                <div className="app-list">
                  <div className="app-item">
                    <h4>Shopping Centers & Malls</h4>
                    <p>Large retail complexes requiring substantial power for lighting, HVAC, escalators, and tenant operations.</p>
                    <div className="app-benefits">
                      <span>Reduces common area charges</span>
                      <span>Attracts eco-conscious tenants</span>
                      <span>Improves property value</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Hotels & Hospitality</h4>
                    <p>Hotels, resorts, and hospitality venues needing reliable power for guest services and operations.</p>
                    <div className="app-benefits">
                      <span>24/7 guest comfort</span>
                      <span>Reduces utility costs</span>
                      <span>Enhances brand reputation</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Office Buildings</h4>
                    <p>Corporate offices and business centers requiring sustainable energy solutions for daily operations.</p>
                    <div className="app-benefits">
                      <span>Attracts quality tenants</span>
                      <span>Reduces operating expenses</span>
                      <span>Meets ESG requirements</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="application-category">
                <h3>🏘️ Residential & Community</h3>
                <div className="app-list">
                  <div className="app-item">
                    <h4>Housing Developments</h4>
                    <p>Residential communities and housing projects seeking affordable, sustainable energy solutions.</p>
                    <div className="app-benefits">
                      <span>Reduces homeowner costs</span>
                      <span>Increases property values</span>
                      <span>Community sustainability</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Apartment Complexes</h4>
                    <p>Multi-family housing requiring reliable power for common areas and individual units.</p>
                    <div className="app-benefits">
                      <span>Reduces utility bills</span>
                      <span>Attracts quality tenants</span>
                      <span>Improves cash flow</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Gated Communities</h4>
                    <p>Exclusive residential areas requiring premium energy solutions and security systems.</p>
                    <div className="app-benefits">
                      <span>Premium energy solution</span>
                      <span>Enhanced security systems</span>
                      <span>Exclusive community feature</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="application-category">
                <h3>🏥 Healthcare & Critical Facilities</h3>
                <div className="app-list">
                  <div className="app-item">
                    <h4>Hospitals & Medical Centers</h4>
                    <p>Healthcare facilities requiring uninterrupted power for life-saving equipment and patient care.</p>
                    <div className="app-benefits">
                      <span>Critical power reliability</span>
                      <span>Reduces operational costs</span>
                      <span>Improves patient safety</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Data Centers</h4>
                    <p>Technology facilities requiring continuous power for servers, cooling systems, and network infrastructure.</p>
                    <div className="app-benefits">
                      <span>99.99% uptime guarantee</span>
                      <span>Reduces energy costs</span>
                      <span>Improves sustainability</span>
                    </div>
                  </div>
                  <div className="app-item">
                    <h4>Emergency Services</h4>
                    <p>Police stations, fire departments, and emergency response centers needing reliable backup power.</p>
                    <div className="app-benefits">
                      <span>Emergency backup power</span>
                      <span>Reduces operational costs</span>
                      <span>Improves public safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`scalability-options ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Scalability & Implementation Options</h2>
            <div className="scaling-grid">
              <div className="scale-option">
                <div className="scale-icon">🏠</div>
                <h3>Small Scale (25-100KW)</h3>
                <p>Ideal for residential communities, small businesses, and remote locations.</p>
                <div className="scale-details">
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$125K - $500K</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Space Required:</span>
                    <span className="detail-value">25-100m²</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Installation Time:</span>
                    <span className="detail-value">2-4 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ROI Period:</span>
                    <span className="detail-value">5-7 years</span>
                  </div>
                </div>
              </div>
              <div className="scale-option">
                <div className="scale-icon">🏢</div>
                <h3>Medium Scale (100KW-1MW)</h3>
                <p>Perfect for commercial buildings, medium industries, and institutional facilities.</p>
                <div className="scale-details">
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$500K - $5M</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Space Required:</span>
                    <span className="detail-value">100-500m²</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Installation Time:</span>
                    <span className="detail-value">4-8 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ROI Period:</span>
                    <span className="detail-value">3-5 years</span>
                  </div>
                </div>
              </div>
              <div className="scale-option">
                <div className="scale-icon">🏭</div>
                <h3>Large Scale (1MW-10MW+)</h3>
                <p>Designed for large industrial facilities, power plants, and utility-scale applications.</p>
                <div className="scale-details">
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$5M - $50M+</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Space Required:</span>
                    <span className="detail-value">500-2000m²</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Installation Time:</span>
                    <span className="detail-value">8-16 weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ROI Period:</span>
                    <span className="detail-value">2-4 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`implementation-scenarios ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Implementation Scenarios</h2>
            <div className="scenarios-grid">
              <div className="scenario-card">
                <h3>🔄 Grid-Connected Systems</h3>
                <p>KPP systems connected to the electrical grid, providing power to the facility while allowing excess energy to be sold back to the grid.</p>
                <div className="scenario-benefits">
                  <span>Revenue from excess power</span>
                  <span>Grid stability support</span>
                  <span>Backup power capability</span>
                </div>
              </div>
              <div className="scenario-card">
                <h3>🔋 Off-Grid Systems</h3>
                <p>Standalone KPP installations with battery storage for locations without grid access or requiring complete energy independence.</p>
                <div className="scenario-benefits">
                  <span>Complete energy independence</span>
                  <span>No grid connection required</span>
                  <span>Remote location capability</span>
                </div>
              </div>
              <div className="scenario-card">
                <h3>⚡ Hybrid Systems</h3>
                <p>KPP combined with solar, wind, or other renewable sources for maximum efficiency and reliability.</p>
                <div className="scenario-benefits">
                  <span>Maximum energy efficiency</span>
                  <span>Reduced storage requirements</span>
                  <span>Optimal cost-benefit ratio</span>
                </div>
              </div>
              <div className="scenario-card">
                <h3>🏭 Industrial Integration</h3>
                <p>KPP systems integrated directly into industrial processes, providing both power and process heat.</p>
                <div className="scenario-benefits">
                  <span>Process heat utilization</span>
                  <span>Maximum efficiency</span>
                  <span>Reduced waste heat</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to Implement KPP Technology?</h2>
              <p>Contact us to discuss your specific application requirements and get a customized implementation plan.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  <span>Get Started</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/economics" className="btn btn-secondary">
                  <span>Economic Analysis</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .applications-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .applications-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,112,243,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .app-hero {
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
        
        .app-content {
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .market-overview {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
          margin-bottom: 6rem;
        }
        
        .market-overview.animate-in {
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
        
        .market-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .market-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .market-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .market-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .market-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .market-card p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .market-stats {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .market-stats span {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
        }
        
        .specific-applications {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
          margin-bottom: 6rem;
        }
        
        .specific-applications.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .application-category {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .application-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .app-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .app-item {
          padding: 1.5rem;
          background: rgba(255,255,255,0.8);
          border-radius: 12px;
          border-left: 4px solid #0070f3;
        }
        
        .app-item h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .app-item p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .app-benefits {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        
        .app-benefits span {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
        }
        
        .scalability-options {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
          margin-bottom: 6rem;
        }
        
        .scalability-options.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scaling-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .scale-option {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .scale-option:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .scale-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .scale-option h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .scale-option p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .scale-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,112,243,0.1);
        }
        
        .detail-label {
          font-weight: 500;
          color: #666;
        }
        
        .detail-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .implementation-scenarios {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
          margin-bottom: 6rem;
        }
        
        .implementation-scenarios.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .scenario-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .scenario-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .scenario-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .scenario-card p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .scenario-benefits {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .scenario-benefits span {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
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
          
          .market-grid,
          .applications-grid,
          .scaling-grid,
          .scenarios-grid {
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