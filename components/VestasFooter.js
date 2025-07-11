import React from 'react';
import Link from 'next/link';

const VestasFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Technology',
      links: [
        { label: 'How it Works', href: '/technology' },
        { label: 'Performance Data', href: '/performance' },
        { label: 'Technical Specifications', href: '/specifications' },
        { label: 'Safety & Standards', href: '/safety' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Industrial Power', href: '/solutions/industrial' },
        { label: 'Grid Integration', href: '/solutions/grid' },
        { label: 'Custom Projects', href: '/solutions/custom' },
        { label: 'Maintenance Services', href: '/solutions/maintenance' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/resources' },
        { label: 'Developer API', href: '/api' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Contact Us', href: '/contact' }
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management Systems', icon: '🏆' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management', icon: '🌱' },
    { name: 'IEC 61508', desc: 'Functional Safety', icon: '🔒' },
    { name: 'CE Marking', desc: 'European Conformity', icon: '🇪🇺' }
  ];

  const socialLinks = [
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/deep-engineering', icon: '💼' },
    { platform: 'Twitter', href: 'https://twitter.com/deepengineering', icon: '𝕏' },
    { platform: 'YouTube', href: 'https://youtube.com/@deepengineering', icon: '📺' },
    { platform: 'GitHub', href: 'https://github.com/deep-engineering', icon: '⚡' }
  ];

  return (
    <footer className="vestas-footer">
      {/* Newsletter & CTA Section */}
      <div className="footer-cta-section">
        <div className="vestas-container">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Stay Ahead of Energy Innovation</h3>
              <p className="cta-description">
                Get the latest insights on kinetic power technology, industry trends, 
                and breakthrough developments delivered to your inbox.
              </p>
            </div>
            <div className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button className="newsletter-button" type="submit">
                  <span>Subscribe</span>
                  <span className="button-arrow">→</span>
                </button>
              </div>
              <p className="newsletter-disclaimer">
                Join 5,000+ industry professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="vestas-container">
          <div className="footer-grid">
            {/* Company Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo-enhanced">
                <div className="logo-container">
                  <div className="logo-icon-enhanced">
                    <svg viewBox="0 0 40 40" className="logo-svg-enhanced">
                      <defs>
                        <linearGradient id="vestasLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#104277" />
                          <stop offset="50%" stopColor="#1e5a8a" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill="url(#vestasLogoGradient)" />
                      <path d="M12 20 L20 10 L28 20 L20 30 Z" fill="white" opacity="0.9" />
                      <circle cx="20" cy="20" r="3" fill="#60a5fa" />
                    </svg>
                  </div>
                  <div className="brand-text-enhanced">
                    <div className="brand-title-enhanced">DEEP ENGINEERING</div>
                    <div className="brand-subtitle-enhanced">Kinetic Power Plant Technology</div>
                  </div>
                </div>
              </div>
              
              <p className="brand-description-enhanced">
                Pioneering the future of sustainable energy with revolutionary kinetic power solutions. 
                Trusted by leading industrial companies worldwide for clean, efficient, and reliable power generation.
              </p>
              
              <div className="contact-info-enhanced">
                <div className="contact-item-enhanced">
                  <div className="contact-icon-enhanced">📍</div>
                  <div className="contact-details">
                    <span className="contact-label">Headquarters</span>
                    <span className="contact-value">123 Innovation Drive, Tech Valley, CA 94000</span>
                  </div>
                </div>
                <div className="contact-item-enhanced">
                  <div className="contact-icon-enhanced">📞</div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="contact-item-enhanced">
                  <div className="contact-icon-enhanced">✉️</div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">info@deepengineering.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="footer-nav-enhanced">
              {footerSections.map((section) => (
                <div key={section.title} className="nav-section-enhanced">
                  <h4 className="section-title-enhanced">{section.title}</h4>
                  <ul className="section-links-enhanced">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="footer-link-enhanced">
                          <span className="link-text">{link.label}</span>
                          <span className="link-arrow">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Certifications Section */}
      <div className="footer-certifications-enhanced">
        <div className="vestas-container">
          <div className="cert-header">
            <h4 className="cert-title-enhanced">Industry Certifications & Standards</h4>
            <p className="cert-subtitle">Committed to the highest standards of quality, safety, and environmental responsibility</p>
          </div>
          <div className="cert-grid-enhanced">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card-enhanced">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <div className="cert-name-enhanced">{cert.name}</div>
                  <div className="cert-desc-enhanced">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="footer-bottom-enhanced">
        <div className="vestas-container">
          <div className="bottom-content-enhanced">
            <div className="copyright-enhanced">
              <p className="copyright-text">
                &copy; {currentYear} Deep Engineering. All rights reserved.
              </p>
              <p className="patent-notice-enhanced">
                Patent-pending KPP technology. Unauthorized reproduction prohibited.
              </p>
            </div>
            
            <div className="footer-links-group">
              <div className="legal-links-enhanced">
                <Link href="/privacy" className="legal-link-enhanced">Privacy Policy</Link>
                <Link href="/terms" className="legal-link-enhanced">Terms of Service</Link>
                <Link href="/cookies" className="legal-link-enhanced">Cookie Policy</Link>
                <Link href="/accessibility" className="legal-link-enhanced">Accessibility</Link>
              </div>
              
              <div className="social-links-enhanced">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.href} 
                    className="social-link-enhanced" 
                    aria-label={`Follow us on ${social.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-label">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VestasFooter;
