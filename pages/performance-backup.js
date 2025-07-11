import Image from 'next/image';
import ExampleChart from '../components/ExampleChart';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Performance() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-performance-content" className="skip-link">Skip to main content</a>
      
      <div className="performance-page">
        <section className="perf-hero" aria-label="Performance metrics hero section">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
              <h1 className="hero-title">KPP Performance Metrics</h1>
              <p className="hero-subtitle">
                Real-world data and performance analysis demonstrating the efficiency, 
              reliability, and economic viability of the KPP system
            </p>
          </div>
        </div>
        </section>

        <main id="main-performance-content" className="perf-content">
        <div className="content-container">
          <div className={`power-output ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Power Generation Performance</h2>
            <div className="output-grid">
              <div className="output-card">
                <div className="output-icon">⚡</div>
                <div className="output-value">100KW</div>
                <div className="output-label">Rated Power Output</div>
                <div className="output-desc">Continuous power generation capacity</div>
              </div>
              <div className="output-card">
                <div className="output-icon">🔄</div>
                <div className="output-value">24/7</div>
                <div className="output-label">Operating Hours</div>
                <div className="output-desc">Non-stop operation capability</div>
              </div>
              <div className="output-card">
                <div className="output-icon">📊</div>
                <div className="output-value">&gt;85%</div>
                <div className="output-label">System Efficiency</div>
                <div className="output-desc">Mechanical to electrical conversion</div>
              </div>
              <div className="output-card">
                <div className="output-icon">🌡️</div>
                <div className="output-value">99.5%</div>
                <div className="output-label">Uptime Reliability</div>
                <div className="output-desc">System availability and stability</div>
              </div>
            </div>
          </div>

          <div className={`efficiency-analysis ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Efficiency Analysis</h2>
            <div className="efficiency-grid">
              <div className="efficiency-card">
                <h3>Mechanical Efficiency</h3>
                <div className="efficiency-bar">
                  <div className="bar-fill" style={{width: '95%'}}></div>
                  <span className="bar-label">95%</span>
                </div>
                <p>High-efficiency gear system minimizes energy losses during mechanical conversion</p>
              </div>
              <div className="efficiency-card">
                <h3>Electrical Efficiency</h3>
                <div className="efficiency-bar">
                  <div className="bar-fill" style={{width: '90%'}}></div>
                  <span className="bar-label">90%</span>
                </div>
                <p>Advanced generators optimize electrical output with minimal losses</p>
              </div>
              <div className="efficiency-card">
                <h3>Overall System Efficiency</h3>
                <div className="efficiency-bar">
                  <div className="bar-fill" style={{width: '85%'}}></div>
                  <span className="bar-label">85%</span>
                </div>
                <p>Combined efficiency from buoyancy to electrical output</p>
              </div>
            </div>
          </div>

          <div className={`operational-data ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Operational Data</h2>
            <div className="data-grid">
              <div className="data-section">
                <h3>Daily Performance</h3>
                <div className="data-list">
                  <div className="data-item">
                    <span className="data-label">Energy Generated:</span>
                    <span className="data-value">2,400 kWh</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Operating Hours:</span>
                    <span className="data-value">24 hours</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Peak Output:</span>
                    <span className="data-value">100 KW</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Average Output:</span>
                    <span className="data-value">95 KW</span>
                  </div>
                </div>
              </div>
              <div className="data-section">
                <h3>Monthly Performance</h3>
                <div className="data-list">
                  <div className="data-item">
                    <span className="data-label">Total Energy:</span>
                    <span className="data-value">72,000 kWh</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Uptime:</span>
                    <span className="data-value">99.5%</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Maintenance Hours:</span>
                    <span className="data-value">2 hours</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Efficiency Rating:</span>
                    <span className="data-value">A+</span>
                  </div>
                </div>
              </div>
              <div className="data-section">
                <h3>Annual Performance</h3>
                <div className="data-list">
                  <div className="data-item">
                    <span className="data-label">Total Energy:</span>
                    <span className="data-value">864,000 kWh</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">CO2 Saved:</span>
                    <span className="data-value">432 tons</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Operating Cost:</span>
                    <span className="data-value">$0</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">ROI Period:</span>
                    <span className="data-value">3-5 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`comparison-chart ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Performance Comparison</h2>
            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>KPP vs Solar Power</h3>
                <div className="comparison-item">
                  <span>KPP</span>
                  <div className="comparison-bar kpp">
                    <div className="bar-fill" style={{width: '100%'}}></div>
                  </div>
                  <span>24/7 Operation</span>
                </div>
                <div className="comparison-item">
                  <span>Solar</span>
                  <div className="comparison-bar solar">
                    <div className="bar-fill" style={{width: '25%'}}></div>
                  </div>
                  <span>6 hours/day</span>
                </div>
              </div>
              <div className="comparison-card">
                <h3>KPP vs Wind Power</h3>
                <div className="comparison-item">
                  <span>KPP</span>
                  <div className="comparison-bar kpp">
                    <div className="bar-fill" style={{width: '100%'}}></div>
                  </div>
                  <span>Consistent Output</span>
                </div>
                <div className="comparison-item">
                  <span>Wind</span>
                  <div className="comparison-bar wind">
                    <div className="bar-fill" style={{width: '35%'}}></div>
                  </div>
                  <span>Variable Output</span>
                </div>
              </div>
              <div className="comparison-card">
                <h3>KPP vs Traditional</h3>
                <div className="comparison-item">
                  <span>KPP</span>
                  <div className="comparison-bar kpp">
                    <div className="bar-fill" style={{width: '100%'}}></div>
                  </div>
                  <span>Zero Emissions</span>
                </div>
                <div className="comparison-item">
                  <span>Fossil Fuel</span>
                  <div className="comparison-bar fossil">
                    <div className="bar-fill" style={{width: '0%'}}></div>
                  </div>
                  <span>High Emissions</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`economic-analysis ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Economic Analysis</h2>
            <div className="economic-grid">
              <div className="economic-card">
                <div className="economic-icon">💰</div>
                <h3>Initial Investment</h3>
                <div className="economic-value">$500K - $1M</div>
                <p>One-time setup cost for 100KW system</p>
              </div>
              <div className="economic-card">
                <div className="economic-icon">⚡</div>
                <h3>Operating Cost</h3>
                <div className="economic-value">$0</div>
                <p>Zero fuel costs, minimal maintenance</p>
              </div>
              <div className="economic-card">
                <div className="economic-icon">📈</div>
                <h3>Annual Revenue</h3>
                <div className="economic-value">$86K - $120K</div>
                <p>Based on current electricity rates</p>
              </div>
              <div className="economic-card">
                <div className="economic-icon">🔄</div>
                <h3>Payback Period</h3>
                <div className="economic-value">3-5 Years</div>
                <p>Return on investment timeline</p>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to See Real Applications?</h2>
              <p>Discover how KPP technology is being deployed in various real-world scenarios and industries.</p>
              <div className="cta-buttons">
                <Link href="/applications" className="btn btn-primary">
                  <span>View Applications</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </Link>
                <Link href="/timeline" className="btn btn-secondary">
                  <span>Development Timeline</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>

      <style jsx>{`
        .performance-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--color-background) 0%, var(--color-secondary-bg) 100%);
          position: relative;
        }
        
        .performance-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(42,87,165,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .perf-hero {
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
        
        .perf-content {
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .power-output {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
          margin-bottom: 6rem;
        }
        
        .power-output.animate-in {
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
        
        .output-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .output-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .output-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .output-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .output-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .output-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .output-desc {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .efficiency-analysis {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
          margin-bottom: 6rem;
        }
        
        .efficiency-analysis.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .efficiency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .efficiency-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .efficiency-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .efficiency-bar {
          position: relative;
          background: rgba(0,112,243,0.1);
          height: 30px;
          border-radius: 15px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        
        .bar-fill {
          background: linear-gradient(90deg, #0070f3 0%, #0051cc 100%);
          height: 100%;
          border-radius: 15px;
          transition: width 1s ease;
        }
        
        .bar-label {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .efficiency-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .operational-data {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
          margin-bottom: 6rem;
        }
        
        .operational-data.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .data-section {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .data-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .data-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .data-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,112,243,0.1);
        }
        
        .data-label {
          font-weight: 500;
          color: #666;
        }
        
        .data-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .comparison-chart {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
          margin-bottom: 6rem;
        }
        
        .comparison-chart.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .comparison-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .comparison-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .comparison-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .comparison-item span:first-child {
          font-weight: 600;
          color: #1a1a1a;
          min-width: 60px;
        }
        
        .comparison-item span:last-child {
          font-size: 0.9rem;
          color: #666;
          min-width: 80px;
        }
        
        .comparison-bar {
          flex: 1;
          background: rgba(0,0,0,0.1);
          height: 20px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        
        .comparison-bar.kpp .bar-fill {
          background: linear-gradient(90deg, #0070f3 0%, #0051cc 100%);
        }
        
        .comparison-bar.solar .bar-fill {
          background: linear-gradient(90deg, #ffd700 0%, #ffb347 100%);
        }
        
        .comparison-bar.wind .bar-fill {
          background: linear-gradient(90deg, #87ceeb 0%, #4682b4 100%);
        }
        
        .comparison-bar.fossil .bar-fill {
          background: linear-gradient(90deg, #8b4513 0%, #654321 100%);
        }
        
        .economic-analysis {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 1s;
          margin-bottom: 6rem;
        }
        
        .economic-analysis.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .economic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .economic-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .economic-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .economic-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .economic-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .economic-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .economic-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .cta-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 1.2s;
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
          
          .output-grid,
          .efficiency-grid,
          .data-grid,
          .comparison-grid,
          .economic-grid {
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