import React from 'react';

export const SiemensBadge = ({ 
  children, 
  variant = 'default',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return 'badge-primary';
      case 'secondary': return 'badge-secondary';
      case 'success': return 'badge-success';
      case 'warning': return 'badge-warning';
      case 'error': return 'badge-error';
      case 'industrial': return 'badge-industrial';
      case 'outline': return 'badge-outline';
      default: return 'badge-default';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'badge-sm';
      case 'large': return 'badge-lg';
      default: return 'badge-md';
    }
  };

  return (
    <span 
      className={`siemens-badge ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...props}
    >
      {children}

      <style jsx>{`
        .siemens-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-family-primary);
          font-weight: 600;
          border-radius: var(--border-radius-sm);
          border: 1px solid transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        /* Size variants */
        .badge-sm {
          padding: 0.2rem 0.5rem;
          font-size: 0.75rem;
          min-height: 1.5rem;
        }

        .badge-md {
          padding: 0.3rem 0.75rem;
          font-size: 0.85rem;
          min-height: 2rem;
        }

        .badge-lg {
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          min-height: 2.5rem;
        }

        /* Variant styles */
        .badge-default {
          background: var(--neutral-200);
          color: var(--neutral-700);
          border-color: var(--neutral-300);
        }

        .badge-primary {
          background: var(--siemens-primary);
          color: white;
          border-color: var(--siemens-primary);
        }

        .badge-secondary {
          background: var(--siemens-secondary);
          color: white;
          border-color: var(--siemens-secondary);
        }

        .badge-success {
          background: var(--success);
          color: white;
          border-color: var(--success);
        }

        .badge-warning {
          background: var(--warning);
          color: white;
          border-color: var(--warning);
        }

        .badge-error {
          background: var(--error);
          color: white;
          border-color: var(--error);
        }

        .badge-industrial {
          background: linear-gradient(135deg, var(--industrial-dark), var(--industrial-medium));
          color: var(--siemens-accent);
          border-color: var(--industrial-light);
        }

        .badge-outline {
          background: transparent;
          color: var(--siemens-primary);
          border-color: var(--siemens-primary);
        }

        .badge-outline:hover {
          background: var(--siemens-primary);
          color: white;
        }
      `}</style>
    </span>
  );
};
