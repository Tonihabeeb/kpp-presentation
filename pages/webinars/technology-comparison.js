export default function TechnologyComparison() {
  return (
    <div className="webinar-page">
      <div className="page-hero">
        <div className="hero-content">
          <h1>Technology Comparison</h1>
          <p>KPP vs Traditional Energy Sources</p>
        </div>
      </div>

      <div className="page-content">
        <div className="webinar-info">
          <h2>🔬 Technology Analysis</h2>
          <p>Detailed comparison of KPP technology against traditional and renewable energy sources, highlighting key advantages and technical differentiators.</p>
          
          <div className="comparison-topics">
            <h3>Comparison Areas:</h3>
            <ul>
              <li>Efficiency metrics and performance</li>
              <li>Environmental impact assessment</li>
              <li>Reliability and uptime statistics</li>
              <li>Maintenance requirements</li>
              <li>Scalability and deployment flexibility</li>
              <li>Cost per kWh analysis</li>
            </ul>
          </div>
        </div>

        <div className="webinar-schedule">
          <h2>📅 Next Session</h2>
          <div className="session-card">
            <p><strong>Date:</strong> July 29, 2025</p>
            <p><strong>Time:</strong> 1:00 PM EST</p>
            <p><strong>Register:</strong> technical@deepengineering.com</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .webinar-page {
          min-height: 100vh;
        }
        .page-hero {
          background: linear-gradient(135deg, #ea4335 0%, #d33b2c 100%);
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
          color: #ea4335;
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
