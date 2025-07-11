import { useState } from 'react';
import { useScrollAnimation, useParallax, useLoadingState, useToast, copyToClipboard } from '../hooks/useAdvancedInteractions';

export default function InteractiveDemo() {
  const [demoRef, demoVisible] = useScrollAnimation();
  const [parallaxRef, parallaxOffset] = useParallax(-0.3);
  const { isLoading, setLoading } = useLoadingState();
  const { addToast } = useToast();
  
  const [activeDemo, setActiveDemo] = useState('parallax');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyCode = async (code) => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopySuccess(true);
      addToast({
        type: 'success',
        title: 'Code Copied!',
        message: 'Code snippet copied to clipboard',
        duration: 3000
      });
      setTimeout(() => setCopySuccess(false), 2000);
    } else {
      addToast({
        type: 'error',
        title: 'Copy Failed',
        message: 'Unable to copy to clipboard',
        duration: 3000
      });
    }
  };

  const handleLoadingDemo = async () => {
    setLoading(true);
    addToast({
      type: 'info',
      title: 'Processing Request',
      message: 'Simulating data processing...',
      duration: 2000
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setLoading(false);
    addToast({
      type: 'success',
      title: 'Process Complete',
      message: 'Data successfully processed and analyzed',
      duration: 4000
    });
  };

  const demoCode = {
    parallax: `const [parallaxRef, offset] = useParallax(-0.5);

<div 
  ref={parallaxRef}
  style={{
    transform: \`translateY(\${offset * 20}px)\`
  }}
>
  Parallax Content
</div>`,
    scroll: `const [ref, isVisible] = useScrollAnimation();

<section 
  ref={ref}
  className={\`content \${isVisible ? 'animate-in' : ''}\`}
>
  Scroll-triggered content
</section>`,
    loading: `const { isLoading, setLoading } = useLoadingState();

const handleAction = async () => {
  setLoading(true);
  await apiCall();
  setLoading(false);
};

<button disabled={isLoading}>
  {isLoading ? 'Processing...' : 'Submit'}
</button>`
  };

  return (
    <section 
      ref={demoRef}
      className={`interactive-demo-section ${demoVisible ? 'animate-in' : ''}`}
    >
      <div className="demo-container">
        <div className="demo-header">
          <h2 className="demo-title">Advanced Interactions Demo</h2>
          <p className="demo-subtitle">
            Experience the premium micro-interactions and advanced features 
            that make our Vestas-inspired design system exceptional.
          </p>
        </div>

        <div className="demo-tabs">
          {[
            { id: 'parallax', label: 'Parallax Effects', icon: '🌊' },
            { id: 'scroll', label: 'Scroll Animations', icon: '📜' },
            { id: 'loading', label: 'Loading States', icon: '⏳' },
            { id: 'notifications', label: 'Toast System', icon: '🔔' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`demo-tab ${activeDemo === tab.id ? 'active' : ''}`}
              onClick={() => setActiveDemo(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="demo-content">
          {activeDemo === 'parallax' && (
            <div className="demo-panel">
              <div 
                ref={parallaxRef}
                className="parallax-demo"
                style={{
                  transform: `translateY(${parallaxOffset * 50}px) scale(${1 + Math.abs(parallaxOffset) * 0.05})`
                }}
              >
                <div className="parallax-content">
                  <h3>Parallax Motion</h3>
                  <p>This content moves with subtle parallax effects as you scroll.</p>
                  <div className="parallax-indicator">
                    Offset: {Math.round(parallaxOffset * 100)}px
                  </div>
                </div>
              </div>
              <div className="demo-code">
                <div className="code-header">
                  <span>React Hook Usage</span>
                  <button 
                    className={`copy-button ${copySuccess ? 'success' : ''}`}
                    onClick={() => handleCopyCode(demoCode.parallax)}
                  >
                    {copySuccess ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>
                <pre className="code-block">
                  <code>{demoCode.parallax}</code>
                </pre>
              </div>
            </div>
          )}

          {activeDemo === 'scroll' && (
            <div className="demo-panel">
              <div className="scroll-demo">
                <h3>Scroll-Triggered Animations</h3>
                <p>Elements animate into view as they enter the viewport.</p>
                <div className="scroll-elements">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="scroll-element" style={{ animationDelay: `${i * 0.1}s` }}>
                      Element {i}
                    </div>
                  ))}
                </div>
              </div>
              <div className="demo-code">
                <div className="code-header">
                  <span>React Hook Usage</span>
                  <button 
                    className="copy-button"
                    onClick={() => handleCopyCode(demoCode.scroll)}
                  >
                    📋 Copy
                  </button>
                </div>
                <pre className="code-block">
                  <code>{demoCode.scroll}</code>
                </pre>
              </div>
            </div>
          )}

          {activeDemo === 'loading' && (
            <div className="demo-panel">
              <div className="loading-demo">
                <h3>Loading State Management</h3>
                <p>Elegant loading states with user feedback.</p>
                <button 
                  className={`demo-action-button ${isLoading ? 'loading' : ''}`}
                  onClick={handleLoadingDemo}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    'Start Process'
                  )}
                </button>
              </div>
              <div className="demo-code">
                <div className="code-header">
                  <span>React Hook Usage</span>
                  <button 
                    className="copy-button"
                    onClick={() => handleCopyCode(demoCode.loading)}
                  >
                    📋 Copy
                  </button>
                </div>
                <pre className="code-block">
                  <code>{demoCode.loading}</code>
                </pre>
              </div>
            </div>
          )}

          {activeDemo === 'notifications' && (
            <div className="demo-panel">
              <div className="notifications-demo">
                <h3>Toast Notification System</h3>
                <p>Premium notification system with multiple types and animations.</p>
                <div className="notification-buttons">
                  <button 
                    className="demo-button success"
                    onClick={() => addToast({
                      type: 'success',
                      title: 'Success!',
                      message: 'Operation completed successfully',
                      duration: 4000
                    })}
                  >
                    Success Toast
                  </button>
                  <button 
                    className="demo-button error"
                    onClick={() => addToast({
                      type: 'error',
                      title: 'Error Occurred',
                      message: 'Something went wrong, please try again',
                      duration: 5000
                    })}
                  >
                    Error Toast
                  </button>
                  <button 
                    className="demo-button info"
                    onClick={() => addToast({
                      type: 'info',
                      title: 'Information',
                      message: 'Here\'s some useful information for you',
                      duration: 3000
                    })}
                  >
                    Info Toast
                  </button>
                  <button 
                    className="demo-button warning"
                    onClick={() => addToast({
                      type: 'warning',
                      title: 'Warning',
                      message: 'Please review this important notice',
                      duration: 4000
                    })}
                  >
                    Warning Toast
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
