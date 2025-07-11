import React, { useState, useEffect, useCallback } from 'react';

const AIPredictiveAnalytics = () => {
  const [predictions, setPredictions] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('power');
  const [timeRange, setTimeRange] = useState('24h');
  const [confidence, setConfidence] = useState(0);
  const [insights, setInsights] = useState([]);

  // Simulate AI model predictions
  const generatePredictions = useCallback(async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const baseTime = Date.now();
    const timeRanges = {
      '1h': 1,
      '6h': 6,
      '24h': 24,
      '7d': 168,
      '30d': 720
    };
    
    const hours = timeRanges[timeRange];
    const dataPoints = Math.min(hours, 48); // Limit visualization points
    
    // Advanced prediction algorithms simulation
    const algorithms = {
      power: () => {
        const basePower = 2.5; // MW
        const seasonal = Math.sin((Date.now() / (1000 * 60 * 60 * 24)) * 2 * Math.PI) * 0.3;
        const trend = 0.02; // Slight upward trend
        const noise = (Math.random() - 0.5) * 0.1;
        return Math.max(0, basePower + seasonal + trend + noise);
      },
      efficiency: () => {
        const baseEfficiency = 0.85;
        const weather = Math.sin((Date.now() / (1000 * 60 * 60 * 6)) * 2 * Math.PI) * 0.05;
        const maintenance = Math.cos((Date.now() / (1000 * 60 * 60 * 24 * 7)) * 2 * Math.PI) * 0.02;
        const noise = (Math.random() - 0.5) * 0.02;
        return Math.min(1, Math.max(0, baseEfficiency + weather + maintenance + noise));
      },
      temperature: () => {
        const baseTemp = 65; // °C
        const daily = Math.sin((Date.now() / (1000 * 60 * 60 * 12)) * 2 * Math.PI) * 5;
        const load = Math.random() * 3;
        return baseTemp + daily + load;
      },
      vibration: () => {
        const baseVibration = 0.2; // mm/s
        const frequency = Math.sin((Date.now() / (1000 * 60)) * 2 * Math.PI) * 0.05;
        const random = Math.random() * 0.1;
        return baseVibration + frequency + random;
      }
    };
    
    const predictionData = {};
    
    Object.keys(algorithms).forEach(metric => {
      predictionData[metric] = {
        historical: [],
        predicted: [],
        confidence: 0.75 + Math.random() * 0.2 // 75-95% confidence
      };
      
      // Generate historical data (negative time)
      for (let i = -dataPoints/2; i < 0; i++) {
        const timestamp = baseTime + (i * 60 * 60 * 1000);
        const value = algorithms[metric]();
        predictionData[metric].historical.push({
          timestamp,
          value,
          actual: true
        });
      }
      
      // Generate predictions (positive time)
      for (let i = 0; i < dataPoints/2; i++) {
        const timestamp = baseTime + (i * 60 * 60 * 1000);
        const value = algorithms[metric]();
        const uncertainty = (i / (dataPoints/2)) * 0.1; // Increasing uncertainty
        predictionData[metric].predicted.push({
          timestamp,
          value,
          upperBound: value + uncertainty,
          lowerBound: value - uncertainty,
          actual: false
        });
      }
    });
    
    // Generate AI insights
    const aiInsights = [
      {
        type: 'optimization',
        severity: 'low',
        title: 'Efficiency Optimization Opportunity',
        description: 'Wind patterns suggest 3% efficiency gain possible with turbine angle adjustment.',
        recommendation: 'Adjust blade pitch angle by 2.5° during 14:00-16:00 window.',
        confidence: 0.87,
        impactScore: 7.2
      },
      {
        type: 'maintenance',
        severity: 'medium',
        title: 'Predictive Maintenance Alert',
        description: 'Vibration patterns indicate bearing wear in generator unit 2.',
        recommendation: 'Schedule maintenance within 7-10 days to prevent unplanned downtime.',
        confidence: 0.91,
        impactScore: 8.5
      },
      {
        type: 'performance',
        severity: 'high',
        title: 'Peak Performance Window',
        description: 'Optimal wind conditions expected between 6:00-9:00 tomorrow.',
        recommendation: 'Maximize power output during morning hours, expect 15% above average.',
        confidence: 0.94,
        impactScore: 9.1
      },
      {
        type: 'alert',
        severity: 'low',
        title: 'Temperature Monitoring',
        description: 'Generator temperature will peak at 72°C during afternoon operation.',
        recommendation: 'Cooling system performance is adequate, no action required.',
        confidence: 0.83,
        impactScore: 4.7
      }
    ];
    
    setPredictions(predictionData);
    setConfidence(predictionData[selectedMetric]?.confidence || 0.85);
    setInsights(aiInsights);
    setIsLoading(false);
  }, [timeRange, selectedMetric]);

  useEffect(() => {
    generatePredictions();
  }, [generatePredictions]);

  const formatMetricValue = (metric, value) => {
    const formats = {
      power: (v) => `${v.toFixed(2)} MW`,
      efficiency: (v) => `${(v * 100).toFixed(1)}%`,
      temperature: (v) => `${v.toFixed(1)}°C`,
      vibration: (v) => `${v.toFixed(2)} mm/s`
    };
    return formats[metric] ? formats[metric](value) : value.toFixed(2);
  };

  const getInsightIcon = (type) => {
    const icons = {
      optimization: '⚡',
      maintenance: '🔧',
      performance: '📈',
      alert: '⚠️'
    };
    return icons[type] || '📊';
  };

  return (
    <div className="ai-predictive-analytics">
      <div className="analytics-header">
        <div className="header-content">
          <h2>🤖 AI Predictive Analytics</h2>
          <p>Machine learning powered insights and predictions</p>
        </div>
        
        <div className="controls">
          <select 
            value={selectedMetric} 
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="metric-selector"
          >
            <option value="power">Power Output</option>
            <option value="efficiency">Efficiency</option>
            <option value="temperature">Temperature</option>
            <option value="vibration">Vibration</option>
          </select>
          
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-selector"
          >
            <option value="1h">1 Hour</option>
            <option value="6h">6 Hours</option>
            <option value="24h">24 Hours</option>
            <option value="7d">7 Days</option>
            <option value="30d">30 Days</option>
          </select>

          <button 
            onClick={generatePredictions}
            disabled={isLoading}
            className="refresh-btn"
          >
            {isLoading ? '🔄' : '🔄'} Refresh
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-state">
          <div className="ai-loader">
            <div className="neural-network">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
            <p>AI Model Processing...</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="analytics-content">
          {/* Prediction Chart */}
          <div className="prediction-chart">
            <div className="chart-header">
              <h3>Predictive Analysis - {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}</h3>
              <div className="confidence-badge">
                Confidence: {(confidence * 100).toFixed(1)}%
              </div>
            </div>
            
            <div className="chart-container">
              <PredictionChart 
                data={predictions[selectedMetric]} 
                metric={selectedMetric}
                formatValue={formatMetricValue}
              />
            </div>
          </div>

          {/* AI Insights */}
          <div className="ai-insights">
            <h3>🧠 AI Insights & Recommendations</h3>
            <div className="insights-grid">
              {insights.map((insight, index) => (
                <div 
                  key={index} 
                  className={`insight-card severity-${insight.severity}`}
                >
                  <div className="insight-header">
                    <span className="insight-icon">{getInsightIcon(insight.type)}</span>
                    <div className="insight-meta">
                      <h4>{insight.title}</h4>
                      <div className="insight-stats">
                        <span className="confidence">
                          {(insight.confidence * 100).toFixed(0)}% confident
                        </span>
                        <span className="impact">
                          Impact: {insight.impactScore}/10
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="insight-description">{insight.description}</p>
                  <div className="insight-recommendation">
                    <strong>Recommendation:</strong> {insight.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Model Performance */}
          <div className="model-performance">
            <h3>📊 Model Performance Metrics</h3>
            <div className="performance-grid">
              <div className="performance-metric">
                <div className="metric-value">94.7%</div>
                <div className="metric-label">Accuracy</div>
              </div>
              <div className="performance-metric">
                <div className="metric-value">0.023</div>
                <div className="metric-label">MAE</div>
              </div>
              <div className="performance-metric">
                <div className="metric-value">0.891</div>
                <div className="metric-label">R² Score</div>
              </div>
              <div className="performance-metric">
                <div className="metric-value">12ms</div>
                <div className="metric-label">Inference Time</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ai-predictive-analytics {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-subtle);
        }

        .analytics-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .header-content h2 {
          margin: 0 0 var(--space-2) 0;
          color: var(--text-primary);
          font-size: 1.75rem;
          font-weight: 700;
        }

        .header-content p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .controls {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .metric-selector,
        .time-selector {
          background: var(--surface-base);
          border: 1px solid var(--border-base);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          color: var(--text-primary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .metric-selector:hover,
        .time-selector:hover {
          border-color: var(--energy-orange);
        }

        .refresh-btn {
          background: var(--energy-orange);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-4);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
          min-width: 100px;
        }

        .refresh-btn:hover:not(:disabled) {
          background: var(--energy-orange-dark);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .loading-state {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .ai-loader {
          text-align: center;
          color: var(--text-muted);
        }

        .neural-network {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-4) auto;
          position: relative;
        }

        .node {
          width: 16px;
          height: 16px;
          background: var(--energy-orange);
          border-radius: 50%;
          position: absolute;
          animation: pulse 2s ease-in-out infinite;
        }

        .node:nth-child(1) { top: 10px; left: 10px; animation-delay: 0s; }
        .node:nth-child(2) { top: 30px; right: 10px; animation-delay: 0.3s; }
        .node:nth-child(3) { bottom: 10px; left: 50%; transform: translateX(-50%); animation-delay: 0.6s; }

        .connection {
          position: absolute;
          height: 2px;
          background: var(--energy-orange);
          opacity: 0.6;
          animation: flow 2s ease-in-out infinite;
        }

        .connection:nth-child(4) {
          top: 18px;
          left: 26px;
          width: 30px;
          transform: rotate(25deg);
        }

        .connection:nth-child(5) {
          top: 38px;
          left: 26px;
          width: 30px;
          transform: rotate(-25deg);
        }

        .progress-bar {
          width: 200px;
          height: 4px;
          background: var(--border-base);
          border-radius: 2px;
          margin: var(--space-4) auto 0;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--energy-orange);
          border-radius: 2px;
          animation: progress 2s ease-in-out infinite;
        }

        .analytics-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .prediction-chart {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .chart-header h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
        }

        .confidence-badge {
          background: var(--status-success);
          color: white;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .chart-container {
          height: 300px;
          background: var(--surface-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          border: 1px solid var(--border-base);
        }

        .ai-insights h3 {
          margin: 0 0 var(--space-4) 0;
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .insight-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border-left: 4px solid var(--border-base);
          transition: all var(--transition-base);
        }

        .insight-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .insight-card.severity-low {
          border-left-color: var(--status-success);
        }

        .insight-card.severity-medium {
          border-left-color: var(--energy-orange);
        }

        .insight-card.severity-high {
          border-left-color: var(--status-error);
        }

        .insight-header {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        .insight-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .insight-meta h4 {
          margin: 0 0 var(--space-2) 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .insight-stats {
          display: flex;
          gap: var(--space-3);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .insight-description {
          margin: 0 0 var(--space-3) 0;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .insight-recommendation {
          background: var(--surface-elevated);
          padding: var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .insight-recommendation strong {
          color: var(--energy-orange);
        }

        .model-performance h3 {
          margin: 0 0 var(--space-4) 0;
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-4);
        }

        .performance-metric {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          border: 1px solid var(--border-subtle);
        }

        .metric-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--energy-orange);
          margin-bottom: var(--space-2);
        }

        .metric-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @keyframes flow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .analytics-header {
            flex-direction: column;
            align-items: stretch;
          }

          .controls {
            justify-content: stretch;
          }

          .metric-selector,
          .time-selector,
          .refresh-btn {
            flex: 1;
            min-width: 0;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .performance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

// Prediction Chart Component
const PredictionChart = ({ data, metric, formatValue }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Combine historical and predicted data
    const allData = [...(data.historical || []), ...(data.predicted || [])];
    if (allData.length === 0) return;
    
    // Find min/max values for scaling
    const minValue = Math.min(...allData.map(d => d.value));
    const maxValue = Math.max(...allData.map(d => d.value));
    const valueRange = maxValue - minValue;
    
    const minTime = Math.min(...allData.map(d => d.timestamp));
    const maxTime = Math.max(...allData.map(d => d.timestamp));
    const timeRange = maxTime - minTime;
    
    // Helper functions
    const xPos = (timestamp) => padding + ((timestamp - minTime) / timeRange) * chartWidth;
    const yPos = (value) => padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 5; i++) {
      const x = padding + (i / 5) * chartWidth;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i / 5) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
    
    // Draw current time line
    const currentTime = Date.now();
    if (currentTime >= minTime && currentTime <= maxTime) {
      const currentX = xPos(currentTime);
      ctx.strokeStyle = '#ff6b35';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(currentX, padding);
      ctx.lineTo(currentX, height - padding);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // Draw historical data
    if (data.historical && data.historical.length > 0) {
      ctx.strokeStyle = '#00a8ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      data.historical.forEach((point, index) => {
        const x = xPos(point.timestamp);
        const y = yPos(point.value);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();
      
      // Draw historical points
      ctx.fillStyle = '#00a8ff';
      data.historical.forEach(point => {
        const x = xPos(point.timestamp);
        const y = yPos(point.value);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    // Draw predicted data with confidence bands
    if (data.predicted && data.predicted.length > 0) {
      // Draw confidence band
      ctx.fillStyle = 'rgba(255, 107, 53, 0.2)';
      ctx.beginPath();
      
      // Upper bound
      data.predicted.forEach((point, index) => {
        const x = xPos(point.timestamp);
        const y = yPos(point.upperBound || point.value);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      // Lower bound (reverse order)
      for (let i = data.predicted.length - 1; i >= 0; i--) {
        const point = data.predicted[i];
        const x = xPos(point.timestamp);
        const y = yPos(point.lowerBound || point.value);
        ctx.lineTo(x, y);
      }
      
      ctx.closePath();
      ctx.fill();
      
      // Draw prediction line
      ctx.strokeStyle = '#ff6b35';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      
      data.predicted.forEach((point, index) => {
        const x = xPos(point.timestamp);
        const y = yPos(point.value);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw prediction points
      ctx.fillStyle = '#ff6b35';
      data.predicted.forEach(point => {
        const x = xPos(point.timestamp);
        const y = yPos(point.value);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    // Draw axes labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px var(--font-mono)';
    ctx.textAlign = 'center';
    
    // Time labels
    for (let i = 0; i <= 5; i++) {
      const timestamp = minTime + (i / 5) * timeRange;
      const x = padding + (i / 5) * chartWidth;
      const timeLabel = new Date(timestamp).toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      ctx.fillText(timeLabel, x, height - 10);
    }
    
    // Value labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const value = minValue + (i / 5) * valueRange;
      const y = padding + chartHeight - (i / 5) * chartHeight;
      ctx.fillText(formatValue(metric, value), padding - 10, y + 4);
    }
    
    // Legend
    ctx.textAlign = 'left';
    ctx.fillStyle = '#00a8ff';
    ctx.fillRect(width - 150, 20, 15, 3);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Historical', width - 130, 28);
    
    ctx.fillStyle = '#ff6b35';
    ctx.fillRect(width - 150, 40, 15, 3);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Predicted', width - 130, 48);
    
  }, [data, metric, formatValue]);

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

export default AIPredictiveAnalytics;
