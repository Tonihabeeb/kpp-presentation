import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const navItems = [
  { label: '🏠 Home', href: '/' },
  { 
    label: '🔬 Technology', 
    href: '/technology',
    dropdown: [
      { label: 'Core Technology', href: '/technology/core' },
      { label: 'Technical Specifications', href: '/technology/specifications' },
      { label: 'Performance Data', href: '/technology/performance' },
      { label: 'Technology Overview', href: '/technology/overview' },
      { label: 'Technology Comparison', href: '/technology/comparison' }
    ]
  },
  { 
    label: '📋 Presentation', 
    href: '/presentation',
    dropdown: [
      { label: 'Slide 1 - Introduction', href: '/slides/1' },
      { label: 'Slide 2 - Technology', href: '/slides/2' },
      { label: 'Slide 3 - Performance', href: '/slides/3' },
      { label: 'Slide 4 - Implementation', href: '/slides/4' },
      { label: 'Slide 5 - Conclusion', href: '/slides/5' },
      { label: 'Full Presentation', href: '/presentation/full' }
    ]
  },
  { 
    label: '📊 Resources', 
    href: '/resources',
    dropdown: [
      { label: 'Major Projects', href: '/resources/projects' },
      { label: 'Performance Data', href: '/performance' },
      { label: 'Economics', href: '/resources/economics' },
      { label: 'Demo Materials', href: '/resources/demo' }
    ]
  },
  { 
    label: '🎓 Webinars', 
    href: '/webinars',
    dropdown: [
      { label: 'Introduction to KPP', href: '/webinars/introduction' },
      { label: 'Technology Comparison', href: '/webinars/comparison' },
      { label: 'Financial Benefits', href: '/webinars/financial' }
    ]
  },
  { 
    label: '🏢 Company', 
    href: '/company',
    dropdown: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Services', href: '/company/services' },
      { label: 'Investors', href: '/company/investors' }
    ]
  },
  { label: '🚀 Analytics', href: '/analytics' },
  { label: '⚙️ Admin', href: '/administration' },
];

export default function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
                <Image 
                  src="/images/deep-engineering-logo-main.png" 
                  alt="Deep Engineering - Kinetic Power Plant Technology" 
                  className="logo-image"
                  width={220}
                  height={55}
                  priority
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
            {navItems.map((item, index) => (
              <li key={item.href} role="none" className="nav-item">
                {item.dropdown ? (
                  <div 
                    className="nav-dropdown"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link dropdown-trigger ${router.pathname === item.href ? 'active' : ''}`}
                      onClick={(e) => {
                        // On mobile, toggle dropdown instead of navigating
                        if (window.innerWidth <= 768) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === index ? null : index);
                        } else {
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }
                      }}
                      role="menuitem"
                      aria-expanded={activeDropdown === index}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="dropdown-arrow">▼</span>
                    </Link>
                    <div className={`dropdown-menu ${activeDropdown === index ? 'open' : ''}`}>
                      <div className="dropdown-content">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="dropdown-item"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={router.pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li role="none">
              <Link
                href="/contact"
                className={`contact-cta ${router.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                📞 Contact
              </Link>
            </li>
            <li role="none">
              <Link
                href="/quote"
                className={`contact-cta ${router.pathname === '/quote' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                💰 Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <style jsx>{`
        .professional-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .professional-navbar.scrolled {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 85px;
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
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .brand-logo::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .brand-logo:hover::before {
          opacity: 0.2;
        }
        
        .logo-image {
          height: 100%;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover .logo-image {
          transform: scale(1.05);
          filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
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
          background: rgba(59, 130, 246, 0.1);
        }
        
        .mobile-menu-toggle:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          background: rgba(59, 130, 246, 0.05);
        }
        
        .mobile-menu-toggle span {
          width: 22px;
          height: 2px;
          background: #e2e8f0;
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
        
        .nav-item {
          position: relative;
        }
        
        .nav-dropdown {
          position: relative;
        }
        
        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .dropdown-arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
          color: #94a3b8;
        }
        
        .nav-dropdown:hover .dropdown-arrow,
        .dropdown-menu.open ~ .dropdown-trigger .dropdown-arrow {
          transform: rotate(180deg);
          color: #3b82f6;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(59, 130, 246, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1000;
          min-width: 250px;
          margin-top: 0.5rem;
        }
        
        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-content {
          padding: 1rem 0;
        }
        
        .dropdown-item {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #e2e8f0;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          border-left: 3px solid transparent;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .dropdown-item:hover {
          color: #ffffff;
          background: rgba(59, 130, 246, 0.1);
          border-left-color: #3b82f6;
          transform: translateX(4px);
        }
        
        .dropdown-item:hover::before {
          width: 3px;
        }
        
        .nav-link {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #e2e8f0;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          min-height: 44px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-link:hover {
          color: #ffffff;
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .nav-link:hover::before {
          opacity: 1;
        }
        
        .nav-link:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          background: rgba(59, 130, 246, 0.15);
        }
        
        .nav-link.active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border-color: rgba(59, 130, 246, 0.4);
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 1.5rem;
          right: 1.5rem;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .contact-cta {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .contact-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0891b2 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .contact-cta::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
          z-index: 2;
        }
        
        .contact-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .contact-cta:hover::before {
          opacity: 1;
        }
        
        .contact-cta:hover::after {
          left: 100%;
        }
        
        .contact-cta:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        .contact-cta.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0891b2 100%);
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
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(148, 163, 184, 0.2);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            flex-direction: column;
            gap: 0;
            padding: 1.5rem 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
          
          /* Mobile dropdown styles */
          .dropdown-menu {
            position: static;
            background: rgba(30, 41, 59, 0.95);
            border: none;
            border-radius: 8px;
            margin: 0.5rem 1rem;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
            min-width: auto;
          }
          
          .dropdown-content {
            padding: 0.5rem 0;
          }
          
          .dropdown-item {
            padding: 0.75rem 2rem;
            margin: 0;
            font-size: 0.9rem;
            border-left: none;
            border-radius: 0;
          }
          
          .dropdown-item:hover {
            transform: none;
            background: rgba(59, 130, 246, 0.15);
          }
          
          .dropdown-arrow {
            margin-left: auto;
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