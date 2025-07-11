// Utility to suppress known development warnings that don't affect functionality
export const suppressKnownWarnings = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    const originalConsoleWarn = console.warn;
    // eslint-disable-next-line no-console
    const originalConsoleError = console.error;

    // eslint-disable-next-line no-console
    console.warn = (...args) => {
      const message = args.join(' ');
      
      // Suppress known warnings that don't affect functionality
      const suppressedWarnings = [
        'Support for defaultProps will be removed from function components',
        'Images loaded lazily and replaced with placeholders',
        'Tracking Prevention blocked access to storage',
        'has either width or height modified, but not the other',
        'Download the React DevTools for a better development experience'
      ];

      if (!suppressedWarnings.some(warning => message.includes(warning))) {
        originalConsoleWarn(...args);
      }
    };

    // eslint-disable-next-line no-console
    console.error = (...args) => {
      const message = args.join(' ');
      
      // Only suppress specific non-critical errors in development
      const suppressedErrors = [
        'GET http://localhost:3000/', // Port mismatch errors
        '404 (Not Found)' // Missing static assets that have fallbacks
      ];

      if (!suppressedErrors.some(error => message.includes(error))) {
        originalConsoleError(...args);
      }
    };
  }
};

export const enableDevelopmentMode = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Enable React DevTools detection
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
    
    // Add development-specific features
    // eslint-disable-next-line no-console
    console.log('🚀 KPP Development Mode Active');
    // eslint-disable-next-line no-console
    console.log('📍 Website: http://localhost:3003');
    // eslint-disable-next-line no-console
    console.log('�️ Static website mode - no backend required');
  }
};
