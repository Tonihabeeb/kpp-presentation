import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { MetricsGrid } from '../components/DataVisualization';
import IndustrialFooter from '../components/IndustrialFooter';
import { useEffect } from 'react';

export default function Home() {
  const performanceMetrics = [
    {
      title: "Power Output",
      value: "100",
      unit: "kW",
      change: "+15%",
      trend: "up",
      icon: "⚡",
      description: "Continuous power generation",
      color: "primary"
    },
    {
      title: "Efficiency Rate",
      value: "95.2",
      unit: "%",
      change: "+2.1%",
      trend: "up",
      icon: "📊",
      description: "Energy conversion efficiency",
      color: "success"
    },
    {
      title: "Operating Hours",
      value: "8760",
      unit: "hrs/year",
      change: "24/7",
      trend: "neutral",
      icon: "🔄",
      description: "Continuous operation capability",
      color: "accent"
    },
    {
      title: "Carbon Reduction",
      value: "180",
      unit: "tons/year",
      change: "+25%",
      trend: "up",
      icon: "🌱",
      description: "CO₂ emissions prevented",
      color: "success"
    }
  ];

  useEffect(() => {
    // Start video autoplay after hydration
    const video = document.querySelector('.hero-video');
    if (video) {
      video.autoplay = true;
      video.play().catch(() => {
        // Autoplay failed, which is fine
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Deep Engineering - Kinetic Power Plant Technology</title>
        <meta name="description" content="Revolutionary kinetic energy solutions for sustainable industrial power generation. Experience the future of clean energy with KPP technology." />
        <meta name="keywords" content="kinetic power plant, sustainable energy, industrial power, clean technology, energy efficiency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main" className="skip-link">Skip to main content</a>
      
      <NavBar />

      <main id="main">
        {/* Vestas-Style Hero Section */}
        <section className="vestas-hero" aria-label="Hero section">
          <video 
            loop 
            muted 
            playsInline 
            className="hero-video" 
            aria-hidden="true"
            poster="/images/hero-poster.jpg"
            suppressHydrationWarning
          >
            <source src="https://player.vimeo.com/external/517761798.sd.mp4?s=b34da5b4e6a0c0964823a3cb9affe47d48c88b7e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="vestas-heading-1">Pioneering Sustainable Energy Solutions</h1>
            <h2 className="vestas-tagline">Building the Solutions of Tomorrow for Business & Government</h2>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">20%</span>
                <span className="stat-label">Higher Efficiency</span>
              </div>
              <div className="stat">
                <span className="stat-number">100kW</span>
                <span className="stat-label">Power Output</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="#technology" className="vestas-button-primary">
                Explore Technology
              </Link>
              <Link href="/contact" className="vestas-button-secondary">
                Request Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section id="technology" className="section bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="vestas-heading-2" style={{color: 'var(--vestas-primary)'}}>Performance Excellence</h2>
              <p className="vestas-body-large">
                Real-time performance data from our industrial KPP installations
              </p>
            </div>
            <MetricsGrid metrics={performanceMetrics} />
          </div>
        </section>

        {/* Technology Overview */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2 items-center">
              <div className="hero-content">
                <h2 className="text-primary mb-6">Advanced Kinetic Energy Conversion</h2>
                <p className="mb-6">
                  Our proprietary KPP technology revolutionizes industrial power generation through 
                  advanced kinetic energy harvesting and conversion systems.
                </p>
                <div className="grid grid-2 gap-4 mb-8">
                  <div className="feature-item">
                    <div className="feature-icon">⚙️</div>
                    <h4 className="font-semibold mb-2">Precision Engineering</h4>
                    <p className="text-sm text-muted">Advanced mechanical systems with minimal maintenance requirements</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🔋</div>
                    <h4 className="font-semibold mb-2">Energy Storage</h4>
                    <p className="text-sm text-muted">Integrated storage solutions for consistent power delivery</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📡</div>
                    <h4 className="font-semibold mb-2">Smart Monitoring</h4>
                    <p className="text-sm text-muted">Real-time performance tracking and predictive maintenance</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🌍</div>
                    <h4 className="font-semibold mb-2">Environmental Impact</h4>
                    <p className="text-sm text-muted">Zero emissions with significant carbon footprint reduction</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/technology" className="btn btn-primary">
                    Learn More
                  </Link>
                  <Link href="/performance" className="btn btn-outline">
                    View Performance
                  </Link>
                </div>
              </div>
              <div className="hero-visual">
                <div className="tech-diagram">
                  <div className="diagram-container">
                    <div className="component-box input">
                      <div className="component-label">Kinetic Input</div>
                      <div className="component-icon">🔄</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="component-box converter">
                      <div className="component-label">Energy Converter</div>
                      <div className="component-icon">⚙️</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="component-box output">
                      <div className="component-label">Power Output</div>
                      <div className="component-icon">⚡</div>
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
            <h2 className="text-white mb-6">Ready to Transform Your Energy Infrastructure?</h2>
            <p className="text-white mb-8" style={{ opacity: 0.9 }}>
              Join leading industrial companies already benefiting from KPP technology. 
              Contact our engineering team for a customized energy solution.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                📞 Schedule Consultation
              </Link>
              <Link href="/demo" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                🎯 Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <IndustrialFooter />

      <style jsx>{`
        .feature-item {
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-base);
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .tech-diagram {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--space-8);
        }

        .diagram-container {
          display: flex;
          align-items: center;
          gap: var(--space-6);
          flex-wrap: wrap;
          justify-content: center;
        }

        .component-box {
          background: white;
          border: 2px solid var(--neutral-300);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          text-align: center;
          min-width: 120px;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-base);
        }

        .component-box:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .component-box.input {
          border-color: var(--tech-teal);
        }

        .component-box.converter {
          border-color: var(--energy-orange);
        }

        .component-box.output {
          border-color: var(--primary-blue);
        }

        .component-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--neutral-600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-2);
        }

        .component-icon {
          font-size: 2rem;
        }

        .flow-arrow {
          font-size: 2rem;
          color: var(--energy-orange);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .diagram-container {
            flex-direction: column;
            gap: var(--space-4);
          }

          .flow-arrow {
            transform: rotate(90deg);
          }

          .grid.grid-2 {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .feature-item {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
