import SlideLayout from '../../components/SlideLayout';
import ExampleChart from '../../components/ExampleChart';

export default function Slide3() {
  return (
    <SlideLayout prevHref="/slides/2" nextHref="/slides/4">
      <div className="slide-content">
        <div className="title-section">
          <h2>Performance Metrics & Analysis</h2>
          <p className="subtitle">Real-world Performance Data</p>
        </div>
        
        <div className="performance-content">
          <div className="metrics-overview">
            <div className="metric-card">
              <h4>Energy Output</h4>
              <div className="metric-value">85-92%</div>
              <p>Conversion Efficiency</p>
            </div>
            
            <div className="metric-card">
              <h4>Power Generation</h4>
              <div className="metric-value">5-100kW</div>
              <p>Scalable Output Range</p>
            </div>
            
            <div className="metric-card">
              <h4>Uptime</h4>
              <div className="metric-value">99.5%</div>
              <p>System Reliability</p>
            </div>
            
            <div className="metric-card">
              <h4>ROI</h4>
              <div className="metric-value">3-5 years</div>
              <p>Return on Investment</p>
            </div>
          </div>
          
          <div className="chart-section">
            <h3>Performance Trends</h3>
            <div className="chart-container">
              <ExampleChart />
            </div>
            <p className="chart-description">
              Monthly performance data showing consistent energy output and efficiency improvements over time.
            </p>
          </div>
          
          <div className="comparison-section">
            <h3>Comparison with Traditional Energy Sources</h3>
            <div className="comparison-grid">
              <div className="comparison-item">
                <h4>KPP Technology</h4>
                <ul>
                  <li>Zero emissions</li>
                  <li>Low maintenance</li>
                  <li>Scalable</li>
                  <li>Renewable</li>
                </ul>
              </div>
              
              <div className="comparison-item">
                <h4>Traditional Sources</h4>
                <ul>
                  <li>High emissions</li>
                  <li>Regular maintenance</li>
                  <li>Fixed capacity</li>
                  <li>Non-renewable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 