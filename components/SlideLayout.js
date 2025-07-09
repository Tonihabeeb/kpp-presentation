import Link from 'next/link';
import { useEffect } from 'react';

export default function SlideLayout({ children, prevHref = null, nextHref = null, title = "" }) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && prevHref) {
        window.location.href = prevHref;
      } else if (e.key === 'ArrowRight' && nextHref) {
        window.location.href = nextHref;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevHref, nextHref]);

  return (
    <div className="slide-container">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="slide-content" id="main-content">
        {title && (
          <div className="title-section">
            <h1>{title}</h1>
          </div>
        )}
        {children}
      </div>
      {/* Navigation controls */}
      <div className="nav-buttons">
        {prevHref && <Link href={prevHref} className="nav-button" aria-label={`Previous slide: ${prevHref}`}>← Previous</Link>}
        {nextHref && <Link href={nextHref} className="nav-button" aria-label={`Next slide: ${nextHref}`}>Next →</Link>}
      </div>
    </div>
  );
}