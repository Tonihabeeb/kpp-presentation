import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HomeSection from '../components/HomeSection';
import ExampleChart from '../components/ExampleChart';

const Home = () => {
  return (
    <div className="container home-page">
      <Head>
        <title>KPP Technology - Kinetic Power Plant | Deep Engineering</title>
        <meta name="description" content="Pioneering sustainable energy solutions with Kinetic Power Plant technology. Revolutionary renewable energy generation with minimal environmental impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <section className="hero-container" aria-label="Hero section">
        <video autoPlay loop muted playsInline className="hero-video" aria-hidden="true">
          <source src="https://player.vimeo.com/external/517761798.sd.mp4?s=b34da5b4e6a0c0964823a3cb9affe47d48c88b7e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          {/* Fallback for if video fails to load */}
        </video>
        {/* Background fallback image */}
        <div className="hero-background-fallback"></div>
        <div className="hero-content">
          <h1>Pioneering Sustainable Energy Solutions</h1>
          <p>Discover how Kinetic Power Plant technology is revolutionizing the energy sector.</p>
          <div className="cta-buttons" role="group" aria-label="Call to action buttons">
            <Link href="#intro" className="btn btn-primary" aria-describedby="learn-more-desc">
              Learn More
            </Link>
            <span id="learn-more-desc" className="sr-only">Learn more about KPP Technology</span>
            <Link href="#contact" className="btn btn-secondary" aria-describedby="contact-desc">
              Contact Us
            </Link>
            <span id="contact-desc" className="sr-only">Get in touch with our team</span>
          </div>
        </div>
      </section>

      <main id="main-content">
        <HomeSection id="intro" title="Introduction to KPP Technology">
          <p>
            The Kinetic Power Plant (KPP) is a groundbreaking renewable energy solution developed by Deep Engineering GmbH. It harnesses kinetic energy from flowing water to generate electricity with minimal environmental impact. This presentation provides a technical overview of the KPP technology, its components, and its potential to revolutionize the energy landscape.
          </p>
        </HomeSection>

        <HomeSection id="key-technology" title="Key Technology Components">
          <div className="component-grid">
            <div className="component">
              <Image src="/images/kpp-tower.avif" alt="KPP Tower - Main generator and power systems housing" width={300} height={200} />
              <h3>KPP Tower</h3>
              <p>The core structure housing the main generator and power systems.</p>
            </div>
            <div className="component">
              <Image src="/images/generator.avif" alt="Generator" width={300} height={200} />
              <h3>Generator</h3>
              <p>A high-efficiency generator designed for converting kinetic energy into electrical power.</p>
            </div>
            <div className="component">
              <Image src="/images/air-compressor.avif" alt="Air Compressor" width={300} height={200} />
              <h3>Air Compressor</h3>
              <p>Utilizes compressed air for energy storage and pressure regulation.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="working-principle" title="Working Principle">
          <p>
            The KPP operates by capturing the kinetic energy of water flow, which drives a turbine connected to a generator. The system is designed for continuous operation and can be deployed in various water bodies, including rivers and tidal streams. An integrated energy storage system ensures a stable power supply.
          </p>
          <ExampleChart />
        </HomeSection>

        <HomeSection id="contact" title="Contact Us">
          <p>For inquiries, partnerships, or more information about the KPP technology, please contact us.</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> <a href="mailto:info@deep-engineering.de">info@deep-engineering.de</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> <a href="tel:+49123456789">+49 123 456 789</a>
            </div>
            <div className="contact-item">
              <strong>Address:</strong> Deep Engineering GmbH, Innovation District, Germany
            </div>
          </div>
          <div className="cta-section">
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link href="/demo" className="btn btn-secondary">
              Request Demo
            </Link>
          </div>
        </HomeSection>
      </main>

      <style jsx>{`
        /* Accessibility: Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: var(--color-primary);
          color: white;
          padding: 8px 12px;
          text-decoration: none;
          z-index: 1001;
          border-radius: 4px;
          font-weight: 600;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Screen reader only text */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--color-background);
        }

        main {
          flex: 1;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--color-background);
          margin-top: 80px; /* Account for fixed enterprise navbar */
        }

        .hero-container {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          color: var(--color-surface);
          text-align: center;
          margin-top: 80px; /* Account for fixed enterprise navbar */
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .hero-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }

        .hero-content {
          z-index: 1;
          padding: 20px;
          max-width: 800px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .hero-fallback {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-buttons .btn {
          margin: 0 10px;
          padding: 14px 28px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px; /* Accessibility: minimum touch target */
          min-width: 120px;
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: var(--color-surface);
          border: 2px solid var(--color-primary);
          box-shadow: 0 4px 12px rgba(42, 87, 165, 0.3);
        }

        .btn-primary:hover {
          background-color: var(--color-primary-hover);
          border-color: var(--color-primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(42, 87, 165, 0.4);
        }

        .btn-primary:focus {
          outline: 3px solid rgba(42, 87, 165, 0.5);
          outline-offset: 2px;
        }

        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--color-surface);
          border: 2px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background-color: var(--color-surface);
          color: var(--color-text);
          border-color: var(--color-surface);
          transform: translateY(-2px);
        }

        .btn-secondary:focus {
          outline: 3px solid rgba(255, 255, 255, 0.8);
          outline-offset: 2px;
        }

        .component-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .component {
          text-align: center;
          padding: 1.5rem;
          background: var(--color-background);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .component:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .component img {
          max-width: 100%;
          height: 200px;
          width: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .component h3 {
          color: var(--color-primary);
          margin: 1rem 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .component p {
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .contact-info {
          margin: 2rem 0;
          display: grid;
          gap: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-item {
          padding: 1rem;
          background: var(--color-secondary-bg);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .contact-item strong {
          color: var(--color-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .contact-item a {
          color: var(--color-text);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--color-primary);
        }

        .cta-section {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-container {
            height: calc(100vh - 80px);
            margin-top: 80px;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content p {
            font-size: 1.2rem;
          }
          
          .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .cta-buttons .btn {
            margin: 0;
            width: 200px;
          }
          
          .component-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .cta-section {
            flex-direction: column;
            align-items: center;
          }

          .cta-section .btn {
            width: 200px;
          }
          
          main {
            padding: 1rem;
            margin-top: 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            height: calc(100vh - 60px);
            margin-top: 60px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
          
          .hero-content {
            padding: 15px;
          }

          main {
            margin-top: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;