import Link from 'next/link';
import NavBar from '../components/NavBar';
import { MetricsGrid } from '../components/DataVisualization';
import VestasFooter from '../components/VestasFooter';
import ToastContainer from '../components/ToastSystem';
import InteractiveDemo from '../components/InteractiveDemo';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceDashboard from '../components/PerformanceDashboard';
import Phase5Summary from '../components/Phase5Summary';
import SEOOptimization from '../components/SEOOptimization';
import { useEffect, useState } from 'react';
import { useScrollAnimation, useParallax, useMouseTracking } from '../hooks/useAdvancedInteractions';

export default function Home() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [parallaxRef, parallaxOffset] = useParallax(-0.5);
  const [statsRef, statsVisible] = useScrollAnimation();
  const mousePosition = useMouseTracking();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
    // Enhanced video loading and scroll detection
    const video = document.querySelector('.hero-video');
    if (video) {
      video.autoplay = true;
      video.play().catch(() => {
        // Autoplay failed, which is fine
      });

      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }

    // Hero visibility tracking for parallax effects
    const handleScroll = () => {
      // Removed isHeroVisible state as it's now handled by useScrollAnimation hook
    };

    // Scroll-triggered animations for content sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe sections and feature cards
    const sections = document.querySelectorAll('.vestas-section');
    const featureCards = document.querySelectorAll('.vestas-feature-card');
    
    sections.forEach((section) => observer.observe(section));
    featureCards.forEach((card) => observer.observe(card));

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SEOOptimization 
        title="Deep Engineering - Kinetic Power Plant Technology | Vestas-Grade Excellence"
        description="Experience enterprise-grade kinetic energy solutions with advanced interactions, premium animations, and Vestas-level professional quality. Phase 6 testing and optimization complete."
        keywords="kinetic power plant, sustainable energy, vestas quality, enterprise technology, advanced interactions, performance optimization"
      />

      <a href="#main" className="skip-link">Skip to main content</a>
      
      <NavBar />

      <main id="main">
        {/* Enhanced Vestas-Style Hero Section */}
        <section 
          ref={heroRef}
          className={`vestas-hero-enhanced ${isVideoLoaded ? 'video-loaded' : 'video-loading'} ${heroVisible ? 'animate-in' : ''}`} 
          aria-label="Hero section"
          style={{
            transform: `translateY(${parallaxOffset * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div 
            ref={parallaxRef}
            className="hero-video-container"
            style={{
              transform: `translateY(${parallaxOffset * 30}px) scale(${1 + Math.abs(parallaxOffset) * 0.02})`
            }}
          >
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
            <div className="hero-video-overlay"></div>
            {!isVideoLoaded && (
              <div className="hero-loading-overlay">
                <div className="loading-spinner"></div>
              </div>
            )}
          </div>
          
          <div className="hero-content-wrapper">
            <div className="hero-content-container">
              <div className="hero-badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Next-Generation Energy Solutions</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-line title-line-1">Pioneering Sustainable</span>
                <span className="title-line title-line-2">Energy Solutions</span>
              </h1>
              
              <p className="hero-subtitle">
                Building the solutions of tomorrow for business & government with 
                cutting-edge kinetic power plant technology
              </p>
              
              <div 
                ref={statsRef}
                className={`hero-stats-enhanced ${statsVisible ? 'animate-in' : ''}`}
                style={{
                  transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
                }}
              >
                <div className="stat-card">
                  <div className="stat-icon">📈</div>
                  <div className="stat-content">
                    <span className="stat-number">20%</span>
                    <span className="stat-label">Higher Efficiency</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-content">
                    <span className="stat-number">100kW</span>
                    <span className="stat-label">Power Output</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🔄</div>
                  <div className="stat-content">
                    <span className="stat-number">99%</span>
                    <span className="stat-label">Uptime</span>
                  </div>
                </div>
              </div>
              
              <div className="hero-actions-enhanced">
                <Link href="#technology" className="hero-cta-primary">
                  <span className="cta-text">Explore Technology</span>
                  <span className="cta-arrow">→</span>
                </Link>
                <Link href="/contact" className="hero-cta-secondary">
                  <span className="cta-text">Request Demo</span>
                  <span className="cta-icon">📋</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hero-scroll-indicator">
            <div className="scroll-indicator-line"></div>
            <div className="scroll-indicator-text">Scroll to explore</div>
          </div>
        </section>

        {/* Performance Metrics - Enhanced Section */}
        <section id="technology" className="vestas-section vestas-section-light">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2">Performance Excellence</h2>
              <p className="vestas-body-large">
                Real-time performance data from our industrial KPP installations worldwide
              </p>
            </div>
            <MetricsGrid metrics={performanceMetrics} />
          </div>
        </section>

        {/* Technology Overview - Enhanced with Vestas Flow */}
        <section className="vestas-section">
          <div className="vestas-container">
            <div className="vestas-content-grid">
              <div className="vestas-content-text">
                <div className="vestas-section-badge">Technology</div>
                <h2 className="vestas-heading-2">Advanced Kinetic Energy Conversion</h2>
                <p className="vestas-body-large">
                  Our proprietary KPP technology revolutionizes industrial power generation through 
                  advanced kinetic energy harvesting and conversion systems.
                </p>
                <div className="vestas-features-grid">
                  <div className="vestas-feature-card">
                    <div className="vestas-feature-icon">⚙️</div>
                    <h4 className="vestas-feature-title">Precision Engineering</h4>
                    <p className="vestas-feature-description">Advanced mechanical systems with minimal maintenance requirements</p>
                  </div>
                  <div className="vestas-feature-card">
                    <div className="vestas-feature-icon">🔋</div>
                    <h4 className="vestas-feature-title">Energy Storage</h4>
                    <p className="vestas-feature-description">Integrated storage solutions for consistent power delivery</p>
                  </div>
                  <div className="vestas-feature-card">
                    <div className="vestas-feature-icon">📡</div>
                    <h4 className="vestas-feature-title">Smart Monitoring</h4>
                    <p className="vestas-feature-description">Real-time performance tracking and predictive maintenance</p>
                  </div>
                  <div className="vestas-feature-card">
                    <div className="vestas-feature-icon">🌍</div>
                    <h4 className="vestas-feature-title">Environmental Impact</h4>
                    <p className="vestas-feature-description">Zero emissions with significant carbon footprint reduction</p>
                  </div>
                </div>
                <div className="vestas-button-group">
                  <Link href="/technology" className="vestas-button-primary">
                    Explore Technology
                  </Link>
                  <Link href="/performance" className="vestas-button-secondary">
                    View Performance Data
                  </Link>
                </div>
              </div>
              <div className="vestas-content-visual">
                <div className="vestas-tech-diagram">
                  <div className="vestas-diagram-container">
                    <div className="vestas-component-box vestas-input">
                      <div className="vestas-component-label">Kinetic Input</div>
                      <div className="vestas-component-icon">🔄</div>
                    </div>
                    <div className="vestas-flow-arrow">→</div>
                    <div className="vestas-component-box vestas-converter">
                      <div className="vestas-component-label">Energy Converter</div>
                      <div className="vestas-component-icon">⚙️</div>
                    </div>
                    <div className="vestas-flow-arrow">→</div>
                    <div className="vestas-component-box vestas-output">
                      <div className="vestas-component-label">Power Output</div>
                      <div className="vestas-component-icon">⚡</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="vestas-section vestas-section-cta">
          <div className="vestas-container">
            <div className="vestas-cta-content">
              <div className="vestas-section-badge vestas-badge-light">Ready to Get Started?</div>
              <h2 className="vestas-heading-2 vestas-text-white">Transform Your Energy Infrastructure</h2>
              <p className="vestas-body-large vestas-text-white-muted">
                Join leading industrial companies already benefiting from KPP technology. 
                Contact our engineering team for a customized energy solution.
              </p>
              <div className="vestas-button-group">
                <Link href="/contact" className="vestas-button-light">
                  Schedule Consultation
                </Link>
                <Link href="/demo" className="vestas-button-outline-light">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section - Phase 5 Advanced Interactions */}
        <section className="vestas-section vestas-section-interactive">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2">Interactive Technology Demo</h2>
              <p className="vestas-body-large">
                Experience the future of energy technology with our interactive demo. 
                Engage with the kinetic power plant model and see how it works.
              </p>
            </div>
            <InteractiveDemo />
          </div>
        </section>

        {/* Performance Monitor Section - Phase 5 Completion */}
        <section className="vestas-section vestas-section-dark">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2 vestas-text-white">Real-Time Performance Monitoring</h2>
              <p className="vestas-body-large vestas-text-white-muted">
                Monitor the real-time performance of our kinetic power plants across various parameters.
              </p>
            </div>
            <PerformanceMonitor />
          </div>
        </section>

        {/* Phase 5 Summary Section */}
        <section className="vestas-section vestas-section-light">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2">Phase 5 Achievements</h2>
              <p className="vestas-body-large">
                A comprehensive overview of the enhancements and new features implemented in Phase 5.
              </p>
            </div>
            <Phase5Summary />
          </div>
        </section>

        {/* Performance Dashboard Section - Phase 6 Completion */}
        <section className="vestas-section">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2">Performance Dashboard</h2>
              <p className="vestas-body-large">
                In-depth performance analysis and reporting for our kinetic power plants.
              </p>
            </div>
            <PerformanceDashboard />
          </div>
        </section>

        {/* SEO Optimization Section - Phase 6 Completion */}
        <section className="vestas-section vestas-section-dark">
          <div className="vestas-container">
            <div className="vestas-section-header">
              <h2 className="vestas-heading-2 vestas-text-white">SEO Optimization Insights</h2>
              <p className="vestas-body-large vestas-text-white-muted">
                Learn about the SEO strategies and optimizations implemented for enhanced visibility.
              </p>
            </div>
            <SEOOptimization />
          </div>
        </section>
      </main>

      <InteractiveDemo />
      <PerformanceMonitor />
      <PerformanceDashboard />
      <Phase5Summary />

      <VestasFooter />
      <ToastContainer />

      <style jsx>{`
        /* Vestas-Style Content Sections */
        .vestas-section {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .vestas-section-light {
          background: var(--vestas-gray-50);
        }

        .vestas-section-dark {
          background: var(--vestas-gray-900);
        }

        .vestas-section-cta {
          background: linear-gradient(135deg, var(--vestas-primary) 0%, #0d3b7a 100%);
          position: relative;
        }

        .vestas-section-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPgo=') repeat;
          opacity: 0.3;
        }

        .vestas-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .vestas-section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .vestas-section-badge {
          display: inline-block;
          background: var(--vestas-secondary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .vestas-badge-light {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .vestas-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .vestas-content-text {
          max-width: 600px;
        }

        .vestas-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .vestas-feature-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(16, 66, 119, 0.08);
          border: 1px solid rgba(16, 66, 119, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .vestas-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--vestas-secondary);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .vestas-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(16, 66, 119, 0.15);
        }

        .vestas-feature-card:hover::before {
          transform: scaleY(1);
        }

        .vestas-feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .vestas-feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--vestas-primary);
          margin-bottom: 0.75rem;
        }

        .vestas-feature-description {
          font-size: 0.95rem;
          color: var(--vestas-text-muted);
          line-height: 1.6;
        }

        .vestas-button-group {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .vestas-tech-diagram {
          background: linear-gradient(135deg, var(--vestas-gray-50) 0%, white 100%);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid rgba(16, 66, 119, 0.1);
          box-shadow: 0 8px 32px rgba(16, 66, 119, 0.12);
        }

        .vestas-diagram-container {
          display: flex;
          align-items: center;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .vestas-component-box {
          background: white;
          border: 2px solid var(--vestas-gray-200);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          min-width: 140px;
          box-shadow: 0 4px 20px rgba(16, 66, 119, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .vestas-component-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(16, 66, 119, 0.2);
        }

        .vestas-input {
          border-color: var(--vestas-secondary);
        }

        .vestas-converter {
          border-color: #f59e0b;
        }

        .vestas-output {
          border-color: var(--vestas-primary);
        }

        .vestas-component-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--vestas-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .vestas-component-icon {
          font-size: 2.5rem;
        }

        .vestas-flow-arrow {
          font-size: 2rem;
          color: var(--vestas-secondary);
          font-weight: bold;
          opacity: 0.7;
        }

        .vestas-cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .vestas-text-white {
          color: white;
        }

        .vestas-text-white-muted {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .vestas-content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .vestas-features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .vestas-section {
            padding: 4rem 0;
          }

          .vestas-container {
            padding: 0 1rem;
          }

          .vestas-diagram-container {
            flex-direction: column;
            gap: 1.5rem;
          }

          .vestas-flow-arrow {
            transform: rotate(90deg);
          }

          .vestas-button-group {
            flex-direction: column;
            align-items: center;
          }

          .vestas-feature-card {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
