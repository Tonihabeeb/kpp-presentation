import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide5() {
  return (
    <SlideLayout prevHref="/slides/4" nextHref="/slides/6">
      <div className="slide-content">
        <div className="title-section">
          <h2>Applications & Market Potential</h2>
          <p className="subtitle">Versatile Energy Solutions for Global Markets</p>
        </div>
        
        <div className="applications-content">
          <div className="market-overview">
            <h3>🌍 Market Overview</h3>
            <div className="overview-content">
              <div className="overview-text">
                <p>
                  Kinetic Power Plant technology offers versatile energy solutions that can be adapted 
                  to various market segments and geographical locations. The system&apos;s scalability and 
                  zero-emission operation make it suitable for both developed and developing markets.
                </p>
              </div>
              <div className="overview-image">
                <Image 
                  src="/images/Illustration.webp" 
                  alt="Market Applications" 
                  width={400} 
                  height={250}
                  className="market-image"
                />
              </div>
            </div>
          </div>
          
          <div className="applications-grid">
            <div className="application-category">
              <h3>🏭 Industrial Applications</h3>
              <div className="app-list">
                <div className="app-item">
                  <h4>Manufacturing Facilities</h4>
                  <p>Continuous power supply for production lines and machinery</p>
                </div>
                <div className="app-item">
                  <h4>Mining Operations</h4>
                  <p>Reliable energy for remote mining sites and processing plants</p>
                </div>
                <div className="app-item">
                  <h4>Data Centers</h4>
                  <p>24/7 power generation for critical computing infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="application-category">
              <h3>🏘️ Commercial & Residential</h3>
              <div className="app-list">
                <div className="app-item">
                  <h4>Commercial Buildings</h4>
                  <p>Office complexes, shopping centers, and hotels</p>
                </div>
                <div className="app-item">
                  <h4>Residential Communities</h4>
                  <p>Apartment buildings and housing developments</p>
                </div>
                <div className="app-item">
                  <h4>Educational Institutions</h4>
                  <p>Schools, universities, and research facilities</p>
                </div>
              </div>
            </div>
            
            <div className="application-category">
              <h3>⚡ Utility & Grid</h3>
              <div className="app-list">
                <div className="app-item">
                  <h4>Grid Stabilization</h4>
                  <p>Base load power generation for electrical grids</p>
                </div>
                <div className="app-item">
                  <h4>Peak Load Management</h4>
                  <p>Demand response and load balancing capabilities</p>
                </div>
                <div className="app-item">
                  <h4>Microgrids</h4>
                  <p>Independent power systems for remote communities</p>
                </div>
              </div>
            </div>
            
            <div className="application-category">
              <h3>🌱 Environmental Benefits</h3>
              <div className="app-list">
                <div className="app-item">
                  <h4>Zero Emissions</h4>
                  <p>No combustion, no greenhouse gas emissions</p>
                </div>
                <div className="app-item">
                  <h4>Water Conservation</h4>
                  <p>Minimal water consumption compared to traditional power plants</p>
                </div>
                <div className="app-item">
                  <h4>Sustainable Operation</h4>
                  <p>Long-term renewable energy solution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scalability-section">
            <h3>📈 Scalability & Flexibility</h3>
            <div className="scalability-content">
              <div className="scalability-text">
                <p>
                  KPP systems can be scaled from small residential units to large industrial installations. 
                  The modular design allows for easy expansion and adaptation to different power requirements.
                </p>
                
                <div className="scaling-options">
                  <div className="scale-option">
                    <h4>Small Scale</h4>
                    <p>5-50KW for residential and small commercial</p>
                  </div>
                  <div className="scale-option">
                    <h4>Medium Scale</h4>
                    <p>50-500KW for commercial and institutional</p>
                  </div>
                  <div className="scale-option">
                    <h4>Large Scale</h4>
                    <p>500KW+ for industrial and utility applications</p>
                  </div>
                </div>
              </div>
              
              <div className="scalability-visual">
                <Image 
                  src="/images/soral-plant-3d.avif" 
                  alt="3D Plant Visualization" 
                  width={400} 
                  height={300}
                  className="plant-3d-image"
                />
                <Image 
                  src="/images/5mw-bilde.avif" 
                  alt="Large Scale Installation" 
                  width={400} 
                  height={300}
                  className="large-scale-image"
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
  
  .applications-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
  
  .market-image {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
  
  .applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .application-category {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .app-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .app-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #28a745;
  }
  
  .scalability-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  
  .scaling-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .scale-option {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .scalability-visual {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .plant-3d-image,
  .large-scale-image {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
      `}</style>
    </SlideLayout>
  );
}