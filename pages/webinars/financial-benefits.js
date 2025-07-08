export default function FinancialBenefits() {
  return (
    <div className="webinar-page">
      <div className="page-hero">
        <div className="hero-content">
          <h1>Financial Benefits of KPP</h1>
          <p>ROI Analysis and Economic Impact</p>
        </div>
      </div>

      <div className="page-content">
        <div className="webinar-info">
          <h2>💰 Financial Analysis Webinar</h2>
          <p>Comprehensive analysis of the financial benefits, ROI calculations, and economic impact of implementing KPP technology in your organization.</p>
          
          <div className="topics-covered">
            <h3>Topics Covered:</h3>
            <ul>
              <li>Initial investment and payback periods</li>
              <li>Operational cost savings</li>
              <li>Long-term financial projections</li>
              <li>Tax incentives and rebates</li>
              <li>Comparative analysis with traditional energy</li>
            </ul>
          </div>
        </div>

        <div className="webinar-schedule">
          <h2>📅 Next Session</h2>
          <div className="session-card">
            <p><strong>Date:</strong> July 22, 2025</p>
            <p><strong>Time:</strong> 3:00 PM EST</p>
            <p><strong>Register:</strong> finance@deepengineering.com</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .webinar-page {
          min-height: 100vh;
        }
        .page-hero {
          background: linear-gradient(135deg, #34a853 0%, #137333 100%);
          color: white;
          padding: 120px 20px 80px;
          text-align: center;
        }
        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .page-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 80px 20px;
        }
        .session-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
          color: #34a853;
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
