import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ExampleChart from '../../components/ExampleChart';

export default function Slide3() {
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      router.push('/slides/2');
    } else if (e.key === 'ArrowRight') {
      router.push('/slides/4');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="slide">
      <h1>Performance Metrics</h1>
      
      <div className="slide-content">
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Efficiency</h3>
            <div className="metric-value">92%</div>
            <p>Average conversion efficiency</p>
          </div>
          
          <div className="metric-card">
            <h3>Output</h3>
            <div className="metric-value">150 MW</div>
            <p>Peak power generation</p>
          </div>
          
          <div className="metric-card">
            <h3>Cost</h3>
            <div className="metric-value">$38/MWh</div>
            <p>Levelized cost of energy</p>
          </div>
          
          <div className="metric-card">
            <h3>Availability</h3>
            <div className="metric-value">98.5%</div>
            <p>System uptime</p>
          </div>
        </div>
        
        <div className="chart-section">
          <ExampleChart type="line" title="Monthly Performance Trends" />
        </div>
      </div>
      
      <div className="slide-navigation">
        <button 
          onClick={() => router.push('/slides/2')}
          className="nav-button prev"
        >
          ← Previous
        </button>
        <span className="slide-counter">3 / 10</span>
        <button 
          onClick={() => router.push('/slides/4')}
          className="nav-button next"
        >
          Next →
        </button>
      </div>
    </div>
  );
} 