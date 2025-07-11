import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SiemensNavBar = () => {
  const router = useRouter();

  const navigationItems = [
    { title: 'Home', href: '/', icon: 'home' },
    {
      title: 'Technology',
      href: '/technology',
      icon: 'settings',
      dropdown: [
        { title: 'Core Technology', href: '/technology/core' },
        { title: 'Technical Specifications', href: '/technology/specifications' },
        { title: 'Performance Data', href: '/technology/performance' },
        { title: 'Overview', href: '/technology' }
      ]
    },
    {
      title: 'Solutions',
      href: '/solutions',
      icon: 'bulb',
      dropdown: [
        { title: 'Industrial Applications', href: '/applications' },
        { title: 'Market Analysis', href: '/markets/analysis' },
        { title: 'Case Studies', href: '/resources/case-studies' }
      ]
    },
    {
      title: 'Performance',
      href: '/performance',
      icon: 'trending-up',
      dropdown: [
        { title: 'Economics', href: '/economics' },
        { title: 'Financial Models', href: '/financial/models' },
        { title: 'ROI Analysis', href: '/performance' }
      ]
    },
    {
      title: 'Company',
      href: '/summary',
      icon: 'building',
      dropdown: [
        { title: 'About Us', href: '/summary' },
        { title: 'Leadership', href: '/company/about' },
        { title: 'Services', href: '/services' },
        { title: 'Investors', href: '/investors' }
      ]
    },
    { title: 'Contact', href: '/contact', icon: 'mail' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav className="siemens-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <Link href="/" className="brand-link">
            <Image 
              src="/images/deep-engineering-logo-full-height.svg" 
              alt="Deep Engineering - Kinetic Power Solutions" 
              className="brand-logo" 
              width={220} 
              height={70}
              style={{ width: 'auto', height: '48px' }}
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="navbar-nav">
          {navigationItems.map((item, index) => (
            <div key={index} className="nav-item">
              <Link 
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                <span className="nav-text">{item.title}</span>
                {item.dropdown && <span className="dropdown-indicator">▼</span>}
              </Link>
              
              {item.dropdown && (
                <div className="dropdown-menu">
                  {item.dropdown.map((dropItem, dropIndex) => (
                    <Link
                      key={dropIndex}
                      href={dropItem.href}
                      className="dropdown-item"
                    >
                      {dropItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="navbar-actions">
          <Link href="/contact" className="btn-primary">
            Get Quote
          </Link>
        </div>
      </div>

      <style jsx>{`
        .siemens-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 153, 153, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          height: 70px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 100%;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .brand-link:hover {
          transform: scale(1.02);
        }

        .brand-logo {
          filter: drop-shadow(0 2px 4px rgba(0, 153, 153, 0.3));
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.025em;
          transition: all 0.3s ease;
          border-radius: 6px;
          position: relative;
        }

        .nav-link:hover {
          color: #00e5ff;
          background: rgba(0, 153, 153, 0.1);
          transform: translateY(-1px);
        }

        .nav-link.active {
          color: #00e5ff;
          background: rgba(0, 153, 153, 0.15);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: #009999;
          border-radius: 1px;
        }

        .nav-text {
          margin-right: 0.5rem;
        }

        .dropdown-indicator {
          font-size: 0.7rem;
          opacity: 0.7;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .dropdown-indicator {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(26, 26, 26, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 153, 153, 0.2);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
        }

        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          color: #00e5ff;
          background: rgba(0, 153, 153, 0.1);
          padding-left: 1.5rem;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #009999, #00bcd4);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.025em;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 153, 153, 0.3);
          box-shadow: 0 2px 8px rgba(0, 153, 153, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #00bcd4, #00e5ff);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 153, 153, 0.4);
        }

        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .navbar-nav {
            display: none;
          }
          
          .navbar-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default SiemensNavBar;
