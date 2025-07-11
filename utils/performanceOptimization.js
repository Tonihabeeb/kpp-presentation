// Performance optimization utilities for Phase 6
import React from 'react';

// Lazy loading utility for components
export const lazyWithPreload = (componentImport) => {
  const LazyComponent = React.lazy(componentImport);
  LazyComponent.preload = componentImport;
  return LazyComponent;
};

// Image optimization utility
export const optimizeImage = (src, { width, height, quality = 85, format = 'webp' }) => {
  if (typeof window === 'undefined') return src;
  
  // Check for WebP support
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();

  const params = new URLSearchParams({
    w: width,
    h: height,
    q: quality,
    f: supportsWebP ? 'webp' : format
  });

  return `${src}?${params.toString()}`;
};

// Performance monitoring utilities
export class PerformanceTracker {
  constructor() {
    this.metrics = {
      renderTimes: [],
      memorySamples: [],
      frameTimes: [],
      interactionTimes: []
    };
    this.observers = [];
  }

  // Track render performance
  trackRender(componentName, renderFn) {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    
    this.metrics.renderTimes.push({
      component: componentName,
      duration: end - start,
      timestamp: Date.now()
    });

    return result;
  }

  // Track memory usage
  trackMemory() {
    if (performance.memory) {
      this.metrics.memorySamples.push({
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        timestamp: Date.now()
      });
    }
  }

  // Track frame rate
  startFrameTracking() {
    let lastFrameTime = performance.now();
    
    const trackFrame = (currentTime) => {
      const frameTime = currentTime - lastFrameTime;
      this.metrics.frameTimes.push(frameTime);
      
      // Keep only last 60 frames
      if (this.metrics.frameTimes.length > 60) {
        this.metrics.frameTimes.shift();
      }
      
      lastFrameTime = currentTime;
      this.frameId = requestAnimationFrame(trackFrame);
    };
    
    this.frameId = requestAnimationFrame(trackFrame);
  }

  stopFrameTracking() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }

  // Track user interactions
  trackInteraction(eventType, target, duration) {
    this.metrics.interactionTimes.push({
      type: eventType,
      target: target.tagName || target.constructor.name,
      duration,
      timestamp: Date.now()
    });
  }

  // Get performance summary
  getSummary() {
    const avgRenderTime = this.metrics.renderTimes.reduce((sum, item) => sum + item.duration, 0) / this.metrics.renderTimes.length || 0;
    const avgFrameTime = this.metrics.frameTimes.reduce((sum, time) => sum + time, 0) / this.metrics.frameTimes.length || 0;
    const currentFPS = avgFrameTime > 0 ? 1000 / avgFrameTime : 0;
    
    const latestMemory = this.metrics.memorySamples[this.metrics.memorySamples.length - 1];
    
    return {
      averageRenderTime: Math.round(avgRenderTime * 100) / 100,
      currentFPS: Math.round(currentFPS),
      memoryUsage: latestMemory ? Math.round(latestMemory.used / 1048576) : 0,
      totalInteractions: this.metrics.interactionTimes.length,
      performanceScore: this.calculateScore()
    };
  }

  calculateScore() {
    const summary = this.getSummary();
    let score = 100;
    
    // Deduct points for poor performance
    if (summary.averageRenderTime > 16) score -= 20;
    if (summary.currentFPS < 55) score -= 20;
    if (summary.memoryUsage > 100) score -= 15;
    
    return Math.max(0, Math.min(100, score));
  }

  // Export metrics for analysis
  exportMetrics() {
    return {
      timestamp: Date.now(),
      summary: this.getSummary(),
      detailed: this.metrics
    };
  }
}

// Bundle size analyzer
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return null;

  const scripts = Array.from(document.scripts);
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  return {
    scripts: scripts.map(script => ({
      src: script.src,
      size: script.src ? 'unknown' : script.innerHTML.length
    })),
    styles: styles.map(style => ({
      href: style.href,
      size: 'unknown'
    })),
    totalElements: scripts.length + styles.length
  };
};

// Core Web Vitals tracker
export class CoreWebVitalsTracker {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return;
    
    // Track First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Track Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Track Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.CLS = clsValue;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }

    // Track First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.FID = entry.processingStart - entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  getMetrics() {
    return this.metrics;
  }

  getGrades() {
    const grades = {};
    
    // FCP grading
    if (this.metrics.FCP <= 1800) grades.FCP = 'good';
    else if (this.metrics.FCP <= 3000) grades.FCP = 'needs-improvement';
    else grades.FCP = 'poor';

    // LCP grading
    if (this.metrics.LCP <= 2500) grades.LCP = 'good';
    else if (this.metrics.LCP <= 4000) grades.LCP = 'needs-improvement';
    else grades.LCP = 'poor';

    // CLS grading
    if (this.metrics.CLS <= 0.1) grades.CLS = 'good';
    else if (this.metrics.CLS <= 0.25) grades.CLS = 'needs-improvement';
    else grades.CLS = 'poor';

    // FID grading
    if (this.metrics.FID <= 100) grades.FID = 'good';
    else if (this.metrics.FID <= 300) grades.FID = 'needs-improvement';
    else grades.FID = 'poor';

    return grades;
  }
}

// Memory leak detector
export class MemoryLeakDetector {
  constructor() {
    this.initialMemory = this.getCurrentMemory();
    this.samples = [];
    this.isTracking = false;
  }

  getCurrentMemory() {
    return performance.memory ? performance.memory.usedJSHeapSize : 0;
  }

  startTracking() {
    this.isTracking = true;
    this.trackingInterval = setInterval(() => {
      const current = this.getCurrentMemory();
      this.samples.push({
        memory: current,
        timestamp: Date.now()
      });

      // Keep only last 100 samples
      if (this.samples.length > 100) {
        this.samples.shift();
      }
    }, 1000);
  }

  stopTracking() {
    this.isTracking = false;
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
  }

  detectLeaks() {
    if (this.samples.length < 10) return { hasLeak: false, confidence: 0 };

    const recent = this.samples.slice(-10);
    const older = this.samples.slice(-20, -10);

    const recentAvg = recent.reduce((sum, sample) => sum + sample.memory, 0) / recent.length;
    const olderAvg = older.reduce((sum, sample) => sum + sample.memory, 0) / older.length;

    const growthRate = (recentAvg - olderAvg) / olderAvg;
    const hasLeak = growthRate > 0.1; // 10% growth indicates potential leak

    return {
      hasLeak,
      confidence: Math.min(growthRate * 10, 1),
      growthRate,
      currentMemory: this.getCurrentMemory(),
      initialMemory: this.initialMemory
    };
  }
}

// Error boundary for production
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService(error, errorInfo) {
    // Implementation for logging to external service
    // In production, this would send to monitoring service
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('error', { error: error.message, errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We&apos;re sorry, but something unexpected happened.</p>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )}
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Global performance tracker instances (only created in browser)
export const globalPerformanceTracker = typeof window !== 'undefined' ? new PerformanceTracker() : null;
export const coreWebVitalsTracker = typeof window !== 'undefined' ? new CoreWebVitalsTracker() : null;
export const memoryLeakDetector = typeof window !== 'undefined' ? new MemoryLeakDetector() : null;

// Auto-start tracking in browser
if (typeof window !== 'undefined' && globalPerformanceTracker) {
  globalPerformanceTracker.startFrameTracking();
  memoryLeakDetector.startTracking();
}
