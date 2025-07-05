import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function InvestorRelations() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const financialHighlights = [
    { metric: "Revenue Growth", value: "185%", period: "YoY 2024" },
    { metric: "Gross Margin", value: "68%", period: "Q4 2024" },
    { metric: "R&D Investment", value: "$12M", period: "2024" },
    { metric: "Market Cap", value: "$450M", period: "Current" }
  ];

  const investmentOpportunities = [
    {
      round: "Series B",
      amount: "$50M",
      status: "Open",
      purpose: "Manufacturing scale-up and market expansion",
      timeline: "Q2 2024",
      leadInvestor: "GreenTech Ventures"
    },
    {
      round: "Strategic Partnership",
      amount: "$25M",
      status: "Negotiating",
      purpose: "Technology development and IP licensing",
      timeline: "Q3 2024",
      leadInvestor: "Energy Corp International"
    }
  ];

  const financialReports = [
    {
      title: "Annual Report 2024",
      type: "Annual",
      date: "2024-03-15",
      size: "3.2 MB",
      downloadUrl: "/reports/annual-2024.pdf"
    },
    {
      title: "Q4 2024 Earnings",
      type: "Quarterly",
      date: "2024-01-30",
      size: "1.8 MB",
      downloadUrl: "/reports/q4-2024.pdf"
    },
    {
      title: "Investor Presentation",
      type: "Presentation",
      date: "2024-02-20",
      size: "2.5 MB",
      downloadUrl: "/reports/investor-deck.pdf"
    }
  ];

  const keyMetrics = [
    { name: "Total Addressable Market", value: "$280B", growth: "+15%" },
    { name: "Pipeline Value", value: "$125M", growth: "+45%" },
    { name: "Customer Retention", value: "96%", growth: "+8%" },
    { name: "Technology Patents", value: "24", growth: "+12%" }
  ];

  return (
    <div className="investor-relations-page">
      <section className="investor-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Investor Relations</h1>
            <p className="hero-subtitle">
              Discover investment opportunities in revolutionary renewable energy technology 
              that's reshaping the global energy landscape
            </p>
          </div>
        </div>
      </section>

      <section className="investor-tabs">
        <div className="content-container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Investment Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'financials' ? 'active' : ''}`}
              onClick={() => setActiveTab('financials')}
            >
              Financial Reports
            </button>
            <button 
              className={`tab-btn ${activeTab === 'opportunities' ? 'active' : ''}`}
              onClick={() => setActiveTab('opportunities')}
            >
              Investment Opportunities
            </button>
            <button 
              className={`tab-btn ${activeTab === 'governance' ? 'active' : ''}`}
              onClick={() => setActiveTab('governance')}
            >
              Corporate Governance
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'overview' && (
        <section className="investment-overview">
          <div className="content-container">
            <div className="overview-grid">
              <div className="financial-highlights">
                <h2>Financial Highlights</h2>
                <div className="highlights-grid">
                  {financialHighlights.map((item, index) => (
                    <div key={index} className="highlight-card">
                      <div className="highlight-value">{item.value}</div>
                      <div className="highlight-metric">{item.metric}</div>
                      <div className="highlight-period">{item.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="key-metrics">
                <h2>Key Performance Metrics</h2>
                <div className="metrics-list">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="metric-item">
                      <div className="metric-info">
                        <span className="metric-name">{metric.name}</span>
                        <span className="metric-value">{metric.value}</span>
                      </div>
                      <div className="metric-growth">{metric.growth}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="investment-thesis">
              <h2>Investment Thesis</h2>
              <div className="thesis-points">
                <div className="thesis-point">
                  <div className="point-icon">🚀</div>
                  <div className="point-content">
                    <h3>Revolutionary Technology</h3>
                    <p>Patent-protected KPP technology offers 24/7 renewable energy generation with 95% capacity factor</p>
                  </div>
                </div>
                <div className="thesis-point">
                  <div className="point-icon">📈</div>
                  <div className="point-content">
                    <h3>Massive Market Opportunity</h3>
                    <p>$280B total addressable market with growing demand for reliable renewable energy solutions</p>
                  </div>
                </div>
                <div className="thesis-point">
                  <div className="point-icon">💰</div>
                  <div className="point-content">
                    <h3>Strong Financial Performance</h3>
                    <p>185% revenue growth, 68% gross margins, and expanding pipeline of enterprise customers</p>
                  </div>
                </div>
                <div className="thesis-point">
                  <div className="point-icon">🏆</div>
                  <div className="point-content">
                    <h3>Proven Leadership Team</h3>
                    <p>Experienced executives with track record of scaling clean energy companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'financials' && (
        <section className="financial-reports">
          <div className="content-container">
            <h2>Financial Reports & Documents</h2>
            <div className="reports-grid">
              {financialReports.map((report, index) => (
                <div key={index} className="report-card">
                  <div className="report-header">
                    <div className="report-type">{report.type}</div>
                    <div className="report-date">{report.date}</div>
                  </div>
                  <h3>{report.title}</h3>
                  <div className="report-footer">
                    <span className="report-size">{report.size}</span>
                    <a href={report.downloadUrl} className="download-btn">
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="financial-calendar">
              <h2>Financial Calendar</h2>
              <div className="calendar-events">
                <div className="event-item">
                  <div className="event-date">Mar 15, 2024</div>
                  <div className="event-details">
                    <h4>Q1 2024 Earnings Release</h4>
                    <p>Quarterly financial results and business update</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">Mar 20, 2024</div>
                  <div className="event-details">
                    <h4>Investor Conference Call</h4>
                    <p>Management discussion of Q1 results and outlook</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">Apr 10, 2024</div>
                  <div className="event-details">
                    <h4>Annual Shareholder Meeting</h4>
                    <p>Annual meeting with voting on key corporate matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'opportunities' && (
        <section className="investment-opportunities">
          <div className="content-container">
            <h2>Current Investment Opportunities</h2>
            <div className="opportunities-grid">
              {investmentOpportunities.map((opportunity, index) => (
                <div key={index} className="opportunity-card">
                  <div className="opportunity-header">
                    <h3>{opportunity.round}</h3>
                    <div className={`status-badge ${opportunity.status.toLowerCase()}`}>
                      {opportunity.status}
                    </div>
                  </div>
                  <div className="opportunity-amount">{opportunity.amount}</div>
                  <div className="opportunity-details">
                    <div className="detail-item">
                      <strong>Purpose:</strong> {opportunity.purpose}
                    </div>
                    <div className="detail-item">
                      <strong>Timeline:</strong> {opportunity.timeline}
                    </div>
                    <div className="detail-item">
                      <strong>Lead Investor:</strong> {opportunity.leadInvestor}
                    </div>
                  </div>
                  <button className="contact-btn">
                    Contact Investment Team
                  </button>
                </div>
              ))}
            </div>

            <div className="use-of-funds">
              <h2>Use of Funds</h2>
              <div className="funds-breakdown">
                <div className="fund-item">
                  <div className="fund-category">Manufacturing Scale-up</div>
                  <div className="fund-percentage">40%</div>
                  <div className="fund-amount">$30M</div>
                </div>
                <div className="fund-item">
                  <div className="fund-category">R&D and Innovation</div>
                  <div className="fund-percentage">25%</div>
                  <div className="fund-amount">$18.75M</div>
                </div>
                <div className="fund-item">
                  <div className="fund-category">Market Expansion</div>
                  <div className="fund-percentage">20%</div>
                  <div className="fund-amount">$15M</div>
                </div>
                <div className="fund-item">
                  <div className="fund-category">Working Capital</div>
                  <div className="fund-percentage">15%</div>
                  <div className="fund-amount">$11.25M</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'governance' && (
        <section className="corporate-governance">
          <div className="content-container">
            <h2>Corporate Governance</h2>
            <div className="governance-grid">
              <div className="board-composition">
                <h3>Board of Directors</h3>
                <div className="board-members">
                  <div className="member-card">
                    <h4>John Smith</h4>
                    <p>Chairman & CEO</p>
                    <span>15+ years clean energy experience</span>
                  </div>
                  <div className="member-card">
                    <h4>Dr. Sarah Chen</h4>
                    <p>CTO & Co-founder</p>
                    <span>PhD in Mechanical Engineering</span>
                  </div>
                  <div className="member-card">
                    <h4>Michael Rodriguez</h4>
                    <p>CFO</p>
                    <span>Former Goldman Sachs VP</span>
                  </div>
                </div>
              </div>

              <div className="governance-documents">
                <h3>Governance Documents</h3>
                <div className="documents-list">
                  <a href="/governance/charter.pdf" className="document-link">
                    Corporate Charter
                  </a>
                  <a href="/governance/bylaws.pdf" className="document-link">
                    Corporate Bylaws
                  </a>
                  <a href="/governance/ethics.pdf" className="document-link">
                    Code of Ethics
                  </a>
                  <a href="/governance/audit.pdf" className="document-link">
                    Audit Committee Charter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="investor-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Invest in the Future?</h2>
            <p>Join leading investors in backing revolutionary renewable energy technology</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Contact Investment Team</span>
              </Link>
              <Link href="/resources/center" className="btn btn-secondary btn-large">
                <span>Download Investor Deck</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .investor-relations-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .investor-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 6rem 2rem 4rem;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-text {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .hero-text.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #0070f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
        
        .investor-tabs {
          background: white;
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .tabs-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .tab-btn {
          padding: 1rem 2rem;
          border: 2px solid #0070f3;
          background: transparent;
          color: #0070f3;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tab-btn:hover,
        .tab-btn.active {
          background: #0070f3;
          color: white;
        }
        
        .investment-overview,
        .financial-reports,
        .investment-opportunities,
        .corporate-governance {
          padding: 4rem 0;
        }
        
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .financial-highlights h2,
        .key-metrics h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .highlight-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          text-align: center;
        }
        
        .highlight-value {
          font-size: 2rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .highlight-metric {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.25rem;
        }
        
        .highlight-period {
          font-size: 0.8rem;
          color: #666;
        }
        
        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .metric-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .metric-info {
          display: flex;
          flex-direction: column;
        }
        
        .metric-name {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.25rem;
        }
        
        .metric-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0070f3;
        }
        
        .metric-growth {
          color: #00aa00;
          font-weight: 600;
        }
        
        .investment-thesis {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .investment-thesis h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .thesis-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .thesis-point {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .point-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .point-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .point-content p {
          color: #666;
          line-height: 1.5;
          margin: 0;
        }
        
        .financial-reports h2,
        .investment-opportunities h2,
        .corporate-governance h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .report-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .report-type {
          background: #0070f3;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .report-date {
          font-size: 0.9rem;
          color: #666;
        }
        
        .report-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .report-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .report-size {
          font-size: 0.9rem;
          color: #666;
        }
        
        .download-btn {
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .download-btn:hover {
          background: #0051cc;
        }
        
        .financial-calendar {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .financial-calendar h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .calendar-events {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .event-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1rem;
          border-left: 4px solid #0070f3;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .event-date {
          font-weight: 600;
          color: #0070f3;
          min-width: 120px;
        }
        
        .event-details h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.25rem 0;
        }
        
        .event-details p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .opportunity-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .opportunity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .opportunity-header h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        
        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .status-badge.open {
          background: #00aa00;
          color: white;
        }
        
        .status-badge.negotiating {
          background: #ff8800;
          color: white;
        }
        
        .opportunity-amount {
          font-size: 2rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 1.5rem;
        }
        
        .opportunity-details {
          margin-bottom: 2rem;
        }
        
        .detail-item {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        
        .contact-btn {
          width: 100%;
          padding: 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover {
          background: #0051cc;
        }
        
        .use-of-funds {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .use-of-funds h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
        }
        
        .funds-breakdown {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .fund-item {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          text-align: center;
        }
        
        .fund-category {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .fund-percentage {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 0.25rem;
        }
        
        .fund-amount {
          font-size: 0.9rem;
          color: #666;
        }
        
        .governance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        
        .board-composition h3,
        .governance-documents h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
        }
        
        .board-members {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .member-card {
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        
        .member-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.25rem 0;
        }
        
        .member-card p {
          color: #0070f3;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }
        
        .member-card span {
          color: #666;
          font-size: 0.9rem;
        }
        
        .documents-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .document-link {
          padding: 1rem;
          background: white;
          border-radius: 8px;
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 600;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .document-link:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }
        
        .investor-cta {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          padding: 6rem 0;
        }
        
        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }
        
        .cta-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .cta-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(0, 112, 243, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 112, 243, 0.4);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }
        
        @media (max-width: 1024px) {
          .overview-grid,
          .thesis-points,
          .governance-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .tabs-nav {
            flex-direction: column;
            align-items: center;
          }
          
          .reports-grid,
          .opportunities-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
} 