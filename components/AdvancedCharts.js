import React, { useState, useEffect, useRef, useCallback } from 'react';

const colorSchemes = {
  primary: { main: '#1B365D', gradient: ['#1B365D', '#2A4A70'] },
  secondary: { main: '#FF6B35', gradient: ['#FF6B35', '#FF8A5C'] },
  accent: { main: '#4ECDC4', gradient: ['#4ECDC4', '#6FD9D2'] },
  success: { main: '#38A169', gradient: ['#38A169', '#48BB78'] }
};

const RealTimeChart = ({ title, dataPoints, type = 'line', color = 'primary' }) => {
  const [data, setData] = useState(dataPoints || []);
  const [isLive, setIsLive] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setData(prevData => {
          const newData = [...prevData];
          const lastValue = newData[newData.length - 1]?.value || 50;
          const variation = (Math.random() - 0.5) * 10;
          const newValue = Math.max(0, Math.min(100, lastValue + variation));
          
          newData.push({
            time: new Date().toLocaleTimeString(),
            value: newValue,
            timestamp: Date.now()
          });
          
          if (newData.length > 20) {
            newData.shift();
          }
          
          return newData;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || data.length === 0) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set up drawing context
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const valueRange = maxValue - minValue || 1;

    // Draw grid
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = margin.top + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(margin.left, y);
      ctx.lineTo(margin.left + chartWidth, y);
      ctx.stroke();
    }

    // Draw chart line
    if (type === 'line') {
      const gradient = ctx.createLinearGradient(0, margin.top, 0, margin.top + chartHeight);
      gradient.addColorStop(0, colorSchemes[color].gradient[0]);
      gradient.addColorStop(1, colorSchemes[color].gradient[1]);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();

      data.forEach((point, index) => {
        const x = margin.left + (chartWidth / (data.length - 1)) * index;
        const y = margin.top + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw area fill
      ctx.fillStyle = colorSchemes[color].gradient[0] + '20';
      ctx.beginPath();
      data.forEach((point, index) => {
        const x = margin.left + (chartWidth / (data.length - 1)) * index;
        const y = margin.top + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight);
      ctx.lineTo(margin.left, margin.top + chartHeight);
      ctx.closePath();
      ctx.fill();

      // Draw data points
      ctx.fillStyle = colorSchemes[color].main;
      data.forEach((point, index) => {
        const x = margin.left + (chartWidth / (data.length - 1)) * index;
        const y = margin.top + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    // Draw axes labels
    ctx.fillStyle = '#4A5568';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';

    // Y-axis labels
    for (let i = 0; i <= 5; i++) {
      const value = minValue + (valueRange / 5) * (5 - i);
      const y = margin.top + (chartHeight / 5) * i;
      ctx.textAlign = 'right';
      ctx.fillText(value.toFixed(1), margin.left - 10, y + 4);
    }

    // X-axis labels
    ctx.textAlign = 'center';
    const labelStep = Math.max(1, Math.floor(data.length / 5));
    data.forEach((point, index) => {
      if (index % labelStep === 0) {
        const x = margin.left + (chartWidth / (data.length - 1)) * index;
        ctx.fillText(point.time, x, height - 10);
      }
    });
  }, [data, color, type]);

  useEffect(() => {
    drawChart();
  }, [drawChart]);

  return (
    <div className="realtime-chart">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        <div className="chart-controls">
          <button 
            className={`control-btn ${isLive ? 'active' : ''}`}
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? '⏸️ Pause' : '▶️ Live'}
          </button>
          <div className="status-indicator">
            <div className={`status-dot ${isLive ? 'live' : 'paused'}`}></div>
            <span>{isLive ? 'Live' : 'Paused'}</span>
          </div>
        </div>
      </div>

      <div className="chart-canvas-container">
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="chart-canvas"
        />
      </div>

      <div className="chart-footer">
        <div className="current-value">
          <span className="value-label">Current:</span>
          <span className="value-number">{data[data.length - 1]?.value.toFixed(1) || '0.0'}</span>
          <span className="value-unit">kW</span>
        </div>
        <div className="statistics">
          <div className="stat-item">
            <span className="stat-label">Max:</span>
            <span className="stat-value">{Math.max(...data.map(d => d.value)).toFixed(1)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg:</span>
            <span className="stat-value">{(data.reduce((acc, d) => acc + d.value, 0) / data.length).toFixed(1)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Min:</span>
            <span className="stat-value">{Math.min(...data.map(d => d.value)).toFixed(1)}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .realtime-chart {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          overflow: hidden;
        }

        .chart-header {
          padding: var(--space-4) var(--space-6);
          background: var(--neutral-50);
          border-bottom: 1px solid var(--neutral-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chart-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-blue);
          margin: 0;
        }

        .chart-controls {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .control-btn {
          background: var(--primary-blue);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-4);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .control-btn:hover {
          background: var(--primary-blue-dark);
          transform: translateY(-1px);
        }

        .control-btn.active {
          background: var(--energy-orange);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--neutral-600);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neutral-400);
        }

        .status-dot.live {
          background: var(--success);
          animation: pulse 2s ease-in-out infinite;
        }

        .status-dot.paused {
          background: var(--warning);
        }

        .chart-canvas-container {
          padding: var(--space-4);
          display: flex;
          justify-content: center;
        }

        .chart-canvas {
          max-width: 100%;
          height: auto;
        }

        .chart-footer {
          padding: var(--space-4) var(--space-6);
          background: var(--neutral-50);
          border-top: 1px solid var(--neutral-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .current-value {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
        }

        .value-label {
          font-size: 0.875rem;
          color: var(--neutral-600);
          font-weight: 500;
        }

        .value-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-blue);
          font-family: var(--font-mono);
        }

        .value-unit {
          font-size: 0.875rem;
          color: var(--neutral-500);
          font-weight: 500;
        }

        .statistics {
          display: flex;
          gap: var(--space-6);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-1);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--neutral-500);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--neutral-700);
          font-family: var(--font-mono);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .chart-header {
            flex-direction: column;
            gap: var(--space-3);
          }

          .chart-footer {
            flex-direction: column;
            gap: var(--space-4);
          }

          .statistics {
            justify-content: center;
          }

          .chart-canvas {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const SystemMonitor = ({ systems }) => {
  const [selectedSystem, setSelectedSystem] = useState(0);

  return (
    <div className="system-monitor">
      <div className="monitor-header">
        <h3>System Performance Monitor</h3>
        <div className="system-tabs">
          {systems.map((system, index) => (
            <button
              key={index}
              className={`tab-btn ${selectedSystem === index ? 'active' : ''}`}
              onClick={() => setSelectedSystem(index)}
            >
              <span className="tab-icon">{system.icon}</span>
              <span className="tab-label">{system.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="monitor-content">
        {systems[selectedSystem] && (
          <RealTimeChart
            title={systems[selectedSystem].chartTitle}
            dataPoints={systems[selectedSystem].data}
            type="line"
            color={systems[selectedSystem].color}
          />
        )}
      </div>

      <style jsx>{`
        .system-monitor {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          overflow: hidden;
        }

        .monitor-header {
          padding: var(--space-6);
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light));
          color: white;
        }

        .monitor-header h3 {
          margin: 0 0 var(--space-4) 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .system-tabs {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .tab-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-4);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          cursor: pointer;
          transition: all var(--transition-base);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .tab-btn.active {
          background: var(--energy-orange);
          border-color: var(--energy-orange);
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .tab-icon {
          font-size: 1rem;
        }

        .monitor-content {
          padding: var(--space-6);
        }

        @media (max-width: 768px) {
          .system-tabs {
            justify-content: center;
          }

          .tab-btn {
            flex: 1;
            min-width: 120px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export { RealTimeChart, SystemMonitor };
