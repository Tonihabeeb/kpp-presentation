import React, { useState, useEffect, useRef } from 'react';

const Interactive3DElement = ({ type = 'turbine', size = 200, speed = 1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const animate = () => {
      setRotation(prev => prev + speed * (isHovered ? 2 : 1));
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isHovered]);

  return (
    <div 
      className="interactive-3d-element"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
    >
      <div className="element-container">
        {type === 'turbine' && (
          <div className="turbine-assembly">
            <div 
              className="turbine-rotor"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="blade blade-1"></div>
              <div className="blade blade-2"></div>
              <div className="blade blade-3"></div>
              <div className="blade blade-4"></div>
            </div>
            <div className="turbine-core"></div>
            <div className="energy-field"></div>
          </div>
        )}
        
        {type === 'generator' && (
          <div className="generator-assembly">
            <div 
              className="generator-rotor"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="magnet magnet-1"></div>
              <div className="magnet magnet-2"></div>
              <div className="magnet magnet-3"></div>
              <div className="magnet magnet-4"></div>
            </div>
            <div className="generator-stator">
              <div className="coil coil-1"></div>
              <div className="coil coil-2"></div>
              <div className="coil coil-3"></div>
              <div className="coil coil-4"></div>
            </div>
          </div>
        )}
        
        {type === 'energy-flow' && (
          <div className="energy-flow-system">
            <div className="flow-particles">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="particle"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="flow-conduits">
              <div className="conduit conduit-1"></div>
              <div className="conduit conduit-2"></div>
              <div className="conduit conduit-3"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="interaction-indicator">
        <div className="pulse-ring"></div>
        <div className="status-text">
          {isHovered ? 'Active' : 'Standby'}
        </div>
      </div>

      <style jsx>{`
        .interactive-3d-element {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .element-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: all var(--transition-base);
        }

        .interactive-3d-element:hover .element-container {
          transform: rotateX(10deg) rotateY(10deg);
        }

        /* Turbine Assembly */
        .turbine-assembly {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .turbine-rotor {
          position: relative;
          width: 80%;
          height: 80%;
          transition: all var(--transition-base);
        }

        .blade {
          position: absolute;
          width: 4px;
          height: 40%;
          background: linear-gradient(180deg, var(--energy-orange), var(--energy-orange-dark));
          border-radius: 2px;
          top: 10%;
          left: 50%;
          transform-origin: bottom center;
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
        }

        .blade-1 { transform: translateX(-50%) rotate(0deg); }
        .blade-2 { transform: translateX(-50%) rotate(90deg); }
        .blade-3 { transform: translateX(-50%) rotate(180deg); }
        .blade-4 { transform: translateX(-50%) rotate(270deg); }

        .turbine-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, var(--primary-blue), var(--primary-blue-dark));
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(27, 54, 93, 0.5),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .energy-field {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 2px solid var(--tech-teal);
          border-radius: 50%;
          opacity: 0.3;
          animation: energyPulse 2s ease-in-out infinite;
        }

        /* Generator Assembly */
        .generator-assembly {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .generator-rotor {
          position: relative;
          width: 60%;
          height: 60%;
        }

        .magnet {
          position: absolute;
          width: 12px;
          height: 30px;
          background: linear-gradient(180deg, #ff4444, #cc0000);
          border-radius: 6px;
          top: 15%;
          left: 50%;
          transform-origin: bottom center;
          box-shadow: 0 0 8px rgba(255, 68, 68, 0.4);
        }

        .magnet-1 { transform: translateX(-50%) rotate(0deg); }
        .magnet-2 { transform: translateX(-50%) rotate(90deg); }
        .magnet-3 { transform: translateX(-50%) rotate(180deg); }
        .magnet-4 { transform: translateX(-50%) rotate(270deg); }

        .generator-stator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
        }

        .coil {
          position: absolute;
          width: 8px;
          height: 20px;
          background: linear-gradient(180deg, var(--energy-orange), var(--energy-orange-dark));
          border-radius: 4px;
          top: 20%;
          left: 50%;
          transform-origin: bottom center;
        }

        .coil-1 { transform: translateX(-50%) rotate(45deg); }
        .coil-2 { transform: translateX(-50%) rotate(135deg); }
        .coil-3 { transform: translateX(-50%) rotate(225deg); }
        .coil-4 { transform: translateX(-50%) rotate(315deg); }

        /* Energy Flow System */
        .energy-flow-system {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .flow-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--tech-teal);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--tech-teal);
          animation: particleFlow linear infinite;
        }

        .flow-conduits {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .conduit {
          position: absolute;
          background: linear-gradient(90deg, transparent, var(--primary-blue), transparent);
          border-radius: 2px;
          opacity: 0.6;
        }

        .conduit-1 {
          top: 20%;
          left: 10%;
          width: 80%;
          height: 2px;
          animation: conduitPulse 2s ease-in-out infinite;
        }

        .conduit-2 {
          top: 50%;
          left: 20%;
          width: 60%;
          height: 2px;
          animation: conduitPulse 2s ease-in-out infinite 0.5s;
        }

        .conduit-3 {
          top: 80%;
          left: 15%;
          width: 70%;
          height: 2px;
          animation: conduitPulse 2s ease-in-out infinite 1s;
        }

        /* Interaction Indicator */
        .interaction-indicator {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
        }

        .pulse-ring {
          width: 20px;
          height: 20px;
          border: 2px solid var(--energy-orange);
          border-radius: 50%;
          animation: ringPulse 2s ease-out infinite;
        }

        .status-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--neutral-600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Animations */
        @keyframes energyPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes particleFlow {
          0% {
            top: 0%;
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes conduitPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleX(1.05);
          }
        }

        @keyframes ringPulse {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) scale(2);
            opacity: 0;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .interaction-indicator {
            bottom: -30px;
          }

          .status-text {
            font-size: 0.7rem;
          }

          .pulse-ring {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
};

const TechnicalSchematic = ({ title, components, connections }) => {
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationActive(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="technical-schematic">
      <div className="schematic-header">
        <h3 className="schematic-title">{title}</h3>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color input"></div>
            <span>Input</span>
          </div>
          <div className="legend-item">
            <div className="legend-color process"></div>
            <span>Process</span>
          </div>
          <div className="legend-item">
            <div className="legend-color output"></div>
            <span>Output</span>
          </div>
        </div>
      </div>

      <div className="schematic-canvas">
        <svg className="connection-layer" viewBox="0 0 800 400">
          {connections.map((connection, index) => (
            <g key={index}>
              <path
                d={connection.path}
                stroke="var(--primary-blue)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className={`connection ${animationActive ? 'active' : ''}`}
              />
              <circle
                cx={connection.startX}
                cy={connection.startY}
                r="4"
                fill="var(--tech-teal)"
                className="connection-point"
              />
              <circle
                cx={connection.endX}
                cy={connection.endY}
                r="4"
                fill="var(--energy-orange)"
                className="connection-point"
              />
            </g>
          ))}
        </svg>

        <div className="components-layer">
          {components.map((component, index) => (
            <div
              key={index}
              className={`schematic-component ${component.type} ${hoveredComponent === index ? 'highlighted' : ''}`}
              style={{
                left: component.x,
                top: component.y,
                width: component.width,
                height: component.height
              }}
              onMouseEnter={() => setHoveredComponent(index)}
              onMouseLeave={() => setHoveredComponent(null)}
            >
              <div className="component-icon">{component.icon}</div>
              <div className="component-label">{component.label}</div>
              <div className="component-specs">{component.specs}</div>
              
              {hoveredComponent === index && (
                <div className="component-tooltip">
                  <h4>{component.label}</h4>
                  <p>{component.description}</p>
                  <div className="specs-list">
                    {component.detailedSpecs?.map((spec, i) => (
                      <div key={i} className="spec-item">
                        <span className="spec-label">{spec.label}:</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .technical-schematic {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          overflow: hidden;
          position: relative;
        }

        .schematic-header {
          padding: var(--space-6);
          background: var(--neutral-50);
          border-bottom: 1px solid var(--neutral-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .schematic-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-blue);
          margin: 0;
        }

        .legend {
          display: flex;
          gap: var(--space-4);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--neutral-600);
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .legend-color.input { background: var(--tech-teal); }
        .legend-color.process { background: var(--energy-orange); }
        .legend-color.output { background: var(--primary-blue); }

        .schematic-canvas {
          position: relative;
          height: 400px;
          padding: var(--space-6);
          background: 
            radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(27, 54, 93, 0.05) 0%, transparent 50%);
        }

        .connection-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .connection {
          stroke-dashoffset: 20;
          transition: all var(--transition-base);
        }

        .connection.active {
          animation: connectionFlow 2s linear infinite;
        }

        .connection-point {
          animation: pointPulse 2s ease-in-out infinite;
        }

        .components-layer {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .schematic-component {
          position: absolute;
          background: white;
          border: 2px solid var(--neutral-300);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-base);
          box-shadow: var(--shadow-sm);
        }

        .schematic-component:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .schematic-component.highlighted {
          border-color: var(--energy-orange);
          background: var(--neutral-50);
          z-index: 10;
        }

        .schematic-component.input {
          border-color: var(--tech-teal);
        }

        .schematic-component.process {
          border-color: var(--energy-orange);
        }

        .schematic-component.output {
          border-color: var(--primary-blue);
        }

        .component-icon {
          font-size: 2rem;
          margin-bottom: var(--space-2);
        }

        .component-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--neutral-700);
          margin-bottom: var(--space-1);
        }

        .component-specs {
          font-size: 0.75rem;
          color: var(--neutral-500);
          font-family: var(--font-mono);
        }

        .component-tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          box-shadow: var(--shadow-xl);
          z-index: 20;
          min-width: 200px;
          margin-top: var(--space-2);
        }

        .component-tooltip h4 {
          margin: 0 0 var(--space-2) 0;
          font-size: 1rem;
          color: var(--primary-blue);
        }

        .component-tooltip p {
          margin: 0 0 var(--space-3) 0;
          font-size: 0.875rem;
          color: var(--neutral-600);
          line-height: 1.4;
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .spec-label {
          color: var(--neutral-600);
          font-weight: 500;
        }

        .spec-value {
          color: var(--primary-blue);
          font-weight: 600;
          font-family: var(--font-mono);
        }

        /* Animations */
        @keyframes connectionFlow {
          0% {
            stroke-dashoffset: 20;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pointPulse {
          0%, 100% {
            r: 4;
            opacity: 1;
          }
          50% {
            r: 6;
            opacity: 0.7;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .schematic-header {
            flex-direction: column;
            gap: var(--space-3);
            text-align: center;
          }

          .legend {
            justify-content: center;
          }

          .schematic-canvas {
            height: 300px;
            padding: var(--space-4);
          }

          .component-tooltip {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90vw;
          }
        }
      `}</style>
    </div>
  );
};

export { Interactive3DElement, TechnicalSchematic };
