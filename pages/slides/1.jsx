import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Slide1() {
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      router.push('/slides/2');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="slide">
      <h1>Kinetic Power Plant (KPP) Technology</h1>
      <h2>Technical Overview</h2>
      
      <div className="slide-content">
        <p>Welcome to the KPP Technology presentation</p>
        
        <div className="key-points">
          <h3>Key Topics:</h3>
          <ul>
            <li>Technology Overview</li>
            <li>System Architecture</li>
            <li>Performance Metrics</li>
            <li>Implementation Strategy</li>
          </ul>
        </div>
      </div>
      
      <div className="slide-navigation">
        <span className="slide-counter">1 / 10</span>
        <button 
          onClick={() => router.push('/slides/2')}
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