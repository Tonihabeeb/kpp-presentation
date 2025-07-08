import Image from 'next/image';

export default function Contact() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-contact-content" className="skip-link">Skip to main content</a>
      
      <div className="contact-page">
        <section className="page-hero" aria-label="Contact page hero section">
          <div className="hero-content">
            <h1>Contact & Next Steps</h1>
            <p>The Future of Sustainable Energy Generation</p>
          </div>
        </section>

        <main id="main-contact-content" className="page-content">
        <div className="summary-section">
          <h2>🎯 Key Takeaways</h2>
          <div className="takeaways-grid">
            <div className="takeaway-card">
              <div className="takeaway-icon">🔬</div>
              <h3>Physics-Based Innovation</h3>
              <p>KPP leverages well-established physics principles (Archimedes' Principle and Newton's Laws) in an innovative configuration to generate continuous power.</p>
            </div>
            
            <div className="takeaway-card">
              <div className="takeaway-icon">🌱</div>
              <h3>Zero-Emission Technology</h3>
              <p>No fuel, no combustion, no emissions. KPP produces clean electricity 24/7 using only buoyancy and gravity.</p>
            </div>
            
            <div className="takeaway-card">
              <div className="takeaway-icon">⚡</div>
              <h3>Proven Performance</h3>
              <p>100KW+ demonstrated capacity with ~1% power consumption for air compression. System operates continuously with minimal maintenance.</p>
            </div>
            
            <div className="takeaway-card">
              <div className="takeaway-icon">🌍</div>
              <h3>Global Scalability</h3>
              <p>Successfully deployed across multiple regions, demonstrating versatility and applicability for various market segments.</p>
            </div>
          </div>
        </div>

        <div className="competitive-advantages">
          <h2>🏆 Competitive Advantages</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">📜</div>
              <h3>Patent Protection</h3>
              <p>Comprehensive intellectual property covering buoyancy power plant design and methodology</p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">✅</div>
              <h3>Proven Technology</h3>
              <p>Successfully tested and deployed in Germany and Serbia with ongoing global expansion</p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">📈</div>
              <h3>Scalable Solution</h3>
              <p>Modular design allows adaptation from small residential to large industrial applications</p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">🌿</div>
              <h3>Environmental Leadership</h3>
              <p>Zero-emission technology contributing to global sustainability goals</p>
            </div>
          </div>
        </div>

        <div className="next-steps">
          <h2>🚀 Next Steps</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Technology Demonstration</h3>
                <p>Schedule a live demonstration of KPP technology at your facility to see the system in action.</p>
                <div className="step-features">
                  <span>Live system operation</span>
                  <span>Performance metrics</span>
                  <span>Technical Q&A</span>
                </div>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Feasibility Study</h3>
                <p>Conduct site-specific analysis and energy requirements assessment for your location.</p>
                <div className="step-features">
                  <span>Site evaluation</span>
                  <span>Energy audit</span>
                  <span>ROI analysis</span>
                </div>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Pilot Project</h3>
                <p>Implement small-scale pilot to validate performance in your specific environment.</p>
                <div className="step-features">
                  <span>Pilot installation</span>
                  <span>Performance monitoring</span>
                  <span>Data collection</span>
                </div>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Full Deployment</h3>
                <p>Scale up to full production capacity based on pilot results and performance data.</p>
                <div className="step-features">
                  <span>Full-scale installation</span>
                  <span>System integration</span>
                  <span>Ongoing support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>📞 Contact Information</h2>
          <div className="contact-content">
            <div className="contact-details">
              <div className="company-info">
                <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="company-logo" />
                <h3>Deep Engineering Co.</h3>
                <p className="company-tagline">Global patent-holder of Kinetic Power Plant (KPP®) technology</p>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-text">
                    <strong>Website:</strong>
                    <span>www.deepengineering.com</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <strong>Email:</strong>
                    <span>info@deepengineering.co</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <strong>Iraq Office:</strong>
                    <span>+964 751 235 3179<br />+964 750 466 3879</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <strong>UK Office:</strong>
                    <span>+44 2891 6370 23</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>Iraq Address:</strong>
                    <span>Iraq, Erbil, Justice Tower F-14 #20</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🏢</div>
                  <div className="contact-text">
                    <strong>UK Address:</strong>
                    <span>129 Station Road, London, NW4 4NJ</span>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h4>Get in Touch</h4>
                <form className="inquiry-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Company" className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="4" className="form-textarea"></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
            
            <div className="contact-visual">
              <div className="contact-img-placeholder">
                <div className="placeholder-content">
                  <h4>Get in Touch</h4>
                  <p>Our team is ready to help you implement KPP technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-note">
          <div className="note-content">
            <p>
              <em>Thank you for your interest in Kinetic Power Plant technology. Together, we can revolutionize sustainable energy generation and create a cleaner, more sustainable future for generations to come.</em>
            </p>
            <div className="note-signature">
              <strong>Deep Engineering Co.</strong><br />
              <span>Leading the Future of Sustainable Energy</span>
            </div>
          </div>
        </div>
        </main>
      </div>

      <style jsx>{`
        .contact-page {
          background: var(--color-background);
          min-height: 100vh;
        }
        
        .page-hero {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        .page-hero h1 {
          font-size: 3rem;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }
        
        .page-hero p {
          font-size: 1.3rem;
          margin: 0;
          opacity: 0.9;
        }
        
        .page-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .summary-section {
          margin-bottom: 4rem;
        }
        
        .summary-section h2 {
          font-size: 2.5rem;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .takeaways-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .takeaway-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .takeaway-card:hover {
          transform: translateY(-5px);
        }
        
        .takeaway-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .takeaway-card h3 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .takeaway-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .competitive-advantages {
          margin-bottom: 4rem;
        }
        
        .competitive-advantages h2 {
          font-size: 2.5rem;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .advantage-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .advantage-card:hover {
          transform: translateY(-5px);
        }
        
        .advantage-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .advantage-card h3 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .advantage-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .next-steps {
          margin-bottom: 4rem;
        }
        
        .next-steps h2 {
          font-size: 2.5rem;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .step-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          display: flex;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .step-card:hover {
          transform: translateY(-5px);
        }
        
        .step-number {
          background: #0070f3;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .step-content h3 {
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          font-size: 1.2rem;
        }
        
        .step-content p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .step-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .step-features span {
          background: #f0f8ff;
          color: #0070f3;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .contact-section {
          margin-bottom: 4rem;
        }
        
        .contact-section h2 {
          font-size: 2.5rem;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .contact-details {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .company-info {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .company-logo {
          width: 100px;
          height: 100px;
          object-fit: contain;
        }
        
        .company-info h3 {
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .company-tagline {
          color: #666;
          margin: 0;
          font-style: italic;
        }
        
        .contact-info {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .contact-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .contact-text strong {
          display: block;
          color: #1a1a1a;
          margin-bottom: 0.2rem;
        }
        
        .contact-text span {
          color: #666;
        }
        
        .contact-form h4 {
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
        }
        
        .form-textarea {
          resize: vertical;
        }
        
        .submit-btn {
          background: #0070f3;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .submit-btn:hover {
          background: #0051cc;
        }
        
        .contact-img {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .footer-note {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
        }
        
        .note-content p {
          font-size: 1.2rem;
          line-height: 1.7;
          margin: 0 0 2rem 0;
        }
        
        .note-signature {
          font-size: 1.1rem;
        }
        
        .note-signature span {
          opacity: 0.9;
          font-size: 0.9rem;
        }
        
        .contact-img-placeholder {
          background: #f0f0f0;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .placeholder-content {
          text-align: center;
        }
        
        .placeholder-content h4 {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .placeholder-content p {
          font-size: 1.2rem;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .page-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}