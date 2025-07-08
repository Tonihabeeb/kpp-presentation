import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SlideLayout({ children, slideNumber, totalSlides }) {
  const router = useRouter();
  const [prevHref, setPrevHref] = useState(null);
  const [nextHref, setNextHref] = useState(null);

  useEffect(() => {
    // Calculate navigation links
    if (slideNumber > 1) {
      setPrevHref(`/slides/${slideNumber - 1}`);
    } else {
      setPrevHref(null);
    }

    if (slideNumber < totalSlides) {
      setNextHref(`/slides/${slideNumber + 1}`);
    } else {
      setNextHref(null);
    }
  }, [slideNumber, totalSlides]);

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft' && prevHref) {
      router.push(prevHref);
    } else if (e.key === 'ArrowRight' && nextHref) {
      router.push(nextHref);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [prevHref, nextHref]);

  return (
    <div className="slide-layout">
      <div className="slide-content">
        {children}
      </div>
      
      <div className="slide-navigation">
        {prevHref && (
          <button 
            onClick={() => router.push(prevHref)}
            className="nav-button prev"
          >
            ← Previous
          </button>
        )}
        
        <span className="slide-counter">
          {slideNumber} / {totalSlides}
        </span>
        
        {nextHref && (
          <button 
            onClick={() => router.push(nextHref)}
            className="nav-button next"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
} 