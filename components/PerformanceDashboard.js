import { useState, useEffect, useRef } from 'react';
import { 
  globalPerformanceTracker, 
  coreWebVitalsTracker, 
  memoryLeakDetector 
} from '../utils/performanceOptimization';

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState({});
  const [coreVitals, setCoreVitals] = useState({});
  const [memoryStatus, setMemoryStatus] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const dashboardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const updateMetrics = () => {
      setMetrics(globalPerformanceTracker.getSummary());
      setCoreVitals({
        metrics: coreWebVitalsTracker.getMetrics(),
        grades: coreWebVitalsTracker.getGrades()
      });
      setMemoryStatus(memoryLeakDetector.detectLeaks());
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getScoreColor = (score) => {
    if (score >= 90) return '#10B981';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'good': return '#10B981';
      case 'needs-improvement': return '#F59E0B';
      case 'poor': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <section 
      ref={dashboardRef}
      className={`performance-dashboard ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">
            <span className="title-icon">📊</span>
            Performance Dashboard
          </h2>
          <p className="dashboard-subtitle">
            Real-time monitoring of website performance and user experience metrics
          </p>
        </div>

        <div className="metrics-grid">
          {/* Overall Performance Score */}
          <div className="metric-card highlight">
            <div className="metric-header">
              <h3>Overall Performance</h3>
              <span className="metric-badge">Live</span>
            </div>
            <div className="metric-value">
              <span 
                className="score-number"
                style={{ color: getScoreColor(metrics.performanceScore || 0) }}
              >
                {metrics.performanceScore || 0}
              </span>
              <span className="score-unit">/100</span>
            </div>
            <div className="metric-progress">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${metrics.performanceScore || 0}%`,
                  backgroundColor: getScoreColor(metrics.performanceScore || 0)
                }}
              />
            </div>
          </div>

          {/* Frame Rate */}
          <div className="metric-card">
            <div className="metric-header">
              <h3>Frame Rate</h3>
              <span className="metric-icon">🎬</span>
            </div>
            <div className="metric-value">
              <span className="value-number">{metrics.currentFPS || 0}</span>
              <span className="value-unit">fps</span>
            </div>
            <div className="metric-detail">
              Target: 60 FPS for smooth animations
            </div>
          </div>

          {/* Render Time */}
          <div className="metric-card">
            <div className="metric-header">
              <h3>Render Time</h3>
              <span className="metric-icon">⚡</span>
            </div>
            <div className="metric-value">
              <span className="value-number">{metrics.averageRenderTime || 0}</span>
              <span className="value-unit">ms</span>
            </div>
            <div className="metric-detail">
              Target: &lt;16ms for 60fps
            </div>
          </div>

          {/* Memory Usage */}
          <div className="metric-card">
            <div className="metric-header">
              <h3>Memory Usage</h3>
              <span className="metric-icon">🧠</span>
            </div>
            <div className="metric-value">
              <span className="value-number">{metrics.memoryUsage || 0}</span>
              <span className="value-unit">MB</span>
            </div>
            <div className="metric-detail">
              {memoryStatus.hasLeak ? 
                <span className="warning">Potential memory leak detected</span> :
                <span className="good">Memory usage stable</span>
              }
            </div>
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="vitals-section">
          <h3 className="section-title">Core Web Vitals</h3>
          <div className="vitals-grid">
            <div className="vital-card">
              <div className="vital-header">
                <h4>First Contentful Paint</h4>
                <span 
                  className="vital-grade"
                  style={{ backgroundColor: getGradeColor(coreVitals.grades?.FCP) }}
                >
                  {coreVitals.grades?.FCP || 'measuring...'}
                </span>
              </div>
              <div className="vital-value">
                {coreVitals.metrics?.FCP ? 
                  `${Math.round(coreVitals.metrics.FCP)}ms` : 
                  'Measuring...'
                }
              </div>
              <div className="vital-description">
                Time until first content is painted
              </div>
            </div>

            <div className="vital-card">
              <div className="vital-header">
                <h4>Largest Contentful Paint</h4>
                <span 
                  className="vital-grade"
                  style={{ backgroundColor: getGradeColor(coreVitals.grades?.LCP) }}
                >
                  {coreVitals.grades?.LCP || 'measuring...'}
                </span>
              </div>
              <div className="vital-value">
                {coreVitals.metrics?.LCP ? 
                  `${Math.round(coreVitals.metrics.LCP)}ms` : 
                  'Measuring...'
                }
              </div>
              <div className="vital-description">
                Time until largest content is painted
              </div>
            </div>

            <div className="vital-card">
              <div className="vital-header">
                <h4>Cumulative Layout Shift</h4>
                <span 
                  className="vital-grade"
                  style={{ backgroundColor: getGradeColor(coreVitals.grades?.CLS) }}
                >
                  {coreVitals.grades?.CLS || 'measuring...'}
                </span>
              </div>
              <div className="vital-value">
                {coreVitals.metrics?.CLS !== undefined ? 
                  coreVitals.metrics.CLS.toFixed(3) : 
                  'Measuring...'
                }
              </div>
              <div className="vital-description">
                Visual stability of the page
              </div>
            </div>

            <div className="vital-card">
              <div className="vital-header">
                <h4>First Input Delay</h4>
                <span 
                  className="vital-grade"
                  style={{ backgroundColor: getGradeColor(coreVitals.grades?.FID) }}
                >
                  {coreVitals.grades?.FID || 'measuring...'}
                </span>
              </div>
              <div className="vital-value">
                {coreVitals.metrics?.FID ? 
                  `${Math.round(coreVitals.metrics.FID)}ms` : 
                  'Waiting for interaction...'
                }
              </div>
              <div className="vital-description">
                Responsiveness to user interactions
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Status */}
        <div className="optimization-status">
          <h3 className="section-title">Optimization Status</h3>
          <div className="status-grid">
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>Hardware Acceleration</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>Passive Event Listeners</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>RequestAnimationFrame</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>Intersection Observer</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>Debounced Events</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">✅</span>
              <span>Memory Leak Detection</span>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="performance-tips">
          <h3 className="section-title">Performance Insights</h3>
          <div className="tips-list">
            {metrics.currentFPS < 55 && (
              <div className="tip warning">
                <span className="tip-icon">⚠️</span>
                <span>Frame rate below optimal. Consider reducing animation complexity.</span>
              </div>
            )}
            {metrics.averageRenderTime > 16 && (
              <div className="tip warning">
                <span className="tip-icon">⚠️</span>
                <span>Render time exceeds 60fps budget. Optimize component re-renders.</span>
              </div>
            )}
            {metrics.memoryUsage > 100 && (
              <div className="tip warning">
                <span className="tip-icon">⚠️</span>
                <span>High memory usage detected. Check for memory leaks.</span>
              </div>
            )}
            {memoryStatus.hasLeak && (
              <div className="tip error">
                <span className="tip-icon">🚨</span>
                <span>Potential memory leak detected with {(memoryStatus.confidence * 100).toFixed(1)}% confidence.</span>
              </div>
            )}
            {metrics.performanceScore >= 90 && (
              <div className="tip success">
                <span className="tip-icon">🎉</span>
                <span>Excellent performance! All metrics are within optimal ranges.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
