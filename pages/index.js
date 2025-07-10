import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import HomeSection from '../components/HomeSection';

// Import chart component dynamically to avoid hydration issues
const ExampleChart = dynamic(() => import('../components/ExampleChart'), {
  ssr: false,
  loading: () => <div className="chart-loading">Loading chart...</div>
});

const Home = () => {
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
    <div className="container home-page">
      <Head>
        <title>KPP Technology - Kinetic Power Plant | Deep Engineering</title>
        <meta name="description" content="Pioneering sustainable energy solutions with Kinetic Power Plant technology. Revolutionary renewable energy generation with minimal environmental impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <section className="hero-container" aria-label="Hero section">
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
        <div className="hero-background-fallback"></div>
        <div className="hero-content">
          <h1>Pioneering Sustainable Energy Solutions</h1>
          <p>Discover how Kinetic Power Plant technology is revolutionizing the energy sector.</p>
          <div className="cta-buttons" role="group" aria-label="Call to action buttons">
            <Link href="#intro" className="btn btn-primary">
              Learn More
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <main id="main-content">
        <HomeSection id="intro" title="Introduction to KPP Technology">
          <p>
            The Kinetic Power Plant (KPP) is a groundbreaking renewable energy solution developed by Deep Engineering GmbH. 
            It harnesses kinetic energy from flowing water to generate electricity with minimal environmental impact.
          </p>
        </HomeSection>

        <HomeSection id="key-technology" title="Key Technology Components">
          <div className="component-grid">
            <div className="component">
              <Image src="/images/kpp-tower.avif" alt="KPP Tower" width={300} height={200} />
              <h3>KPP Tower</h3>
              <p>The core structure housing the main generator and power systems.</p>
            </div>
            <div className="component">
              <Image src="/images/generator.avif" alt="Generator" width={300} height={200} />
              <h3>Generator</h3>
              <p>High-efficiency generator for converting kinetic energy into electrical power.</p>
            </div>
            <div className="component">
              <Image src="/images/air-compressor.avif" alt="Air Compressor" width={300} height={200} />
              <h3>Air Compressor</h3>
              <p>Utilizes compressed air for energy storage and pressure regulation.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="performance-data" title="Performance Data">
          <p>Real-world performance data from our KPP installations demonstrates exceptional efficiency.</p>
          <div className="chart-container">
            <ExampleChart />
          </div>
        </HomeSection>

        <HomeSection id="contact" title="Contact Us">
          <p>Interested in learning more about KPP technology? Get in touch with our team.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@deep-engineering.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+49 (0) 123 456 7890</p>
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
    </div>
  );
};

export default Home;