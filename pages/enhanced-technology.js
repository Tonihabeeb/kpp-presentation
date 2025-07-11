import Head from 'next/head';
import Link from 'next/link';
import IndustrialNavbar from '../components/IndustrialNavbar';
import IndustrialFooter from '../components/IndustrialFooter';
import { Interactive3DElement, TechnicalSchematic } from '../components/Interactive3D';
import { SystemMonitor } from '../components/AdvancedCharts';
import { DataCard } from '../components/DataVisualization';

export default function EnhancedTechnology() {
  const technicalSpecs = [
    {
      title: "Power Generation",
      value: "100",
      unit: "kW",
      change: "Continuous",
      trend: "up",
      icon: "⚡",
      description: "Sustained power output capacity",
      color: "primary"
    },
    {
      title: "Rotational Speed",
      value: "1800",
      unit: "RPM",
      change: "Optimal",
      trend: "neutral",
      icon: "🔄",
      description: "Generator operational speed",
      color: "accent"
    },
    {
      title: "Efficiency Rating",
      value: "95.2",
      unit: "%",
      change: "+2.1%",
      trend: "up",
      icon: "📊",
      description: "Energy conversion efficiency",
      color: "success"
    },
    {
      title: "Operating Temperature",
      value: "45",
      unit: "°C",
      change: "Normal",
      trend: "neutral",
      icon: "🌡️",
      description: "System operating temperature",
      color: "warning"
    }
  ];

  const schematicComponents = [
    {
      x: '10%',
      y: '20%',
      width: '120px',
      height: '80px',
      type: 'input',
      icon: '🌊',
      label: 'Kinetic Input',
      specs: '100 kW',
      description: 'Primary kinetic energy input system utilizing flowing water to generate rotational force',
      detailedSpecs: [
        { label: 'Flow Rate', value: '500 L/s' },
        { label: 'Pressure', value: '2.5 bar' },
        { label: 'Velocity', value: '3.2 m/s' }
      ]
    },
    {
      x: '40%',
      y: '15%',
      width: '120px',
      height: '80px',
      type: 'process',
      icon: '⚙️',
      label: 'Turbine Assembly',
      specs: '1800 RPM',
      description: 'High-efficiency turbine system for kinetic energy conversion',
      detailedSpecs: [
        { label: 'Blades', value: '16 units' },
        { label: 'Material', value: 'Carbon Fiber' },
        { label: 'Diameter', value: '2.5 m' }
      ]
    },
    {
      x: '70%',
      y: '20%',
      width: '120px',
      height: '80px',
      type: 'process',
      icon: '🔋',
      label: 'Generator',
      specs: '95% Eff.',
      description: 'Advanced synchronous generator with permanent magnet technology',
      detailedSpecs: [
        { label: 'Type', value: 'PM Sync' },
        { label: 'Voltage', value: '400V AC' },
        { label: 'Power Factor', value: '0.95' }
      ]
    },
    {
      x: '40%',
      y: '60%',
      width: '120px',
      height: '80px',
      type: 'process',
      icon: '📡',
      label: 'Control System',
      specs: 'Smart Grid',
      description: 'Intelligent control and monitoring system for optimal performance',
      detailedSpecs: [
        { label: 'Protocol', value: 'IEC 61850' },
        { label: 'Response Time', value: '<10ms' },
        { label: 'Efficiency', value: '99.2%' }
      ]
    },
    {
      x: '70%',
      y: '65%',
      width: '120px',
      height: '80px',
      type: 'output',
      icon: '⚡',
      label: 'Power Output',
      specs: '100 kW',
      description: 'Clean electrical power output ready for grid integration',
      detailedSpecs: [
        { label: 'Frequency', value: '50 Hz' },
        { label: 'Harmonics', value: '<3%' },
        { label: 'Stability', value: '±0.1%' }
      ]
    }
  ];

  const schematicConnections = [
    {
      startX: 130,
      startY: 100,
      endX: 320,
      endY: 95,
      path: 'M 130 100 Q 225 80 320 95'
    },
    {
      startX: 440,
      startY: 95,
      endX: 560,
      endY: 100,
      path: 'M 440 95 Q 500 85 560 100'
    },
    {
      startX: 500,
      startY: 175,
      endX: 500,
      endY: 240,
      path: 'M 500 175 L 500 240'
    },
    {
      startX: 560,
      startY: 265,
      endX: 630,
      endY: 265,
      path: 'M 560 265 L 630 265'
    }
  ];

  const systemMonitorData = [
    {
      name: 'Power',
      icon: '⚡',
      chartTitle: 'Power Generation (kW)',
      color: 'primary',
      data: [
        { time: '10:00', value: 95.2, timestamp: Date.now() - 900000 },
        { time: '10:15', value: 98.1, timestamp: Date.now() - 600000 },
        { time: '10:30', value: 100.0, timestamp: Date.now() - 300000 },
        { time: '10:45', value: 97.8, timestamp: Date.now() }
      ]
    },
    {
      name: 'Efficiency',
      icon: '📊',
      chartTitle: 'System Efficiency (%)',
      color: 'success',
      data: [
        { time: '10:00', value: 94.8, timestamp: Date.now() - 900000 },
        { time: '10:15', value: 95.2, timestamp: Date.now() - 600000 },
        { time: '10:30', value: 95.1, timestamp: Date.now() - 300000 },
        { time: '10:45', value: 95.3, timestamp: Date.now() }
      ]
    },
    {
      name: 'Temperature',
      icon: '🌡️',
      chartTitle: 'Operating Temperature (°C)',
      color: 'warning',
      data: [
        { time: '10:00', value: 42.5, timestamp: Date.now() - 900000 },
        { time: '10:15', value: 44.2, timestamp: Date.now() - 600000 },
        { time: '10:30', value: 45.0, timestamp: Date.now() - 300000 },
        { time: '10:45', value: 44.8, timestamp: Date.now() }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Advanced KPP Technology - Deep Engineering</title>
        <meta name="description" content="Explore the advanced engineering behind our Kinetic Power Plant technology with interactive 3D visualizations and real-time performance monitoring." />
        <meta name="keywords" content="kinetic power plant, advanced technology, 3D visualization, real-time monitoring, industrial engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main" className="skip-link">Skip to main content</a>
      
      <IndustrialNavbar />

      <main id="main">
        {/* Hero Section */}
        <section className="section bg-primary text-center">
          <div className="container">
            <h1 className="text-white mb-6">Advanced KPP Technology</h1>
            <p className="text-white mb-8" style={{ opacity: 0.9, fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Discover the cutting-edge engineering and innovative design behind our 
              Kinetic Power Plant technology through interactive visualizations and real-time monitoring.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#technical-specs" className="btn btn-secondary btn-lg">
                📊 View Specifications
              </Link>
              <Link href="#system-diagram" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                🔧 System Overview
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section id="technical-specs" className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Technical Specifications</h2>
              <p className="text-muted">
                Comprehensive performance metrics and operational parameters
              </p>
            </div>
            <div className="grid grid-auto-fit gap-6">
              {technicalSpecs.map((spec, index) => (
                <DataCard key={index} {...spec} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive 3D Components */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Interactive System Components</h2>
              <p className="text-muted">
                Explore our KPP technology components with interactive 3D visualizations
              </p>
            </div>
            
            <div className="grid grid-3 gap-8 items-center">
              <div className="component-showcase">
                <Interactive3DElement type="turbine" size={200} speed={1} />
                <div className="showcase-info">
                  <h3 className="font-semibold mb-2">Turbine Assembly</h3>
                  <p className="text-sm text-muted">High-efficiency kinetic energy capture system</p>
                </div>
              </div>
              
              <div className="component-showcase">
                <Interactive3DElement type="generator" size={200} speed={0.8} />
                <div className="showcase-info">
                  <h3 className="font-semibold mb-2">Generator System</h3>
                  <p className="text-sm text-muted">Advanced electromagnetic energy conversion</p>
                </div>
              </div>
              
              <div className="component-showcase">
                <Interactive3DElement type="energy-flow" size={200} speed={1.2} />
                <div className="showcase-info">
                  <h3 className="font-semibold mb-2">Energy Flow</h3>
                  <p className="text-sm text-muted">Real-time power distribution visualization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Schematic */}
        <section id="system-diagram" className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">System Architecture</h2>
              <p className="text-muted">
                Interactive technical schematic showing component relationships and data flow
              </p>
            </div>
            
            <TechnicalSchematic
              title="KPP System Architecture"
              components={schematicComponents}
              connections={schematicConnections}
            />
          </div>
        </section>

        {/* Real-time Monitoring */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Real-time Performance Monitoring</h2>
              <p className="text-muted">
                Live system performance data with interactive controls
              </p>
            </div>
            
            <SystemMonitor systems={systemMonitorData} />
          </div>
        </section>

        {/* Technology Advantages */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Technology Advantages</h2>
            </div>
            
            <div className="grid grid-2 gap-12 items-center">
              <div>
                <div className="advantage-list">
                  <div className="advantage-item">
                    <div className="advantage-icon">🔧</div>
                    <div className="advantage-content">
                      <h4 className="font-semibold mb-2">Modular Design</h4>
                      <p className="text-sm text-muted">Scalable architecture allowing for easy capacity expansion and maintenance</p>
                    </div>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-icon">📡</div>
                    <div className="advantage-content">
                      <h4 className="font-semibold mb-2">Smart Integration</h4>
                      <p className="text-sm text-muted">Advanced IoT connectivity for remote monitoring and predictive maintenance</p>
                    </div>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-icon">🌍</div>
                    <div className="advantage-content">
                      <h4 className="font-semibold mb-2">Environmental Impact</h4>
                      <p className="text-sm text-muted">Zero emissions with minimal environmental footprint and wildlife protection</p>
                    </div>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-icon">💰</div>
                    <div className="advantage-content">
                      <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                      <p className="text-sm text-muted">Low operational costs with high return on investment and minimal maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="innovation-highlight">
                <div className="highlight-card">
                  <div className="highlight-header">
                    <h3 className="text-white mb-4">Innovation Spotlight</h3>
                  </div>
                  <div className="highlight-content">
                    <div className="innovation-stat">
                      <div className="stat-number">95%</div>
                      <div className="stat-label">Energy Efficiency</div>
                    </div>
                    <div className="innovation-stat">
                      <div className="stat-number">24/7</div>
                      <div className="stat-label">Operation</div>
                    </div>
                    <div className="innovation-stat">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Year Lifespan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-primary text-center">
          <div className="container">
            <h2 className="text-white mb-6">Ready to Implement KPP Technology?</h2>
            <p className="text-white mb-8" style={{ opacity: 0.9 }}>
              Contact our engineering team to discuss your specific requirements and 
              get a customized KPP solution for your facility.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                📞 Contact Engineers
              </Link>
              <Link href="/performance" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                📊 View Performance Data
              </Link>
            </div>
          </div>
        </section>
      </main>

      <IndustrialFooter />

      <style jsx>{`
        .component-showcase {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
          padding: var(--space-8);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-base);
        }

        .component-showcase:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .showcase-info {
          text-align: center;
        }

        .advantage-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .advantage-item {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-base);
        }

        .advantage-item:hover {
          transform: translateX(8px);
          box-shadow: var(--shadow-md);
        }

        .advantage-icon {
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

        .advantage-content {
          flex: 1;
        }

        .innovation-highlight {
          display: flex;
          justify-content: center;
        }

        .highlight-card {
          background: linear-gradient(135deg, var(--primary-blue), var(--energy-orange));
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          color: white;
          box-shadow: var(--shadow-xl);
          min-width: 300px;
        }

        .highlight-header {
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .highlight-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .innovation-stat {
          text-align: center;
          padding: var(--space-4);
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--energy-orange);
          text-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .grid.grid-3 {
            grid-template-columns: 1fr;
          }

          .grid.grid-2 {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }

        @media (max-width: 768px) {
          .component-showcase {
            padding: var(--space-6);
          }

          .advantage-item {
            flex-direction: column;
            text-align: center;
          }

          .advantage-icon {
            align-self: center;
          }

          .highlight-card {
            min-width: auto;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
