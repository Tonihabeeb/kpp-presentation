import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Economics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="economics-page">
      <div className="eco-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Economics & ROI Analysis</h1>
            <p className="hero-subtitle">
              Comprehensive financial analysis of KPP technology investment, 
              including cost comparisons, return on investment, and long-term economic benefits
            </p>
          </div>
        </div>
      </div>

      <div className="eco-content">
        <div className="content-container">
          <div className={`cost-comparison ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Cost Comparison Analysis</h2>
            <div className="comparison-grid">
              <div className="comparison-card kpp-card">
                <div className="card-header">
                  <div className="card-icon">⚡</div>
                  <h3>KPP Technology</h3>
                  <div className="card-badge">Recommended</div>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span className="cost-label">Initial Investment:</span>
                    <span className="cost-value">$2,000 - $4,000/kW</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Operating Cost:</span>
                    <span className="cost-value">$0.02 - $0.04/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Maintenance Cost:</span>
                    <span className="cost-value">$0.005 - $0.015/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Fuel Cost:</span>
                    <span className="cost-value">$0.00/kWh</span>
                  </div>
                  <div className="cost-item total">
                    <span className="cost-label">Total LCOE:</span>
                    <span className="cost-value">$0.025 - $0.055/kWh</span>
                  </div>
                </div>
                <div className="card-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    <li>Zero fuel costs</li>
                    <li>Minimal maintenance</li>
                    <li>24/7 operation</li>
                    <li>No emissions</li>
                    <li>Long lifespan (25+ years)</li>
                  </ul>
                </div>
              </div>

              <div className="comparison-card traditional-card">
                <div className="card-header">
                  <div className="card-icon">🏭</div>
                  <h3>Traditional Power</h3>
                  <div className="card-badge">Conventional</div>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span className="cost-label">Initial Investment:</span>
                    <span className="cost-value">$1,500 - $3,000/kW</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Operating Cost:</span>
                    <span className="cost-value">$0.05 - $0.12/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Maintenance Cost:</span>
                    <span className="cost-value">$0.01 - $0.03/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Fuel Cost:</span>
                    <span className="cost-value">$0.04 - $0.10/kWh</span>
                  </div>
                  <div className="cost-item total">
                    <span className="cost-label">Total LCOE:</span>
                    <span className="cost-value">$0.06 - $0.15/kWh</span>
                  </div>
                </div>
                <div className="card-benefits">
                  <h4>Key Challenges:</h4>
                  <ul>
                    <li>High fuel costs</li>
                    <li>Regular maintenance</li>
                    <li>Emissions & pollution</li>
                    <li>Fuel price volatility</li>
                    <li>Limited lifespan (15-20 years)</li>
                  </ul>
                </div>
              </div>

              <div className="comparison-card renewable-card">
                <div className="card-header">
                  <div className="card-icon">🌞</div>
                  <h3>Solar/Wind</h3>
                  <div className="card-badge">Intermittent</div>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span className="cost-label">Initial Investment:</span>
                    <span className="cost-value">$1,000 - $2,500/kW</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Operating Cost:</span>
                    <span className="cost-value">$0.01 - $0.03/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Maintenance Cost:</span>
                    <span className="cost-value">$0.005 - $0.02/kWh</span>
                  </div>
                  <div className="cost-item">
                    <span className="cost-label">Storage Cost:</span>
                    <span className="cost-value">$0.05 - $0.15/kWh</span>
                  </div>
                  <div className="cost-item total">
                    <span className="cost-label">Total LCOE:</span>
                    <span className="cost-value">$0.065 - $0.20/kWh</span>
                  </div>
                </div>
                <div className="card-benefits">
                  <h4>Key Challenges:</h4>
                  <ul>
                    <li>Intermittent generation</li>
                    <li>Storage requirements</li>
                    <li>Weather dependent</li>
                    <li>Large land footprint</li>
                    <li>Grid integration costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`roi-analysis ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Return on Investment Analysis</h2>
            <div className="roi-grid">
              <div className="roi-scenario">
                <div className="scenario-header">
                  <h3>🏠 Small Scale (100KW)</h3>
                  <div className="scenario-badge">Residential/Commercial</div>
                </div>
                <div className="roi-details">
                  <div className="roi-item">
                    <span className="roi-label">Initial Investment:</span>
                    <span className="roi-value">$300,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Energy Production:</span>
                    <span className="roi-value">876,000 kWh</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Revenue (at $0.12/kWh):</span>
                    <span className="roi-value">$105,120</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Operating Cost:</span>
                    <span className="roi-value">$8,760</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Net Revenue:</span>
                    <span className="roi-value">$96,360</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Payback Period:</span>
                    <span className="roi-value">3.1 years</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">25-Year ROI:</span>
                    <span className="roi-value">703%</span>
                  </div>
                </div>
              </div>

              <div className="roi-scenario">
                <div className="scenario-header">
                  <h3>🏢 Medium Scale (1MW)</h3>
                  <div className="scenario-badge">Commercial/Industrial</div>
                </div>
                <div className="roi-details">
                  <div className="roi-item">
                    <span className="roi-label">Initial Investment:</span>
                    <span className="roi-value">$2,500,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Energy Production:</span>
                    <span className="roi-value">8,760,000 kWh</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Revenue (at $0.10/kWh):</span>
                    <span className="roi-value">$876,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Operating Cost:</span>
                    <span className="roi-value">$87,600</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Net Revenue:</span>
                    <span className="roi-value">$788,400</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Payback Period:</span>
                    <span className="roi-value">3.2 years</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">25-Year ROI:</span>
                    <span className="roi-value">688%</span>
                  </div>
                </div>
              </div>

              <div className="roi-scenario">
                <div className="scenario-header">
                  <h3>🏭 Large Scale (10MW)</h3>
                  <div className="scenario-badge">Utility/Industrial</div>
                </div>
                <div className="roi-details">
                  <div className="roi-item">
                    <span className="roi-label">Initial Investment:</span>
                    <span className="roi-value">$25,000,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Energy Production:</span>
                    <span className="roi-value">87,600,000 kWh</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Revenue (at $0.08/kWh):</span>
                    <span className="roi-value">$7,008,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Operating Cost:</span>
                    <span className="roi-value">$876,000</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Annual Net Revenue:</span>
                    <span className="roi-value">$6,132,000</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Payback Period:</span>
                    <span className="roi-value">4.1 years</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">25-Year ROI:</span>
                    <span className="roi-value">513%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`financial-benefits ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Financial Benefits & Incentives</h2>
            <div className="benefits-grid">
              <div className="benefit-category">
                <h3>💰 Direct Financial Benefits</h3>
                <div className="benefit-list">
                  <div className="benefit-item">
                    <h4>Energy Cost Savings</h4>
                    <p>Immediate reduction in electricity bills by 60-80% compared to grid power</p>
                    <div className="benefit-stats">
                      <span>Savings: $0.05-0.10/kWh</span>
                      <span>Annual: $43,800-87,600 (1MW)</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Revenue Generation</h4>
                    <p>Excess power can be sold back to the grid or to neighboring facilities</p>
                    <div className="benefit-stats">
                      <span>Additional Revenue: 10-30%</span>
                      <span>Grid Credits Available</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Maintenance Cost Reduction</h4>
                    <p>Minimal maintenance requirements compared to traditional power systems</p>
                    <div className="benefit-stats">
                      <span>Savings: 70-80%</span>
                      <span>Annual: $15,000-50,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="benefit-category">
                <h3>🏛️ Government Incentives</h3>
                <div className="benefit-list">
                  <div className="benefit-item">
                    <h4>Renewable Energy Credits</h4>
                    <p>Eligible for RECs and carbon credits in many jurisdictions</p>
                    <div className="benefit-stats">
                      <span>REC Value: $0.01-0.05/kWh</span>
                      <span>Carbon Credits: $20-50/ton</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Tax Incentives</h4>
                    <p>Investment tax credits and accelerated depreciation benefits</p>
                    <div className="benefit-stats">
                      <span>ITC: 26-30% of investment</span>
                      <span>Depreciation: 5-year MACRS</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Grants & Subsidies</h4>
                    <p>Available government grants for clean energy projects</p>
                    <div className="benefit-stats">
                      <span>Federal Grants: Up to 50%</span>
                      <span>State Programs: Varies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="benefit-category">
                <h3>📈 Long-term Value</h3>
                <div className="benefit-list">
                  <div className="benefit-item">
                    <h4>Property Value Increase</h4>
                    <p>Properties with KPP systems show increased market value</p>
                    <div className="benefit-stats">
                      <span>Value Increase: 10-25%</span>
                      <span>ROI Multiplier Effect</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Energy Independence</h4>
                    <p>Protection against rising energy costs and grid instability</p>
                    <div className="benefit-stats">
                      <span>Cost Stability: 25+ years</span>
                      <span>Grid Independence</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <h4>Corporate Sustainability</h4>
                    <p>Enhanced brand value and ESG compliance benefits</p>
                    <div className="benefit-stats">
                      <span>ESG Score: +15-30%</span>
                      <span>Brand Value: +5-15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`investment-scenarios ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Investment Scenarios & Financing</h2>
            <div className="scenarios-grid">
              <div className="scenario-card">
                <h3>💳 Direct Purchase</h3>
                <p>Full ownership with maximum financial benefits and complete control over the system.</p>
                <div className="scenario-details">
                  <div className="detail-item">
                    <span className="detail-label">Upfront Cost:</span>
                    <span className="detail-value">100% of investment</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Ownership:</span>
                    <span className="detail-value">Full ownership</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ROI Period:</span>
                    <span className="detail-value">3-5 years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-value">Best for: Cash-rich companies</span>
                  </div>
                </div>
              </div>

              <div className="scenario-card">
                <h3>🏦 Equipment Financing</h3>
                <p>Spread the cost over time with equipment financing while maintaining ownership benefits.</p>
                <div className="scenario-details">
                  <div className="detail-item">
                    <span className="detail-label">Upfront Cost:</span>
                    <span className="detail-value">10-20% down payment</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Term:</span>
                    <span className="detail-value">5-10 years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Interest Rate:</span>
                    <span className="detail-value">4-8% APR</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-value">Best for: Growing businesses</span>
                  </div>
                </div>
              </div>

              <div className="scenario-card">
                <h3>🤝 Power Purchase Agreement</h3>
                <p>Third-party ownership with guaranteed energy rates and no upfront capital required.</p>
                <div className="scenario-details">
                  <div className="detail-item">
                    <span className="detail-label">Upfront Cost:</span>
                    <span className="detail-value">$0</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Energy Rate:</span>
                    <span className="detail-value">$0.06-0.10/kWh</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Contract Term:</span>
                    <span className="detail-value">15-25 years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-value">Best for: Capital-constrained organizations</span>
                  </div>
                </div>
              </div>

              <div className="scenario-card">
                <h3>🏢 Lease-to-Own</h3>
                <p>Flexible leasing arrangement with option to purchase at the end of the lease term.</p>
                <div className="scenario-details">
                  <div className="detail-item">
                    <span className="detail-label">Upfront Cost:</span>
                    <span className="detail-value">$0-10%</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Monthly Payment:</span>
                    <span className="detail-value">Based on system size</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Lease Term:</span>
                    <span className="detail-value">5-15 years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-value">Best for: Organizations wanting flexibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to Calculate Your ROI?</h2>
              <p>Get a personalized financial analysis for your specific project requirements and location.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  <span>Get Custom Quote</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/applications" className="btn btn-secondary">
                  <span>View Applications</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .economics-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .economics-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,112,243,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .eco-hero {
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
        
        .eco-content {
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .cost-comparison {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
          margin-bottom: 6rem;
        }
        
        .cost-comparison.animate-in {
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
        
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .comparison-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .comparison-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .kpp-card {
          border: 2px solid #0070f3;
        }
        
        .traditional-card {
          border: 2px solid #dc3545;
        }
        
        .renewable-card {
          border: 2px solid #28a745;
        }
        
        .card-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .card-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .card-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .kpp-card .card-badge {
          background: #0070f3;
          color: white;
        }
        
        .traditional-card .card-badge {
          background: #dc3545;
          color: white;
        }
        
        .renewable-card .card-badge {
          background: #28a745;
          color: white;
        }
        
        .cost-breakdown {
          margin-bottom: 2rem;
        }
        
        .cost-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .cost-item.total {
          border-top: 2px solid #0070f3;
          border-bottom: none;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 1rem;
          padding-top: 1rem;
        }
        
        .cost-label {
          font-weight: 500;
          color: #666;
        }
        
        .cost-value {
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .kpp-card .cost-value {
          color: #0070f3;
        }
        
        .traditional-card .cost-value {
          color: #dc3545;
        }
        
        .renewable-card .cost-value {
          color: #28a745;
        }
        
        .card-benefits h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .card-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .card-benefits li {
          padding: 0.3rem 0;
          color: #666;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .kpp-card .card-benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .traditional-card .card-benefits li:before,
        .renewable-card .card-benefits li:before {
          content: "⚠";
          position: absolute;
          left: 0;
          color: #dc3545;
          font-weight: bold;
        }
        
        .roi-analysis {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
          margin-bottom: 6rem;
        }
        
        .roi-analysis.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .roi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .roi-scenario {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .roi-scenario:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .scenario-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .scenario-header h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .scenario-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          background: #0070f3;
          color: white;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .roi-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .roi-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .roi-item.highlight {
          border-top: 2px solid #0070f3;
          border-bottom: none;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 1rem;
          padding-top: 1rem;
        }
        
        .roi-label {
          font-weight: 500;
          color: #666;
        }
        
        .roi-value {
          font-weight: 600;
          color: #0070f3;
        }
        
        .financial-benefits {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
          margin-bottom: 6rem;
        }
        
        .financial-benefits.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .benefit-category {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .benefit-category h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .benefit-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .benefit-item {
          padding: 1.5rem;
          background: rgba(255,255,255,0.8);
          border-radius: 12px;
          border-left: 4px solid #0070f3;
        }
        
        .benefit-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .benefit-item p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
        }
        
        .benefit-stats {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        
        .benefit-stats span {
          font-size: 0.9rem;
          color: #0070f3;
          font-weight: 500;
        }
        
        .investment-scenarios {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
          margin-bottom: 6rem;
        }
        
        .investment-scenarios.animate-in {
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
        
        .scenario-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .detail-label {
          font-weight: 500;
          color: #666;
        }
        
        .detail-value {
          font-weight: 600;
          color: #0070f3;
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
          
          .comparison-grid,
          .roi-grid,
          .benefits-grid,
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