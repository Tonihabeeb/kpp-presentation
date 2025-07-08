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
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="currentColor"/>
                    <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
                  </svg>
                </div>
                <div className="brand-text">
                  <h3>Deep Engineering Co.</h3>
                  <p>Revolutionary KPP technology for sustainable energy solutions</p>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Solutions</h4>
                <ul>
                  <li><a href="/solutions">All Solutions</a></li>
                  <li><a href="/technology">Technology</a></li>
                  <li><a href="/performance">Performance</a></li>
                  <li><a href="/applications">Applications</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/resources/center">Resource Center</a></li>
                  <li><a href="/resources/case-studies">Case Studies</a></li>
                  <li><a href="/economics">Economics</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><a href="/summary">About</a></li>
                  <li><a href="/timeline">Timeline</a></li>
                  <li><a href="/partnerships">Partners</a></li>
                  <li><a href="/investors">Investors</a></li>
                </ul>
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
