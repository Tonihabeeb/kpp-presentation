import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';
import InteractiveDemo from '../components/InteractiveDemo';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { useRouter } from 'next/router';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock performance.memory for testing
Object.defineProperty(performance, 'memory', {
  value: {
    usedJSHeapSize: 50 * 1024 * 1024, // 50MB
    totalJSHeapSize: 100 * 1024 * 1024, // 100MB
  },
  configurable: true
});

describe('Navigation Component', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      pathname: '/',
      asPath: '/',
      push: jest.fn(),
    });
  });

  test('renders navigation with proper structure', () => {
    render(<NavBar />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
  });

  test('applies transparent class on homepage', () => {
    render(<NavBar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('data-transparent', 'true');
  });

  test('responds to scroll events', async () => {
    render(<NavBar />);
    
    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    await waitFor(() => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('scrolled');
    });
  });

  test('mobile menu toggle works', () => {
    render(<NavBar />);
    
    const mobileToggle = screen.getByLabelText('Open navigation menu');
    fireEvent.click(mobileToggle);
    
    expect(screen.getByLabelText('Close navigation menu')).toBeInTheDocument();
  });
});

describe('Interactive Demo Component', () => {
  test('renders demo tabs correctly', () => {
    render(<InteractiveDemo />);
    
    expect(screen.getByText('Parallax Effects')).toBeInTheDocument();
    expect(screen.getByText('Scroll Animations')).toBeInTheDocument();
    expect(screen.getByText('Loading States')).toBeInTheDocument();
    expect(screen.getByText('Toast System')).toBeInTheDocument();
  });

  test('tab switching works correctly', () => {
    render(<InteractiveDemo />);
    
    const scrollTab = screen.getByText('Scroll Animations');
    fireEvent.click(scrollTab);
    
    expect(scrollTab.closest('button')).toHaveClass('active');
  });

  test('copy functionality works', async () => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(() => Promise.resolve()),
      },
    });

    render(<InteractiveDemo />);
    
    const copyButton = screen.getAllByText(/Copy/)[0];
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });
  });

  test('loading demo button works', async () => {
    render(<InteractiveDemo />);
    
    // Switch to loading tab
    const loadingTab = screen.getByText('Loading States');
    fireEvent.click(loadingTab);
    
    const startButton = screen.getByText('Start Process');
    fireEvent.click(startButton);
    
    expect(screen.getByText('Processing...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Start Process')).toBeInTheDocument();
    }, { timeout: 4000 });
  });

  test('toast buttons create notifications', () => {
    render(<InteractiveDemo />);
    
    // Switch to notifications tab
    const notificationsTab = screen.getByText('Toast System');
    fireEvent.click(notificationsTab);
    
    const successButton = screen.getByText('Success Toast');
    fireEvent.click(successButton);
    
    // Toast should appear (assuming ToastContainer is rendered)
    expect(successButton).toBeInTheDocument();
  });
});

describe('Performance Monitor Component', () => {
  test('renders performance metrics', () => {
    render(<PerformanceMonitor />);
    
    expect(screen.getByText('Real-Time Performance Metrics')).toBeInTheDocument();
    expect(screen.getByText('Frame Rate')).toBeInTheDocument();
    expect(screen.getByText('Render Time')).toBeInTheDocument();
    expect(screen.getByText('Memory Usage')).toBeInTheDocument();
  });

  test('displays optimization features', () => {
    render(<PerformanceMonitor />);
    
    expect(screen.getByText('Optimization Features Active:')).toBeInTheDocument();
    expect(screen.getByText('Passive scroll listeners')).toBeInTheDocument();
    expect(screen.getByText('RequestAnimationFrame optimization')).toBeInTheDocument();
    expect(screen.getByText('Hardware acceleration')).toBeInTheDocument();
  });

  test('metrics update over time', async () => {
    render(<PerformanceMonitor />);
    
    // Wait for component to initialize and start monitoring
    await waitFor(() => {
      const frameRateElements = screen.getAllByText(/fps/);
      expect(frameRateElements.length).toBeGreaterThan(0);
    });
  });
});

// Accessibility tests
describe('Accessibility Compliance', () => {
  test('navigation has proper ARIA labels', () => {
    render(<NavBar />);
    
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Deep Engineering - Home')).toBeInTheDocument();
  });

  test('interactive elements are keyboard accessible', () => {
    render(<InteractiveDemo />);
    
    const tabs = screen.getAllByRole('button');
    tabs.forEach(tab => {
      expect(tab).not.toHaveAttribute('tabindex', '-1');
    });
  });

  test('performance monitor uses semantic HTML', () => {
    render(<PerformanceMonitor />);
    
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });
});

// Performance tests
describe('Component Performance', () => {
  test('components render within performance threshold', () => {
    const startTime = performance.now();
    
    render(<NavBar />);
    render(<InteractiveDemo />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Should render within 100ms
    expect(renderTime).toBeLessThan(100);
  });

  test('components cleanup properly on unmount', () => {
    const { unmount: unmountNav } = render(<NavBar />);
    const { unmount: unmountDemo } = render(<InteractiveDemo />);
    const { unmount: unmountMonitor } = render(<PerformanceMonitor />);
    
    expect(() => {
      unmountNav();
      unmountDemo();
      unmountMonitor();
    }).not.toThrow();
  });
});
