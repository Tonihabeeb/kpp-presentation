import Link from 'next/link';
import Head from 'next/head';

export default function Presentation() {
  const slides = [
    {
      number: 1,
      title: 'Introduction',
      description: 'Welcome to KPP Technology - Revolutionary Energy Generation',
      duration: '5 min',
      topics: ['Company Overview', 'Technology Introduction', 'Market Opportunity', 'Presentation Outline'],
      href: '/slides/1'
    },
    {
      number: 2,
      title: 'Technology',
      description: 'Deep Dive into Kinetic Power Plant Technology',
      duration: '10 min',
      topics: ['Core Technology Principles', 'System Components', 'Innovation Features', 'Technical Advantages'],
      href: '/slides/2'
    },
    {
      number: 3,
      title: 'Performance',
      description: 'Performance Metrics and Efficiency Analysis',
      duration: '8 min',
      topics: ['Efficiency Ratings', 'Power Output Data', 'Comparative Analysis', 'Real-world Results'],
      href: '/slides/3'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Implementation Strategy and Project Planning',
      duration: '7 min',
      topics: ['Deployment Process', 'Timeline Planning', 'Resource Requirements', 'Success Factors'],
      href: '/slides/4'
    },
    {
      number: 5,
      title: 'Conclusion',
      description: 'Summary and Next Steps',
      duration: '5 min',
      topics: ['Key Benefits Summary', 'Investment Opportunity', 'Next Steps', 'Contact Information'],
      href: '/slides/5'
    }
  ];

  const presentationOptions = [
    {
      title: 'Full Presentation',
      description: 'Complete slide deck with all sections and detailed content',
      duration: '35 minutes',
      icon: '📋',
      href: '/presentation/full',
      features: ['All 5 sections', 'Detailed animations', 'Q&A sections', 'Interactive elements']
    },
    {
      title: 'Executive Summary',
      description: 'Condensed version focusing on key highlights and business value',
      duration: '15 minutes',
      icon: '⚡',
      href: '/presentation/executive',
      features: ['Key highlights only', 'Business focus', 'ROI emphasis', 'Decision-maker ready']
    },
    {
      title: 'Technical Deep Dive',
      description: 'In-depth technical presentation for engineering teams',
      duration: '45 minutes',
      icon: '🔧',
      href: '/presentation/technical',
      features: ['Technical details', 'Engineering specs', 'Implementation guide', 'Technical Q&A']
    },
    {
      title: 'Interactive Demo',
      description: 'Live demonstration with interactive elements and real-time data',
      duration: '20 minutes',
      icon: '🎮',
      href: '/demo',
      features: ['Live interaction', 'Real-time data', 'Hands-on experience', 'Customizable scenarios']
    }
  ];

  return (
    <>
      <Head>
        <title>Presentation - Deep Engineering KPP Technology</title>
        <meta name="description" content="Access the complete KPP technology presentation including individual slides and different presentation formats." />
      </Head>

      <div className="presentation-page">
        <div className="hero-section">
          <div className="container">
            <h1>KPP Technology Presentation</h1>
            <p className="hero-subtitle">
              Comprehensive presentation materials showcasing the revolutionary Kinetic Power Plant technology and its transformative potential.
            </p>
          </div>
        </div>

        <div className="presentation-content">
          <div className="container">
            {/* Presentation Options */}
            <section className="presentation-options">
              <h2>Choose Your Presentation Format</h2>
              <div className="options-grid">
                {presentationOptions.map((option, index) => (
                  <div key={index} className="option-card">
                    <div className="option-header">
                      <span className="option-icon">{option.icon}</span>
                      <div>
                        <h3>{option.title}</h3>
                        <span className="duration">{option.duration}</span>
                      </div>
                    </div>
                    <p className="option-description">{option.description}</p>
                    <ul className="option-features">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <Link href={option.href} className="option-button">
                      Start Presentation
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Individual Slides */}
            <section className="individual-slides">
              <h2>Browse Individual Slides</h2>
              <p className="section-subtitle">
                Access specific sections of the presentation or navigate through individual slides.
              </p>
              <div className="slides-grid">
                {slides.map((slide, index) => (
                  <div key={index} className="slide-card">
                    <div className="slide-header">
                      <div className="slide-number">
                        {slide.number}
                      </div>
                      <div className="slide-info">
                        <h4>{slide.title}</h4>
                        <span className="slide-duration">{slide.duration}</span>
                      </div>
                    </div>
                    <p className="slide-description">{slide.description}</p>
                    <div className="slide-topics">
                      <h5>Topics Covered:</h5>
                      <ul>
                        {slide.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href={slide.href} className="slide-button">
                      View Slide {slide.number}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Download Options */}
            <section className="download-options">
              <h2>Download Materials</h2>
              <div className="download-grid">
                <div className="download-item">
                  <div className="download-info">
                    <h4>📊 Complete Slide Deck</h4>
                    <p>Full presentation in PDF format with speaker notes</p>
                    <span className="file-size">PDF • 8.4 MB</span>
                  </div>
                  <a href="/downloads/kpp-presentation.pdf" className="download-btn">Download</a>
                </div>
                <div className="download-item">
                  <div className="download-info">
                    <h4>📈 Executive Summary</h4>
                    <p>Condensed version highlighting key business points</p>
                    <span className="file-size">PDF • 2.1 MB</span>
                  </div>
                  <a href="/downloads/kpp-executive-summary.pdf" className="download-btn">Download</a>
                </div>
                <div className="download-item">
                  <div className="download-info">
                    <h4>🎥 Video Presentation</h4>
                    <p>Recorded presentation with narration and animations</p>
                    <span className="file-size">MP4 • 124 MB</span>
                  </div>
                  <a href="/downloads/kpp-video-presentation.mp4" className="download-btn">Download</a>
                </div>
              </div>
            </section>

            {/* Navigation Helper */}
            <section className="navigation-helper">
              <h2>Quick Navigation</h2>
              <div className="nav-grid">
                <Link href="/technology" className="nav-card">
                  <span className="nav-icon">🔬</span>
                  <span>Technology Overview</span>
                </Link>
                <Link href="/performance" className="nav-card">
                  <span className="nav-icon">📊</span>
                  <span>Performance Data</span>
                </Link>
                <Link href="/analytics" className="nav-card">
                  <span className="nav-icon">🚀</span>
                  <span>Advanced Analytics</span>
                </Link>
                <Link href="/contact" className="nav-card">
                  <span className="nav-icon">📞</span>
                  <span>Contact Us</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        .presentation-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .presentation-content {
          padding: 4rem 0;
        }

        section {
          margin-bottom: 4rem;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #1e293b;
          margin-bottom: 3rem;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .option-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .option-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .option-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .option-icon {
          font-size: 2.5rem;
        }

        .option-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .duration {
          color: #6b7280;
          font-size: 0.875rem;
          background: #f3f4f6;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
        }

        .option-description {
          color: #4b5563;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .option-features {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .option-features li {
          padding: 0.5rem 0;
          color: #6b7280;
          border-bottom: 1px solid #f3f4f6;
        }

        .option-features li:before {
          content: '✓';
          color: #10b981;
          margin-right: 0.5rem;
          font-weight: 600;
        }

        .option-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.3s ease;
          display: inline-block;
          width: 100%;
          text-align: center;
        }

        .option-button:hover {
          transform: translateY(-2px);
        }

        .slides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .slide-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: transform 0.3s ease;
        }

        .slide-card:hover {
          transform: translateY(-3px);
        }

        .slide-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .slide-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .slide-info h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 0.25rem 0;
        }

        .slide-duration {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .slide-description {
          color: #4b5563;
          margin-bottom: 1.5rem;
        }

        .slide-topics h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .slide-topics ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .slide-topics li {
          padding: 0.25rem 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .slide-topics li:before {
          content: '→';
          color: #3b82f6;
          margin-right: 0.5rem;
        }

        .slide-button {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .slide-button:hover {
          color: #1e40af;
        }

        .download-grid {
          display: grid;
          gap: 1.5rem;
        }

        .download-item {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .download-info h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .download-info p {
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .file-size {
          background: #f3f4f6;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .download-btn {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.3s ease;
        }

        .download-btn:hover {
          transform: translateY(-2px);
        }

        .nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .nav-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.2);
          text-decoration: none;
          color: #1e293b;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .nav-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .nav-icon {
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .options-grid,
          .slides-grid {
            grid-template-columns: 1fr;
          }

          .download-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
