import Head from 'next/head';

export default function Specifications() {
  return (
    <div className="specifications-page">
      <Head>
        <title>Technical Specifications - KPP Technology | Deep Engineering Co.</title>
        <meta name="description" content="Detailed technical specifications for KPP technology including power output, efficiency, dimensions, and operational parameters." />
      </Head>

      <div className="page-hero">
        <div className="hero-content">
          <div className="hero-logo-section">
            <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="hero-logo" />
          </div>
          <h1>KPP Technology Specifications</h1>
          <p>Comprehensive technical details of our revolutionary Kinetic Power Plant system</p>
        </div>
      </div>

      <div className="page-content">
        <div className="specs-container">
          <div className="specs-overview">
            <h2>KPP System Specifications</h2>
            <p>Detailed technical specifications for our revolutionary buoyancy-driven power generation technology</p>
          </div>

          <div className="specs-grid">
            <div className="spec-category">
              <h3>Power Output</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Rated Power Output</span>
                  <span className="spec-value">100 KW - 10 MW+</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Voltage Output</span>
                  <span className="spec-value">400V AC (3-phase)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Frequency</span>
                  <span className="spec-value">50/60 Hz</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Power Factor</span>
                  <span className="spec-value">0.95+</span>
                </div>
              </div>
            </div>

            <div className="spec-category">
              <h3>Efficiency & Performance</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">System Efficiency</span>
                  <span className="spec-value">85-90%</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Air Compression Power</span>
                  <span className="spec-value">~1% of output</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Operating Temperature</span>
                  <span className="spec-value">-20°C to +50°C</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Uptime</span>
                  <span className="spec-value">99.5%</span>
                </div>
              </div>
            </div>

            <div className="spec-category">
              <h3>Physical Dimensions</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Tower Height</span>
                  <span className="spec-value">15-50 meters</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Base Diameter</span>
                  <span className="spec-value">3-8 meters</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Weight</span>
                  <span className="spec-value">5-50 tons</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Footprint</span>
                  <span className="spec-value">10-100 m²</span>
                </div>
              </div>
            </div>

            <div className="spec-category">
              <h3>Operational Parameters</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Startup Time</span>
                  <span className="spec-value">5-10 minutes</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Ramp-up Rate</span>
                  <span className="spec-value">100% in 30 min</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Maintenance Interval</span>
                  <span className="spec-value">Annual</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Expected Lifespan</span>
                  <span className="spec-value">25+ years</span>
                </div>
              </div>
            </div>

            <div className="spec-category">
              <h3>Environmental</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">CO2 Emissions</span>
                  <span className="spec-value">0 kg/kWh</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Noise Level</span>
                  <span className="spec-value">&lt; 60 dB</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Water Usage</span>
                  <span className="spec-value">Minimal</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Land Impact</span>
                  <span className="spec-value">Low</span>
                </div>
              </div>
            </div>

            <div className="spec-category">
              <h3>Safety & Compliance</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Safety Standards</span>
                  <span className="spec-value">IEC 61400</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Grid Compliance</span>
                  <span className="spec-value">IEEE 1547</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Seismic Rating</span>
                  <span className="spec-value">Zone 4</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Wind Rating</span>
                  <span className="spec-value">150 km/h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="technical-details">
            <h3>Detailed Technical Information</h3>
            <div className="details-grid">
              <div className="detail-section">
                <h4>Buoyancy System</h4>
                <ul>
                  <li>Multi-stage buoyancy chambers</li>
                  <li>Variable displacement technology</li>
                  <li>Precision air pressure control</li>
                  <li>Automated depth regulation</li>
                </ul>
              </div>
              <div className="detail-section">
                <h4>Power Generation</h4>
                <ul>
                  <li>Direct drive generator system</li>
                  <li>Variable speed operation</li>
                  <li>Grid-synchronized output</li>
                  <li>Power quality optimization</li>
                </ul>
              </div>
              <div className="detail-section">
                <h4>Control Systems</h4>
                <ul>
                  <li>Advanced PLC control</li>
                  <li>Real-time monitoring</li>
                  <li>Remote operation capability</li>
                  <li>Predictive maintenance</li>
                </ul>
              </div>
              <div className="detail-section">
                <h4>Materials & Construction</h4>
                <ul>
                  <li>Marine-grade materials</li>
                  <li>Corrosion-resistant coatings</li>
                  <li>Modular construction</li>
                  <li>Easy maintenance access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .specifications-page {
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
        
        .specs-overview {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .specs-overview h2 {
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .specs-overview p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .spec-category {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .spec-category h3 {
          font-size: 1.5rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
          border-bottom: 2px solid #0070f3;
          padding-bottom: 0.5rem;
        }
        
        .spec-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .spec-item:last-child {
          border-bottom: none;
        }
        
        .spec-label {
          font-weight: 500;
          color: #666;
        }
        
        .spec-value {
          font-weight: 600;
          color: #1a1a1a;
          background: rgba(0,112,243,0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .technical-details {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .technical-details h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .detail-section h4 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          border-left: 4px solid #0070f3;
          padding-left: 1rem;
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
        
        .detail-section li::before {
          content: '•';
          color: #0070f3;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content p {
            font-size: 1.1rem;
          }
          
          .specs-overview h2 {
            font-size: 2rem;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .spec-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .details-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .hero-logo-section {
          margin-bottom: 1.5rem;
        }
        
        .hero-logo {
          width: 80px;
          height: 50px;
          object-fit: contain;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
} 