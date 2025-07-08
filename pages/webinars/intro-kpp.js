export default function IntroKPP() {
  return (
    <div className="webinar-page">
      <div className="page-hero">
        <div className="hero-content">
          <h1>Introduction to KPP Technology</h1>
          <p>Webinar Series - Understanding Kinetic Power Plants</p>
        </div>
      </div>

      <div className="page-content">
        <div className="webinar-info">
          <h2>🎥 Webinar Overview</h2>
          <p>Join our expert team for an in-depth introduction to Kinetic Power Plant technology, covering the fundamental principles, applications, and benefits of this revolutionary energy generation system.</p>
          
          <div className="webinar-details">
            <div className="detail-card">
              <h3>Duration</h3>
              <p>45 minutes + Q&A</p>
            </div>
            <div className="detail-card">
              <h3>Level</h3>
              <p>Beginner to Intermediate</p>
            </div>
            <div className="detail-card">
              <h3>Format</h3>
              <p>Live presentation + Demo</p>
            </div>
          </div>
        </div>

        <div className="webinar-schedule">
          <h2>📅 Upcoming Sessions</h2>
          <div className="session-card">
            <h3>Next Session</h3>
            <p><strong>Date:</strong> July 15, 2025</p>
            <p><strong>Time:</strong> 2:00 PM EST</p>
            <p><strong>Register:</strong> webinars@deepengineering.com</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .webinar-page {
          min-height: 100vh;
        }
        .page-hero {
          background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
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
        .webinar-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }
        .detail-card, .session-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
          color: #1a73e8;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
