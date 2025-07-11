import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EnterpriseNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Solutions',
      href: '/solutions',
      dropdown: [
        { title: 'Small Scale (25-100KW)', href: '/solutions/small-scale', description: 'Residential & Small Commercial' },
        { title: 'Medium Scale (100KW-1MW)', href: '/solutions/medium-scale', description: 'Commercial & Industrial' },
        { title: 'Large Scale (1MW+)', href: '/solutions/large-scale', description: 'Utility & Enterprise' },
        { title: 'Custom Solutions', href: '/solutions/custom', description: 'Tailored Implementations' },
        { title: 'Hybrid Systems', href: '/solutions/hybrid', description: 'Integrated Energy Solutions' }
      ]
    },
    {
      title: 'Technology',
      href: '/technology',
      dropdown: [
        { title: 'Core Technology', href: '/technology/core', description: 'Buoyancy-Driven Power Generation' },
        { title: 'Technical Specifications', href: '/technology/specifications', description: 'Engineering Details' },
        { title: 'Innovation Pipeline', href: '/technology/innovation', description: 'R&D and Future Developments' },
        { title: 'Patents & IP', href: '/technology/patents', description: 'Intellectual Property Portfolio' },
        { title: 'Performance Data', href: '/technology/performance', description: 'Real-World Results' }
      ]
    },
    {
      title: 'Markets',
      href: '/markets',
      dropdown: [
        { title: 'Industry Applications', href: '/applications', description: 'Sector-Specific Solutions' },
        { title: 'Market Analysis', href: '/markets/analysis', description: 'Industry Trends & Opportunities' },
        { title: 'Competitive Landscape', href: '/markets/competitive', description: 'Market Positioning' },
        { title: 'Regional Markets', href: '/markets/regional', description: 'Global Market Presence' },
        { title: 'Economic Impact', href: '/economics', description: 'ROI & Financial Analysis' }
      ]
    },
    {
      title: 'Resources',
      href: '/resources',
      dropdown: [
        { title: 'Case Studies', href: '/resources/case-studies', description: 'Success Stories & Implementations' },
        { title: 'Technical Documentation', href: '/resources/documentation', description: 'Engineering Guides' },
        { title: 'Industry Reports', href: '/resources/reports', description: 'Market Research & Whitepapers' },
        { title: 'Webinars & Events', href: '/resources/events', description: 'Educational Content' },
        { title: 'News & Updates', href: '/resources/news', description: 'Company & Industry News' }
      ]
    },
    {
      title: 'Company',
      href: '/company',
      dropdown: [
        { title: 'About Deep Engineering', href: '/company/about', description: 'Company Overview & Mission' },
        { title: 'Leadership Team', href: '/company/leadership', description: 'Executive Team & Board' },
        { title: 'Global Presence', href: '/company/global', description: 'Offices & Operations' },
        { title: 'Partnerships', href: '/company/partnerships', description: 'Strategic Alliances' },
        { title: 'Investor Relations', href: '/company/investors', description: 'Financial Information' },
        { title: 'Careers', href: '/company/careers', description: 'Join Our Team' }
      ]
    }
  ];

  const handleDropdownHover = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`enterprise-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <Image 
              src="/images/deep-engineering-logo.png" 
              alt="Deep Engineering Co." 
              className="logo-image" 
              width={40} 
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="logo-text">
              <span className="company-name">Deep Engineering Co.</span>
              <span className="tagline">Kinetic Power Solutions</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu desktop-menu">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => handleDropdownHover(index)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href={item.href} className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}>
                {item.title}
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </Link>
              
              {item.dropdown && activeDropdown === index && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="dropdown-item"
                      >
                        <div className="dropdown-item-content">
                          <h4 className="dropdown-item-title">{dropdownItem.title}</h4>
                          <p className="dropdown-item-description">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="nav-actions">
          {/* Search */}
          <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
            <button
              className="search-toggle"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search solutions, resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-submit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Language Selector */}
          <div className="language-selector">
            <button className="language-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              EN
            </button>
            <div className="language-dropdown">
              <a href="#" className="language-option">English</a>
              <a href="#" className="language-option">Español</a>
              <a href="#" className="language-option">Français</a>
              <a href="#" className="language-option">Deutsch</a>
              <a href="#" className="language-option">中文</a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navigationItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              <Link href={item.href} className="mobile-nav-link">
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="mobile-dropdown">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
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
          <div className="mobile-cta">
            <Link href="/contact" className="btn btn-secondary mobile-btn">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enterprise-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }
        
        .enterprise-navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
        }
        
        .logo-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .logo-link:hover {
          transform: scale(1.02);
        }
        
        .logo-image {
          width: 50px;
          height: 40px;
          object-fit: contain;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        
        .company-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.2;
        }
        
        .tagline {
          font-size: 0.8rem;
          color: var(--color-primary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          color: var(--color-text);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
          background: rgba(42, 87, 165, 0.1);
        }
        
        .dropdown-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }
        
        .nav-item:hover .dropdown-icon {
          transform: rotate(180deg);
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 320px;
          background: var(--color-surface);
          border-radius: 12px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
          padding: 1rem;
          margin-top: 0.5rem;
          opacity: 0;
          transform: translateY(-10px);
          animation: dropdownFadeIn 0.3s ease forwards;
        }
        
        @keyframes dropdownFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .dropdown-item {
          display: block;
          padding: 1rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .dropdown-item:hover {
          background: rgba(42, 87, 165, 0.1);
        }
        
        .dropdown-item-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0 0 0.3rem 0;
        }
        
        .dropdown-item-description {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .search-container {
          position: relative;
        }
        
        .search-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          color: #D1D5DB;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .search-toggle:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
        }
        
        .search-toggle svg {
          width: 20px;
          height: 20px;
        }
        
        .search-form {
          position: absolute;
          top: 100%;
          right: 0;
          width: 300px;
          background: #0A0A0A;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          border: 1px solid #D1D5DB;
          padding: 1rem;
          margin-top: 0.5rem;
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .search-container.open .search-form {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .search-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s ease;
          background: #0A0A0A;
          color: #F3F4F6;
        }
        
        .search-input:focus {
          border-color: #3B82F6;
        }
        
        .search-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .search-submit:hover {
          background: #2A57A5;
        }
        
        .search-submit svg {
          width: 16px;
          height: 16px;
        }
        
        .language-selector {
          position: relative;
        }
        
        .language-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid #D1D5DB;
          background: transparent;
          color: #D1D5DB;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .language-toggle:hover {
          border-color: #3B82F6;
          color: #3B82F6;
        }
        
        .language-toggle svg {
          width: 16px;
          height: 16px;
        }
        
        .language-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: #0A0A0A;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          border: 1px solid #D1D5DB;
          padding: 0.5rem;
          margin-top: 0.5rem;
          min-width: 120px;
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .language-selector:hover .language-dropdown {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .language-option {
          display: block;
          padding: 0.5rem 1rem;
          color: #D1D5DB;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .language-option:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
        }
        
        .cta-buttons {
          display: flex;
          gap: 0.5rem;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3B82F6 0%, #2A57A5 100%);
          color: #F3F4F6;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #3B82F6;
          border: 2px solid #3B82F6;
        }
        
        .btn-secondary:hover {
          background: #3B82F6;
          color: #F3F4F6;
          transform: translateY(-2px);
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #F3F4F6;
          transition: all 0.3s ease;
        }
        
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: #0A0A0A;
          border-bottom: 1px solid #D1D5DB;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          transform: translateY(0);
        }
        
        .mobile-menu-content {
          padding: 2rem;
        }
        
        .mobile-nav-item {
          margin-bottom: 1rem;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 1rem 0;
          color: #F3F4F6;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border-bottom: 1px solid #D1D5DB;
        }
        
        .mobile-dropdown {
          padding-left: 1rem;
          margin-top: 0.5rem;
        }
        
        .mobile-dropdown-item {
          display: block;
          padding: 0.75rem 0;
          color: #D1D5DB;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .mobile-btn {
          text-align: center;
          padding: 1rem;
        }
        
        .desktop-menu {
          display: flex;
        }
        
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .cta-buttons {
            display: none;
          }
          
          .nav-container {
            padding: 0 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .nav-container {
            height: 70px;
          }
          
          .mobile-menu {
            top: 70px;
            max-height: calc(100vh - 70px);
          }
          
          .company-name {
            font-size: 1rem;
          }
          
          .tagline {
            font-size: 0.7rem;
          }
          
          .logo-image {
            width: 40px;
            height: 32px;
          }
          
          .search-form {
            width: 250px;
          }
        }
      `}</style>
    </nav>
  );
} 