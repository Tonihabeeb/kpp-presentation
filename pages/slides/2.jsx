import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Slide2() {
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      router.push('/slides/1');
    } else if (e.key === 'ArrowRight') {
      router.push('/slides/3');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="slide">
      <h1>Technology Overview</h1>
      
      <div className="slide-content">
        <div className="two-column">
          <div className="left-column">
            <h3>What is KPP?</h3>
            <p>Kinetic Power Plant technology harnesses kinetic energy from various sources to generate electricity efficiently and sustainably.</p>
            
            <h3>Key Benefits:</h3>
            <ul>
              <li>Renewable energy source</li>
              <li>Low environmental impact</li>
              <li>Scalable technology</li>
              <li>Cost-effective solution</li>
            </ul>
          </div>
          
          <div className="right-column">
            <div className="image-placeholder">
              <p>KPP System Diagram</p>
              {/* TODO: Add actual KPP system image */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-navigation">
        <button 
          onClick={() => router.push('/slides/1')}
          className="nav-button prev"
        >
          ← Previous
        </button>
        <span className="slide-counter">2 / 10</span>
        <button 
          onClick={() => router.push('/slides/3')}
          className="nav-button next"
        >
          Next →
        </button>
      </div>
    </div>
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