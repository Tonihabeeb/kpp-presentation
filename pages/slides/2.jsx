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
              <h4>Archimedes&apos; Principle (Buoyancy)</h4>
              <p>A body submerged in a fluid experiences an upward thrust equal to the weight of the displaced fluid. In KPP, air-filled containers in water create buoyant force.</p>
            </div>
            <div className="principle">
              <h4>Newton&apos;s 2nd Law (Motion)</h4>
              <p>The net force from buoyancy and gravity causes acceleration and motion. KPP harnesses this motion in a continuous loop. The kinetic energy of the moving floaters is converted to mechanical rotation to drive generators.</p>
            </div>
          </div>
          
          <div className="system-components">
            <h3>⚙️ Core System Components</h3>
            <div className="components-grid">
              <div className="component">
                <Image 
                  src="/images/tube.avif" 
                  alt="Floaters and Chain System" 
                  width={200} 
                  height={150}
                  className="component-image"
                />
                <h4>Floaters (Buoyancy Bodies)</h4>
                <p>Typically 66 hollow steel containers attached to an endless chain loop. When filled with air, a floater becomes buoyant and rises. When filled with water, it sinks.</p>
              </div>
              
              <div className="component">
                <Image 
                  src="/images/air-system.avif" 
                  alt="Air System Components" 
                  width={200} 
                  height={150}
                  className="component-image"
                />
                <h4>Endless Chain Loop</h4>
                <p>Continuous chain system that carries floaters through the buoyancy cycle, with 180° rotation points at top and bottom.</p>
              </div>
              
              <div className="component">
                <Image 
                  src="/images/air-compressor.avif" 
                  alt="Air Compressor System" 
                  width={200} 
                  height={150}
                  className="component-image"
                />
                <h4>Air Compressor System</h4>
                <p>Supplies compressed air to KPP modules for buoyancy control. Consumes ~1% of net KPP power output.</p>
              </div>
              
              <div className="component">
                <Image 
                  src="/images/cabinet.avif" 
                  alt="Control Cabinet" 
                  width={200} 
                  height={150}
                  className="component-image"
                />
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

      <style jsx>{`.slide {
    padding: 2rem;
  }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .architecture-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .physics-principles {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .principle {
    margin: 1rem 0;
    padding: 1rem;
    background: white;
    border-radius: 6px;
    border-left: 4px solid #28a745;
  }
  
  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .component {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .component-image {
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .cycle-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .step {
    background: #e3f2fd;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    position: relative;
  }
  
  .step-number {
    background: #2196f3;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.5rem;
    font-weight: bold;
  }
      `}</style>
    </SlideLayout>
  );
}