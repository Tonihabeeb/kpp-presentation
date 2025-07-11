import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiemensButton } from './SiemensButton';
import { SiemensBadge } from './SiemensBadge';

export const SiemensFooter = () => {
  return (
    <footer className="siemens-footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="brand-section">
            <div className="logo-container">
              <Image 
                src="/images/deep-engineering-logo-full-height.svg" 
                alt="Deep Engineering" 
                className="footer-logo"
                width={120}
                height={40}
              />
            </div>
            <p className="brand-description">
              Pioneering sustainable energy solutions with innovative Kinetic Power Plant technology.
            </p>
            <div className="powered-by">
              <SiemensBadge variant="industrial" size="small">
                Powered by Siemens iX
              </SiemensBadge>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Technology</h4>
          <ul className="footer-links">
            <li><Link href="/technology">Core Technology</Link></li>
            <li><Link href="/performance">Performance Data</Link></li>
            <li><Link href="/applications">Applications</Link></li>
            <li><Link href="/economics">Economics</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link href="/summary">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/investors">Investors</Link></li>
            <li><Link href="/partnerships">Partnerships</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/demo">Request Demo</Link></li>
            <li><Link href="/webinars">Webinars</Link></li>
            <li><Link href="/siemens-showcase">Design System</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Get in Touch</h4>
          <div className="contact-info">
            <p>
              <strong>Email:</strong><br />
              info@deep-engineering.com
            </p>
            <p>
              <strong>Phone:</strong><br />
              +49 (0) 123 456 7890
            </p>
          </div>
          <div className="cta-section">
            <SiemensButton 
              href="/contact" 
              variant="outline" 
              size="medium"
              fullWidth
            >
              Contact Us
            </SiemensButton>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Deep Engineering GmbH. All rights reserved.
            </p>
            <div className="footer-badges">
              <SiemensBadge variant="success" size="small">Sustainable</SiemensBadge>
              <SiemensBadge variant="industrial" size="small">Industrial Grade</SiemensBadge>
              <SiemensBadge variant="primary" size="small">Innovation</SiemensBadge>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .siemens-footer {
          background: linear-gradient(135deg, 
            var(--industrial-dark), 
            var(--industrial-medium)
          );
          color: white;
          margin-top: var(--spacing-3xl);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
        }

        .footer-section:first-child {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          padding: var(--spacing-3xl) 0 var(--spacing-xl) 0;
        }

        .footer-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          padding: var(--spacing-3xl) 0 var(--spacing-xl) 0;
        }

        .brand-section {
          grid-column: 1;
        }

        .logo-container {
          margin-bottom: var(--spacing-lg);
        }

        .footer-logo {
          height: 40px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .brand-description {
          font-family: var(--font-family-primary);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
          opacity: 0.9;
        }

        .powered-by {
          margin-top: var(--spacing-md);
        }

        .footer-section h4 {
          font-family: var(--font-family-primary);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: var(--spacing-lg);
          color: var(--siemens-accent);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: var(--spacing-sm);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-family: var(--font-family-primary);
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--siemens-accent);
        }

        .contact-section .contact-info {
          margin-bottom: var(--spacing-lg);
        }

        .contact-section .contact-info p {
          margin-bottom: var(--spacing-md);
          font-family: var(--font-family-primary);
          line-height: 1.5;
          opacity: 0.9;
        }

        .contact-section .contact-info strong {
          color: var(--siemens-accent);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: var(--spacing-lg) 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .copyright {
          font-family: var(--font-family-primary);
          margin: 0;
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .footer-badges {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .footer-section {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            padding: var(--spacing-xl) 0;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-badges {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
