import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide1() {
  return (
    <SlideLayout nextHref="/slides/2">
      <div className="slide-content">
        <div className="title-section">
          <h1>Kinetic Power Plant (KPP) Technology</h1>
          <h2>Technical Overview</h2>
          <p className="subtitle">Prepared by Deep Engineering Co.</p>
        </div>
        
        <div className="intro-content">
          <div className="intro-text">
            <h3>Revolutionary Energy Generation</h3>
            <p>
              The Kinetic Power Plant represents a breakthrough in sustainable energy technology, 
              harnessing kinetic energy through innovative mechanical systems to generate clean, 
              reliable electricity.
            </p>
            
            <div className="key-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Zero-emission energy generation</li>
                <li>High efficiency mechanical systems</li>
                <li>Scalable from 5kW to 100kW+</li>
                <li>Low maintenance requirements</li>
                <li>24/7 continuous operation</li>
              </ul>
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="placeholder-image">
              <div className="image-placeholder">
                <span>KPP Tower Visualization</span>
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
    text-align: center;
  }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .key-points {
    text-align: left;
    max-width: 600px;
    margin: 2rem auto;
  }
`}</style> 