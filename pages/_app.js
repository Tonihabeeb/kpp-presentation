import '../styles/globals.css';
import EnterpriseNavBar from '../components/EnterpriseNavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <EnterpriseNavBar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <footer className="enterprise-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="footer-logo" />
              <div className="footer-brand-text">
                <h3>Deep Engineering Co.</h3>
                <p>Leading the future of renewable energy with revolutionary KPP technology</p>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/solutions/small-scale">Small Scale Systems</a></li>
              <li><a href="/solutions/medium-scale">Medium Scale Systems</a></li>
              <li><a href="/solutions/large-scale">Large Scale Systems</a></li>
              <li><a href="/solutions/custom">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li><a href="/technology/core">Core Technology</a></li>
              <li><a href="/technology/specifications">Specifications</a></li>
              <li><a href="/technology/innovation">Innovation</a></li>
              <li><a href="/technology/performance">Performance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/company/about">About Us</a></li>
              <li><a href="/company/leadership">Leadership</a></li>
              <li><a href="/company/global">Global Presence</a></li>
              <li><a href="/company/careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📧 info@deepengineering.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Global Headquarters</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Deep Engineering Co. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx global>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .main-content {
          flex: 1;
          padding-top: 80px;
        }
        
        .enterprise-footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          margin-top: auto;
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 3rem;
        }
        
        .footer-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #0070f3;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.75rem;
        }
        
        .footer-section a {
          color: #ccc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: #0070f3;
        }
        
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .footer-logo {
          width: 50px;
          height: 40px;
          object-fit: contain;
        }
        
        .footer-logo-text {
          width: 50px;
          height: 40px;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          border-radius: 8px;
        }
        
        .footer-brand-text h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: white;
        }
        
        .footer-brand-text p {
          color: #ccc;
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .contact-info {
          margin-bottom: 1.5rem;
        }
        
        .contact-info p {
          margin: 0.5rem 0;
          color: #ccc;
          font-size: 0.9rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ccc;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: #0070f3;
          color: white;
          transform: translateY(-2px);
        }
        
        .social-links svg {
          width: 20px;
          height: 20px;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }
        
        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-bottom p {
          margin: 0;
          color: #ccc;
          font-size: 0.9rem;
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        
        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #0070f3;
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          .main-content {
            padding-top: 70px;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }
          
          .footer-brand {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default MyApp; 