import '../styles/globals.css';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <footer className="professional-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-container">
                <div className="brand-logo">
                  <img src="/images/deep-engineering-logo-main.png" alt="Deep Engineering" style={{height: '40px', width: 'auto'}} />
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
                  <li><a href="/services">All Services</a></li>
                  <li><a href="/technology">KPP Technology</a></li>
                  <li><a href="/services">Oil & Gas</a></li>
                  <li><a href="/services">Business Consultancy</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/projects">Major Projects</a></li>
                  <li><a href="/performance">Performance Data</a></li>
                  <li><a href="/timeline">Project Timeline</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><a href="/summary">About</a></li>
                  <li><a href="/company/about">Leadership</a></li>
                  <li><a href="mailto:info@deepengineering.co">Email Us</a></li>
                  <li><a href="/partnerships">Partners</a></li>
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
