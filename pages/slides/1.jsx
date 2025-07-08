import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide1() {
  return (
    <SlideLayout nextHref="/slides/2">
      <div className="slide-content">
        <div className="title-section">
          <div className="logo-section">
            <img src="/images/deep-engineering-logo.png" alt="Deep Engineering Co." className="company-logo" />
          </div>
          <h1>Kinetic Power Plant (KPP) Technology</h1>
          <h2>Technical Overview</h2>
          <p className="subtitle">Prepared by Deep Engineering Co.</p>
        </div>
        
        <div className="intro-content">
          <div className="intro-text">
            <h3>Revolutionary Buoyancy-Driven Energy Generation</h3>
            <p>
              Kinetic Power Plant (KPP) is an innovative power generation system that uses 
              <strong> buoyancy and gravity instead of fuel</strong>. It produces electricity 24/7 with 
              <strong> no fuel, no combustion, and zero emissions</strong>.
            </p>
            
            <div className="key-features">
              <div className="feature">
                <h4>🌊 Buoyancy-Driven</h4>
                <p>Uses Archimedes' Principle to generate continuous motion</p>
              </div>
              <div className="feature">
                <h4>⚡ 24/7 Operation</h4>
                <p>Continuous power generation without fuel requirements</p>
              </div>
              <div className="feature">
                <h4>🌱 Zero Emissions</h4>
                <p>Clean energy production with no combustion or pollution</p>
              </div>
              <div className="feature">
                <h4>🔬 Physics-Based</h4>
                <p>Leverages well-known physics principles in innovative configuration</p>
              </div>
            </div>
          </div>
          
          <div className="intro-image">
            <div className="main-tower-placeholder">
              <h4>KPP Tower System</h4>
              <p>100KW demonstration unit</p>
            </div>
            <div className="image-caption">
              <h4>KPP Tower System</h4>
              <p>100KW demonstration unit</p>
            </div>
          </div>
        </div>
        
        <div className="company-info">
          <p><strong>Deep Engineering Co.</strong> - Global patent-holder of the Kinetic Power Plant (KPP®) buoyancy-drive technology</p>
        </div>
      </div>
    </SlideLayout>
  );
}
  .slide {
    padding: 2rem;
    text-align: center;
  }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .logo-section {
    margin-bottom: 1rem;
  }
  
  .company-logo {
    width: 120px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    margin: 0 auto;
  }
  

  
  .main-tower-placeholder {
    width: 400px;
    height: 300px;
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
    border: 2px solid #ddd;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .main-tower-placeholder h4 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }
  
  .main-tower-placeholder p {
    margin: 0;
    color: #666;
  }
  
  .intro-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    margin: 2rem 0;
  }
  
  .intro-text {
    text-align: left;
  }
  
  .key-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .feature {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #007bff;
  }
  
  .intro-image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .main-tower-image {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .image-caption {
    margin-top: 1rem;
    text-align: center;
  }
  
  .company-info {
    margin-top: 2rem;
    padding: 1rem;
    background: #e9ecef;
    border-radius: 8px;
  } 