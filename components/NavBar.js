import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Summary', href: '/summary' },
  { label: 'Technology', href: '/technology' },
  { label: 'Performance', href: '/performance' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <div className="logo-container">
              <div className="logo-text">Deep Engineering</div>
              <div className="logo-subtitle">KPP Technology</div>
            </div>
          </Link>
        </div>
        
        <div className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href} className={router.pathname === item.href ? 'active' : ''}>
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <style jsx>{`
        .navbar {
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
        }
        
        .navbar-logo {
          flex-shrink: 0;
        }
        
        .logo-container {
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1;
        }
        
        .logo-subtitle {
          font-size: 0.8rem;
          color: #0070f3;
          font-weight: 500;
          margin-top: 0.2rem;
        }
        
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .hamburger {
          width: 25px;
          height: 3px;
          background: #1a1a1a;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        
        .hamburger.open:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.open:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.open:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .navbar-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .navbar-links li {
          position: relative;
        }
        
        .navbar-links li a {
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .navbar-links li a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 112, 243, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .navbar-links li a:hover::before {
          left: 100%;
        }
        
        .navbar-links li a:hover {
          color: #0070f3;
          background: rgba(0, 112, 243, 0.05);
          transform: translateY(-2px);
        }
        
        .navbar-links li.active a {
          color: #0070f3;
          background: rgba(0, 112, 243, 0.1);
          font-weight: 600;
        }
        
        .navbar-links li.active a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: #0070f3;
          border-radius: 1px;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
          }
          
          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .navbar-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .navbar-links li {
            width: 100%;
          }
          
          .navbar-links li a {
            display: block;
            padding: 1rem 2rem;
            border-radius: 0;
            text-align: center;
          }
          
          .navbar-links li.active a::after {
            display: none;
          }
          
          .logo-text {
            font-size: 1.2rem;
          }
          
          .logo-subtitle {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </nav>
  );
} 