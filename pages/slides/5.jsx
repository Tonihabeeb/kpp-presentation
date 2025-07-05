import SlideLayout from '../../components/SlideLayout';

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
            <p>
              Kinetic Power Plant technology offers versatile energy solutions that can be adapted 
              to various market segments and geographical locations. The system's scalability and 
              zero-emission operation make it suitable for both developed and developing markets.
            </p>
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
            <div className="scalability-details">
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
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 