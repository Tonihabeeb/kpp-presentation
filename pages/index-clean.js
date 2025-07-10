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
            The KPP operates on a revolutionary principle that converts kinetic energy from flowing water into electrical energy. The system consists of multiple interconnected components that work together to maximize energy efficiency and minimize environmental impact.
          </p>
          <div className="principle-steps">
            <div className="step">
              <h4>1. Energy Capture</h4>
              <p>Kinetic energy from flowing water is captured through specialized intake systems.</p>
            </div>
            <div className="step">
              <h4>2. Energy Conversion</h4>
              <p>The captured energy is converted to mechanical motion through advanced turbine systems.</p>
            </div>
            <div className="step">
              <h4>3. Power Generation</h4>
              <p>Mechanical energy is converted to electrical power through high-efficiency generators.</p>
            </div>
            <div className="step">
              <h4>4. Grid Integration</h4>
              <p>Generated power is conditioned and integrated into the electrical grid system.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="performance-data" title="Performance Data">
          <p>
            Real-world performance data from our KPP installations demonstrates exceptional efficiency and reliability across various operating conditions.
          </p>
          <div className="chart-container">
            <ExampleChart />
          </div>
        </HomeSection>

        <HomeSection id="environmental-impact" title="Environmental Impact">
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Zero Emissions</h4>
              <p>The KPP produces zero direct emissions during operation, contributing to clean air quality.</p>
            </div>
            <div className="impact-item">
              <h4>Minimal Footprint</h4>
              <p>Compact design requires minimal land use compared to traditional power generation facilities.</p>
            </div>
            <div className="impact-item">
              <h4>Ecosystem Friendly</h4>
              <p>Designed to minimize impact on aquatic ecosystems and local wildlife.</p>
            </div>
            <div className="impact-item">
              <h4>Sustainable Materials</h4>
              <p>Constructed using sustainable and recyclable materials where possible.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="applications" title="Applications">
          <p>
            KPP technology is versatile and can be deployed in various settings to meet different energy needs.
          </p>
          <div className="applications-grid">
            <div className="application">
              <h4>Industrial Power</h4>
              <p>Large-scale installations for industrial energy requirements.</p>
            </div>
            <div className="application">
              <h4>Municipal Supply</h4>
              <p>City and town power supply with reliable, clean energy.</p>
            </div>
            <div className="application">
              <h4>Remote Locations</h4>
              <p>Off-grid power solutions for remote communities and facilities.</p>
            </div>
            <div className="application">
              <h4>Emergency Backup</h4>
              <p>Reliable backup power systems for critical infrastructure.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="contact" title="Contact Us">
          <p>
            Interested in learning more about KPP technology or exploring partnership opportunities? Get in touch with our team.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@deep-engineering.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+49 (0) 123 456 7890</p>
            </div>
            <div className="contact-item">
              <h4>Address</h4>
              <p>Deep Engineering GmbH<br />Tech Park 123<br />12345 Berlin, Germany</p>
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
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 100;
          border-radius: 4px;
        }

        .skip-link:focus {
          top: 6px;
        }

        /* Hero Section */
        .hero-container {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          z-index: -2;
          object-fit: cover;
        }

        .hero-background-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          min-width: 150px;
          text-align: center;
        }

        .btn-primary {
          background: #007bff;
          color: white;
          border-color: #007bff;
        }

        .btn-primary:hover {
          background: #0056b3;
          border-color: #0056b3;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border-color: white;
        }

        .btn-secondary:hover {
          background: white;
          color: #333;
          transform: translateY(-2px);
        }

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

        /* Component Grid */
        .component-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .component {
          text-align: center;
          padding: 1.5rem;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .component:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .component img {
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        /* Principle Steps */
        .principle-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .step {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #007bff;
        }

        .step h4 {
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        /* Chart Container */
        .chart-container {
          margin: 2rem 0;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        /* Impact Grid */
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .impact-item {
          padding: 1.5rem;
          background: #e8f5e8;
          border-radius: 8px;
          border-left: 4px solid #28a745;
        }

        .impact-item h4 {
          color: #28a745;
          margin-bottom: 0.5rem;
        }

        /* Applications Grid */
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .application {
          padding: 1.5rem;
          background: #fff3cd;
          border-radius: 8px;
          border-left: 4px solid #ffc107;
        }

        .application h4 {
          color: #856404;
          margin-bottom: 0.5rem;
        }

        /* Contact Section */
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .contact-item {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          text-align: center;
        }

        .contact-item h4 {
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .cta-section {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-section .btn {
          margin: 0 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 200px;
          }
          
          main {
            padding: 1rem;
            margin-top: 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .cta-section .btn {
            width: 200px;
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
