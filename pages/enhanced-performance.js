import Head from 'next/head';
import Link from 'next/link';
import IndustrialNavbar from '../components/IndustrialNavbar';
import IndustrialFooter from '../components/IndustrialFooter';
import { PerformanceChart, MetricsGrid } from '../components/DataVisualization';
import { RealTimeChart } from '../components/AdvancedCharts';

export default function EnhancedPerformance() {
  const performanceMetrics = [
    {
      title: "Total Power Output",
      value: "2.4",
      unit: "GWh",
      change: "+12%",
      trend: "up",
      icon: "⚡",
      description: "Cumulative energy generated this year",
      color: "primary"
    },
    {
      title: "System Uptime",
      value: "99.8",
      unit: "%",
      change: "+0.3%",
      trend: "up",
      icon: "🔄",
      description: "Operational availability",
      color: "success"
    },
    {
      title: "Peak Performance",
      value: "105",
      unit: "kW",
      change: "Record",
      trend: "up",
      icon: "🏆",
      description: "Maximum recorded output",
      color: "warning"
    },
    {
      title: "Carbon Offset",
      value: "1,440",
      unit: "tons CO₂",
      change: "+18%",
      trend: "up",
      icon: "🌱",
      description: "Environmental impact reduction",
      color: "success"
    },
    {
      title: "Revenue Generated",
      value: "€284K",
      unit: "",
      change: "+15%",
      trend: "up",
      icon: "💰",
      description: "Total revenue this year",
      color: "secondary"
    },
    {
      title: "Maintenance Cost",
      value: "€12K",
      unit: "",
      change: "-8%",
      trend: "down",
      icon: "🔧",
      description: "Annual maintenance expenses",
      color: "accent"
    }
  ];

  const historicalData = [
    { label: 'Jan', value: 95 },
    { label: 'Feb', value: 98 },
    { label: 'Mar', value: 92 },
    { label: 'Apr', value: 97 },
    { label: 'May', value: 100 },
    { label: 'Jun', value: 96 },
    { label: 'Jul', value: 99 },
    { label: 'Aug', value: 101 },
    { label: 'Sep', value: 98 },
    { label: 'Oct', value: 103 },
    { label: 'Nov', value: 100 },
    { label: 'Dec', value: 105 }
  ];

  const efficiencyData = [
    { label: 'Q1', value: 94.2 },
    { label: 'Q2', value: 95.1 },
    { label: 'Q3', value: 95.8 },
    { label: 'Q4', value: 96.2 }
  ];

  const realtimeData = [
    { time: '14:00', value: 98.5, timestamp: Date.now() - 3600000 },
    { time: '14:15', value: 99.2, timestamp: Date.now() - 2700000 },
    { time: '14:30', value: 97.8, timestamp: Date.now() - 1800000 },
    { time: '14:45', value: 100.1, timestamp: Date.now() - 900000 },
    { time: '15:00', value: 98.9, timestamp: Date.now() }
  ];

  return (
    <>
      <Head>
        <title>Performance Analytics - KPP Technology | Deep Engineering</title>
        <meta name="description" content="Comprehensive performance analytics and real-time monitoring data for our Kinetic Power Plant installations worldwide." />
        <meta name="keywords" content="KPP performance, energy analytics, power generation data, efficiency metrics, real-time monitoring" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main" className="skip-link">Skip to main content</a>
      
      <IndustrialNavbar />

      <main id="main">
        {/* Hero Section */}
        <section className="section bg-primary text-center">
          <div className="container">
            <h1 className="text-white mb-6">Performance Analytics</h1>
            <p className="text-white mb-8" style={{ opacity: 0.9, fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Comprehensive performance data and analytics from our KPP installations worldwide. 
              Monitor real-time performance, efficiency trends, and environmental impact metrics.
            </p>
            <div className="performance-summary">
              <div className="summary-item">
                <div className="summary-value">15</div>
                <div className="summary-label">Active Installations</div>
              </div>
              <div className="summary-item">
                <div className="summary-value">1.5MW</div>
                <div className="summary-label">Total Capacity</div>
              </div>
              <div className="summary-item">
                <div className="summary-value">99.8%</div>
                <div className="summary-label">Average Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Performance Indicators */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Key Performance Indicators</h2>
              <p className="text-muted">
                Real-time metrics from our global KPP installation network
              </p>
            </div>
            <MetricsGrid metrics={performanceMetrics} />
          </div>
        </section>

        {/* Real-time Monitoring */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Live Performance Monitoring</h2>
              <p className="text-muted">
                Real-time data stream from our flagship 100kW installation
              </p>
            </div>
            
            <div className="monitoring-grid">
              <div className="chart-container">
                <RealTimeChart
                  title="Power Output (kW)"
                  dataPoints={realtimeData}
                  type="line"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Historical Performance */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Historical Performance Trends</h2>
              <p className="text-muted">
                Long-term performance analysis and efficiency improvements
              </p>
            </div>
            
            <div className="charts-grid">
              <div className="chart-item">
                <PerformanceChart
                  title="Monthly Power Output (kW)"
                  data={historicalData}
                  type="line"
                />
              </div>
              
              <div className="chart-item">
                <PerformanceChart
                  title="Quarterly Efficiency (%)"
                  data={efficiencyData}
                  type="bar"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Breakdown */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Detailed Performance Analysis</h2>
            </div>
            
            <div className="grid grid-2 gap-12">
              <div className="analysis-section">
                <h3 className="mb-6">Operational Excellence</h3>
                <div className="metrics-breakdown">
                  <div className="breakdown-item">
                    <div className="breakdown-header">
                      <span className="breakdown-title">Power Factor</span>
                      <span className="breakdown-value">0.95</span>
                    </div>
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '95%' }}></div>
                    </div>
                    <p className="breakdown-description">
                      Excellent power factor indicating efficient reactive power management
                    </p>
                  </div>
                  
                  <div className="breakdown-item">
                    <div className="breakdown-header">
                      <span className="breakdown-title">Grid Stability</span>
                      <span className="breakdown-value">99.2%</span>
                    </div>
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '99.2%' }}></div>
                    </div>
                    <p className="breakdown-description">
                      Outstanding grid stability with minimal frequency variations
                    </p>
                  </div>
                  
                  <div className="breakdown-item">
                    <div className="breakdown-header">
                      <span className="breakdown-title">Load Factor</span>
                      <span className="breakdown-value">87%</span>
                    </div>
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '87%' }}></div>
                    </div>
                    <p className="breakdown-description">
                      High capacity utilization demonstrating consistent power generation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="analysis-section">
                <h3 className="mb-6">Environmental Impact</h3>
                <div className="environmental-metrics">
                  <div className="env-metric">
                    <div className="env-icon">🌍</div>
                    <div className="env-data">
                      <div className="env-title">Carbon Footprint Reduction</div>
                      <div className="env-value">-85%</div>
                      <div className="env-description">
                        Compared to traditional fossil fuel power generation
                      </div>
                    </div>
                  </div>
                  
                  <div className="env-metric">
                    <div className="env-icon">💧</div>
                    <div className="env-data">
                      <div className="env-title">Water Impact</div>
                      <div className="env-value">Zero</div>
                      <div className="env-description">
                        No water consumption or thermal pollution
                      </div>
                    </div>
                  </div>
                  
                  <div className="env-metric">
                    <div className="env-icon">🔊</div>
                    <div className="env-data">
                      <div className="env-title">Noise Level</div>
                      <div className="env-value">&lt; 45dB</div>
                      <div className="env-description">
                        Quiet operation suitable for urban environments
                      </div>
                    </div>
                  </div>
                  
                  <div className="env-metric">
                    <div className="env-icon">🐦</div>
                    <div className="env-data">
                      <div className="env-title">Wildlife Impact</div>
                      <div className="env-value">Minimal</div>
                      <div className="env-description">
                        No negative impact on local wildlife populations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparative Analysis */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Competitive Advantage</h2>
              <p className="text-muted">
                How KPP technology compares to alternative power generation methods
              </p>
            </div>
            
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell metric-header">Performance Metric</div>
                <div className="header-cell">KPP Technology</div>
                <div className="header-cell">Solar PV</div>
                <div className="header-cell">Wind Turbine</div>
                <div className="header-cell">Hydroelectric</div>
              </div>
              
              <div className="table-row">
                <div className="cell metric-cell">Capacity Factor</div>
                <div className="cell best">87%</div>
                <div className="cell">22%</div>
                <div className="cell">35%</div>
                <div className="cell good">45%</div>
              </div>
              
              <div className="table-row">
                <div className="cell metric-cell">Efficiency</div>
                <div className="cell best">95%</div>
                <div className="cell">20%</div>
                <div className="cell">45%</div>
                <div className="cell good">85%</div>
              </div>
              
              <div className="table-row">
                <div className="cell metric-cell">Environmental Impact</div>
                <div className="cell best">Minimal</div>
                <div className="cell good">Low</div>
                <div className="cell">Moderate</div>
                <div className="cell">Moderate</div>
              </div>
              
              <div className="table-row">
                <div className="cell metric-cell">Installation Complexity</div>
                <div className="cell best">Low</div>
                <div className="cell good">Low</div>
                <div className="cell">High</div>
                <div className="cell">Very High</div>
              </div>
              
              <div className="table-row">
                <div className="cell metric-cell">Maintenance Requirements</div>
                <div className="cell best">Minimal</div>
                <div className="cell good">Low</div>
                <div className="cell">High</div>
                <div className="cell">Moderate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-primary text-center">
          <div className="container">
            <h2 className="text-white mb-6">Experience KPP Performance Excellence</h2>
            <p className="text-white mb-8" style={{ opacity: 0.9 }}>
              Ready to achieve similar performance results at your facility? 
              Contact our team for a detailed performance analysis and ROI calculation.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                📊 Request Analysis
              </Link>
              <Link href="/technology" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                🔧 Learn Technology
              </Link>
            </div>
          </div>
        </section>
      </main>

      <IndustrialFooter />

      <style jsx>{`
        .performance-summary {
          display: flex;
          justify-content: center;
          gap: var(--space-12);
          margin-top: var(--space-8);
        }

        .summary-item {
          text-align: center;
          color: white;
        }

        .summary-value {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--energy-orange);
          text-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
          margin-bottom: var(--space-2);
        }

        .summary-label {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .monitoring-grid {
          display: grid;
          gap: var(--space-8);
        }

        .chart-container {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-lg);
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: var(--space-8);
        }

        .chart-item {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
        }

        .analysis-section h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-blue);
        }

        .metrics-breakdown {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .breakdown-item {
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--neutral-200);
        }

        .breakdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
        }

        .breakdown-title {
          font-weight: 600;
          color: var(--neutral-700);
        }

        .breakdown-value {
          font-weight: 700;
          font-family: var(--font-mono);
          color: var(--primary-blue);
          font-size: 1.1rem;
        }

        .breakdown-bar {
          height: 8px;
          background: var(--neutral-200);
          border-radius: 4px;
          margin-bottom: var(--space-3);
          overflow: hidden;
        }

        .breakdown-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-blue), var(--energy-orange));
          border-radius: 4px;
          transition: width var(--transition-slow);
        }

        .breakdown-description {
          font-size: 0.875rem;
          color: var(--neutral-600);
          margin: 0;
        }

        .environmental-metrics {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .env-metric {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--neutral-200);
        }

        .env-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--neutral-100);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .env-data {
          flex: 1;
        }

        .env-title {
          font-weight: 600;
          color: var(--neutral-700);
          margin-bottom: var(--space-1);
        }

        .env-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-blue);
          font-family: var(--font-mono);
          margin-bottom: var(--space-2);
        }

        .env-description {
          font-size: 0.875rem;
          color: var(--neutral-600);
        }

        .comparison-table {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          border: 1px solid var(--neutral-200);
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr repeat(4, 120px);
          background: var(--primary-blue);
          color: white;
        }

        .header-cell {
          padding: var(--space-4);
          font-weight: 600;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        .metric-header {
          text-align: left !important;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr repeat(4, 120px);
          border-bottom: 1px solid var(--neutral-200);
        }

        .table-row:hover {
          background: var(--neutral-50);
        }

        .cell {
          padding: var(--space-4);
          border-right: 1px solid var(--neutral-200);
          text-align: center;
          font-weight: 500;
        }

        .metric-cell {
          text-align: left !important;
          font-weight: 600;
          color: var(--neutral-700);
        }

        .cell.best {
          background: var(--success);
          color: white;
          font-weight: 600;
        }

        .cell.good {
          background: var(--tech-teal);
          color: white;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .performance-summary {
            flex-direction: column;
            gap: var(--space-6);
          }

          .charts-grid {
            grid-template-columns: 1fr;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
          }

          .header-cell,
          .cell {
            text-align: left !important;
            border-bottom: 1px solid var(--neutral-200);
            border-right: none;
          }
        }

        @media (max-width: 768px) {
          .grid.grid-2 {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .env-metric {
            flex-direction: column;
            text-align: center;
          }

          .env-icon {
            align-self: center;
          }

          .comparison-table {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}
