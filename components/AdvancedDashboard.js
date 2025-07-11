import React, { useState, useEffect } from 'react';

const AdvancedAnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [dashboardData, setDashboardData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Generate comprehensive analytics data
  const generateAnalyticsData = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const data = {
        kpis: {
          efficiency: {
            current: 87.3,
            target: 85.0,
            trend: '+2.1%',
            status: 'excellent'
          },
          availability: {
            current: 96.8,
            target: 95.0,
            trend: '+1.2%',
            status: 'good'
          },
          performance: {
            current: 92.5,
            target: 90.0,
            trend: '+3.1%',
            status: 'excellent'
          },
          capacity_factor: {
            current: 34.2,
            target: 30.0,
            trend: '+4.2%',
            status: 'excellent'
          },
          mtbf: {
            current: 2847,
            target: 2500,
            trend: '+13.9%',
            status: 'excellent'
          },
          cost_per_mwh: {
            current: 28.5,
            target: 32.0,
            trend: '-10.9%',
            status: 'excellent'
          }
        },
        powerProduction: {
          total: 47.3, // MWh
          peak: 2.8, // MW
          average: 2.2, // MW
          forecast: 51.7 // MWh next period
        },
        operationalMetrics: {
          uptime: 99.2,
          downtimeHours: 0.19,
          maintenanceHours: 2.1,
          gridConnection: 99.8
        },
        environmentalImpact: {
          co2Avoided: 23.7, // tons
          treesEquivalent: 1089,
          housesSupplied: 147,
          waterSaved: 0.8 // million liters
        },
        financialMetrics: {
          revenue: 1247.8, // currency
          operatingCost: 356.2,
          netProfit: 891.6,
          roi: 18.3
        },
        weatherCorrelation: {
          windSpeed: 8.3,
          windDirection: 245,
          temperature: 12.5,
          humidity: 68,
          pressure: 1018.3
        },
        predictiveInsights: [
          {
            type: 'maintenance',
            priority: 'high',
            message: 'Gearbox lubrication due in 72 hours',
            impact: 'Prevents 0.5% efficiency loss',
            confidence: 94
          },
          {
            type: 'performance',
            priority: 'medium',
            message: 'Wind patterns favor +12% output tomorrow',
            impact: 'Estimated +3.2 MWh additional generation',
            confidence: 87
          },
          {
            type: 'optimization',
            priority: 'low',
            message: 'Blade angle adjustment opportunity',
            impact: 'Potential 1.8% efficiency gain',
            confidence: 76
          }
        ],
        benchmarking: {
          industryAverage: {
            efficiency: 82.1,
            availability: 94.2,
            capacity_factor: 28.7
          },
          topPerformers: {
            efficiency: 89.4,
            availability: 97.8,
            capacity_factor: 37.2
          },
          ranking: {
            efficiency: 85, // percentile
            availability: 92,
            capacity_factor: 88
          }
        }
      };
      
      setDashboardData(data);
      setIsLoading(false);
    }, 1200);
  };

  useEffect(() => {
    generateAnalyticsData();
  }, [timeRange]);

  const getStatusColor = (status) => {
    const colors = {
      excellent: 'var(--status-success)',
      good: 'var(--energy-orange)',
      warning: 'var(--status-warning)',
      critical: 'var(--status-error)'
    };
    return colors[status] || 'var(--text-muted)';
  };

  const formatNumber = (value, decimals = 1, suffix = '') => {
    return `${value.toFixed(decimals)}${suffix}`;
  };

  const calculateProgress = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const priorityColors = {
    high: 'var(--status-error)',
    medium: 'var(--energy-orange)',
    low: 'var(--status-success)'
  };

  return (
    <div className="advanced-analytics-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>📊 Advanced Analytics Dashboard</h1>
          <p>Comprehensive performance insights and predictive analytics</p>
        </div>
        
        <div className="dashboard-controls">
          <div className="control-group">
            <label>Time Range:</label>
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
          
          <div className="control-group">
            <label>Mode:</label>
            <button 
              className={`mode-toggle ${comparisonMode ? 'active' : ''}`}
              onClick={() => setComparisonMode(!comparisonMode)}
            >
              {comparisonMode ? '📊 Comparison' : '📈 Standard'}
            </button>
          </div>
          
          <button 
            onClick={generateAnalyticsData}
            disabled={isLoading}
            className="refresh-btn"
          >
            {isLoading ? '🔄' : '↻'} Refresh
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-dashboard">
          <div className="loading-animation">
            <div className="chart-placeholder">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
            <p>Analyzing performance data...</p>
          </div>
        </div>
      ) : (
        <div className="dashboard-content">
          {/* Key Performance Indicators */}
          <section className="kpi-section">
            <h2>🎯 Key Performance Indicators</h2>
            <div className="kpi-grid">
              {Object.entries(dashboardData.kpis || {}).map(([key, kpi]) => (
                <div key={key} className="kpi-card">
                  <div className="kpi-header">
                    <h3>{key.replace('_', ' ').toUpperCase()}</h3>
                    <span 
                      className="kpi-status"
                      style={{ color: getStatusColor(kpi.status) }}
                    >
                      ●
                    </span>
                  </div>
                  
                  <div className="kpi-value">
                    {formatNumber(kpi.current, 1, key.includes('cost') ? ' USD' : key.includes('mtbf') ? ' hrs' : '%')}
                  </div>
                  
                  <div className="kpi-target">
                    Target: {formatNumber(kpi.target, 1, key.includes('cost') ? ' USD' : key.includes('mtbf') ? ' hrs' : '%')}
                  </div>
                  
                  <div className="kpi-progress">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: `${calculateProgress(kpi.current, kpi.target)}%`,
                        background: getStatusColor(kpi.status)
                      }}
                    ></div>
                  </div>
                  
                  <div className={`kpi-trend ${kpi.trend.includes('+') ? 'positive' : 'negative'}`}>
                    {kpi.trend} vs target
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Power Production Overview */}
          <section className="production-section">
            <h2>⚡ Power Production Analysis</h2>
            <div className="production-grid">
              <div className="production-card main-metric">
                <h3>Total Generation</h3>
                <div className="metric-value">
                  {formatNumber(dashboardData.powerProduction?.total || 0, 1)} MWh
                </div>
                <div className="metric-subtitle">
                  Forecast: {formatNumber(dashboardData.powerProduction?.forecast || 0, 1)} MWh
                </div>
                <div className="production-chart">
                  <ProductionChart data={dashboardData.powerProduction} />
                </div>
              </div>
              
              <div className="production-stats">
                <div className="stat-item">
                  <span className="stat-label">Peak Output</span>
                  <span className="stat-value">
                    {formatNumber(dashboardData.powerProduction?.peak || 0, 2)} MW
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Average Output</span>
                  <span className="stat-value">
                    {formatNumber(dashboardData.powerProduction?.average || 0, 2)} MW
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Load Factor</span>
                  <span className="stat-value">
                    {formatNumber((dashboardData.powerProduction?.average / dashboardData.powerProduction?.peak) * 100 || 0, 1)}%
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Operational Metrics */}
          <section className="operational-section">
            <h2>🔧 Operational Excellence</h2>
            <div className="operational-grid">
              {Object.entries(dashboardData.operationalMetrics || {}).map(([key, value]) => (
                <div key={key} className="operational-card">
                  <div className="operational-icon">
                    {key === 'uptime' ? '⏱️' : 
                     key === 'downtimeHours' ? '⏸️' : 
                     key === 'maintenanceHours' ? '🔧' : '🔌'}
                  </div>
                  <h3>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                  <div className="operational-value">
                    {formatNumber(value, key.includes('Hours') ? 2 : 1, 
                                key.includes('Hours') ? ' hrs' : '%')}
                  </div>
                  <div className="operational-bar">
                    <div 
                      className="bar-fill"
                      style={{ 
                        width: `${key.includes('downtime') ? (100 - value * 10) : value}%`,
                        background: key.includes('downtime') ? 'var(--status-error)' : 'var(--status-success)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Environmental Impact */}
          <section className="environmental-section">
            <h2>🌱 Environmental Impact</h2>
            <div className="environmental-grid">
              <div className="impact-card">
                <div className="impact-icon">🌍</div>
                <h3>CO₂ Avoided</h3>
                <div className="impact-value">
                  {formatNumber(dashboardData.environmentalImpact?.co2Avoided || 0, 1)} tons
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🌳</div>
                <h3>Trees Equivalent</h3>
                <div className="impact-value">
                  {Math.round(dashboardData.environmentalImpact?.treesEquivalent || 0).toLocaleString()}
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🏠</div>
                <h3>Houses Supplied</h3>
                <div className="impact-value">
                  {Math.round(dashboardData.environmentalImpact?.housesSupplied || 0)}
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">💧</div>
                <h3>Water Saved</h3>
                <div className="impact-value">
                  {formatNumber(dashboardData.environmentalImpact?.waterSaved || 0, 2)} ML
                </div>
              </div>
            </div>
          </section>

          {/* Financial Performance */}
          <section className="financial-section">
            <h2>💰 Financial Performance</h2>
            <div className="financial-grid">
              <div className="financial-card revenue">
                <h3>Revenue</h3>
                <div className="financial-value">
                  ${(dashboardData.financialMetrics?.revenue || 0).toLocaleString()}
                </div>
              </div>
              <div className="financial-card cost">
                <h3>Operating Cost</h3>
                <div className="financial-value">
                  ${(dashboardData.financialMetrics?.operatingCost || 0).toLocaleString()}
                </div>
              </div>
              <div className="financial-card profit">
                <h3>Net Profit</h3>
                <div className="financial-value">
                  ${(dashboardData.financialMetrics?.netProfit || 0).toLocaleString()}
                </div>
              </div>
              <div className="financial-card roi">
                <h3>ROI</h3>
                <div className="financial-value">
                  {formatNumber(dashboardData.financialMetrics?.roi || 0, 1)}%
                </div>
              </div>
            </div>
          </section>

          {/* Predictive Insights */}
          <section className="insights-section">
            <h2>🔮 Predictive Insights</h2>
            <div className="insights-list">
              {(dashboardData.predictiveInsights || []).map((insight, index) => (
                <div key={index} className={`insight-item priority-${insight.priority}`}>
                  <div className="insight-header">
                    <div className="insight-type">
                      {insight.type === 'maintenance' ? '🔧' : 
                       insight.type === 'performance' ? '📈' : '⚡'}
                    </div>
                    <div className="insight-content">
                      <h4>{insight.message}</h4>
                      <p>{insight.impact}</p>
                    </div>
                    <div className="insight-confidence">
                      {insight.confidence}%
                    </div>
                  </div>
                  <div 
                    className="priority-indicator"
                    style={{ backgroundColor: priorityColors[insight.priority] }}
                  ></div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Benchmarking */}
          {comparisonMode && (
            <section className="benchmarking-section">
              <h2>📊 Industry Benchmarking</h2>
              <div className="benchmark-grid">
                {Object.entries(dashboardData.benchmarking?.industryAverage || {}).map(([metric, industryValue]) => {
                  const currentValue = dashboardData.kpis?.[metric]?.current || 0;
                  const topPerformerValue = dashboardData.benchmarking?.topPerformers?.[metric] || 0;
                  const ranking = dashboardData.benchmarking?.ranking?.[metric] || 0;
                  
                  return (
                    <div key={metric} className="benchmark-card">
                      <h3>{metric.replace('_', ' ').toUpperCase()}</h3>
                      
                      <div className="benchmark-comparison">
                        <div className="comparison-bar">
                          <div className="bar-section industry" style={{ width: '33.33%' }}>
                            <span className="bar-label">Industry</span>
                            <span className="bar-value">{formatNumber(industryValue, 1)}%</span>
                          </div>
                          <div className="bar-section current" style={{ width: '33.33%' }}>
                            <span className="bar-label">Current</span>
                            <span className="bar-value">{formatNumber(currentValue, 1)}%</span>
                          </div>
                          <div className="bar-section top" style={{ width: '33.33%' }}>
                            <span className="bar-label">Top 10%</span>
                            <span className="bar-value">{formatNumber(topPerformerValue, 1)}%</span>
                          </div>
                        </div>
                        
                        <div className="ranking-badge">
                          Top {100 - ranking}%
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      <style jsx>{`
        .advanced-analytics-dashboard {
          background: var(--surface-base);
          min-height: 100vh;
          padding: var(--space-6);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-8);
          padding-bottom: var(--space-6);
          border-bottom: 2px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .header-content h1 {
          margin: 0 0 var(--space-2) 0;
          color: var(--text-primary);
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--energy-orange), var(--energy-blue));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-content p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .dashboard-controls {
          display: flex;
          gap: var(--space-4);
          align-items: center;
          flex-wrap: wrap;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .control-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .control-group select {
          background: var(--surface-elevated);
          border: 1px solid var(--border-base);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          color: var(--text-primary);
          font-size: 0.9rem;
          cursor: pointer;
        }

        .mode-toggle {
          background: var(--surface-elevated);
          border: 1px solid var(--border-base);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          color: var(--text-primary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .mode-toggle.active {
          background: var(--energy-orange);
          color: white;
        }

        .refresh-btn {
          background: var(--energy-blue);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .refresh-btn:hover:not(:disabled) {
          background: var(--energy-blue-dark);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .loading-dashboard {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        .loading-animation {
          text-align: center;
          color: var(--text-muted);
        }

        .chart-placeholder {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          justify-content: center;
        }

        .loading-bar {
          width: 20px;
          height: 60px;
          background: var(--energy-orange);
          border-radius: var(--radius-sm);
          animation: loading-pulse 1.5s ease-in-out infinite;
        }

        .loading-bar:nth-child(2) { animation-delay: 0.3s; }
        .loading-bar:nth-child(3) { animation-delay: 0.6s; }

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .dashboard-content section {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
        }

        .dashboard-content section h2 {
          margin: 0 0 var(--space-6) 0;
          color: var(--text-primary);
          font-size: 1.75rem;
          font-weight: 700;
        }

        /* KPI Section */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-4);
        }

        .kpi-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
        }

        .kpi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .kpi-header h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .kpi-status {
          font-size: 1.2rem;
        }

        .kpi-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--energy-orange);
          margin-bottom: var(--space-2);
        }

        .kpi-target {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: var(--space-3);
        }

        .kpi-progress {
          height: 4px;
          background: var(--border-base);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: var(--space-3);
        }

        .progress-bar {
          height: 100%;
          transition: width 0.5s ease;
          border-radius: 2px;
        }

        .kpi-trend {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .kpi-trend.positive {
          color: var(--status-success);
        }

        .kpi-trend.negative {
          color: var(--status-error);
        }

        /* Production Section */
        .production-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-6);
        }

        .production-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
        }

        .production-card h3 {
          margin: 0 0 var(--space-3) 0;
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .metric-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--energy-blue);
          margin-bottom: var(--space-2);
        }

        .metric-subtitle {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: var(--space-4);
        }

        .production-chart {
          height: 120px;
          background: var(--surface-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-3);
        }

        .production-stats {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .stat-item {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--energy-orange);
        }

        /* Operational Section */
        .operational-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .operational-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          border: 1px solid var(--border-subtle);
        }

        .operational-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .operational-card h3 {
          margin: 0 0 var(--space-3) 0;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .operational-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--energy-blue);
          margin-bottom: var(--space-3);
        }

        .operational-bar {
          height: 6px;
          background: var(--border-base);
          border-radius: 3px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          transition: width 0.5s ease;
          border-radius: 3px;
        }

        /* Environmental Section */
        .environmental-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .impact-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          text-align: center;
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .impact-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .impact-icon {
          font-size: 2.5rem;
          margin-bottom: var(--space-3);
        }

        .impact-card h3 {
          margin: 0 0 var(--space-3) 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .impact-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--status-success);
        }

        /* Financial Section */
        .financial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .financial-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          text-align: center;
          border: 1px solid var(--border-subtle);
        }

        .financial-card h3 {
          margin: 0 0 var(--space-3) 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .financial-value {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .financial-card.revenue .financial-value {
          color: var(--energy-blue);
        }

        .financial-card.cost .financial-value {
          color: var(--status-error);
        }

        .financial-card.profit .financial-value {
          color: var(--status-success);
        }

        .financial-card.roi .financial-value {
          color: var(--energy-orange);
        }

        /* Insights Section */
        .insights-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .insight-item {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border: 1px solid var(--border-subtle);
          position: relative;
          overflow: hidden;
        }

        .insight-header {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .insight-type {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .insight-content {
          flex: 1;
        }

        .insight-content h4 {
          margin: 0 0 var(--space-2) 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .insight-content p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .insight-confidence {
          background: var(--surface-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .priority-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
        }

        /* Benchmarking Section */
        .benchmark-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .benchmark-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
        }

        .benchmark-card h3 {
          margin: 0 0 var(--space-4) 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .benchmark-comparison {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .comparison-bar {
          display: flex;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--border-base);
        }

        .bar-section {
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-1);
        }

        .bar-section.industry { background: var(--text-muted); }
        .bar-section.current { background: var(--energy-orange); }
        .bar-section.top { background: var(--status-success); }

        .bar-label {
          font-size: 0.75rem;
          color: white;
          font-weight: 500;
        }

        .bar-value {
          font-size: 0.85rem;
          color: white;
          font-weight: 700;
        }

        .ranking-badge {
          background: var(--energy-blue);
          color: white;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
        }

        @keyframes loading-pulse {
          0%, 100% { height: 20px; opacity: 0.4; }
          50% { height: 60px; opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: stretch;
          }

          .dashboard-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .production-grid {
            grid-template-columns: 1fr;
          }

          .kpi-grid,
          .operational-grid,
          .environmental-grid,
          .financial-grid,
          .benchmark-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

// Production Chart Component
const ProductionChart = ({ data }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, width, height);
    
    // Simple bar chart for current vs forecast
    const barWidth = width * 0.3;
    const barSpacing = width * 0.4;
    
    // Current generation bar
    const currentHeight = (data.total / data.forecast) * height * 0.8;
    ctx.fillStyle = '#00a8ff';
    ctx.fillRect(barSpacing / 2, height - currentHeight, barWidth, currentHeight);
    
    // Forecast bar
    const forecastHeight = height * 0.8;
    ctx.fillStyle = 'rgba(255, 107, 53, 0.6)';
    ctx.fillRect(barSpacing / 2 + barWidth + 20, height - forecastHeight, barWidth, forecastHeight);
    
    // Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '12px var(--font-sans)';
    ctx.textAlign = 'center';
    
    ctx.fillText('Current', barSpacing / 2 + barWidth / 2, height - 5);
    ctx.fillText('Forecast', barSpacing / 2 + barWidth + 20 + barWidth / 2, height - 5);

  }, [data]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default AdvancedAnalyticsDashboard;
