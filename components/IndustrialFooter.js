import React from 'react';
import Link from 'next/link';

const IndustrialFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Technology',
      links: [
        { label: 'How it Works', href: '/technology' },
        { label: 'Performance Data', href: '/performance' },
        { label: 'Technical Specs', href: '/specifications' },
        { label: 'Safety Standards', href: '/safety' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Industrial Power', href: '/solutions/industrial' },
        { label: 'Grid Integration', href: '/solutions/grid' },
        { label: 'Custom Projects', href: '/solutions/custom' },
        { label: 'Maintenance', href: '/solutions/maintenance' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/resources' },
        { label: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 9001', desc: 'Quality Management' },
    { name: 'ISO 14001', desc: 'Environmental' },
    { name: 'IEC 61508', desc: 'Functional Safety' },
    { name: 'CE Marking', desc: 'European Conformity' }
  ];

  return (
    <footer className="industrial-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" className="logo-svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1B365D" />
                      <stop offset="100%" stopColor="#FF6B35" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" />
                  <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="white" />
                  <circle cx="20" cy="20" r="4" fill="#FF6B35" />
                </svg>
              </div>
              <div className="brand-text">
                <div className="brand-title">DEEP ENGINEERING</div>
                <div className="brand-subtitle">Kinetic Power Plant Technology</div>
              </div>
            </div>
            
            <p className="brand-description">
              Revolutionary kinetic energy solutions for sustainable power generation. 
              Leading the future of clean, efficient, and reliable industrial energy systems.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Innovation Drive, Tech Valley, CA 94000</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@deepengineering.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="footer-nav">
            {footerSections.map((section) => (
              <div key={section.title} className="nav-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-links">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="footer-certifications">
        <div className="footer-container">
          <h4 className="cert-title">Industry Certifications & Standards</h4>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-item">
                <div className="cert-badge">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-desc">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Deep Engineering. All rights reserved.</p>
              <p className="patent-notice">
                Patent-pending KPP technology. Unauthorized reproduction prohibited.
              </p>
            </div>
            
            <div className="legal-links">
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>
              <Link href="/terms" className="legal-link">Terms of Service</Link>
              <Link href="/cookies" className="legal-link">Cookie Policy</Link>
              <Link href="/accessibility" className="legal-link">Accessibility</Link>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>💻</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .industrial-footer {
          background: var(--primary-blue);
          color: white;
          margin-top: var(--space-20);
        }

        .footer-main {
          padding: var(--space-16) 0 var(--space-12);
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .footer-main .footer-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-16);
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }

        .logo-icon {
          width: 48px;
          height: 48px;
        }

        .logo-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: white;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .brand-subtitle {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--energy-orange);
          letter-spacing: 0.25px;
          line-height: 1.3;
        }

        .brand-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--space-6);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .contact-icon {
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }

        .nav-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--energy-orange);
          margin-bottom: var(--space-4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          transition: all var(--transition-fast);
          padding: var(--space-1) 0;
          border-bottom: 1px solid transparent;
        }

        .footer-link:hover {
          color: white;
          border-bottom-color: var(--energy-orange);
          transform: translateX(4px);
        }

        .footer-certifications {
          padding: var(--space-8) 0;
          background: rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cert-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          color: white;
          text-align: center;
          margin-bottom: var(--space-6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .cert-item {
          display: flex;
          justify-content: center;
        }

        .cert-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          transition: all var(--transition-base);
          backdrop-filter: blur(10px);
        }

        .cert-badge:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--energy-orange);
          transform: translateY(-2px);
        }

        .cert-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--energy-orange);
          margin-bottom: var(--space-1);
        }

        .cert-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .footer-bottom {
          padding: var(--space-6) 0;
          background: var(--primary-blue-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bottom-content {
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: var(--space-8);
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .copyright p {
          margin: 0;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .patent-notice {
          font-size: 0.8rem !important;
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .legal-links {
          display: flex;
          gap: var(--space-6);
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          padding: var(--space-1) 0;
          border-bottom: 1px solid transparent;
        }

        .legal-link:hover {
          color: white;
          border-bottom-color: var(--energy-orange);
        }

        .social-links {
          display: flex;
          gap: var(--space-3);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-lg);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all var(--transition-base);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: var(--energy-orange);
          border-color: var(--energy-orange);
          color: white;
          transform: translateY(-2px);
        }

        .social-link span {
          font-size: 1.2rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-main .footer-container {
            grid-template-columns: 1fr;
            gap: var(--space-12);
          }

          .footer-nav {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .bottom-content {
            grid-template-columns: 1fr;
            gap: var(--space-6);
            text-align: center;
          }

          .legal-links {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 var(--space-4);
          }

          .footer-main {
            padding: var(--space-12) 0 var(--space-8);
          }

          .brand-logo {
            margin-bottom: var(--space-4);
          }

          .footer-nav {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
          }

          .legal-links {
            flex-direction: column;
            gap: var(--space-3);
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 var(--space-3);
          }

          .brand-logo {
            flex-direction: column;
            text-align: center;
            gap: var(--space-2);
          }

          .contact-info {
            align-items: center;
            text-align: center;
          }

          .cert-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            gap: var(--space-2);
          }

          .social-link {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </footer>
  );
};

export default IndustrialFooter;
