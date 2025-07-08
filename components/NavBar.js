import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Summary', href: '/summary' },
  { label: 'Services', href: '/services' },
  { label: 'Technology', href: '/technology' },
  { label: 'Projects', href: '/projects' },
  { label: 'Performance', href: '/performance' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`professional-navbar ${hasScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/" aria-label="Deep Engineering - Home">
            <div className="brand-container">
              <div className="brand-logo">
                <img 
                  src="/images/deep-engineering-logo-main.png" 
                  alt="Deep Engineering - Kinetic Power Plant Technology" 
                  className="logo-image" 
                />
              </div>
            </div>
          </Link>
        </div>
        
        <div className="navbar-menu">
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul 
            className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}
            id="main-navigation"
            role="menubar"
          >
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <Link 
                  href={item.href} 
                  className={`nav-link ${router.pathname === item.href ? 'active' : ''} ${item.label === 'Contact' ? 'contact-cta' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                  aria-current={router.pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <style jsx>{`
        .professional-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.99);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.15);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .professional-navbar.scrolled {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 1px 25px rgba(42, 87, 165, 0.04);
          border-bottom: 1px solid rgba(229, 231, 235, 0.3);
        }
        
        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        
        .navbar-brand {
          display: flex;
          align-items: center;
        }
        
        .brand-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: inherit;
        }
        
        .brand-logo {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-image {
          height: 100%;
          width: auto;
          max-width: 200px;
          object-fit: contain;
        }
        
        .navbar-menu {
          display: flex;
          align-items: center;
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.2s ease;
          border: none;
          background: transparent;
        }
        
        .mobile-menu-toggle:hover {
          background: rgba(42, 87, 165, 0.1);
        }
        
        .mobile-menu-toggle:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
          background: rgba(42, 87, 165, 0.05);
        }
        
        .mobile-menu-toggle span {
          width: 20px;
          height: 2px;
          background: var(--color-text);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .navbar-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.5rem;
        }
        
        .nav-link {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.25rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          min-height: 44px; /* Accessibility: minimum touch target */
        }
        
        .nav-link:hover {
          color: var(--color-primary);
          background: rgba(42, 87, 165, 0.08);
          transform: translateY(-1px);
        }
        
        .nav-link:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
          background: rgba(42, 87, 165, 0.1);
        }
        
        .nav-link.active {
          color: var(--color-primary);
          background: rgba(42, 87, 165, 0.12);
          font-weight: 600;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 1.25rem;
          right: 1.25rem;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .contact-cta {
          background-color: var(--color-primary);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          min-height: 44px; /* Accessibility: minimum touch target */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(42, 87, 165, 0.25);
          transition: all 0.2s ease;
        }
        
        .contact-cta:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(42, 87, 165, 0.3);
        }
        
        .contact-cta:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }

        .contact-cta:hover {
          background-color: #2A57A5;
          color: #F3F4F6;
        }

        .contact-cta.active {
          background-color: #2A57A5;
          color: #F3F4F6;
        }
        
        /* Accessibility: Focus styles */
        .nav-link:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        .mobile-menu-toggle:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        /* Skip to main content link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: var(--color-primary);
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 1001;
          border-radius: 4px;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Improved contrast for text */
        .nav-link {
          // ...existing code...
        }
        
        @media (max-width: 1024px) {
          .navbar-container {
            padding: 0 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1rem;
            height: 70px;
          }
          
          .brand-name {
            font-size: 1rem;
          }
          
          .brand-tagline {
            font-size: 0.6875rem;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.97);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(229, 231, 235, 0.4);
            box-shadow: 0 8px 25px rgba(42, 87, 165, 0.1);
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .navbar-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-link {
            padding: 1rem 1.5rem;
            margin: 0.25rem 1rem;
            font-size: 1rem;
            min-height: 48px; /* Larger touch targets on mobile */
            border-radius: 12px;
          }

          .contact-cta {
            margin: 0.5rem 1rem;
            text-align: center;
            background-color: #3B82F6;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 0.75rem;
          }
          
          .brand-container {
            gap: 0.5rem;
          }
          
          .brand-logo {
            height: 40px;
          }
          
          .logo-image {
            max-width: 150px;
          }
        }
      `}</style>
    </nav>
  );
}