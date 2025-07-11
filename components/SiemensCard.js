import React from 'react';

export const SiemensCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  elevation = 'medium',
  interactive = false,
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return 'card-primary';
      case 'secondary': return 'card-secondary';
      case 'accent': return 'card-accent';
      case 'industrial': return 'card-industrial';
      default: return 'card-default';
    }
  };

  const getElevationClass = () => {
    switch (elevation) {
      case 'low': return 'elevation-low';
      case 'high': return 'elevation-high';
      case 'none': return 'elevation-none';
      default: return 'elevation-medium';
    }
  };

  return (
    <div 
      className={`siemens-card ${getVariantClass()} ${getElevationClass()} ${interactive ? 'interactive' : ''} ${className}`}
      {...props}
    >
      {children}
      
      <style jsx>{`
        .siemens-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          border: 1px solid rgba(0, 153, 153, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .elevation-none {
          box-shadow: none;
        }

        .elevation-low {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .elevation-medium {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .elevation-high {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .interactive {
          cursor: pointer;
        }

        .interactive:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 153, 153, 0.15);
          border-color: rgba(0, 153, 153, 0.3);
        }

        .card-primary {
          background: linear-gradient(135deg, rgba(0, 153, 153, 0.05), rgba(0, 188, 212, 0.05));
          border-color: rgba(0, 153, 153, 0.2);
        }

        .card-secondary {
          background: linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(33, 150, 243, 0.05));
          border-color: rgba(25, 118, 210, 0.2);
        }

        .card-accent {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(0, 188, 212, 0.05));
          border-color: rgba(0, 229, 255, 0.2);
        }

        .card-industrial {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(45, 45, 45, 0.95));
          border-color: rgba(0, 153, 153, 0.3);
          color: white;
        }
      `}</style>
    </div>
  );
};

export const SiemensCardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
    <style jsx>{`
      .card-header {
        padding: 1.5rem 2rem 1rem;
        border-bottom: 1px solid rgba(0, 153, 153, 0.1);
      }
    `}</style>
  </div>
);

export const SiemensCardContent = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>
    {children}
    <style jsx>{`
      .card-content {
        padding: 1.5rem 2rem;
      }
    `}</style>
  </div>
);

export const SiemensCardActions = ({ children, className = '' }) => (
  <div className={`card-actions ${className}`}>
    {children}
    <style jsx>{`
      .card-actions {
        padding: 1rem 2rem 1.5rem;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        border-top: 1px solid rgba(0, 153, 153, 0.1);
      }
    `}</style>
  </div>
);

export default SiemensCard;
