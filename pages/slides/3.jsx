import SlideLayout from '../../components/SlideLayout';
import ExampleChart from '../../components/ExampleChart';
import Image from 'next/image';

export default function Slide3() {
  return (
    <SlideLayout prevHref="/slides/2" nextHref="/slides/4">
      <div className="slide-content">
        <div className="title-section">
          <h2>Performance & Technical Specifications</h2>
          <p className="subtitle">Real-world Performance Data & System Capabilities</p>
        </div>
        
        <div className="performance-content">
          <div className="metrics-overview">
            <div className="metric-card">
              <h4>Power Output</h4>
              <div className="metric-value">100KW+</div>
              <p>Demonstrated capacity per unit</p>
            </div>
            
            <div className="metric-card">
              <h4>Air Compressor</h4>
              <div className="metric-value">~1%</div>
              <p>Power consumption of net output</p>
            </div>
            
            <div className="metric-card">
              <h4>Floaters</h4>
              <div className="metric-value">66</div>
              <p>Hollow steel containers per system</p>
            </div>
            
            <div className="metric-card">
              <h4>Operation</h4>
              <div className="metric-value">24/7</div>
              <p>Continuous power generation</p>
            </div>
          </div>
          
          <div className="technical-details">
            <h3>🔧 Technical Specifications</h3>
            <div className="specs-grid">
              <div className="spec-category">
                <Image 
                  src="/images/generator.avif" 
                  alt="KPP Generator System" 
                  width={300} 
                  height={200}
                  className="spec-image"
                />
                <h4>System Components</h4>
                <ul>
                  <li><strong>Floaters:</strong> 66 hollow steel containers</li>
                  <li><strong>Chain System:</strong> Endless loop with 180° rotation points</li>
                  <li><strong>Air Compressor:</strong> Buoyancy control system</li>
                  <li><strong>Generator:</strong> Mechanical to electrical conversion</li>
                </ul>
              </div>
              
              <div className="spec-category">
                <Image 
                  src="/images/Screenshot-2025-05-12-103656.avif" 
                  alt="Performance Data" 
                  width={300} 
                  height={200}
                  className="spec-image"
                />
                <h4>Physics Principles</h4>
                <ul>
                  <li><strong>Archimedes' Principle:</strong> Buoyancy force generation</li>
                  <li><strong>Newton's 2nd Law:</strong> Motion from net forces</li>
                  <li><strong>Energy Conversion:</strong> Kinetic to mechanical to electrical</li>
                  <li><strong>Continuous Loop:</strong> Perpetual motion through buoyancy cycle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="energy-analysis">
            <h3>⚡ Energy Analysis</h3>
            <div className="analysis-content">
              <div className="analysis-text">
                <p>
                  The system implements well-known physics principles (buoyancy and gravity) in an innovative configuration. 
                  No laws of physics are violated – the system leverages the potential energy difference between water and air 
                  within Earth's gravity. The math shows that careful use of buoyancy can indeed yield net positive energy 
                  when the system is designed to minimize losses and cleverly reuse energy.
                </p>
              </div>
              <div className="analysis-image">
                <Image 
                  src="/images/Screenshot-2025-05-12-103744.avif" 
                  alt="Technical Specifications" 
                  width={400} 
                  height={250}
                  className="analysis-img"
                />
              </div>
            </div>
          </div>
          
          <div className="chart-section">
            <h3>📊 Performance Comparison</h3>
            <ExampleChart />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
    padding: 2rem;
  }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .performance-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .metrics-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .metric-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .metric-value {
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
  }
  
  .spec-category {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .spec-image {
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .analysis-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
  
  .analysis-img {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .chart-section {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  } 