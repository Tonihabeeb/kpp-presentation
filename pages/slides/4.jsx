import SlideLayout from '../../components/SlideLayout';

export default function Slide4() {
  return (
    <SlideLayout prevHref="/slides/3" nextHref="/slides/5">
      <div className="slide-content">
        <div className="title-section">
          <h2>Development Timeline & Intellectual Property</h2>
          <p className="subtitle">Innovation Journey & Patent Protection</p>
        </div>
        
        <div className="development-content">
          <div className="timeline-section">
            <h3>📅 Development Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="year">2018</div>
                <div className="content">
                  <h4>Initial R&D</h4>
                  <p>Initial R&D of Kinetic Power Plant (KPP) technology using buoyancy principles.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="year">2019-2020</div>
                <div className="content">
                  <h4>Prototype Testing</h4>
                  <p>Prototype testing in Germany and Serbia leads to design refinements.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="year">2021-2022</div>
                <div className="content">
                  <h4>Patent Filing</h4>
                  <p>Comprehensive patent protection covering buoyancy power plant design and methodology.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="year">2023-2024</div>
                <div className="content">
                  <h4>Global Deployment</h4>
                  <p>KPP technology being successfully deployed across multiple regions demonstrating versatility and global applicability.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="patent-section">
            <h3>📋 Patent Protection</h3>
            <div className="patent-details">
              <p>
                <strong>Patent Coverage:</strong> Covers the buoyancy power plant design – including the endless chain of buoyant bodies, 
                the 180° rotation points, and the method of gas injection and water displacement. The patent confirms the novelty 
                of using alternating buoyancy and weight in a closed loop to drive a generator.
              </p>
              
              <div className="patent-features">
                <h4>Protected Innovations:</h4>
                <ul>
                  <li>Endless chain of buoyant bodies</li>
                  <li>180° rotation points at top and bottom</li>
                  <li>Gas injection and water displacement method</li>
                  <li>Alternating buoyancy and weight in closed loop</li>
                  <li>Generator drive mechanism</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="global-footprint">
            <h3>🌍 Global Footprint</h3>
            <div className="footprint-details">
              <p>
                Kinetic Power Plant technology is being successfully deployed across multiple regions. 
                These installations demonstrate the system's versatility and global applicability.
              </p>
              
              <div className="deployment-locations">
                <div className="location">
                  <h4>🇩🇪 Germany</h4>
                  <p>Initial prototype testing and validation</p>
                </div>
                <div className="location">
                  <h4>🇷🇸 Serbia</h4>
                  <p>Design refinements and optimization</p>
                </div>
                <div className="location">
                  <h4>🌐 Global</h4>
                  <p>Multiple regional deployments in progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 