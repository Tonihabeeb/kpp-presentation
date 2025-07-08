import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MarketAnalysis() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChart, setActiveChart] = useState('global');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const marketData = {
    global: {
      title: "Global Renewable Energy Market",
      size: "$1.1 Trillion",
      growth: "8.4% CAGR",
      projection: "$2.15 Trillion by 2030",
      segments: [
        { name: "Solar", value: 35, color: "#FFB800" },
        { name: "Wind", value: 28, color: "#00B8FF" },
        { name: "Hydro", value: 22, color: "#0088FF" },
        { name: "KPP Opportunity", value: 10, color: "#0070f3" },
        { name: "Others", value: 5, color: "#888888" }
      ]
    },
    regional: {
      title: "Regional Market Opportunities",
      size: "$450 Billion",
      growth: "12.1% CAGR",
      projection: "$850 Billion by 2030",
      segments: [
        { name: "North America", value: 32, color: "#0070f3" },
        { name: "Europe", value: 28, color: "#00B8FF" },
        { name: "Asia Pacific", value: 25, color: "#FFB800" },
        { name: "Latin America", value: 10, color: "#00FF88" },
        { name: "Others", value: 5, color: "#888888" }
      ]
    },
    industrial: {
      title: "Industrial Applications Market",
      size: "$280 Billion",
      growth: "15.2% CAGR",
      projection: "$620 Billion by 2030",
      segments: [
        { name: "Manufacturing", value: 40, color: "#0070f3" },
        { name: "Mining", value: 25, color: "#FFB800" },
        { name: "Data Centers", value: 20, color: "#00B8FF" },
        { name: "Healthcare", value: 10, color: "#00FF88" },
        { name: "Others", value: 5, color: "#888888" }
      ]
    }
  };

  const marketTrends = [
    {
      icon: "📈",
      title: "Rapid Market Growth",
      description: "Renewable energy market growing at 8.4% CAGR, driven by climate commitments and cost competitiveness",
      impact: "High",
      timeline: "2024-2030"
    },
    {
      icon: "🏭",
      title: "Industrial Decarbonization",
      description: "Heavy industries seeking reliable clean energy solutions to meet net-zero commitments",
      impact: "Very High",
      timeline: "2024-2035"
    },
    {
      icon: "⚡",
      title: "Grid Reliability Concerns",
      description: "Increasing demand for baseload renewable power that doesn't depend on weather conditions",
      impact: "High",
      timeline: "2024-2028"
    },
    {
      icon: "💰",
      title: "Energy Cost Inflation",
      description: "Rising traditional energy costs driving adoption of cost-effective renewable alternatives",
      impact: "Medium",
      timeline: "2024-2026"
    },
    {
      icon: "🌍",
      title: "Global Climate Policies",
      description: "Government mandates and incentives accelerating renewable energy adoption worldwide",
      impact: "Very High",
      timeline: "2024-2050"
    },
    {
      icon: "🔋",
      title: "Energy Storage Integration",
      description: "Growing need for renewable sources that complement energy storage systems",
      impact: "Medium",
      timeline: "2025-2030"
    }
  ];

  const competitiveAnalysis = [
    {
      category: "Traditional Renewable",
      technologies: ["Solar PV", "Wind Turbines", "Hydroelectric"],
      strengths: ["Established market", "Cost competitive", "Government support"],
      weaknesses: ["Weather dependent", "Intermittent", "Storage requirements"],
      marketShare: "85%",
      threat: "Medium"
    },
    {
      category: "Emerging Technologies",
      technologies: ["Geothermal", "Tidal", "Biomass"],
      strengths: ["Consistent output", "Renewable source", "Growing investment"],
      weaknesses: ["Limited locations", "High initial costs", "Technology constraints"],
      marketShare: "8%",
      threat: "Low"
    },
    {
      category: "Energy Storage",
      technologies: ["Battery Systems", "Pumped Hydro", "Compressed Air"],
      strengths: ["Grid stabilization", "Peak shaving", "Fast response"],
      weaknesses: ["High costs", "Limited duration", "Degradation"],
      marketShare: "5%",
      threat: "Low"
    },
    {
      category: "KPP Technology",
      technologies: ["Buoyancy-driven", "Kinetic systems"],
      strengths: ["24/7 generation", "Weather independent", "Low maintenance"],
      weaknesses: ["New technology", "Market awareness", "Initial investment"],
      marketShare: "2%",
      threat: "Opportunity"
    }
  ];

  const marketOpportunities = [
    {
      sector: "Industrial Manufacturing",
      size: "$120B",
      growth: "15.2%",
      description: "Heavy industries requiring reliable baseload power for continuous operations",
      kppAdvantage: "24/7 operation without weather dependency",
      addressableMarket: "$35B",
      timeline: "2024-2028"
    },
    {
      sector: "Data Centers",
      size: "$85B",
      growth: "18.5%",
      description: "Critical infrastructure requiring 99.99% uptime and sustainable power",
      kppAdvantage: "Consistent power with backup capabilities",
      addressableMarket: "$25B",
      timeline: "2025-2030"
    },
    {
      sector: "Remote Operations",
      size: "$45B",
      growth: "22.1%",
      description: "Mining, oil & gas operations in remote locations with high energy costs",
      kppAdvantage: "Off-grid capability with minimal maintenance",
      addressableMarket: "$18B",
      timeline: "2024-2027"
    },
    {
      sector: "Healthcare Facilities",
      size: "$32B",
      growth: "12.8%",
      description: "Hospitals and medical centers requiring reliable backup power",
      kmpAdvantage: "Critical power reliability with clean operation",
      addressableMarket: "$12B",
      timeline: "2025-2029"
    }
  ];

  return (
    <div className="market-analysis-page">
      {/* Hero Section */}
      <section className="market-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Market Analysis & Opportunities</h1>
            <p className="hero-subtitle">
              Comprehensive analysis of the renewable energy market landscape, 
              competitive positioning, and growth opportunities for KPP technology
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="market-overview-section">
        <div className="content-container">
          <div className={`overview-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Market Overview & Size</h2>
            <div className="market-selector">
              <button 
                className={`selector-btn ${activeChart === 'global' ? 'active' : ''}`}
                onClick={() => setActiveChart('global')}
              >
                Global Market
              </button>
              <button 
                className={`selector-btn ${activeChart === 'regional' ? 'active' : ''}`}
                onClick={() => setActiveChart('regional')}
              >
                Regional Opportunities
              </button>
              <button 
                className={`selector-btn ${activeChart === 'industrial' ? 'active' : ''}`}
                onClick={() => setActiveChart('industrial')}
              >
                Industrial Focus
              </button>
            </div>
            
            <div className="market-dashboard">
              <div className="market-metrics">
                <div className="metric-card">
                  <div className="metric-value">{marketData[activeChart].size}</div>
                  <div className="metric-label">Current Market Size</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">{marketData[activeChart].growth}</div>
                  <div className="metric-label">Annual Growth Rate</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">{marketData[activeChart].projection}</div>
                  <div className="metric-label">2030 Projection</div>
                </div>
              </div>
              
              <div className="market-chart">
                <h3>{marketData[activeChart].title}</h3>
                <div className="chart-container">
                  <div className="pie-chart">
                    {marketData[activeChart].segments.map((segment, index) => (
                      <div key={index} className="chart-segment" style={{
                        background: segment.color,
                        height: `${segment.value * 3}px`,
                        width: '40px',
                        margin: '5px'
                      }}>
                        <span className="segment-label">{segment.name}: {segment.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="trends-section">
        <div className="content-container">
          <div className={`trends-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Key Market Trends & Drivers</h2>
            <div className="trends-grid">
              {marketTrends.map((trend, index) => (
                <div key={index} className="trend-card">
                  <div className="trend-icon">{trend.icon}</div>
                  <div className="trend-content">
                    <h3>{trend.title}</h3>
                    <p>{trend.description}</p>
                    <div className="trend-meta">
                      <span className={`impact-badge ${trend.impact.toLowerCase().replace(' ', '-')}`}>
                        {trend.impact} Impact
                      </span>
                      <span className="timeline">{trend.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="competitive-section">
        <div className="content-container">
          <div className={`competitive-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Competitive Landscape Analysis</h2>
            <div className="competitive-grid">
              {competitiveAnalysis.map((competitor, index) => (
                <div key={index} className="competitor-card">
                  <div className="competitor-header">
                    <h3>{competitor.category}</h3>
                    <div className="market-share">
                      <span className="share-value">{competitor.marketShare}</span>
                      <span className="share-label">Market Share</span>
                    </div>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies</h4>
                    <div className="tech-list">
                      {competitor.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="strengths-weaknesses">
                    <div className="strengths">
                      <h4>Strengths</h4>
                      <ul>
                        {competitor.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="weaknesses">
                      <h4>Weaknesses</h4>
                      <ul>
                        {competitor.weaknesses.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="threat-level">
                    <span className={`threat-badge ${competitor.threat.toLowerCase()}`}>
                      {competitor.threat} Threat
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="opportunities-section">
        <div className="content-container">
          <div className={`opportunities-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Target Market Opportunities</h2>
            <div className="opportunities-grid">
              {marketOpportunities.map((opportunity, index) => (
                <div key={index} className="opportunity-card">
                  <div className="opportunity-header">
                    <h3>{opportunity.sector}</h3>
                    <div className="opportunity-metrics">
                      <div className="metric">
                        <span className="metric-value">{opportunity.size}</span>
                        <span className="metric-label">Market Size</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">{opportunity.growth}</span>
                        <span className="metric-label">Growth Rate</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-description">
                    <p>{opportunity.description}</p>
                  </div>
                  
                  <div className="kpp-advantage">
                    <h4>KPP Advantage</h4>
                    <p>{opportunity.kppAdvantage}</p>
                  </div>
                  
                  <div className="opportunity-footer">
                    <div className="addressable-market">
                      <span className="addressable-value">{opportunity.addressableMarket}</span>
                      <span className="addressable-label">Addressable Market</span>
                    </div>
                    <div className="timeline">
                      <span className="timeline-value">{opportunity.timeline}</span>
                      <span className="timeline-label">Target Timeline</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="positioning-section">
        <div className="content-container">
          <div className={`positioning-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Strategic Market Positioning</h2>
            <div className="positioning-grid">
              <div className="positioning-card">
                <h3>🎯 Target Segments</h3>
                <div className="segment-list">
                  <div className="segment-item">
                    <h4>Primary: Industrial Manufacturing</h4>
                    <p>High-energy consumers requiring 24/7 reliable power</p>
                    <span className="priority">High Priority</span>
                  </div>
                  <div className="segment-item">
                    <h4>Secondary: Critical Infrastructure</h4>
                    <p>Hospitals, data centers, emergency services</p>
                    <span className="priority">Medium Priority</span>
                  </div>
                  <div className="segment-item">
                    <h4>Tertiary: Commercial Real Estate</h4>
                    <p>Office buildings, shopping centers, hotels</p>
                    <span className="priority">Low Priority</span>
                  </div>
                </div>
              </div>
              
              <div className="positioning-card">
                <h3>🏆 Competitive Advantages</h3>
                <div className="advantage-list">
                  <div className="advantage-item">
                    <div className="advantage-icon">⚡</div>
                    <div className="advantage-content">
                      <h4>24/7 Generation</h4>
                      <p>Weather-independent continuous power</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <div className="advantage-icon">💰</div>
                    <div className="advantage-content">
                      <h4>Cost Competitive</h4>
                      <p>Lower LCOE than traditional alternatives</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <div className="advantage-icon">🔧</div>
                    <div className="advantage-content">
                      <h4>Low Maintenance</h4>
                      <p>Minimal operational requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="positioning-card">
                <h3>📈 Growth Strategy</h3>
                <div className="strategy-timeline">
                  <div className="strategy-phase">
                    <h4>Phase 1: Market Entry (2024-2025)</h4>
                    <p>Focus on industrial manufacturing and pilot projects</p>
                  </div>
                  <div className="strategy-phase">
                    <h4>Phase 2: Scale (2026-2027)</h4>
                    <p>Expand to critical infrastructure and commercial sectors</p>
                  </div>
                  <div className="strategy-phase">
                    <h4>Phase 3: Dominance (2028-2030)</h4>
                    <p>Achieve market leadership in baseload renewable power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="market-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Capitalize on Market Opportunities</h2>
            <p>Join the renewable energy revolution and capture your share of this growing market</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Discuss Market Entry</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-secondary btn-large">
                <span>Explore Solutions</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .market-analysis-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .market-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          backdrop-filter: blur(10px);
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
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
        
        .market-overview-section,
        .trends-section,
        .competitive-section,
        .opportunities-section,
        .positioning-section {
          padding: 4rem 0;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .overview-content,
        .trends-content,
        .competitive-content,
        .opportunities-content,
        .positioning-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .overview-content.animate-in,
        .trends-content.animate-in,
        .competitive-content.animate-in,
        .opportunities-content.animate-in,
        .positioning-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .overview-content h2,
        .trends-content h2,
        .competitive-content h2,
        .opportunities-content h2,
        .positioning-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .market-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .selector-btn {
          padding: 1rem 2rem;
          border: 2px solid #0070f3;
          background: transparent;
          color: #0070f3;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .selector-btn:hover,
        .selector-btn.active {
          background: #0070f3;
          color: white;
        }
        
        .market-dashboard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .market-metrics {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .metric-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .metric-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .metric-label {
          color: #666;
          font-weight: 500;
        }
        
        .market-chart {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .market-chart h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .chart-container {
          display: flex;
          justify-content: center;
        }
        
        .pie-chart {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        
        .chart-segment {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          position: relative;
          color: white;
          font-weight: 600;
          font-size: 0.8rem;
          text-align: center;
          min-height: 60px;
          padding: 0.5rem;
        }
        
        .trends-section {
          background: white;
        }
        
        .trends-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .trend-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }
        
        .trend-card:hover {
          transform: translateY(-5px);
        }
        
        .trend-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .trend-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .trend-content p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .trend-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .impact-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .impact-badge.very-high {
          background: #ff4444;
          color: white;
        }
        
        .impact-badge.high {
          background: #ff8800;
          color: white;
        }
        
        .impact-badge.medium {
          background: #ffbb00;
          color: white;
        }
        
        .timeline {
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .competitive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .competitor-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .competitor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .competitor-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          color: #1a1a1a;
        }
        
        .market-share {
          text-align: center;
        }
        
        .share-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0070f3;
          display: block;
        }
        
        .share-label {
          font-size: 0.8rem;
          color: #666;
        }
        
        .technologies {
          margin-bottom: 1.5rem;
        }
        
        .technologies h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: rgba(0,112,243,0.1);
          color: #0070f3;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .strengths-weaknesses {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .strengths h4,
        .weaknesses h4 {
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .strengths ul,
        .weaknesses ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .strengths li,
        .weaknesses li {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.3rem;
          position: relative;
          padding-left: 1rem;
        }
        
        .strengths li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00aa00;
          font-weight: bold;
        }
        
        .weaknesses li:before {
          content: "✗";
          position: absolute;
          left: 0;
          color: #aa0000;
          font-weight: bold;
        }
        
        .threat-level {
          text-align: center;
        }
        
        .threat-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .threat-badge.high {
          background: #ff4444;
          color: white;
        }
        
        .threat-badge.medium {
          background: #ff8800;
          color: white;
        }
        
        .threat-badge.low {
          background: #00aa00;
          color: white;
        }
        
        .threat-badge.opportunity {
          background: #0070f3;
          color: white;
        }
        
        .opportunities-section {
          background: white;
        }
        
        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .opportunity-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }
        
        .opportunity-card:hover {
          transform: translateY(-5px);
        }
        
        .opportunity-header {
          margin-bottom: 1.5rem;
        }
        
        .opportunity-header h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .opportunity-metrics {
          display: flex;
          gap: 2rem;
        }
        
        .metric {
          text-align: center;
        }
        
        .metric .metric-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0070f3;
          display: block;
        }
        
        .metric .metric-label {
          font-size: 0.8rem;
          color: #666;
        }
        
        .opportunity-description p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .kpp-advantage {
          background: rgba(0,112,243,0.1);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }
        
        .kpp-advantage h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #0070f3;
        }
        
        .kpp-advantage p {
          color: #1a1a1a;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .opportunity-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .addressable-market,
        .timeline {
          text-align: center;
        }
        
        .addressable-value,
        .timeline-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0070f3;
          display: block;
        }
        
        .addressable-label,
        .timeline-label {
          font-size: 0.8rem;
          color: #666;
        }
        
        .positioning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .positioning-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .positioning-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .segment-list,
        .advantage-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .segment-item {
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
          border-left: 4px solid #0070f3;
        }
        
        .segment-item h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .segment-item p {
          color: #666;
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }
        
        .priority {
          font-size: 0.8rem;
          font-weight: 600;
          color: #0070f3;
        }
        
        .advantage-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
        }
        
        .advantage-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .advantage-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.3rem 0;
          color: #1a1a1a;
        }
        
        .advantage-content p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .strategy-timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .strategy-phase {
          padding: 1rem;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
          border-left: 4px solid #0070f3;
        }
        
        .strategy-phase h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .strategy-phase p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .market-cta {
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
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .btn-large {
          padding: 1rem 2rem;
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
          backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .btn:hover .btn-icon {
          transform: translateX(3px);
        }
        
        @media (max-width: 1024px) {
          .market-dashboard {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .trends-grid,
          .competitive-grid,
          .opportunities-grid,
          .positioning-grid {
            grid-template-columns: 1fr;
          }
          
          .strengths-weaknesses {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .market-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .opportunity-metrics {
            flex-direction: column;
            gap: 1rem;
          }
          
          .opportunity-footer {
            flex-direction: column;
            gap: 1rem;
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