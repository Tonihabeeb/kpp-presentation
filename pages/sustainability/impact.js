import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SustainabilityImpact() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('carbon');
  const [impactData, setImpactData] = useState({
    carbon: { value: 0, target: 850 },
    water: { value: 0, target: 2400 },
    waste: { value: 0, target: 95 },
    energy: { value: 0, target: 8760 }
  });

  useEffect(() => {
    setIsVisible(true);
    animateCounters();
  }, []);

  const animateCounters = () => {
    const targets = {
      carbon: 850,
      water: 2400,
      waste: 95,
      energy: 8760
    };

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key];
      const increment = target / 100;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setImpactData(prev => ({
          ...prev,
          [key]: { ...prev[key], value: Math.round(current) }
        }));
      }, 20);
    });
  };

  const environmentalMetrics = [
    {
      id: 'carbon',
      title: 'Carbon Footprint Reduction',
      value: impactData.carbon.value,
      unit: 'tons CO₂/year',
      icon: '🌱',
      color: '#00aa00',
      description: 'Annual CO₂ emissions avoided compared to grid electricity',
      comparison: 'Equivalent to removing 185 cars from the road'
    },
    {
      id: 'water',
      title: 'Water Conservation',
      value: impactData.water.value,
      unit: 'gallons/year',
      icon: '💧',
      color: '#0088ff',
      description: 'Water saved compared to traditional power generation',
      comparison: 'Enough to supply 8 households for a year'
    },
    {
      id: 'waste',
      title: 'Waste Reduction',
      value: impactData.waste.value,
      unit: '% recyclable',
      icon: '♻️',
      color: '#ff8800',
      description: 'Percentage of system components that are recyclable',
      comparison: 'Minimal waste generation throughout lifecycle'
    },
    {
      id: 'energy',
      title: 'Clean Energy Generated',
      value: impactData.energy.value,
      unit: 'MWh/year',
      icon: '⚡',
      color: '#0070f3',
      description: 'Annual clean energy production from 100kW system',
      comparison: 'Powers 800 homes for a year'
    }
  ];

  const sustainabilityGoals = [
    {
      goal: 'Carbon Neutrality by 2030',
      progress: 78,
      description: 'Achieve net-zero carbon emissions across all operations',
      initiatives: [
        'Renewable energy in manufacturing',
        'Carbon offset programs',
        'Supply chain optimization',
        'Product lifecycle improvements'
      ]
    },
    {
      goal: 'Circular Economy Implementation',
      progress: 85,
      description: 'Design for recyclability and resource efficiency',
      initiatives: [
        '95% recyclable components',
        'Modular design for repairability',
        'Take-back programs',
        'Material recovery systems'
      ]
    },
    {
      goal: 'Water Stewardship',
      progress: 92,
      description: 'Minimize water usage in operations and products',
      initiatives: [
        'Water-free power generation',
        'Closed-loop manufacturing',
        'Rainwater harvesting',
        'Ecosystem protection'
      ]
    },
    {
      goal: 'Biodiversity Protection',
      progress: 88,
      description: 'Protect and enhance local ecosystems',
      initiatives: [
        'Minimal land footprint',
        'Wildlife-friendly installations',
        'Habitat restoration projects',
        'Environmental monitoring'
      ]
    }
  ];

  const lifecycleAnalysis = {
    manufacturing: {
      carbonFootprint: 125,
      energyConsumption: 450,
      waterUsage: 2200,
      wasteGeneration: 15,
      description: 'Raw material extraction, component manufacturing, and assembly'
    },
    installation: {
      carbonFootprint: 35,
      energyConsumption: 120,
      waterUsage: 0,
      wasteGeneration: 5,
      description: 'Transportation, site preparation, and system installation'
    },
    operation: {
      carbonFootprint: -850,
      energyConsumption: -8760,
      waterUsage: -2400,
      wasteGeneration: 2,
      description: '25-year operational phase with clean energy generation'
    },
    endOfLife: {
      carbonFootprint: -45,
      energyConsumption: 80,
      waterUsage: 150,
      wasteGeneration: -85,
      description: 'Decommissioning, recycling, and material recovery'
    }
  };

  const certifications = [
    {
      name: 'ISO 14001',
      description: 'Environmental Management Systems',
      status: 'Certified',
      year: '2024'
    },
    {
      name: 'LEED Platinum',
      description: 'Leadership in Energy and Environmental Design',
      status: 'Certified',
      year: '2024'
    },
    {
      name: 'Carbon Trust Standard',
      description: 'Carbon footprint measurement and reduction',
      status: 'Certified',
      year: '2024'
    },
    {
      name: 'Cradle to Cradle',
      description: 'Circular economy design principles',
      status: 'Gold Level',
      year: '2024'
    }
  ];

  const impactComparison = [
    {
      technology: 'KPP System',
      carbonIntensity: 0.02,
      waterUsage: 0,
      landUse: 0.1,
      wasteGeneration: 0.05,
      recyclability: 95
    },
    {
      technology: 'Solar PV',
      carbonIntensity: 0.05,
      waterUsage: 0.1,
      landUse: 3.5,
      wasteGeneration: 0.2,
      recyclability: 85
    },
    {
      technology: 'Wind',
      carbonIntensity: 0.04,
      waterUsage: 0.05,
      landUse: 2.8,
      wasteGeneration: 0.15,
      recyclability: 80
    },
    {
      technology: 'Natural Gas',
      carbonIntensity: 0.49,
      waterUsage: 2.5,
      landUse: 0.3,
      wasteGeneration: 0.8,
      recyclability: 20
    },
    {
      technology: 'Coal',
      carbonIntensity: 0.82,
      waterUsage: 3.2,
      landUse: 0.5,
      wasteGeneration: 1.2,
      recyclability: 10
    }
  ];

  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <section className="sustainability-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Sustainability Impact Dashboard</h1>
            <p className="hero-subtitle">
              Comprehensive environmental impact analysis and sustainability metrics 
              for KPP technology and Deep Engineering's commitment to a cleaner future
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-metrics">
        <div className="content-container">
          <div className={`metrics-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Environmental Impact Metrics</h2>
            <div className="metrics-grid">
              {environmentalMetrics.map((metric, index) => (
                <div 
                  key={metric.id} 
                  className={`metric-card ${selectedMetric === metric.id ? 'active' : ''}`}
                  onClick={() => setSelectedMetric(metric.id)}
                >
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-value" style={{ color: metric.color }}>
                    {metric.value.toLocaleString()}
                  </div>
                  <div className="metric-unit">{metric.unit}</div>
                  <div className="metric-title">{metric.title}</div>
                  <div className="metric-description">{metric.description}</div>
                  <div className="metric-comparison">{metric.comparison}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="sustainability-goals">
        <div className="content-container">
          <div className={`goals-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Sustainability Goals & Progress</h2>
            <div className="goals-grid">
              {sustainabilityGoals.map((goal, index) => (
                <div key={index} className="goal-card">
                  <div className="goal-header">
                    <h3>{goal.goal}</h3>
                    <div className="progress-circle">
                      <div className="progress-value">{goal.progress}%</div>
                    </div>
                  </div>
                  <div className="goal-description">{goal.description}</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <div className="goal-initiatives">
                    <h4>Key Initiatives</h4>
                    <ul>
                      {goal.initiatives.map((initiative, initIndex) => (
                        <li key={initIndex}>{initiative}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Analysis */}
      <section className="lifecycle-analysis">
        <div className="content-container">
          <div className={`lifecycle-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Lifecycle Environmental Analysis</h2>
            <div className="lifecycle-grid">
              {Object.entries(lifecycleAnalysis).map(([phase, data], index) => (
                <div key={phase} className="lifecycle-card">
                  <div className="lifecycle-header">
                    <h3>{phase.charAt(0).toUpperCase() + phase.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                    <div className="lifecycle-number">{index + 1}</div>
                  </div>
                  <div className="lifecycle-description">{data.description}</div>
                  <div className="lifecycle-metrics">
                    <div className="lifecycle-metric">
                      <span className="metric-label">Carbon Footprint</span>
                      <span className={`metric-value ${data.carbonFootprint < 0 ? 'positive' : 'negative'}`}>
                        {data.carbonFootprint > 0 ? '+' : ''}{data.carbonFootprint} tons CO₂
                      </span>
                    </div>
                    <div className="lifecycle-metric">
                      <span className="metric-label">Energy</span>
                      <span className={`metric-value ${data.energyConsumption < 0 ? 'positive' : 'negative'}`}>
                        {data.energyConsumption > 0 ? '+' : ''}{data.energyConsumption} MWh
                      </span>
                    </div>
                    <div className="lifecycle-metric">
                      <span className="metric-label">Water Usage</span>
                      <span className={`metric-value ${data.waterUsage < 0 ? 'positive' : 'negative'}`}>
                        {data.waterUsage > 0 ? '+' : ''}{data.waterUsage} gallons
                      </span>
                    </div>
                    <div className="lifecycle-metric">
                      <span className="metric-label">Waste</span>
                      <span className={`metric-value ${data.wasteGeneration < 0 ? 'positive' : 'negative'}`}>
                        {data.wasteGeneration > 0 ? '+' : ''}{data.wasteGeneration} tons
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lifecycle-summary">
              <h3>Net Environmental Impact (25-Year Lifecycle)</h3>
              <div className="summary-metrics">
                <div className="summary-metric positive">
                  <div className="summary-value">-735 tons</div>
                  <div className="summary-label">Net Carbon Reduction</div>
                </div>
                <div className="summary-metric positive">
                  <div className="summary-value">-8,110 MWh</div>
                  <div className="summary-label">Net Energy Generation</div>
                </div>
                <div className="summary-metric positive">
                  <div className="summary-value">-2,050 gallons</div>
                  <div className="summary-label">Net Water Savings</div>
                </div>
                <div className="summary-metric positive">
                  <div className="summary-value">-63 tons</div>
                  <div className="summary-label">Net Waste Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="technology-comparison">
        <div className="content-container">
          <div className={`comparison-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Environmental Technology Comparison</h2>
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell">Technology</div>
                <div className="header-cell">Carbon Intensity (kg CO₂/MWh)</div>
                <div className="header-cell">Water Usage (gal/MWh)</div>
                <div className="header-cell">Land Use (acres/MW)</div>
                <div className="header-cell">Waste (tons/MW/year)</div>
                <div className="header-cell">Recyclability (%)</div>
              </div>
              
              {impactComparison.map((tech, index) => (
                <div key={index} className={`table-row ${tech.technology === 'KPP System' ? 'highlighted' : ''}`}>
                  <div className="cell tech-name">{tech.technology}</div>
                  <div className="cell">{tech.carbonIntensity}</div>
                  <div className="cell">{tech.waterUsage}</div>
                  <div className="cell">{tech.landUse}</div>
                  <div className="cell">{tech.wasteGeneration}</div>
                  <div className="cell">{tech.recyclability}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="content-container">
          <div className={`certifications-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Environmental Certifications & Standards</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-badge">
                    <div className="cert-status">{cert.status}</div>
                    <div className="cert-year">{cert.year}</div>
                  </div>
                  <div className="cert-content">
                    <h3>{cert.name}</h3>
                    <p>{cert.description}</p>
                  </div>
                  <div className="cert-checkmark">✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="sustainability-initiatives">
        <div className="content-container">
          <div className={`initiatives-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Our Sustainability Initiatives</h2>
            <div className="initiatives-grid">
              <div className="initiative-card">
                <div className="initiative-icon">🌍</div>
                <h3>Climate Action</h3>
                <p>Science-based targets to reduce greenhouse gas emissions and achieve carbon neutrality by 2030</p>
                <div className="initiative-stats">
                  <div className="stat">
                    <span className="stat-value">50%</span>
                    <span className="stat-label">Emissions Reduction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">2030</span>
                    <span className="stat-label">Carbon Neutral</span>
                  </div>
                </div>
              </div>
              
              <div className="initiative-card">
                <div className="initiative-icon">🏭</div>
                <h3>Circular Manufacturing</h3>
                <p>Implementing circular economy principles in manufacturing processes and product design</p>
                <div className="initiative-stats">
                  <div className="stat">
                    <span className="stat-value">95%</span>
                    <span className="stat-label">Recyclable Materials</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">Zero</span>
                    <span className="stat-label">Waste to Landfill</span>
                  </div>
                </div>
              </div>
              
              <div className="initiative-card">
                <div className="initiative-icon">🌿</div>
                <h3>Biodiversity Conservation</h3>
                <p>Protecting and restoring natural ecosystems through responsible land use and habitat preservation</p>
                <div className="initiative-stats">
                  <div className="stat">
                    <span className="stat-value">90%</span>
                    <span className="stat-label">Land Use Efficiency</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">25</span>
                    <span className="stat-label">Habitat Projects</span>
                  </div>
                </div>
              </div>
              
              <div className="initiative-card">
                <div className="initiative-icon">🤝</div>
                <h3>Community Engagement</h3>
                <p>Partnering with local communities to create shared value and sustainable development</p>
                <div className="initiative-stats">
                  <div className="stat">
                    <span className="stat-value">100+</span>
                    <span className="stat-label">Community Partners</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">$2M</span>
                    <span className="stat-label">Community Investment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sustainability-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Join the Sustainability Revolution</h2>
            <p>Partner with us to create a cleaner, more sustainable future through innovative renewable energy solutions</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start Your Sustainability Journey</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/technology" className="btn btn-secondary btn-large">
                <span>Learn More</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .sustainability-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .sustainability-hero {
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
          background: linear-gradient(135deg, #1a1a1a 0%, #00aa00 100%);
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
        
        .impact-metrics,
        .sustainability-goals,
        .lifecycle-analysis,
        .technology-comparison,
        .certifications,
        .sustainability-initiatives {
          padding: 4rem 0;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .metrics-content,
        .goals-content,
        .lifecycle-content,
        .comparison-content,
        .certifications-content,
        .initiatives-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .metrics-content.animate-in,
        .goals-content.animate-in,
        .lifecycle-content.animate-in,
        .comparison-content.animate-in,
        .certifications-content.animate-in,
        .initiatives-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .metrics-content h2,
        .goals-content h2,
        .lifecycle-content h2,
        .comparison-content h2,
        .certifications-content h2,
        .initiatives-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .metric-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .metric-card:hover,
        .metric-card.active {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          border-color: #00aa00;
        }
        
        .metric-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .metric-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .metric-unit {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
        }
        
        .metric-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .metric-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.4;
          margin-bottom: 1rem;
        }
        
        .metric-comparison {
          font-size: 0.8rem;
          color: #00aa00;
          font-weight: 600;
          font-style: italic;
        }
        
        .sustainability-goals {
          background: white;
        }
        
        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .goal-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .goal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .goal-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        
        .progress-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: conic-gradient(#00aa00 0deg, #00aa00 var(--progress, 0deg), #f0f0f0 var(--progress, 0deg));
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .progress-circle::before {
          content: '';
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }
        
        .progress-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #00aa00;
          z-index: 1;
        }
        
        .goal-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #00aa00 0%, #00cc00 100%);
          border-radius: 4px;
          transition: width 0.8s ease;
        }
        
        .goal-initiatives h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .goal-initiatives ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .goal-initiatives li {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.3rem;
          position: relative;
          padding-left: 1rem;
        }
        
        .goal-initiatives li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00aa00;
          font-weight: bold;
        }
        
        .lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .lifecycle-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .lifecycle-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .lifecycle-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        
        .lifecycle-number {
          width: 30px;
          height: 30px;
          background: #0070f3;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        .lifecycle-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .lifecycle-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .lifecycle-metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .metric-label {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.25rem;
        }
        
        .metric-value {
          font-size: 1rem;
          font-weight: 600;
        }
        
        .metric-value.positive {
          color: #00aa00;
        }
        
        .metric-value.negative {
          color: #aa0000;
        }
        
        .lifecycle-summary {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .lifecycle-summary h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 2rem 0;
        }
        
        .summary-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .summary-metric {
          padding: 1.5rem;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0,170,0,0.1) 0%, rgba(0,170,0,0.05) 100%);
          border: 1px solid rgba(0,170,0,0.2);
        }
        
        .summary-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #00aa00;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .summary-label {
          font-size: 0.9rem;
          color: #666;
        }
        
        .technology-comparison {
          background: white;
        }
        
        .comparison-table {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
          border-bottom: 1px solid #eee;
        }
        
        .table-row.highlighted {
          background: linear-gradient(135deg, rgba(0,170,0,0.1) 0%, rgba(0,170,0,0.05) 100%);
        }
        
        .header-cell,
        .cell {
          padding: 1rem;
          text-align: center;
          font-weight: 600;
        }
        
        .cell {
          font-weight: 500;
        }
        
        .tech-name {
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .certification-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .cert-badge {
          background: #00aa00;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          text-align: center;
          min-width: 80px;
        }
        
        .cert-status {
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .cert-year {
          font-size: 0.7rem;
          opacity: 0.9;
        }
        
        .cert-content {
          flex: 1;
        }
        
        .cert-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
        }
        
        .cert-content p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .cert-checkmark {
          font-size: 1.5rem;
          color: #00aa00;
          font-weight: bold;
        }
        
        .sustainability-initiatives {
          background: white;
        }
        
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .initiative-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .initiative-card:hover {
          transform: translateY(-5px);
        }
        
        .initiative-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .initiative-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .initiative-card p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .initiative-stats {
          display: flex;
          justify-content: space-around;
          gap: 1rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00aa00;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #666;
        }
        
        .sustainability-cta {
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
          background: linear-gradient(135deg, #00aa00 0%, #00cc00 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(0, 170, 0, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 170, 0, 0.4);
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
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          
          .header-cell,
          .cell {
            padding: 0.5rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
          
          .lifecycle-metrics {
            grid-template-columns: 1fr;
          }
          
          .summary-metrics {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .metrics-grid,
          .goals-grid,
          .lifecycle-grid,
          .certifications-grid,
          .initiatives-grid {
            grid-template-columns: 1fr;
          }
          
          .summary-metrics {
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