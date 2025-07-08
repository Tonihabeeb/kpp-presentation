import Image from 'next/image';

export default function Investors() {
  return (
    <div className="investors-page">
      <div className="page-hero">
        <div className="hero-content">
          <h1>Investor Relations</h1>
          <p>Investment Opportunities in Revolutionary KPP Technology</p>
        </div>
      </div>

      <div className="page-content">
        <div className="investment-overview">
          <h2>💰 Investment Opportunity</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">📈</div>
              <h3>Market Potential</h3>
              <p>$2.8T global energy market with growing demand for sustainable solutions</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🔬</div>
              <h3>Technology Advantage</h3>
              <p>Patented KPP technology with 96%+ efficiency and continuous operation</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Scalable deployment across multiple markets and applications</p>
            </div>
          </div>
        </div>

        <div className="financial-highlights">
          <h2>📊 Financial Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-number">$50M</div>
              <div className="highlight-label">Series A Target</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">3-5x</div>
              <div className="highlight-label">Projected ROI</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">2-3 Years</div>
              <div className="highlight-label">Break-even Timeline</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">15+</div>
              <div className="highlight-label">Patents Filed</div>
            </div>
          </div>
        </div>

        <div className="investment-tiers">
          <h2>🎯 Investment Tiers</h2>
          <div className="tiers-grid">
            <div className="tier-card strategic">
              <h3>Strategic Partner</h3>
              <div className="tier-amount">$10M+</div>
              <ul>
                <li>Board representation</li>
                <li>Technology licensing rights</li>
                <li>Preferred supplier status</li>
                <li>Joint venture opportunities</li>
                <li>Global market exclusivity</li>
              </ul>
            </div>
            <div className="tier-card institutional">
              <h3>Institutional Investor</h3>
              <div className="tier-amount">$5M+</div>
              <ul>
                <li>Preferred equity shares</li>
                <li>Quarterly reporting</li>
                <li>Investment committee access</li>
                <li>Exit strategy planning</li>
                <li>Due diligence support</li>
              </ul>
            </div>
            <div className="tier-card individual">
              <h3>Accredited Investor</h3>
              <div className="tier-amount">$1M+</div>
              <ul>
                <li>Common equity shares</li>
                <li>Annual investor updates</li>
                <li>Technology demonstrations</li>
                <li>Networking events</li>
                <li>Early access to products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="use-of-funds">
          <h2>💼 Use of Funds</h2>
          <div className="funds-breakdown">
            <div className="fund-item">
              <div className="fund-percentage">40%</div>
              <div className="fund-details">
                <h4>R&D & Innovation</h4>
                <p>Advanced technology development, patent expansion, and prototype enhancement</p>
              </div>
            </div>
            <div className="fund-item">
              <div className="fund-percentage">30%</div>
              <div className="fund-details">
                <h4>Manufacturing Scale-up</h4>
                <p>Production facility expansion, equipment procurement, and supply chain optimization</p>
              </div>
            </div>
            <div className="fund-item">
              <div className="fund-percentage">20%</div>
              <div className="fund-details">
                <h4>Market Expansion</h4>
                <p>Global sales team, marketing initiatives, and strategic partnerships</p>
              </div>
            </div>
            <div className="fund-item">
              <div className="fund-percentage">10%</div>
              <div className="fund-details">
                <h4>Operations & Team</h4>
                <p>Key talent acquisition, operational infrastructure, and regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="risk-factors">
          <h2>⚠️ Risk Factors</h2>
          <div className="risk-grid">
            <div className="risk-item">
              <h4>Technology Risk</h4>
              <p>Continuous innovation required to maintain competitive advantage</p>
            </div>
            <div className="risk-item">
              <h4>Market Risk</h4>
              <p>Energy market volatility and regulatory changes</p>
            </div>
            <div className="risk-item">
              <h4>Competition Risk</h4>
              <p>Established energy companies and emerging technologies</p>
            </div>
            <div className="risk-item">
              <h4>Execution Risk</h4>
              <p>Scaling operations and maintaining quality standards</p>
            </div>
          </div>
        </div>

        <div className="investor-contact">
          <h2>📞 Investor Contact</h2>
          <div className="contact-info">
            <div className="contact-card">
              <h4>Investment Relations</h4>
              <p><strong>Email:</strong> investors@deepengineering.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Innovation Drive, Tech Valley, CA 94301</p>
            </div>
            <div className="contact-actions">
              <button className="cta-button primary">Request Investment Deck</button>
              <button className="cta-button secondary">Schedule Meeting</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .investors-page {
          min-height: 100vh;
        }

        .page-hero {
          background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
          color: white;
          padding: 120px 20px 80px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .page-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .investment-overview h2,
        .financial-highlights h2,
        .investment-tiers h2,
        .use-of-funds h2,
        .risk-factors h2,
        .investor-contact h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          color: #1a73e8;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .overview-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: 1px solid #e1e5e9;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .overview-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #202124;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .highlight-item {
          background: linear-gradient(135deg, #34a853 0%, #137333 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .highlight-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .highlight-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tier-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 2px solid #e1e5e9;
        }

        .tier-card.strategic {
          border-color: #ea4335;
        }

        .tier-card.institutional {
          border-color: #4285f4;
        }

        .tier-card.individual {
          border-color: #34a853;
        }

        .tier-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #202124;
        }

        .tier-amount {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a73e8;
        }

        .tier-card ul {
          list-style: none;
          padding: 0;
        }

        .tier-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f3f4;
        }

        .tier-card li:before {
          content: "✓";
          color: #34a853;
          margin-right: 0.5rem;
          font-weight: bold;
        }

        .funds-breakdown {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 4rem;
        }

        .fund-item {
          display: flex;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid #f1f3f4;
        }

        .fund-item:last-child {
          border-bottom: none;
        }

        .fund-percentage {
          font-size: 2rem;
          font-weight: 700;
          color: #1a73e8;
          margin-right: 2rem;
          min-width: 80px;
        }

        .fund-details h4 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #202124;
        }

        .risk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .risk-item {
          background: #fef7e0;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #fbbc04;
        }

        .risk-item h4 {
          color: #f57c00;
          margin-bottom: 0.5rem;
        }

        .contact-info {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .contact-card {
          margin-bottom: 2rem;
        }

        .contact-card h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1a73e8;
        }

        .contact-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: #1a73e8;
          color: white;
        }

        .cta-button.primary:hover {
          background: #1557b0;
        }

        .cta-button.secondary {
          background: white;
          color: #1a73e8;
          border: 2px solid #1a73e8;
        }

        .cta-button.secondary:hover {
          background: #f8f9fa;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .page-content {
            padding: 40px 20px;
          }

          .contact-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
