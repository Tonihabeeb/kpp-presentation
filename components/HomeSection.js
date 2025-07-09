import React from 'react';

export default function HomeSection({ id, title, children, className = '' }) {
  return (
    <section 
      id={id} 
      className={`home-section ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {title && (
        <div className="section-header">
          <h2 id={id ? `${id}-title` : undefined} className="section-title">
            {title}
          </h2>
        </div>
      )}
      <div className="section-content">
        {children}
      </div>

      <style jsx>{`
        .home-section {
          padding: 4rem 0;
          margin-bottom: 2rem;
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        .section-content {
          padding: 0 2rem;
          max-width: 1000px;
          margin: 0 auto;
          color: var(--color-text);
        }

        .section-content p {
          color: var(--color-text-secondary);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .home-section {
            padding: 2rem 0;
            margin-bottom: 1rem;
          }

          .section-header {
            margin-bottom: 2rem;
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-content {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
}
