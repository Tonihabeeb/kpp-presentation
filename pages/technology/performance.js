import Head from 'next/head';

export default function Performance() {
  return (
    <div className="performance-page">
      <Head>
        <title>Performance Data - KPP Technology | Deep Engineering Co.</title>
        <meta name="description" content="Real-world performance data and analysis for KPP technology including efficiency metrics, operational results, and case studies." />
      </Head>

      <div className="page-hero">
        <div className="hero-content">
          <div className="hero-logo-section">
            <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="hero-logo" />
          </div>
          <h1>KPP Performance Metrics</h1>
          <p>Real-world performance data and efficiency analysis of our Kinetic Power Plant technology</p>
        </div>
      </div>

      <div className="page-content">
        <div className="performance-container">
          <div className="performance-overview">
            <h2>Proven Performance Across Global Installations</h2>
            <p>Comprehensive data from operational KPP systems demonstrating reliability, efficiency, and economic viability</p>
          </div>

          <div className="performance-metrics">
            <h3>Key Performance Indicators</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">⚡</div>
                <div className="metric-value">99.5%</div>
                <div className="metric-label">System Uptime</div>
                <div className="metric-description">Continuous operation with minimal downtime</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">💰</div>
                <div className="metric-value">85-90%</div>
                <div className="metric-label">System Efficiency</div>
                <div className="metric-description">Net power output efficiency</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🌱</div>
                <div className="metric-value">0</div>
                <div className="metric-label">CO2 Emissions</div>
                <div className="metric-description">Zero emissions during operation</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🔧</div>
                <div className="metric-value">1%</div>
                <div className="metric-label">Auxiliary Power</div>
                <div className="metric-description">Air compression power consumption</div>
              </div>
            </div>
          </div>

          <div className="operational-data">
            <h3>Operational Data Analysis</h3>
            <div className="data-grid">
              <div className="data-section">
                <h4>Thailand 100KW Demo Unit</h4>
                <div className="data-table">
                  <div className="data-row">
                    <span className="data-label">Operating Period</span>
                    <span className="data-value">Nov 2020 - May 2021</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Total Runtime</span>
                    <span className="data-value">4,320 hours</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Average Output</span>
                    <span className="data-value">95.2 KW</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Peak Output</span>
                    <span className="data-value">102.3 KW</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">System Availability</span>
                    <span className="data-value">99.7%</span>
                  </div>
                </div>
              </div>

              <div className="data-section">
                <h4>Thailand 500KW Demo Unit</h4>
                <div className="data-table">
                  <div className="data-row">
                    <span className="data-label">Operating Period</span>
                    <span className="data-value">Jan 2021 - Present</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Total Runtime</span>
                    <span className="data-value">18,240 hours</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Average Output</span>
                    <span className="data-value">472.8 KW</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Peak Output</span>
                    <span className="data-value">498.5 KW</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">System Availability</span>
                    <span className="data-value">99.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="efficiency-analysis">
            <h3>Efficiency Analysis</h3>
            <div className="efficiency-grid">
              <div className="efficiency-item">
                <h4>Power Generation Efficiency</h4>
                <div className="efficiency-chart">
                  <div className="chart-bar">
                    <div className="bar-fill" style={{width: '88%'}}></div>
                    <span className="bar-label">88%</span>
                  </div>
                  <p>Net power output efficiency including all system losses</p>
                </div>
              </div>
              <div className="efficiency-item">
                <h4>Auxiliary Power Consumption</h4>
                <div className="efficiency-chart">
                  <div className="chart-bar">
                    <div className="bar-fill secondary" style={{width: '12%'}}></div>
                    <span className="bar-label">12%</span>
                  </div>
                  <p>Power consumed by air compression and control systems</p>
                </div>
              </div>
              <div className="efficiency-item">
                <h4>Overall System Efficiency</h4>
                <div className="efficiency-chart">
                  <div className="chart-bar">
                    <div className="bar-fill success" style={{width: '76%'}}></div>
                    <span className="bar-label">76%</span>
                  </div>
                  <p>Net efficiency after auxiliary power consumption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="economic-performance">
            <h3>Economic Performance</h3>
            <div className="economic-grid">
              <div className="economic-card">
                <h4>Cost Analysis</h4>
                <ul>
                  <li><strong>Capital Cost:</strong> $1,200-1,800/kW</li>
                  <li><strong>Operating Cost:</strong> $0.005/kWh</li>
                  <li><strong>Maintenance Cost:</strong> $0.015/kWh</li>
                  <li><strong>Levelized Cost:</strong> $0.08-0.12/kWh</li>
                </ul>
              </div>
              <div className="economic-card">
                <h4>ROI Analysis</h4>
                <ul>
                  <li><strong>Payback Period:</strong> 3-5 years</li>
                  <li><strong>Internal Rate of Return:</strong> 15-25%</li>
                  <li><strong>Net Present Value:</strong> Positive at 8% discount</li>
                  <li><strong>Project Lifetime:</strong> 25+ years</li>
                </ul>
              </div>
              <div className="economic-card">
                <h4>Comparative Analysis</h4>
                <ul>
                  <li><strong>vs. Solar PV:</strong> 24/7 operation advantage</li>
                  <li><strong>vs. Wind:</strong> Predictable output</li>
                  <li><strong>vs. Diesel:</strong> Zero fuel costs</li>
                  <li><strong>vs. Grid:</strong> Energy independence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="reliability-data">
            <h3>Reliability & Maintenance</h3>
            <div className="reliability-grid">
              <div className="reliability-item">
                <h4>System Reliability</h4>
                <div className="reliability-stats">
                  <div className="stat">
                    <span className="stat-value">99.5%</span>
                    <span className="stat-label">Availability</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">2.4</span>
                    <span className="stat-label">MTBF (years)</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">4.2</span>
                    <span className="stat-label">MTTR (hours)</span>
                  </div>
                </div>
              </div>
              <div className="reliability-item">
                <h4>Maintenance Schedule</h4>
                <div className="maintenance-schedule">
                  <div className="schedule-item">
                    <span className="schedule-period">Monthly</span>
                    <span className="schedule-task">Visual inspection, data review</span>
                  </div>
                  <div className="schedule-item">
                    <span className="schedule-period">Quarterly</span>
                    <span className="schedule-task">System calibration, filter replacement</span>
                  </div>
                  <div className="schedule-item">
                    <span className="schedule-period">Annually</span>
                    <span className="schedule-task">Comprehensive maintenance, component inspection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .performance-page {
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
        
        .performance-overview {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .performance-overview h2 {
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .performance-overview p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }
        
        .performance-metrics {
          margin-bottom: 4rem;
        }
        
        .performance-metrics h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .metric-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-5px);
        }
        
        .metric-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .metric-description {
          color: #666;
          font-size: 0.9rem;
        }
        
        .operational-data {
          margin-bottom: 4rem;
        }
        
        .operational-data h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .data-section {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .data-section h4 {
          font-size: 1.5rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
          border-bottom: 2px solid #0070f3;
          padding-bottom: 0.5rem;
        }
        
        .data-table {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .data-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .data-row:last-child {
          border-bottom: none;
        }
        
        .data-label {
          font-weight: 500;
          color: #666;
        }
        
        .data-value {
          font-weight: 600;
          color: #1a1a1a;
          background: rgba(0,112,243,0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .efficiency-analysis {
          margin-bottom: 4rem;
        }
        
        .efficiency-analysis h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .efficiency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .efficiency-item {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .efficiency-item h4 {
          font-size: 1.3rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .efficiency-chart {
          margin-bottom: 1rem;
        }
        
        .chart-bar {
          height: 40px;
          background: #f0f0f0;
          border-radius: 20px;
          position: relative;
          margin-bottom: 0.5rem;
          overflow: hidden;
        }
        
        .bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          border-radius: 20px;
          transition: width 1s ease;
        }
        
        .bar-fill.secondary {
          background: linear-gradient(135deg, #ff8800 0%, #ffaa00 100%);
        }
        
        .bar-fill.success {
          background: linear-gradient(135deg, #00aa00 0%, #00cc00 100%);
        }
        
        .bar-label {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .efficiency-chart p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .economic-performance {
          margin-bottom: 4rem;
        }
        
        .economic-performance h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .economic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .economic-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .economic-card h4 {
          font-size: 1.3rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
          border-left: 4px solid #0070f3;
          padding-left: 1rem;
        }
        
        .economic-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .economic-card li {
          padding: 0.5rem 0;
          color: #666;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .economic-card li:last-child {
          border-bottom: none;
        }
        
        .reliability-data h3 {
          font-size: 2rem;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .reliability-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .reliability-item {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .reliability-item h4 {
          font-size: 1.3rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .reliability-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .stat {
          text-align: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #666;
        }
        
        .maintenance-schedule {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .schedule-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .schedule-period {
          font-weight: 600;
          color: #0070f3;
          background: rgba(0,112,243,0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .schedule-task {
          color: #666;
          font-size: 0.9rem;
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
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content p {
            font-size: 1.1rem;
          }
          
          .performance-overview h2 {
            font-size: 2rem;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .data-grid {
            grid-template-columns: 1fr;
          }
          
          .efficiency-grid {
            grid-template-columns: 1fr;
          }
          
          .economic-grid {
            grid-template-columns: 1fr;
          }
          
          .reliability-grid {
            grid-template-columns: 1fr;
          }
          
          .reliability-stats {
            grid-template-columns: 1fr;
          }
          
          .schedule-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
} 