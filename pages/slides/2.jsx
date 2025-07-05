import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide2() {
  return (
    <SlideLayout prevHref="/slides/1" nextHref="/slides/3">
      <div className="slide-content">
        <div className="title-section">
          <h2>KPP System Architecture</h2>
          <p className="subtitle">Core Components & Design</p>
        </div>
        
        <div className="architecture-content">
          <div className="architecture-diagram">
            <div className="system-components">
              <div className="component">
                <h4>Kinetic Energy Input</h4>
                <p>Mechanical motion from various sources</p>
              </div>
              
              <div className="component">
                <h4>Energy Conversion System</h4>
                <p>Mechanical to electrical conversion</p>
              </div>
              
              <div className="component">
                <h4>Power Management</h4>
                <p>Voltage regulation & distribution</p>
              </div>
              
              <div className="component">
                <h4>Control System</h4>
                <p>Automated monitoring & optimization</p>
              </div>
            </div>
            
            <div className="system-flow">
              <div className="flow-arrow">→</div>
              <div className="flow-arrow">→</div>
              <div className="flow-arrow">→</div>
            </div>
          </div>
          
          <div className="technical-specs">
            <h3>Technical Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Power Output:</span>
                <span className="spec-value">5kW - 100kW</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Efficiency:</span>
                <span className="spec-value">85-92%</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating Temp:</span>
                <span className="spec-value">-20°C to +50°C</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">25+ years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

<style jsx>{`
  .slide {
    padding: 2rem;
  }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  
  .left-column {
    text-align: left;
  }
  
  .right-column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-placeholder {
    width: 300px;
    height: 200px;
    border: 2px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
  }
`}</style> 