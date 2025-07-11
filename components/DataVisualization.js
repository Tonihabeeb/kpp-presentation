import React, { useState, useEffect } from 'react';

const DataCard = ({ 
  title, 
  value, 
  unit, 
  change, 
  trend = 'up', 
  icon, 
  description,
  color = 'primary' 
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(parseFloat(value) || 0);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  const colorClasses = {
    primary: 'data-card-primary',
    secondary: 'data-card-secondary',
    accent: 'data-card-accent',
    success: 'data-card-success',
    warning: 'data-card-warning'
  };

  return (
    <div className={`data-card ${colorClasses[color]}`}>
      <div className="data-card-header">
        <div className="data-icon">
          {icon}
        </div>
        <div className="data-trend">
          <span className={`trend-indicator ${trend}`}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
          </span>
          {change && <span className="trend-value">{change}</span>}
        </div>
      </div>
      
      <div className="data-content">
        <div className="data-value">
          <span className="value-number">
            {animatedValue.toLocaleString()}
          </span>
          {unit && <span className="value-unit">{unit}</span>}
        </div>
        <div className="data-title">{title}</div>
        {description && <div className="data-description">{description}</div>}
      </div>
      
      <div className="data-visual">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${Math.min((animatedValue / 100) * 100, 100)}%` }}></div>
        </div>
      </div>
      
      <style jsx>{`
        .data-card {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--neutral-200);
          position: relative;
          overflow: hidden;
          transition: all var(--transition-base);
        }
        
        .data-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-industrial);
        }
        
        .data-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-blue), var(--energy-orange));
        }
        
        .data-card-primary::before {
          background: linear-gradient(90deg, var(--primary-blue), var(--primary-blue-light));
        }
        
        .data-card-secondary::before {
          background: linear-gradient(90deg, var(--energy-orange), var(--energy-orange-light));
        }
        
        .data-card-accent::before {
          background: linear-gradient(90deg, var(--tech-teal), var(--tech-teal-light));
        }
        
        .data-card-success::before {
          background: linear-gradient(90deg, var(--success), #48BB78);
        }
        
        .data-card-warning::before {
          background: linear-gradient(90deg, var(--warning), #ECC94B);
        }
        
        .data-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-4);
        }
        
        .data-icon {
          width: 48px;
          height: 48px;
          background: var(--neutral-100);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        
        .data-trend {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        
        .trend-indicator {
          font-size: 1.2rem;
          font-weight: bold;
        }
        
        .trend-indicator.up {
          color: var(--success);
        }
        
        .trend-indicator.down {
          color: var(--danger);
        }
        
        .trend-indicator.neutral {
          color: var(--neutral-500);
        }
        
        .trend-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--neutral-600);
        }
        
        .data-content {
          margin-bottom: var(--space-4);
        }
        
        .data-value {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
          margin-bottom: var(--space-2);
        }
        
        .value-number {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--primary-blue);
          line-height: 1;
          animation: countUp 1s ease-out;
        }
        
        .value-unit {
          font-size: 1rem;
          font-weight: 600;
          color: var(--neutral-500);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .data-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--neutral-700);
          margin-bottom: var(--space-1);
        }
        
        .data-description {
          font-size: 0.875rem;
          color: var(--neutral-500);
          line-height: 1.5;
        }
        
        .data-visual {
          position: relative;
        }
        
        .progress-bar {
          width: 100%;
          height: 4px;
          background: var(--neutral-200);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-blue), var(--energy-orange));
          border-radius: 2px;
          transition: width 1.5s ease-out;
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const MetricsGrid = ({ metrics }) => {
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <DataCard key={index} {...metric} />
      ))}
      
      <style jsx>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
          margin: var(--space-8) 0;
        }
        
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

const PerformanceChart = ({ title, data, type = 'line' }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="performance-chart">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color primary"></div>
            <span>Current Performance</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        {type === 'line' && (
          <svg className="line-chart" viewBox="0 0 400 200">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary-blue)" />
                <stop offset="100%" stopColor="var(--energy-orange)" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-blue)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary-blue)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Grid */}
            <g className="grid">
              {[0, 1, 2, 3, 4].map(i => (
                <line 
                  key={i}
                  x1="40" 
                  y1={40 + i * 32} 
                  x2="360" 
                  y2={40 + i * 32}
                  stroke="var(--neutral-200)"
                  strokeWidth="1"
                />
              ))}
            </g>
            
            {/* Data line */}
            <path
              d={`M 40,${200 - (data[0]?.value / maxValue) * 160} ${data.map((point, index) => 
                `L ${40 + (index * 320 / (data.length - 1))},${200 - (point.value / maxValue) * 160}`
              ).join(' ')}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Data points */}
            {data.map((point, index) => (
              <circle
                key={index}
                cx={40 + (index * 320 / (data.length - 1))}
                cy={200 - (point.value / maxValue) * 160}
                r="4"
                fill="var(--energy-orange)"
                stroke="white"
                strokeWidth="2"
              />
            ))}
          </svg>
        )}
        
        {type === 'bar' && (
          <div className="bar-chart">
            {data.map((item, index) => (
              <div key={index} className="bar-item">
                <div 
                  className="bar"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                ></div>
                <div className="bar-label">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        .performance-chart {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--neutral-200);
          overflow: hidden;
        }
        
        .chart-header {
          padding: var(--space-6);
          border-bottom: 1px solid var(--neutral-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--neutral-50);
        }
        
        .chart-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-blue);
          margin: 0;
        }
        
        .chart-legend {
          display: flex;
          gap: var(--space-4);
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--neutral-600);
        }
        
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        
        .legend-color.primary {
          background: var(--primary-blue);
        }
        
        .chart-container {
          padding: var(--space-6);
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .line-chart {
          width: 100%;
          height: 100%;
        }
        
        .bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 200px;
          width: 100%;
          gap: var(--space-2);
        }
        
        .bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          max-width: 60px;
        }
        
        .bar {
          width: 100%;
          background: linear-gradient(180deg, var(--energy-orange), var(--primary-blue));
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          min-height: 20px;
          transition: all var(--transition-base);
          animation: barGrow 1s ease-out;
        }
        
        .bar-label {
          margin-top: var(--space-2);
          font-size: 0.75rem;
          color: var(--neutral-600);
          text-align: center;
          font-weight: 500;
        }
        
        @keyframes barGrow {
          from {
            height: 0;
          }
          to {
            height: var(--final-height);
          }
        }
        
        @media (max-width: 768px) {
          .chart-header {
            flex-direction: column;
            gap: var(--space-3);
            text-align: center;
          }
          
          .chart-container {
            height: 250px;
            padding: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export { DataCard, MetricsGrid, PerformanceChart };
