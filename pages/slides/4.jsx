import SlideLayout from '../../components/SlideLayout';

export default function Slide4() {
  return (
    <SlideLayout prevHref="/slides/3" nextHref="/slides/5">
      <div className="slide-content">
        <div className="title-section">
          <h2>Implementation Strategy</h2>
          <p className="subtitle">Deployment & Integration Plan</p>
        </div>
        
        <div className="implementation-content">
          <div className="phases-section">
            <h3>Implementation Phases</h3>
            <div className="phases-grid">
              <div className="phase">
                <div className="phase-number">1</div>
                <h4>Site Assessment</h4>
                <p>Location analysis, energy requirements, and feasibility study</p>
                <span className="duration">2-4 weeks</span>
              </div>
              
              <div className="phase">
                <div className="phase-number">2</div>
                <h4>System Design</h4>
                <p>Custom engineering and component specification</p>
                <span className="duration">4-6 weeks</span>
              </div>
              
              <div className="phase">
                <div className="phase-number">3</div>
                <h4>Installation</h4>
                <p>Professional installation and system integration</p>
                <span className="duration">2-3 weeks</span>
              </div>
              
              <div className="phase">
                <div className="phase-number">4</div>
                <h4>Commissioning</h4>
                <p>Testing, optimization, and handover</p>
                <span className="duration">1-2 weeks</span>
              </div>
            </div>
          </div>
          
          <div className="requirements-section">
            <h3>System Requirements</h3>
            <div className="requirements-grid">
              <div className="requirement-category">
                <h4>Physical Space</h4>
                <ul>
                  <li>Minimum 50m² installation area</li>
                  <li>Access for maintenance</li>
                  <li>Ventilation requirements</li>
                </ul>
              </div>
              
              <div className="requirement-category">
                <h4>Infrastructure</h4>
                <ul>
                  <li>Electrical grid connection</li>
                  <li>Control system integration</li>
                  <li>Safety systems</li>
                </ul>
              </div>
              
              <div className="requirement-category">
                <h4>Regulatory</h4>
                <ul>
                  <li>Environmental permits</li>
                  <li>Safety certifications</li>
                  <li>Grid compliance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="timeline-section">
            <h3>Project Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">Week 1-4</span>
                <span className="timeline-task">Assessment & Design</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">Week 5-10</span>
                <span className="timeline-task">Manufacturing</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">Week 11-13</span>
                <span className="timeline-task">Installation</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">Week 14-15</span>
                <span className="timeline-task">Commissioning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 