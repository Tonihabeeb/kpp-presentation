import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Close dropdowns when clicking outside or route changes
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.pathname]);

  // Handle scroll detection for navigation transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Only add scroll listener on home page
    if (router.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Always solid on non-home pages
    }
  }, [router.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Handle dropdown hover with delay
  const handleDropdownEnter = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  const getNavLinkClass = (href) => {
    return `nav-link${router.pathname === href ? ' active' : ''}`;
  };

  const navigationItems = [
    { title: 'Home', href: '/' },
    {
      title: 'Technology',
      href: '/technology',
      dropdown: [
        { title: 'Core Technology', href: '/technology/core' },
        { title: 'Technical Specifications', href: '/technology/specifications' },
        { title: 'Performance Data', href: '/technology/performance' },
        { title: 'Overview', href: '/technology' }
      ]
    },
    {
      title: 'Presentation',
      href: '/slides/1',
      dropdown: [
        { title: 'Slide 1 - Introduction', href: '/slides/1' },
        { title: 'Slide 2 - Technology', href: '/slides/2' },
        { title: 'Slide 3 - Performance', href: '/slides/3' },
        { title: 'Slide 4 - Implementation', href: '/slides/4' },
        { title: 'Slide 5 - Conclusion', href: '/slides/5' },
        { title: 'Full Presentation', href: '/presentation-home' }
      ]
    },
    {
      title: 'Resources',
      href: '/projects',
      dropdown: [
        { title: 'Major Projects', href: '/projects' },
        { title: 'Performance Data', href: '/performance' },
        { title: 'Economics', href: '/economics' },
        { title: 'Demo', href: '/demo' }
      ]
    },
    {
      title: 'Webinars',
      href: '/webinars/intro-kpp',
      dropdown: [
        { title: 'Introduction to KPP', href: '/webinars/intro-kpp' },
        { title: 'Technology Comparison', href: '/webinars/technology-comparison' },
        { title: 'Financial Benefits', href: '/webinars/financial-benefits' }
      ]
    },
    {
      title: 'Company',
      href: '/summary',
      dropdown: [
        { title: 'About Us', href: '/summary' },
        { title: 'Leadership', href: '/company/about' },
        { title: 'Services', href: '/services' },
        { title: 'Investors', href: '/investors' }
      ]
    },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <div className="app-container">
      <nav className="professional-navbar" data-transparent={router.pathname === '/' && !isScrolled} suppressHydrationWarning>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link href="/" className="logo-link">
              <Image src="/images/deep-engineering-logo.png" alt="Deep Engineering" className="logo" width={40} height={40} />
              <span className="logo-text">Deep Engineering</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link 
                  href={item.href} 
                  className={getNavLinkClass(item.href)}
                >
                  {item.title}
                  {item.dropdown && <span className="dropdown-arrow">▼</span>}
                </Link>
                
                {item.dropdown && activeDropdown === index && (
                  <div 
                    className="dropdown-menu"
                    onMouseEnter={() => handleDropdownEnter(index)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropdownItem.href}
                        className="dropdown-item"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-cta">
            <Link href="/contact" className="cta-button">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} suppressHydrationWarning>
          {navigationItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              <Link href={item.href} className="mobile-nav-link">
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="mobile-dropdown">
                  {item.dropdown.map((dropdownItem, dropIndex) => (
                    <Link
                      key={dropIndex}
                      href={dropdownItem.href}
                      className="mobile-dropdown-item"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-nav-item">
            <Link href="/contact" className="mobile-nav-link cta-mobile">
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <footer className="professional-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-container">
                <div className="brand-logo">
                  <Image src="/images/white-deep-engineering-logo.svg" alt="Deep Engineering" width={40} height={40} style={{height: '40px', width: 'auto'}} />
                </div>
                <div className="brand-text">
                  <h3>Deep Engineering Co.</h3>
                  <p>Revolutionary KPP technology for sustainable energy solutions worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><Link href="/services">All Services</Link></li>
                  <li><Link href="/technology">KPP Technology</Link></li>
                  <li><Link href="/services">Oil & Gas</Link></li>
                  <li><Link href="/services">Business Consultancy</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><Link href="/projects">Major Projects</Link></li>
                  <li><Link href="/performance">Performance Data</Link></li>
                  <li><a href="/timeline">Project Timeline</a></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/summary">About</Link></li>
                  <li><Link href="/company/about">Leadership</Link></li>
                  <li><a href="mailto:info@deepengineering.co">Email Us</a></li>
                  <li><Link href="/partnerships">Partners</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact Us</h4>
                <address>
                  <strong>Iraq Office:</strong><br />
                  Italian Village 1, Villa 267<br />
                  Erbil, Kurdistan Region, Iraq<br />
                  <a href="mailto:info.iq@deepengineering.co">info.iq@deepengineering.co</a>
                </address>
                <address>
                  <strong>UK Office:</strong><br />
                  71-75 Shelton Street, Covent Garden<br />
                  London, WC2H 9JQ, United Kingdom<br />
                  <a href="mailto:info.uk@deepengineering.co">info.uk@deepengineering.co</a>
                </address>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <p>&copy; 2025 Deep Engineering Co. All rights reserved.</p>
              <div className="legal-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
