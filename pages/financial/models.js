import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FinancialModels() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState('roi');
  const [formData, setFormData] = useState({
    systemSize: 100,
    energyRate: 0.12,
    operatingHours: 8760,
    maintenanceCost: 5000,
    financingRate: 4.5,
    financingTerm: 15,
    taxRate: 25,
    inflationRate: 2.5,
    escalationRate: 3.0
  });
  const [results, setResults] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    calculateROI();
  }, []);

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const { systemSize, energyRate, operatingHours, maintenanceCost, financingRate, financingTerm, taxRate, inflationRate, escalationRate } = formData;
    
    // System cost calculation (per kW)
    const costPerKW = 2500; // KPP cost per kW
    const totalSystemCost = systemSize * costPerKW;
    
    // Annual energy production
    const annualEnergyProduction = systemSize * operatingHours;
    
    // Annual savings calculation
    const annualEnergySavings = annualEnergyProduction * energyRate;
    
    // Operating costs
    const annualOperatingCosts = maintenanceCost + (totalSystemCost * 0.01); // 1% of system cost
    
    // Net annual savings
    const netAnnualSavings = annualEnergySavings - annualOperatingCosts;
    
    // Payback period
    const paybackPeriod = totalSystemCost / netAnnualSavings;
    
    // NPV calculation
    const discountRate = financingRate / 100;
    let npv = -totalSystemCost;
    let cashFlows = [];
    
    for (let year = 1; year <= 25; year++) {
      const yearlyInflation = Math.pow(1 + inflationRate / 100, year);
      const yearlyEscalation = Math.pow(1 + escalationRate / 100, year);
      const inflatedSavings = annualEnergySavings * yearlyEscalation;
      const inflatedCosts = annualOperatingCosts * yearlyInflation;
      const netCashFlow = inflatedSavings - inflatedCosts;
      const presentValue = netCashFlow / Math.pow(1 + discountRate, year);
      npv += presentValue;
      
      cashFlows.push({
        year,
        savings: inflatedSavings,
        costs: inflatedCosts,
        netCashFlow,
        presentValue,
        cumulativeNPV: npv
      });
    }
    
    // IRR calculation (simplified)
    const irr = ((netAnnualSavings / totalSystemCost) * 100).toFixed(1);
    
    // LCOE calculation
    const lcoe = (totalSystemCost + (annualOperatingCosts * 25)) / (annualEnergyProduction * 25);
    
    setResults({
      totalSystemCost,
      annualEnergyProduction,
      annualEnergySavings,
      annualOperatingCosts,
      netAnnualSavings,
      paybackPeriod,
      npv,
      irr,
      lcoe,
      cashFlows
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const financialScenarios = [
    {
      name: "Conservative",
      description: "Lower energy rates, higher maintenance costs",
      adjustments: {
        energyRate: 0.10,
        maintenanceCost: 7000,
        escalationRate: 2.0
      }
    },
    {
      name: "Moderate",
      description: "Average market conditions",
      adjustments: {
        energyRate: 0.12,
        maintenanceCost: 5000,
        escalationRate: 3.0
      }
    },
    {
      name: "Optimistic",
      description: "Higher energy rates, lower maintenance costs",
      adjustments: {
        energyRate: 0.15,
        maintenanceCost: 3000,
        escalationRate: 4.0
      }
    }
  ];

  const comparisonData = [
    {
      technology: "KPP System",
      capex: 2500,
      opex: 50,
      capacity: 95,
      lifespan: 25,
      lcoe: 0.08,
      co2Reduction: 850
    },
    {
      technology: "Solar + Storage",
      capex: 3200,
      opex: 80,
      capacity: 25,
      lifespan: 20,
      lcoe: 0.12,
      co2Reduction: 650
    },
    {
      technology: "Wind + Storage",
      capex: 2800,
      opex: 120,
      capacity: 35,
      lifespan: 20,
      lcoe: 0.10,
      co2Reduction: 750
    },
    {
      technology: "Natural Gas",
      capex: 1200,
      opex: 180,
      capacity: 85,
      lifespan: 25,
      lcoe: 0.15,
      co2Reduction: 0
    }
  ];

  const applyScenario = (scenario) => {
    setFormData(prev => ({
      ...prev,
      ...scenario.adjustments
    }));
  };

  return (
    <div className="financial-models-page">
      {/* Hero Section */}
      <section className="financial-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Financial Models & ROI Analysis</h1>
            <p className="hero-subtitle">
              Comprehensive financial analysis tools to evaluate KPP system investments, 
              calculate returns, and optimize your energy investment strategy
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Selection */}
      <section className="calculator-selection">
        <div className="content-container">
          <div className="calculator-tabs">
            <button 
              className={`tab-btn ${activeCalculator === 'roi' ? 'active' : ''}`}
              onClick={() => setActiveCalculator('roi')}
            >
              ROI Calculator
            </button>
            <button 
              className={`tab-btn ${activeCalculator === 'comparison' ? 'active' : ''}`}
              onClick={() => setActiveCalculator('comparison')}
            >
              Technology Comparison
            </button>
            <button 
              className={`tab-btn ${activeCalculator === 'scenarios' ? 'active' : ''}`}
              onClick={() => setActiveCalculator('scenarios')}
            >
              Scenario Analysis
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      {activeCalculator === 'roi' && (
        <section className="roi-calculator">
          <div className="content-container">
            <div className="calculator-grid">
              <div className="input-panel">
                <h3>System Configuration</h3>
                <div className="input-group">
                  <label>System Size (kW)</label>
                  <input
                    type="number"
                    value={formData.systemSize}
                    onChange={(e) => handleInputChange('systemSize', e.target.value)}
                    min="25"
                    max="10000"
                    step="25"
                  />
                  <span className="input-range">25 kW - 10 MW</span>
                </div>
                
                <div className="input-group">
                  <label>Current Energy Rate ($/kWh)</label>
                  <input
                    type="number"
                    value={formData.energyRate}
                    onChange={(e) => handleInputChange('energyRate', e.target.value)}
                    min="0.05"
                    max="0.50"
                    step="0.01"
                  />
                  <span className="input-range">$0.05 - $0.50</span>
                </div>
                
                <div className="input-group">
                  <label>Operating Hours/Year</label>
                  <input
                    type="number"
                    value={formData.operatingHours}
                    onChange={(e) => handleInputChange('operatingHours', e.target.value)}
                    min="4000"
                    max="8760"
                    step="100"
                  />
                  <span className="input-range">4,000 - 8,760 hours</span>
                </div>
                
                <h3>Financial Parameters</h3>
                <div className="input-group">
                  <label>Annual Maintenance Cost ($)</label>
                  <input
                    type="number"
                    value={formData.maintenanceCost}
                    onChange={(e) => handleInputChange('maintenanceCost', e.target.value)}
                    min="1000"
                    max="20000"
                    step="500"
                  />
                </div>
                
                <div className="input-group">
                  <label>Financing Rate (%)</label>
                  <input
                    type="number"
                    value={formData.financingRate}
                    onChange={(e) => handleInputChange('financingRate', e.target.value)}
                    min="1"
                    max="15"
                    step="0.1"
                  />
                </div>
                
                <div className="input-group">
                  <label>Energy Price Escalation (%)</label>
                  <input
                    type="number"
                    value={formData.escalationRate}
                    onChange={(e) => handleInputChange('escalationRate', e.target.value)}
                    min="0"
                    max="8"
                    step="0.1"
                  />
                </div>
              </div>
              
              <div className="results-panel">
                <h3>Financial Analysis Results</h3>
                {results && (
                  <div className="results-grid">
                    <div className="result-card primary">
                      <div className="result-value">${results.totalSystemCost.toLocaleString()}</div>
                      <div className="result-label">Total System Cost</div>
                    </div>
                    
                    <div className="result-card">
                      <div className="result-value">{results.paybackPeriod.toFixed(1)} years</div>
                      <div className="result-label">Payback Period</div>
                    </div>
                    
                    <div className="result-card">
                      <div className="result-value">${results.npv.toLocaleString()}</div>
                      <div className="result-label">25-Year NPV</div>
                    </div>
                    
                    <div className="result-card">
                      <div className="result-value">{results.irr}%</div>
                      <div className="result-label">Internal Rate of Return</div>
                    </div>
                    
                    <div className="result-card">
                      <div className="result-value">${results.annualEnergySavings.toLocaleString()}</div>
                      <div className="result-label">Annual Energy Savings</div>
                    </div>
                    
                    <div className="result-card">
                      <div className="result-value">${results.lcoe.toFixed(3)}/kWh</div>
                      <div className="result-label">Levelized Cost of Energy</div>
                    </div>
                  </div>
                )}
                
                <div className="quick-scenarios">
                  <h4>Quick Scenarios</h4>
                  <div className="scenario-buttons">
                    {financialScenarios.map((scenario, index) => (
                      <button
                        key={index}
                        className="scenario-btn"
                        onClick={() => applyScenario(scenario)}
                      >
                        <span className="scenario-name">{scenario.name}</span>
                        <span className="scenario-desc">{scenario.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Comparison */}
      {activeCalculator === 'comparison' && (
        <section className="technology-comparison">
          <div className="content-container">
            <h3>Technology Comparison Analysis</h3>
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell">Technology</div>
                <div className="header-cell">CAPEX ($/kW)</div>
                <div className="header-cell">OPEX ($/kW/year)</div>
                <div className="header-cell">Capacity Factor (%)</div>
                <div className="header-cell">Lifespan (years)</div>
                <div className="header-cell">LCOE ($/kWh)</div>
                <div className="header-cell">CO₂ Reduction (tons/year)</div>
              </div>
              
              {comparisonData.map((tech, index) => (
                <div key={index} className={`table-row ${tech.technology === 'KPP System' ? 'highlighted' : ''}`}>
                  <div className="cell tech-name">{tech.technology}</div>
                  <div className="cell">${tech.capex.toLocaleString()}</div>
                  <div className="cell">${tech.opex}</div>
                  <div className="cell">{tech.capacity}%</div>
                  <div className="cell">{tech.lifespan}</div>
                  <div className="cell">${tech.lcoe.toFixed(3)}</div>
                  <div className="cell">{tech.co2Reduction}</div>
                </div>
              ))}
            </div>
            
            <div className="comparison-insights">
              <h4>Key Insights</h4>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">💰</div>
                  <div className="insight-content">
                    <h5>Lowest LCOE</h5>
                    <p>KPP systems offer the lowest levelized cost of energy at $0.08/kWh, 33% lower than solar+storage</p>
                  </div>
                </div>
                
                <div className="insight-card">
                  <div className="insight-icon">⚡</div>
                  <div className="insight-content">
                    <h5>Highest Capacity Factor</h5>
                    <p>95% capacity factor ensures consistent power generation, unlike weather-dependent alternatives</p>
                  </div>
                </div>
                
                <div className="insight-card">
                  <div className="insight-icon">🌱</div>
                  <div className="insight-content">
                    <h5>Maximum CO₂ Reduction</h5>
                    <p>850 tons/year CO₂ reduction, 13% higher than wind+storage systems</p>
                  </div>
                </div>
                
                <div className="insight-card">
                  <div className="insight-icon">🔧</div>
                  <div className="insight-content">
                    <h5>Lowest Maintenance</h5>
                    <p>$50/kW/year maintenance cost, significantly lower than wind or gas alternatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Scenario Analysis */}
      {activeCalculator === 'scenarios' && (
        <section className="scenario-analysis">
          <div className="content-container">
            <h3>Scenario Analysis & Sensitivity</h3>
            <div className="scenario-grid">
              <div className="scenario-card">
                <h4>Conservative Scenario</h4>
                <div className="scenario-assumptions">
                  <div className="assumption">Energy Rate: $0.10/kWh</div>
                  <div className="assumption">Maintenance: $7,000/year</div>
                  <div className="assumption">Escalation: 2.0%</div>
                </div>
                <div className="scenario-results">
                  <div className="result">Payback: 8.2 years</div>
                  <div className="result">NPV: $1.2M</div>
                  <div className="result">IRR: 12.1%</div>
                </div>
              </div>
              
              <div className="scenario-card highlighted">
                <h4>Base Case Scenario</h4>
                <div className="scenario-assumptions">
                  <div className="assumption">Energy Rate: $0.12/kWh</div>
                  <div className="assumption">Maintenance: $5,000/year</div>
                  <div className="assumption">Escalation: 3.0%</div>
                </div>
                <div className="scenario-results">
                  <div className="result">Payback: 6.8 years</div>
                  <div className="result">NPV: $1.8M</div>
                  <div className="result">IRR: 14.7%</div>
                </div>
              </div>
              
              <div className="scenario-card">
                <h4>Optimistic Scenario</h4>
                <div className="scenario-assumptions">
                  <div className="assumption">Energy Rate: $0.15/kWh</div>
                  <div className="assumption">Maintenance: $3,000/year</div>
                  <div className="assumption">Escalation: 4.0%</div>
                </div>
                <div className="scenario-results">
                  <div className="result">Payback: 5.1 years</div>
                  <div className="result">NPV: $2.6M</div>
                  <div className="result">IRR: 19.6%</div>
                </div>
              </div>
            </div>
            
            <div className="sensitivity-analysis">
              <h4>Sensitivity Analysis</h4>
              <div className="sensitivity-chart">
                <div className="sensitivity-item">
                  <div className="sensitivity-label">Energy Rate (+/- 20%)</div>
                  <div className="sensitivity-bar">
                    <div className="bar-fill" style={{width: '85%'}}></div>
                  </div>
                  <div className="sensitivity-impact">High Impact</div>
                </div>
                
                <div className="sensitivity-item">
                  <div className="sensitivity-label">System Cost (+/- 15%)</div>
                  <div className="sensitivity-bar">
                    <div className="bar-fill" style={{width: '70%'}}></div>
                  </div>
                  <div className="sensitivity-impact">Medium Impact</div>
                </div>
                
                <div className="sensitivity-item">
                  <div className="sensitivity-label">Capacity Factor (+/- 10%)</div>
                  <div className="sensitivity-bar">
                    <div className="bar-fill" style={{width: '60%'}}></div>
                  </div>
                  <div className="sensitivity-impact">Medium Impact</div>
                </div>
                
                <div className="sensitivity-item">
                  <div className="sensitivity-label">Maintenance Cost (+/- 50%)</div>
                  <div className="sensitivity-bar">
                    <div className="bar-fill" style={{width: '25%'}}></div>
                  </div>
                  <div className="sensitivity-impact">Low Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cash Flow Visualization */}
      {activeCalculator === 'roi' && results && (
        <section className="cash-flow-section">
          <div className="content-container">
            <h3>25-Year Cash Flow Analysis</h3>
            <div className="cash-flow-chart">
              <div className="chart-header">
                <div className="chart-title">Cumulative Cash Flow</div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color positive"></div>
                    <span>Positive Cash Flow</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color negative"></div>
                    <span>Negative Cash Flow</span>
                  </div>
                </div>
              </div>
              
              <div className="chart-container">
                <div className="y-axis">
                  <div className="y-label">$2M</div>
                  <div className="y-label">$1M</div>
                  <div className="y-label">$0</div>
                  <div className="y-label">-$1M</div>
                </div>
                
                <div className="chart-bars">
                  {results.cashFlows.slice(0, 25).map((flow, index) => (
                    <div key={index} className="bar-container">
                      <div 
                        className={`cash-flow-bar ${flow.cumulativeNPV >= 0 ? 'positive' : 'negative'}`}
                        style={{
                          height: `${Math.abs(flow.cumulativeNPV) / 50000}px`,
                          maxHeight: '200px'
                        }}
                        title={`Year ${flow.year}: $${flow.cumulativeNPV.toLocaleString()}`}
                      ></div>
                      <div className="bar-label">{flow.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="financial-cta">
        <div className="cta-container">
          <div className={`cta-content ${isVisible ? 'animate-in' : ''}`}>
            <h2>Ready to Optimize Your Energy Investment?</h2>
            <p>Get a personalized financial analysis and discover how KPP technology can transform your energy economics</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Request Custom Analysis</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-secondary btn-large">
                <span>View Solutions</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .financial-models-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .financial-hero {
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
        
        .calculator-selection {
          background: white;
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .calculator-tabs {
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
        
        .roi-calculator,
        .technology-comparison,
        .scenario-analysis,
        .cash-flow-section {
          padding: 4rem 0;
        }
        
        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .input-panel,
        .results-panel {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .input-panel h3,
        .results-panel h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .input-group {
          margin-bottom: 1.5rem;
        }
        
        .input-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }
        
        .input-group input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .input-group input:focus {
          outline: none;
          border-color: #0070f3;
        }
        
        .input-range {
          font-size: 0.8rem;
          color: #666;
          margin-top: 0.25rem;
          display: block;
        }
        
        .results-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .result-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }
        
        .result-card.primary {
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          color: white;
        }
        
        .result-value {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .result-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .quick-scenarios {
          margin-top: 2rem;
        }
        
        .quick-scenarios h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .scenario-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .scenario-btn {
          padding: 1rem;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .scenario-btn:hover {
          border-color: #0070f3;
          background: rgba(0,112,243,0.05);
        }
        
        .scenario-name {
          font-weight: 600;
          color: #1a1a1a;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .scenario-desc {
          font-size: 0.9rem;
          color: #666;
        }
        
        .technology-comparison h3,
        .scenario-analysis h3,
        .cash-flow-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          text-align: center;
        }
        
        .comparison-table {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-bottom: 3rem;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
          border-bottom: 1px solid #eee;
        }
        
        .table-row.highlighted {
          background: linear-gradient(135deg, rgba(0,112,243,0.1) 0%, rgba(0,112,243,0.05) 100%);
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
        
        .comparison-insights {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .comparison-insights h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .insight-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }
        
        .insight-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .insight-content h5 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1a1a1a;
        }
        
        .insight-content p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .scenario-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .scenario-card.highlighted {
          background: linear-gradient(135deg, rgba(0,112,243,0.1) 0%, rgba(0,112,243,0.05) 100%);
          border: 2px solid #0070f3;
        }
        
        .scenario-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .scenario-assumptions {
          margin-bottom: 1.5rem;
        }
        
        .assumption {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        .scenario-results {
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
        }
        
        .result {
          font-size: 1rem;
          font-weight: 600;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .sensitivity-analysis {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .sensitivity-analysis h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }
        
        .sensitivity-chart {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .sensitivity-item {
          display: grid;
          grid-template-columns: 200px 1fr 100px;
          align-items: center;
          gap: 1rem;
        }
        
        .sensitivity-label {
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .sensitivity-bar {
          height: 20px;
          background: #f0f0f0;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
          border-radius: 10px;
          transition: width 0.3s ease;
        }
        
        .sensitivity-impact {
          font-size: 0.9rem;
          font-weight: 600;
          color: #666;
        }
        
        .cash-flow-chart {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .chart-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .chart-legend {
          display: flex;
          gap: 1rem;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        
        .legend-color.positive {
          background: #00aa00;
        }
        
        .legend-color.negative {
          background: #aa0000;
        }
        
        .chart-container {
          display: flex;
          align-items: end;
          gap: 1rem;
        }
        
        .y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 200px;
          padding-right: 1rem;
        }
        
        .y-label {
          font-size: 0.8rem;
          color: #666;
        }
        
        .chart-bars {
          display: flex;
          align-items: end;
          gap: 2px;
          flex: 1;
          height: 200px;
        }
        
        .bar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        
        .cash-flow-bar {
          width: 100%;
          border-radius: 2px;
          min-height: 2px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        
        .cash-flow-bar.positive {
          background: #00aa00;
          align-self: flex-end;
        }
        
        .cash-flow-bar.negative {
          background: #aa0000;
          align-self: flex-start;
        }
        
        .cash-flow-bar:hover {
          opacity: 0.7;
        }
        
        .bar-label {
          font-size: 0.7rem;
          color: #666;
          margin-top: 0.5rem;
          transform: rotate(-45deg);
        }
        
        .financial-cta {
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
          .calculator-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
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
          
          .results-grid {
            grid-template-columns: 1fr;
          }
          
          .chart-container {
            flex-direction: column;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .calculator-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .scenario-grid {
            grid-template-columns: 1fr;
          }
          
          .insights-grid {
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