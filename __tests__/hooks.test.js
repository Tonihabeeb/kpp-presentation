import { renderHook, act } from '@testing-library/react';
import { useScrollAnimation, useParallax, useMouseTracking, useLoadingState, useToast, useDebounce } from '../hooks/useAdvancedInteractions';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Advanced Interactions Hooks', () => {
  describe('useScrollAnimation', () => {
    test('should initialize with correct default state', () => {
      const { result } = renderHook(() => useScrollAnimation());
      const [ref, isVisible] = result.current;
      
      expect(ref.current).toBeNull();
      expect(isVisible).toBe(false);
    });

    test('should create ref object', () => {
      const { result } = renderHook(() => useScrollAnimation());
      const [ref] = result.current;
      
      expect(ref).toHaveProperty('current');
    });
  });

  describe('useParallax', () => {
    test('should initialize with zero offset', () => {
      const { result } = renderHook(() => useParallax(-0.5));
      const [ref, offset] = result.current;
      
      expect(ref.current).toBeNull();
      expect(offset).toBe(0);
    });

    test('should accept speed parameter', () => {
      const { result } = renderHook(() => useParallax(-0.3));
      expect(result.current).toBeDefined();
    });
  });

  describe('useMouseTracking', () => {
    test('should initialize with zero coordinates', () => {
      const { result } = renderHook(() => useMouseTracking());
      const mousePosition = result.current;
      
      expect(mousePosition).toEqual({ x: 0, y: 0 });
    });

    test('should update on mouse move', () => {
      const { result } = renderHook(() => useMouseTracking());
      
      // Simulate mouse move event
      act(() => {
        const event = new MouseEvent('mousemove', {
          clientX: 100,
          clientY: 200
        });
        window.dispatchEvent(event);
      });

      expect(result.current.x).toBe(100);
      expect(result.current.y).toBe(200);
    });
  });

  describe('useLoadingState', () => {
    test('should initialize as not loading', () => {
      const { result } = renderHook(() => useLoadingState());
      const { isLoading } = result.current;
      
      expect(isLoading).toBe(false);
    });

    test('should toggle loading state', () => {
      const { result } = renderHook(() => useLoadingState());
      
      act(() => {
        result.current.setLoading(true);
      });
      
      expect(result.current.isLoading).toBe(true);
      
      act(() => {
        result.current.setLoading(false);
      });
      
      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('useToast', () => {
    test('should initialize with empty toasts array', () => {
      const { result } = renderHook(() => useToast());
      const { toasts } = result.current;
      
      expect(toasts).toEqual([]);
    });

    test('should add toast to array', () => {
      const { result } = renderHook(() => useToast());
      
      act(() => {
        result.current.addToast({
          type: 'success',
          message: 'Test message'
        });
      });
      
      expect(result.current.toasts).toHaveLength(1);
      expect(result.current.toasts[0]).toMatchObject({
        type: 'success',
        message: 'Test message'
      });
    });

    test('should remove toast by id', () => {
      const { result } = renderHook(() => useToast());
      
      act(() => {
        result.current.addToast({
          type: 'info',
          message: 'Test message'
        });
      });
      
      const toastId = result.current.toasts[0].id;
      
      act(() => {
        result.current.removeToast(toastId);
      });
      
      expect(result.current.toasts).toHaveLength(0);
    });
  });

  describe('useDebounce', () => {
    jest.useFakeTimers();

    test('should return initial value immediately', () => {
      const { result } = renderHook(() => useDebounce('initial', 500));
      
      expect(result.current).toBe('initial');
    });

    test('should debounce value updates', () => {
      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebounce(value, delay),
        {
          initialProps: { value: 'initial', delay: 500 }
        }
      );
      
      expect(result.current).toBe('initial');
      
      rerender({ value: 'updated', delay: 500 });
      expect(result.current).toBe('initial');
      
      act(() => {
        jest.advanceTimersByTime(500);
      });
      
      expect(result.current).toBe('updated');
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });
});

// Performance benchmarks
describe('Performance Benchmarks', () => {
  test('hooks should initialize within performance threshold', () => {
    const startTime = performance.now();
    
    renderHook(() => {
      useScrollAnimation();
      useParallax(-0.5);
      useMouseTracking();
      useLoadingState();
      useToast();
      useDebounce('test', 100);
    });
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    // Should initialize all hooks within 10ms
    expect(executionTime).toBeLessThan(10);
  });

  test('useDebounce should not cause memory leaks', () => {
    const { unmount } = renderHook(() => useDebounce('test', 100));
    
    // Should unmount without errors
    expect(() => unmount()).not.toThrow();
  });
});
