import React from 'react';

export const SiemensPageLayout = ({ 
  children, 
  title,
  subtitle,
  className = '',
  variant = 'default',
  heroImage = null,
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'technology': return 'layout-technology';
      case 'performance': return 'layout-performance';
      case 'industrial': return 'layout-industrial';
      default: return 'layout-default';
    }
  };

  return (
    <div className={`siemens-page-layout ${getVariantClass()} ${className}`} {...props}>
      {(title || subtitle) && (
        <section className="page-hero" aria-label="Page header">
          {heroImage && (
            <div className="hero-image-container">
              {heroImage}
            </div>
          )}
          <div className="hero-content">
            {title && (
              <h1 className="page-title">{title}</h1>
            )}
            {subtitle && (
              <p className="page-subtitle">{subtitle}</p>
            )}
          </div>
        </section>
      )}
      
      <main className="page-content">
        {children}
      </main>

      <style jsx>{`
        .siemens-page-layout {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            var(--neutral-50) 0%, 
            rgba(0, 153, 153, 0.05) 50%, 
            var(--neutral-100) 100%
          );
        }

        .page-hero {
          background: linear-gradient(135deg, 
            var(--siemens-primary), 
            var(--siemens-primary-light)
          );
          color: white;
          padding: var(--spacing-3xl) var(--spacing-xl);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .page-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero-image-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-title {
          font-family: var(--font-family-primary);
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 var(--spacing-lg) 0;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .page-subtitle {
          font-family: var(--font-family-primary);
          font-size: 1.25rem;
          font-weight: 400;
          margin: 0;
          line-height: 1.6;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
        }

        .page-content {
          padding: var(--spacing-3xl) var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Variant styles */
        .layout-technology .page-hero {
          background: linear-gradient(135deg, 
            var(--industrial-dark), 
            var(--industrial-medium)
          );
        }

        .layout-performance .page-hero {
          background: linear-gradient(135deg, 
            var(--siemens-secondary), 
            var(--info)
          );
        }

        .layout-industrial .page-hero {
          background: linear-gradient(135deg, 
            var(--neutral-800), 
            var(--neutral-600)
          );
        }

        @media (max-width: 768px) {
          .page-hero {
            padding: var(--spacing-2xl) var(--spacing-lg);
          }
          
          .page-title {
            font-size: 2.5rem;
          }
          
          .page-subtitle {
            font-size: 1.1rem;
          }
          
          .page-content {
            padding: var(--spacing-2xl) var(--spacing-lg);
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 2rem;
          }
          
          .page-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
