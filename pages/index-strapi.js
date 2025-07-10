import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import HomeSection from '../components/HomeSection';
import ExampleChart from '../components/ExampleChart';
import DynamicContentRenderer from '../components/DynamicContentRenderer';
import { strapiApi } from '../lib/strapi';

const Home = ({ strapiContent, siteSettings }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // If Strapi content is available, use it; otherwise, fall back to static content
  if (strapiContent && strapiContent.content) {
    return (
      <div className={`container home-page ${isVisible ? 'animate-in' : ''}`}>
        <Head>
          <title>{strapiContent.seo?.metaTitle || strapiContent.title}</title>
          <meta name="description" content={strapiContent.seo?.metaDescription || "Pioneering sustainable energy solutions with Kinetic Power Plant technology."} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <DynamicContentRenderer content={strapiContent.content} />
        </main>
      </div>
    );
  }

  // Fallback to your existing static content
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
        </video>
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
    </div>
  );
};

// This function gets called at build time and request time
export async function getServerSideProps() {
  try {
    // Try to fetch content from Strapi
    const [strapiContent, siteSettings] = await Promise.all([
      strapiApi.getPageBySlug('home'),
      strapiApi.getSiteSettings()
    ]);

    return {
      props: {
        strapiContent,
        siteSettings,
      },
    };
  } catch (error) {
    // If Strapi is not available, return empty props to use static content
    return {
      props: {
        strapiContent: null,
        siteSettings: null,
      },
    };
  }
}

export default Home;
