import React from 'react';
import { SiemensPageLayout } from '../components/SiemensPageLayout';
import { SiemensCard } from '../components/SiemensCard';
import { SiemensButton } from '../components/SiemensButton';
import { SiemensBadge } from '../components/SiemensBadge';
import { SiemensAlert } from '../components/SiemensAlert';
import { SiemensTabs, SiemensTabPanel } from '../components/SiemensTabs';

export default function SiemensShowcase() {
  return (
    <SiemensPageLayout
      title="Siemens iX Design System"
      subtitle="Professional, industrial-grade UI components integrated into the KPP presentation website"
      variant="industrial"
    >
      <SiemensAlert variant="industrial" size="large">
        <strong>Enhanced with Siemens iX:</strong> This website now features professional-grade components 
        following Siemens design principles for industrial applications.
      </SiemensAlert>

      <SiemensTabs defaultActiveTab={0} variant="industrial">
        <SiemensTabPanel label="Component Overview">
          <div className="showcase-grid">
            <SiemensCard variant="primary" elevation="high">
              <h3>SiemensCard Component</h3>
              <p>Flexible card component with multiple variants:</p>
              <div className="badge-group">
                <SiemensBadge variant="primary">Primary</SiemensBadge>
                <SiemensBadge variant="secondary">Secondary</SiemensBadge>
                <SiemensBadge variant="industrial">Industrial</SiemensBadge>
                <SiemensBadge variant="accent">Accent</SiemensBadge>
              </div>
            </SiemensCard>

            <SiemensCard variant="secondary" elevation="medium">
              <h3>SiemensButton Component</h3>
              <p>Professional button component with various styles:</p>
              <div className="button-group">
                <SiemensButton variant="primary" size="small">Primary</SiemensButton>
                <SiemensButton variant="outline" size="small">Outline</SiemensButton>
                <SiemensButton variant="industrial" size="small">Industrial</SiemensButton>
              </div>
            </SiemensCard>

            <SiemensCard variant="industrial" elevation="medium">
              <h3>Status Indicators</h3>
              <p>Badges and alerts for status communication:</p>
              <div className="status-group">
                <SiemensBadge variant="success">Online</SiemensBadge>
                <SiemensBadge variant="warning">Maintenance</SiemensBadge>
                <SiemensBadge variant="error">Offline</SiemensBadge>
              </div>
            </SiemensCard>
          </div>
        </SiemensTabPanel>

        <SiemensTabPanel label="Design Principles">
          <SiemensCard variant="default" elevation="high">
            <h3>Siemens iX Design Principles</h3>
            <div className="principles-grid">
              <div className="principle-item">
                <h4>🎨 Consistent Visual Language</h4>
                <p>Unified color scheme using Siemens brand colors (#009999) with consistent spacing and typography.</p>
              </div>
              <div className="principle-item">
                <h4>🏭 Industrial Aesthetics</h4>
                <p>Professional appearance suitable for industrial and enterprise applications.</p>
              </div>
              <div className="principle-item">
                <h4>♿ Accessibility First</h4>
                <p>WCAG compliant components with proper ARIA labels and keyboard navigation.</p>
              </div>
              <div className="principle-item">
                <h4>📱 Responsive Design</h4>
                <p>Components adapt seamlessly across desktop, tablet, and mobile devices.</p>
              </div>
            </div>
          </SiemensCard>
        </SiemensTabPanel>

        <SiemensTabPanel label="Implementation">
          <SiemensCard variant="accent" elevation="high">
            <h3>Implemented Across Pages</h3>
            <div className="implementation-list">
              <div className="implementation-item">
                <SiemensBadge variant="success">✓</SiemensBadge>
                <span><strong>Home Page:</strong> Hero section with SiemensButton CTAs and SiemensCard content sections</span>
              </div>
              <div className="implementation-item">
                <SiemensBadge variant="success">✓</SiemensBadge>
                <span><strong>Technology Page:</strong> Component cards and principle explanations using SiemensCard</span>
              </div>
              <div className="implementation-item">
                <SiemensBadge variant="success">✓</SiemensBadge>
                <span><strong>Performance Page:</strong> Data visualization with SiemensBadge and performance metrics</span>
              </div>
              <div className="implementation-item">
                <SiemensBadge variant="warning">⚠</SiemensBadge>
                <span><strong>Additional Pages:</strong> Ready for further Siemens iX integration</span>
              </div>
            </div>
          </SiemensCard>
        </SiemensTabPanel>
      </SiemensTabs>

      <div className="navigation-section">
        <h2>Explore Enhanced Pages</h2>
        <div className="nav-grid">
          <SiemensButton href="/" variant="primary" size="large" fullWidth>
            Home Page
          </SiemensButton>
          <SiemensButton href="/technology" variant="industrial" size="large" fullWidth>
            Technology Deep Dive
          </SiemensButton>
          <SiemensButton href="/performance" variant="secondary" size="large" fullWidth>
            Performance Metrics
          </SiemensButton>
        </div>
      </div>

      <style jsx>{`
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          margin: var(--spacing-xl) 0;
        }

        .badge-group,
        .button-group,
        .status-group {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          margin-top: var(--spacing-md);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
        }

        .principle-item {
          padding: var(--spacing-lg);
          background: rgba(0, 153, 153, 0.05);
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(0, 153, 153, 0.1);
        }

        .principle-item h4 {
          color: var(--siemens-primary);
          font-family: var(--font-family-primary);
          font-weight: 600;
          margin: 0 0 var(--spacing-sm) 0;
        }

        .principle-item p {
          color: var(--neutral-700);
          line-height: 1.6;
          margin: 0;
        }

        .implementation-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }

        .implementation-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.5);
          border-radius: var(--border-radius-sm);
          border: 1px solid var(--neutral-200);
        }

        .navigation-section {
          margin-top: var(--spacing-3xl);
          text-align: center;
        }

        .navigation-section h2 {
          color: var(--siemens-primary);
          font-family: var(--font-family-primary);
          font-weight: 600;
          font-size: 2rem;
          margin-bottom: var(--spacing-xl);
        }

        .nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .showcase-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }
          
          .nav-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </SiemensPageLayout>
  );
}
