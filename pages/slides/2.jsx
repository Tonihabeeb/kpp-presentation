import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide2() {
  return (
    <SlideLayout prevHref="/slides/1" nextHref="/slides/3">
      <div className="slide-content">
        <div className="title-section">
          <h2>KPP System Architecture</h2>
          <p className="subtitle">Core Components & Physics Principles</p>
        </div>
        
        <div className="architecture-content">
          <div className="physics-principles">
            <h3>🔬 Physics Foundation</h3>
            <div className="principle">
              <h4>Archimedes' Principle (Buoyancy)</h4>
              <p>A body submerged in a fluid experiences an upward thrust equal to the weight of the displaced fluid. In KPP, air-filled containers in water create buoyant force.</p>
            </div>
            <div className="principle">
              <h4>Newton's 2nd Law (Motion)</h4>
              <p>The net force from buoyancy and gravity causes acceleration and motion. KPP harnesses this motion in a continuous loop. The kinetic energy of the moving floaters is converted to mechanical rotation to drive generators.</p>
            </div>
          </div>
          
          <div className="system-components">
            <h3>⚙️ Core System Components</h3>
            <div className="components-grid">
              <div className="component">
                <h4>Floaters (Buoyancy Bodies)</h4>
                <p>Typically 66 hollow steel containers attached to an endless chain loop. When filled with air, a floater becomes buoyant and rises. When filled with water, it sinks.</p>
              </div>
              
              <div className="component">
                <h4>Endless Chain Loop</h4>
                <p>Continuous chain system that carries floaters through the buoyancy cycle, with 180° rotation points at top and bottom.</p>
              </div>
              
              <div className="component">
                <h4>Air Compressor System</h4>
                <p>Supplies compressed air to KPP modules for buoyancy control. Consumes ~1% of net KPP power output.</p>
              </div>
              
              <div className="component">
                <h4>Generator & Power Output</h4>
                <p>Mechanical rotation from the chain drives generators to produce electricity. System designed for 100KW+ output capacity.</p>
              </div>
            </div>
          </div>
          
          <div className="operation-cycle">
            <h3>🔄 Operation Cycle</h3>
            <div className="cycle-steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>Air is injected into floaters at the bottom</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Floaters become buoyant and rise to the top</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>Water is injected at the top, floaters become heavy</p>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <p>Floaters sink, driving the chain and generator</p>
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