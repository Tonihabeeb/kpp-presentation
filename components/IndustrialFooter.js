import React from 'react';
import Link from 'next/link';

const IndustrialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
      color: 'white',
      marginTop: 'auto',
      padding: '3rem 0 1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Deep Engineering</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Kinetic Power Plant Technology
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Revolutionary kinetic energy systems delivering sustainable power solutions 
              for industrial and commercial applications worldwide.
            </p>
          </div>

          {/* Technology Links */}
          <div>
            <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Technology</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/technology" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  How it Works
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/performance" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Performance Data
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/specifications" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Technical Specifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/solutions/industrial" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Industrial Power
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/solutions/grid" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Grid Integration
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/solutions/custom" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Custom Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/careers" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              &copy; {currentYear} Deep Engineering. All rights reserved.
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Kinetic Power Plant Technology
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndustrialFooter;
