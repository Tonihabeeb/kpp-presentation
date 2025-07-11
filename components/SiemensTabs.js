import React, { useState } from 'react';

export const SiemensTabs = ({ 
  children, 
  defaultActiveTab = 0,
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const getVariantClass = () => {
    switch (variant) {
      case 'secondary': return 'tabs-secondary';
      case 'industrial': return 'tabs-industrial';
      case 'minimal': return 'tabs-minimal';
      default: return 'tabs-primary';
    }
  };

  return (
    <div className={`siemens-tabs ${getVariantClass()} ${className}`} {...props}>
      <div className="tabs-header">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            aria-selected={index === activeTab}
            role="tab"
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {React.Children.toArray(children)[activeTab]}
      </div>

      <style jsx>{`
        .siemens-tabs {
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          border: 1px solid var(--neutral-200);
          box-shadow: var(--shadow-md);
          backdrop-filter: blur(10px);
        }

        .tabs-header {
          display: flex;
          background: linear-gradient(135deg, var(--siemens-primary), var(--siemens-primary-light));
          border-bottom: 1px solid var(--neutral-200);
          overflow-x: auto;
        }

        .tab-button {
          background: transparent;
          border: none;
          color: white;
          padding: var(--spacing-md) var(--spacing-lg);
          font-family: var(--font-family-primary);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
          flex: 1;
          min-width: max-content;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .tab-button.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: white;
          border-radius: 2px 2px 0 0;
        }

        .tabs-content {
          padding: var(--spacing-xl);
        }

        .tabs-secondary .tabs-header {
          background: linear-gradient(135deg, var(--siemens-secondary), var(--info));
        }

        .tabs-industrial .tabs-header {
          background: linear-gradient(135deg, var(--industrial-dark), var(--industrial-medium));
        }

        .tabs-minimal .tabs-header {
          background: var(--neutral-100);
          border-bottom: 2px solid var(--siemens-primary);
        }

        .tabs-minimal .tab-button {
          color: var(--neutral-700);
        }

        .tabs-minimal .tab-button:hover {
          background: var(--neutral-200);
          color: var(--siemens-primary);
        }

        .tabs-minimal .tab-button.active {
          background: transparent;
          color: var(--siemens-primary);
        }

        .tabs-minimal .tab-button.active::after {
          background: var(--siemens-primary);
        }

        @media (max-width: 768px) {
          .tab-button {
            padding: var(--spacing-sm) var(--spacing-md);
            font-size: 0.9rem;
          }
          
          .tabs-content {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export const SiemensTabPanel = ({ children, ...props }) => {
  return (
    <div className="tab-panel" role="tabpanel" {...props}>
      {children}
    </div>
  );
};
