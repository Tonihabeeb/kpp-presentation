import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Helper hook to get slide navigation props
export function useSlideNavigation(slideNumber) {
  const [navigationProps, setNavigationProps] = useState({
    prevHref: null,
    nextHref: null,
    slideNumber: slideNumber,
    totalSlides: 0
  });

  useEffect(() => {
    // You can either hardcode the total number of slides or fetch it dynamically
    const totalSlides = 10; // Update this with your actual total number of slides
    
    setNavigationProps({
      prevHref: slideNumber > 1 ? `/slides/${slideNumber - 1}` : null,
      nextHref: slideNumber < totalSlides ? `/slides/${slideNumber + 1}` : null,
      slideNumber: slideNumber,
      totalSlides: totalSlides
    });
  }, [slideNumber]);

  return navigationProps;
}

// Higher-order component to wrap MDX slides with navigation
export function withSlideNavigation(WrappedComponent, slideNumber) {
  return function SlideWithNavigation(props) {
    const navigationProps = useSlideNavigation(slideNumber);
    
    return (
      <WrappedComponent 
        {...props} 
        {...navigationProps}
      />
    );
  };
}

// Auto-linking component for MDX slides
export function AutoSlideLink({ children, slideNumber, totalSlides }) {
  const router = useRouter();
  const { prevHref, nextHref } = useSlideNavigation(slideNumber);

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
    <div className="auto-slide-link">
      {children}
      
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