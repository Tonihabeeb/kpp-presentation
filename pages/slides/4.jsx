import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

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
          
          <div className="development-visual">
            <Image 
              src="/images/Screenshot-2025-05-12-104033.avif" 
              alt="Development Progress" 
              width={500} 
              height={300}
              className="development-image"
            />
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
            <div className="footprint-content">
              <div className="footprint-text">
                <p>
                  Kinetic Power Plant technology is being successfully deployed across multiple regions. 
                  These installations demonstrate the system&apos;s versatility and global applicability.
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
              
              <div className="footprint-image">
                <Image 
                  src="/images/Screenshot-2025-05-12-115303.avif" 
                  alt="Global Deployment Data" 
                  width={400} 
                  height={250}
                  className="global-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slide {
          padding: 2rem;
        }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .development-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .timeline {
    position: relative;
    margin: 2rem 0;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #007bff;
  }
  
  .timeline-item {
    display: flex;
    margin: 2rem 0;
    position: relative;
  }
  
  .year {
    background: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    min-width: 100px;
    text-align: center;
    margin-right: 2rem;
  }
  
  .content {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    flex: 1;
  }
  
  .development-visual {
    text-align: center;
    margin: 2rem 0;
  }
  
  .development-image {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
  
  .patent-section {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .patent-features ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .footprint-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  
  .deployment-locations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .location {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .global-image {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
      `}</style>
    </SlideLayout>
  );
}