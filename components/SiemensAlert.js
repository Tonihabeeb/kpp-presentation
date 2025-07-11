import React from 'react';

export const SiemensAlert = ({ 
  children, 
  variant = 'info',
  size = 'medium',
  dismissible = false,
  onDismiss,
  icon = null,
  className = '',
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'success': return 'alert-success';
      case 'warning': return 'alert-warning';
      case 'error': return 'alert-error';
      case 'industrial': return 'alert-industrial';
      default: return 'alert-info';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'alert-sm';
      case 'large': return 'alert-lg';
      default: return 'alert-md';
    }
  };

  const getDefaultIcon = () => {
    switch (variant) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✕';
      case 'industrial': return '⚙';
      default: return 'ℹ';
    }
  };

  return (
    <div 
      className={`siemens-alert ${getVariantClass()} ${getSizeClass()} ${className}`}
      role="alert"
      {...props}
    >
      <div className="alert-content">
        {(icon || !icon) && (
          <div className="alert-icon">
            {icon || getDefaultIcon()}
          </div>
        )}
        <div className="alert-message">
          {children}
        </div>
        {dismissible && (
          <button 
            className="alert-dismiss" 
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            ✕
          </button>
        )}
      </div>

      <style jsx>{`
        .siemens-alert {
          border-radius: var(--border-radius-md);
          border: 1px solid;
          padding: var(--spacing-md);
          margin: var(--spacing-md) 0;
          position: relative;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .alert-content {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
        }

        .alert-icon {
          font-size: 1.2rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .alert-message {
          flex: 1;
          font-family: var(--font-family-primary);
          line-height: 1.6;
        }

        .alert-dismiss {
          background: transparent;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        /* Size variants */
        .alert-sm {
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: 0.9rem;
        }

        .alert-sm .alert-icon {
          font-size: 1rem;
        }

        .alert-lg {
          padding: var(--spacing-lg) var(--spacing-xl);
          font-size: 1.1rem;
        }

        .alert-lg .alert-icon {
          font-size: 1.4rem;
        }

        /* Variant styles */
        .alert-info {
          background: rgba(33, 150, 243, 0.1);
          border-color: var(--info);
          color: var(--neutral-800);
        }

        .alert-info .alert-icon {
          color: var(--info);
        }

        .alert-info .alert-dismiss:hover {
          background: rgba(33, 150, 243, 0.1);
          color: var(--info);
        }

        .alert-success {
          background: rgba(76, 175, 80, 0.1);
          border-color: var(--success);
          color: var(--neutral-800);
        }

        .alert-success .alert-icon {
          color: var(--success);
        }

        .alert-success .alert-dismiss:hover {
          background: rgba(76, 175, 80, 0.1);
          color: var(--success);
        }

        .alert-warning {
          background: rgba(255, 152, 0, 0.1);
          border-color: var(--warning);
          color: var(--neutral-800);
        }

        .alert-warning .alert-icon {
          color: var(--warning);
        }

        .alert-warning .alert-dismiss:hover {
          background: rgba(255, 152, 0, 0.1);
          color: var(--warning);
        }

        .alert-error {
          background: rgba(244, 67, 54, 0.1);
          border-color: var(--error);
          color: var(--neutral-800);
        }

        .alert-error .alert-icon {
          color: var(--error);
        }

        .alert-error .alert-dismiss:hover {
          background: rgba(244, 67, 54, 0.1);
          color: var(--error);
        }

        .alert-industrial {
          background: rgba(0, 153, 153, 0.1);
          border-color: var(--siemens-primary);
          color: var(--neutral-800);
        }

        .alert-industrial .alert-icon {
          color: var(--siemens-primary);
        }

        .alert-industrial .alert-dismiss:hover {
          background: rgba(0, 153, 153, 0.1);
          color: var(--siemens-primary);
        }

        @media (max-width: 768px) {
          .alert-content {
            gap: var(--spacing-sm);
          }
          
          .alert-lg {
            padding: var(--spacing-md) var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};
