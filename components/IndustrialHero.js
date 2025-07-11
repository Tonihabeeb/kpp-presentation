import React from 'react';

const IndustrialHero = ({ 
  title, 
  subtitle, 
  description, 
  primaryAction, 
  secondaryAction,
  backgroundType = 'gradient',
  stats = null 
}) => {
  return (
    <section className={`industrial-hero ${backgroundType}`}>
      <div className="hero-background">
        {backgroundType === 'pattern' && <div className="industrial-pattern"></div>}
        {backgroundType === 'grid' && <div className="industrial-grid"></div>}
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {subtitle && (
              <div className="hero-subtitle">
                <span className="subtitle-icon">⚡</span>
                {subtitle}
              </div>
            )}
            
            <h1 className="hero-title">
              {title}
            </h1>
            
            {description && (
              <p className="hero-description">
                {description}
              </p>
            )}
            
            <div className="hero-actions">
              {primaryAction && (
                <button className="btn btn-primary btn-lg">
                  {primaryAction}
                </button>
              )}
              {secondaryAction && (
                <button className="btn btn-outline btn-lg">
                  {secondaryAction}
                </button>
              )}
            </div>
          </div>
          
          {stats && (
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="hero-visual">
          <div className="visual-container">
            <div className="power-indicator">
              <div className="indicator-ring">
                <div className="indicator-core"></div>
              </div>
              <div className="power-text">KPP</div>
            </div>
            
            <div className="energy-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
              <div className="line line-4"></div>
            </div>
            
            <div className="floating-elements">
              <div className="element element-1">⚙️</div>
              <div className="element element-2">⚡</div>
              <div className="element element-3">🔋</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .industrial-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-top: 80px;
        }
        
        .industrial-hero.gradient {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 50%, var(--tech-teal) 100%);
        }
        
        .industrial-hero.pattern {
          background: var(--neutral-50);
        }
        
        .industrial-hero.grid {
          background: var(--neutral-50);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
        }
        
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: var(--space-16);
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }
        
        .hero-subtitle {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--energy-orange);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .subtitle-icon {
          font-size: 1.2rem;
          animation: pulse 2s infinite;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: var(--space-6);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--space-8);
          max-width: 500px;
        }
        
        .hero-actions {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-8);
          padding-top: var(--space-8);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .stat-item {
          text-align: center;
          color: white;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--energy-orange);
          text-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
          margin-bottom: var(--space-2);
        }
        
        .stat-label {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .visual-container {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .power-indicator {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          z-index: 3;
        }
        
        .indicator-ring {
          width: 180px;
          height: 180px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          position: relative;
          animation: rotate 20s linear infinite;
        }
        
        .indicator-ring::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid transparent;
          border-top-color: var(--energy-orange);
          border-right-color: var(--energy-orange);
          border-radius: 50%;
          animation: rotate 3s linear infinite reverse;
        }
        
        .indicator-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--energy-orange), var(--energy-orange-dark));
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(255, 107, 53, 0.5),
            0 0 40px rgba(255, 107, 53, 0.3),
            0 0 60px rgba(255, 107, 53, 0.1);
          animation: pulse 2s ease-in-out infinite;
        }
        
        .power-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 4;
        }
        
        .energy-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .line {
          position: absolute;
          background: linear-gradient(90deg, transparent, var(--tech-teal), transparent);
          opacity: 0.6;
          border-radius: 2px;
          animation: energy-flow 3s ease-in-out infinite;
        }
        
        .line-1 {
          top: 20%;
          left: 10%;
          width: 80px;
          height: 2px;
          animation-delay: 0s;
        }
        
        .line-2 {
          top: 40%;
          right: 15%;
          width: 60px;
          height: 2px;
          animation-delay: 0.5s;
        }
        
        .line-3 {
          bottom: 30%;
          left: 20%;
          width: 70px;
          height: 2px;
          animation-delay: 1s;
        }
        
        .line-4 {
          bottom: 20%;
          right: 10%;
          width: 50px;
          height: 2px;
          animation-delay: 1.5s;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .element {
          position: absolute;
          font-size: 2rem;
          opacity: 0.7;
          animation: float 4s ease-in-out infinite;
        }
        
        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .element-2 {
          top: 15%;
          right: 15%;
          animation-delay: 1.3s;
        }
        
        .element-3 {
          bottom: 20%;
          right: 20%;
          animation-delay: 2.6s;
        }
        
        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes energy-flow {
          0%, 100% { 
            opacity: 0.3;
            transform: translateX(-20px);
          }
          50% { 
            opacity: 0.8;
            transform: translateX(20px);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-12);
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .visual-container {
            width: 300px;
            height: 300px;
          }
          
          .indicator-ring {
            width: 140px;
            height: 140px;
          }
          
          .indicator-core {
            width: 60px;
            height: 60px;
          }
        }
        
        @media (max-width: 768px) {
          .industrial-hero {
            min-height: 80vh;
            margin-top: 60px;
          }
          
          .hero-container {
            padding: 0 var(--space-4);
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          
          .visual-container {
            width: 250px;
            height: 250px;
          }
          
          .indicator-ring {
            width: 120px;
            height: 120px;
          }
          
          .indicator-core {
            width: 50px;
            height: 50px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .visual-container {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustrialHero;
