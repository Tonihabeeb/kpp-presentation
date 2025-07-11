import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const IndustrialNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: '⚡' },
    { href: '/technology', label: 'Technology', icon: '⚙️' },
    { href: '/performance', label: 'Performance', icon: '📊' },
    { href: '/contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <>
      <nav className={`industrial-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-brand">
            <Link href="/" className="brand-link">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg viewBox="0 0 40 40" className="logo-svg">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1B365D" />
                        <stop offset="100%" stopColor="#FF6B35" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
                    <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="white" />
                    <circle cx="20" cy="20" r="4" fill="#FF6B35" />
                  </svg>
                </div>
                <div className="brand-text">
                  <span className="brand-title">DEEP ENGINEERING</span>
                  <span className="brand-subtitle">Kinetic Power Plant</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <div className="nav-indicator"></div>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="navbar-actions">
            <button className="btn btn-outline btn-sm">
              📄 Documentation
            </button>
            <button className="btn btn-primary btn-sm">
              🎯 Get Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
            <div className="mobile-nav-actions">
              <button className="btn btn-outline mobile-btn">
                📄 Documentation
              </button>
              <button className="btn btn-primary mobile-btn">
                🎯 Get Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        .industrial-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--neutral-200);
          transition: all var(--transition-base);
        }

        .industrial-navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-lg);
          border-bottom-color: var(--neutral-300);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-4) var(--space-6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-8);
        }

        .navbar-brand {
          flex-shrink: 0;
        }

        .brand-link {
          text-decoration: none;
          color: inherit;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          position: relative;
        }

        .logo-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary-blue);
          letter-spacing: 0.5px;
        }

        .brand-subtitle {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.75rem;
          color: var(--energy-orange);
          letter-spacing: 0.25px;
          text-transform: uppercase;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-lg);
          text-decoration: none;
          color: var(--neutral-600);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.9rem;
          position: relative;
          transition: all var(--transition-base);
          overflow: hidden;
        }

        .nav-link:hover {
          color: var(--primary-blue);
          background: var(--neutral-100);
          transform: translateY(-1px);
        }

        .nav-link:hover .nav-indicator {
          width: 100%;
        }

        .nav-icon {
          font-size: 1rem;
          opacity: 0.8;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-blue), var(--energy-orange));
          transition: width var(--transition-base);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
        }

        .mobile-menu-btn:hover {
          background: var(--neutral-100);
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          transform: rotate(0deg);
          transition: all var(--transition-base);
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: var(--primary-blue);
          border-radius: 2px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all var(--transition-base);
        }

        .hamburger span:nth-child(1) { top: 0px; }
        .hamburger span:nth-child(2) { top: 8px; }
        .hamburger span:nth-child(3) { top: 16px; }

        .hamburger.active span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.active span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid var(--neutral-200);
          box-shadow: var(--shadow-lg);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-base);
        }

        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-content {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          border-radius: var(--radius-lg);
          text-decoration: none;
          color: var(--neutral-600);
          font-family: var(--font-heading);
          font-weight: 500;
          transition: all var(--transition-base);
          border: 1px solid transparent;
        }

        .mobile-nav-link:hover {
          color: var(--primary-blue);
          background: var(--neutral-50);
          border-color: var(--neutral-200);
        }

        .mobile-nav-actions {
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--neutral-200);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .mobile-btn {
          width: 100%;
          justify-content: center;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: var(--z-modal-backdrop);
          backdrop-filter: blur(2px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .navbar-actions {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .navbar-container {
            padding: var(--space-3) var(--space-4);
          }

          .brand-title {
            font-size: 1rem;
          }

          .brand-subtitle {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .logo-container {
            gap: var(--space-2);
          }

          .logo-icon {
            width: 32px;
            height: 32px;
          }

          .brand-title {
            font-size: 0.9rem;
          }

          .brand-subtitle {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </>
  );
};

export default IndustrialNavbar;
