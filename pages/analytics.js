import { useState } from 'react';
import NavBar from '../components/NavBar';
import WebGL3DVisualization from '../components/WebGL3D';
import AIPredictiveAnalytics from '../components/AIPredictive';
import IoTRealTimeIntegration from '../components/IoTRealTime';
import AdvancedAnalyticsDashboard from '../components/AdvancedDashboard';

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: '📊 Analytics Dashboard', icon: '📊' },
    { id: 'webgl', label: '🌐 3D Visualization', icon: '🌐' },
    { id: 'ai', label: '🤖 AI Predictions', icon: '🤖' },
    { id: 'iot', label: '📡 IoT Integration', icon: '📡' }
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdvancedAnalyticsDashboard />;
      case 'webgl':
        return (
          <div className="webgl-section">
            <div className="section-header">
              <h2>🌐 Advanced 3D Visualization</h2>
              <p>Interactive WebGL-powered 3D models of KPP systems</p>
            </div>
            <div className="visualization-grid">
              <div className="visualization-card">
                <h3>KPP System Overview</h3>
                <WebGL3DVisualization type="kpp-system" width={800} height={600} />
              </div>
              <div className="visualization-card">
                <h3>Turbine Detail View</h3>
                <WebGL3DVisualization type="turbine" width={800} height={600} />
              </div>
            </div>
          </div>
        );
      case 'ai':
        return <AIPredictiveAnalytics />;
      case 'iot':
        return <IoTRealTimeIntegration />;
      default:
        return <AdvancedAnalyticsDashboard />;
    }
  };

  return (
    <div className="analytics-page">
      <NavBar />
      
      <main className="analytics-main">
        {/* Hero Section */}
        <section className="analytics-hero">
          <div className="hero-content">
            <h1>🚀 Advanced Analytics & Monitoring</h1>
            <p>
              Next-generation industrial monitoring powered by AI, IoT, and WebGL 3D visualization.
              Real-time insights, predictive analytics, and immersive 3D system visualization.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-value">2.8 MW</div>
                <div className="stat-label">Current Output</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <div className="stat-value">94.7%</div>
                <div className="stat-label">AI Accuracy</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌐</div>
              <div className="stat-content">
                <div className="stat-value">15</div>
                <div className="stat-label">IoT Sensors</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔮</div>
              <div className="stat-content">
                <div className="stat-value">7 Days</div>
                <div className="stat-label">Forecast Range</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="analytics-navigation">
          <div className="nav-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Content Area */}
        <section className="analytics-content">
          {renderActiveContent()}
        </section>

        {/* Features Overview */}
        <section className="features-overview">
          <div className="features-header">
            <h2>🎯 Advanced Monitoring Features</h2>
            <p>Cutting-edge technology for comprehensive industrial monitoring</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Predictions</h3>
              <p>Machine learning algorithms analyze historical data to predict maintenance needs, performance optimization opportunities, and potential issues before they occur.</p>
              <ul>
                <li>Predictive maintenance scheduling</li>
                <li>Performance optimization recommendations</li>
                <li>Anomaly detection and alerts</li>
                <li>Weather correlation analysis</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>WebGL 3D Visualization</h3>
              <p>Interactive 3D models powered by WebGL technology provide immersive visualization of KPP systems with real-time data overlay and interactive controls.</p>
              <ul>
                <li>Real-time 3D system models</li>
                <li>Interactive camera controls</li>
                <li>PBR lighting and materials</li>
                <li>Performance monitoring overlay</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3>IoT Real-Time Integration</h3>
              <p>Seamless integration with IoT sensors provides continuous monitoring of critical parameters with instant alerting and data streaming capabilities.</p>
              <ul>
                <li>15+ sensor types supported</li>
                <li>Real-time data streaming</li>
                <li>Instant alert notifications</li>
                <li>Device health monitoring</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics Dashboard</h3>
              <p>Comprehensive analytics dashboard with KPIs, benchmarking, financial metrics, and environmental impact tracking for complete operational oversight.</p>
              <ul>
                <li>Real-time KPI tracking</li>
                <li>Industry benchmarking</li>
                <li>Financial performance metrics</li>
                <li>Environmental impact analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="technology-stack">
          <div className="stack-header">
            <h2>⚙️ Technology Stack</h2>
            <p>Built with cutting-edge web technologies for maximum performance</p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend Technologies</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <span className="tech-icon">⚛️</span>
                  <span className="tech-name">React 18</span>
                  <span className="tech-desc">Component-based UI</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🌐</span>
                  <span className="tech-name">WebGL 2.0</span>
                  <span className="tech-desc">Hardware-accelerated 3D</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🎨</span>
                  <span className="tech-name">Canvas API</span>
                  <span className="tech-desc">Real-time charts</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>AI & Analytics</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <span className="tech-icon">🧠</span>
                  <span className="tech-name">Machine Learning</span>
                  <span className="tech-desc">Predictive algorithms</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">📈</span>
                  <span className="tech-name">Statistical Analysis</span>
                  <span className="tech-desc">Performance metrics</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔮</span>
                  <span className="tech-name">Forecasting</span>
                  <span className="tech-desc">Future predictions</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>IoT & Communication</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <span className="tech-icon">📡</span>
                  <span className="tech-name">WebSocket</span>
                  <span className="tech-desc">Real-time data</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔗</span>
                  <span className="tech-name">MQTT Protocol</span>
                  <span className="tech-desc">IoT messaging</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">⚡</span>
                  <span className="tech-name">Edge Computing</span>
                  <span className="tech-desc">Local processing</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Performance & Security</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <span className="tech-icon">🚀</span>
                  <span className="tech-name">Next.js 15</span>
                  <span className="tech-desc">Optimized framework</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔒</span>
                  <span className="tech-name">TLS/SSL</span>
                  <span className="tech-desc">Secure communication</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">📊</span>
                  <span className="tech-name">Performance Monitoring</span>
                  <span className="tech-desc">Real-time metrics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .analytics-page {
          min-height: 100vh;
          background: var(--surface-base);
        }

        .analytics-main {
          padding-top: 80px;
        }

        /* Hero Section */
        .analytics-hero {
          background: linear-gradient(
            135deg,
            var(--surface-elevated) 0%,
            var(--surface-base) 100%
          );
          padding: var(--space-12) var(--space-6);
          margin-bottom: var(--space-8);
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--energy-orange), var(--energy-blue));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--space-6);
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-4);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .stat-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--energy-orange);
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Navigation */
        .analytics-navigation {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          margin-bottom: var(--space-8);
        }

        .nav-tabs {
          display: flex;
          gap: var(--space-2);
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-3);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
          overflow-x: auto;
        }

        .nav-tab {
          background: transparent;
          border: none;
          border-radius: var(--radius-lg);
          padding: var(--space-4) var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-3);
          cursor: pointer;
          transition: all var(--transition-base);
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
          min-width: fit-content;
        }

        .nav-tab:hover {
          background: rgba(255, 107, 53, 0.1);
          color: var(--energy-orange);
        }

        .nav-tab.active {
          background: var(--energy-orange);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .tab-icon {
          font-size: 1.2rem;
        }

        .tab-label {
          font-size: 0.95rem;
        }

        /* Content */
        .analytics-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          margin-bottom: var(--space-12);
        }

        /* WebGL Section */
        .webgl-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .visualization-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
          gap: var(--space-6);
        }

        .visualization-card {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-subtle);
        }

        .visualization-card h3 {
          margin: 0 0 var(--space-4) 0;
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
        }

        /* Features Overview */
        .features-overview {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        .features-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .features-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
        }

        .features-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .feature-card {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: var(--space-4);
          display: block;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
        }

        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--space-4);
        }

        .feature-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-card li {
          padding: var(--space-2) 0;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .feature-card li::before {
          content: '✓';
          color: var(--status-success);
          font-weight: bold;
          flex-shrink: 0;
        }

        /* Technology Stack */
        .technology-stack {
          background: var(--surface-elevated);
          padding: var(--space-12) var(--space-6);
          margin-top: var(--space-12);
        }

        .stack-header {
          text-align: center;
          margin-bottom: var(--space-10);
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .stack-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
        }

        .stack-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
          max-width: 1200px;
          margin: 0 auto;
        }

        .tech-category {
          background: var(--surface-base);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
        }

        .tech-category h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
          text-align: center;
        }

        .tech-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          background: var(--surface-elevated);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
        }

        .tech-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .tech-name {
          font-weight: 600;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .tech-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-left: auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .nav-tabs {
            flex-direction: column;
          }

          .nav-tab {
            justify-content: center;
          }

          .visualization-grid {
            grid-template-columns: 1fr;
          }

          .features-grid,
          .tech-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            flex-direction: column;
            text-align: center;
          }

          .tech-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-2);
          }

          .tech-desc {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
