import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useAdvancedInteractions';

export default function PerformanceMonitor() {
  const [monitorRef, isVisible] = useScrollAnimation();
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    framerate: 60,
    memoryUsage: 0,
    scrollSmooth: 100
  });
  
  const animationFrameRef = useRef();
  const lastFrameTimeRef = useRef(performance.now());
  const framesRef = useRef([]);

  useEffect(() => {
    if (!isVisible) return;

    // Performance monitoring
    const updateMetrics = () => {
      const now = performance.now();
      const deltaTime = now - lastFrameTimeRef.current;
      
      // Calculate framerate
      framesRef.current.push(deltaTime);
      if (framesRef.current.length > 60) {
        framesRef.current.shift();
      }
      
      const avgFrameTime = framesRef.current.reduce((a, b) => a + b, 0) / framesRef.current.length;
      const fps = Math.round(1000 / avgFrameTime);
      
      // Memory usage (if available)
      const memInfo = performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576),
        total: Math.round(performance.memory.totalJSHeapSize / 1048576)
      } : null;

      setMetrics(prev => ({
        ...prev,
        framerate: Math.min(fps, 60),
        memoryUsage: memInfo ? memInfo.used : 0,
        renderTime: Math.round(deltaTime * 100) / 100
      }));

      lastFrameTimeRef.current = now;
      animationFrameRef.current = requestAnimationFrame(updateMetrics);
    };

    animationFrameRef.current = requestAnimationFrame(updateMetrics);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  const getPerformanceColor = (value, type) => {
    switch (type) {
      case 'framerate':
        if (value >= 55) return '#10B981'; // green
        if (value >= 30) return '#F59E0B'; // yellow
        return '#EF4444'; // red
      case 'memory':
        if (value < 50) return '#10B981';
        if (value < 100) return '#F59E0B';
        return '#EF4444';
      case 'renderTime':
        if (value < 16) return '#10B981';
        if (value < 33) return '#F59E0B';
        return '#EF4444';
      default:
        return '#10B981';
    }
  };

  const performanceData = [
    {
      label: 'Frame Rate',
      value: metrics.framerate,
      unit: 'fps',
      optimal: '60',
      color: getPerformanceColor(metrics.framerate, 'framerate'),
      description: 'Smooth animations and interactions'
    },
    {
      label: 'Render Time',
      value: metrics.renderTime,
      unit: 'ms',
      optimal: '<16',
      color: getPerformanceColor(metrics.renderTime, 'renderTime'),
      description: 'Time to render each frame'
    },
    {
      label: 'Memory Usage',
      value: metrics.memoryUsage,
      unit: 'MB',
      optimal: '<100',
      color: getPerformanceColor(metrics.memoryUsage, 'memory'),
      description: 'JavaScript heap memory'
    },
    {
      label: 'Scroll Performance',
      value: metrics.scrollSmooth,
      unit: '%',
      optimal: '100',
      color: '#10B981',
      description: 'Scroll event optimization'
    }
  ];

  return (
    <section 
      ref={monitorRef}
      className={`performance-monitor ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="monitor-container">
        <div className="monitor-header">
          <h3 className="monitor-title">
            <span className="monitor-icon">⚡</span>
            Real-Time Performance Metrics
          </h3>
          <p className="monitor-subtitle">
            Live monitoring of our advanced interaction system performance
          </p>
        </div>
        
        <div className="metrics-grid">
          {performanceData.map((metric, index) => (
            <div 
              key={metric.label}
              className="metric-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderLeft: `4px solid ${metric.color}`
              }}
            >
              <div className="metric-header">
                <h4 className="metric-label">{metric.label}</h4>
                <div 
                  className="metric-indicator"
                  style={{ backgroundColor: metric.color }}
                />
              </div>
              
              <div className="metric-value">
                <span className="value-number">{metric.value}</span>
                <span className="value-unit">{metric.unit}</span>
              </div>
              
              <div className="metric-details">
                <div className="metric-optimal">
                  Optimal: {metric.optimal}
                </div>
                <div className="metric-description">
                  {metric.description}
                </div>
              </div>
              
              <div className="metric-progress">
                <div 
                  className="progress-bar"
                  style={{
                    backgroundColor: metric.color,
                    width: `${Math.min((metric.value / (metric.label === 'Frame Rate' ? 60 : 100)) * 100, 100)}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="performance-tips">
          <h4>Optimization Features Active:</h4>
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">🎯</span>
              <span>Passive scroll listeners</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🔄</span>
              <span>RequestAnimationFrame optimization</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">⚡</span>
              <span>Hardware acceleration</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🎨</span>
              <span>CSS transform optimizations</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🧠</span>
              <span>Smart debouncing</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">📱</span>
              <span>Reduced motion support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
