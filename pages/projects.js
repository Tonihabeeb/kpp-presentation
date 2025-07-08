import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const majorProjects = [
    {
      id: 'kurdistan-300mw',
      title: '300 MW Kinetic Power Plant',
      location: 'Kurdistan Regional Government',
      capacity: '300 MW',
      status: 'In Development',
      client: 'Ministry of Electricity - Kurdistan Regional Government',
      description: 'Large-scale KPP installation providing clean, continuous renewable energy to support the Kurdistan region\'s growing energy demands.',
      features: [
        'Largest KPP installation to date',
        'Government partnership project',
        'Scalable modular design',
        'Zero emissions operation',
        'Weather-independent generation'
      ],
      timeline: 'Multi-phase implementation',
      impact: 'Significant contribution to Kurdistan\'s renewable energy goals',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #0070f3 0%, #0051cc 100%)'
    },
    {
      id: 'muthana-90mw',
      title: '90 MW Kinetic Power Plant',
      location: 'Al-Muthana City, Iraq',
      capacity: '90 MW',
      status: 'Planned',
      client: 'Board of Investment - Al-Muthana City',
      description: 'Strategic KPP deployment in southern Iraq to support regional industrial development and provide reliable clean energy.',
      features: [
        'Industrial-scale implementation',
        'Investment board partnership',
        'Regional economic development',
        'Continuous power supply',
        'Environmentally sustainable'
      ],
      timeline: 'Development phase',
      impact: 'Supporting Al-Muthana\'s industrial growth and energy security',
      icon: '🏭',
      gradient: 'linear-gradient(135deg, #00aa00 0%, #00cc00 100%)'
    },
    {
      id: 'cement-plant',
      title: '6000 TPD Cement Plant',
      location: 'Kurdistan Region',
      capacity: '6000 TPD',
      status: 'Industrial Project',
      client: 'Kurdistan Industrial Client',
      description: 'Large-scale cement production facility demonstrating Deep Engineering\'s capability in major industrial projects beyond energy generation.',
      features: [
        'Large-scale industrial facility',
        'Advanced production technology',
        'Regional industrial development',
        'Job creation and economic impact',
        'Modern cement production methods'
      ],
      timeline: 'Implementation completed',
      impact: 'Supporting Kurdistan\'s construction and infrastructure development',
      icon: '🏗️',
      gradient: 'linear-gradient(135deg, #ff8800 0%, #ffaa00 100%)'
    }
  ];

  const projectStats = [
    { value: '390+', label: 'MW Total Capacity', icon: '⚡' },
    { value: '3', label: 'Major Projects', icon: '📊' },
    { value: '2', label: 'Countries', icon: '🌍' },
    { value: '100%', label: 'Clean Energy', icon: '🌱' }
  ];

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">Major Projects</h1>
            <p className="hero-subtitle">
              Deep Engineering's proven track record in delivering large-scale energy and industrial projects across the Middle East
            </p>
          </div>
        </div>
      </div>

      <div className="projects-content">
        <div className="content-container">
          <div className={`stats-section ${isVisible ? 'animate-in' : ''}`}>
            <h2>Project Portfolio Overview</h2>
            <div className="stats-grid">
              {projectStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`projects-section ${isVisible ? 'animate-in' : ''}`}>
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {majorProjects.map((project, index) => (
                <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                  <div className="project-header" style={{ background: project.gradient }}>
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-status">{project.status}</div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <div className="meta-item">
                        <span className="meta-label">Location:</span>
                        <span className="meta-value">{project.location}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Capacity:</span>
                        <span className="meta-value">{project.capacity}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Client:</span>
                        <span className="meta-value">{project.client}</span>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <button className="learn-more-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`capabilities-section ${isVisible ? 'animate-in' : ''}`}>
            <h2>Our Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon">⚡</div>
                <h3>KPP Technology</h3>
                <p>Revolutionary kinetic power plants delivering continuous renewable energy with zero emissions and weather independence.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🛢️</div>
                <h3>Oil & Gas Projects</h3>
                <p>Comprehensive oil and gas services including EPC projects, inspection, waste management, and mechanical solutions.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🏭</div>
                <h3>Industrial Solutions</h3>
                <p>Large-scale industrial projects including cement plants, manufacturing facilities, and infrastructure development.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">💼</div>
                <h3>Business Consultancy</h3>
                <p>Strategic business consulting, project planning, financial services, and comprehensive market insights.</p>
              </div>
            </div>
          </div>

          <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="cta-content">
              <h2>Ready to Start Your Next Project?</h2>
              <p>Let's discuss how Deep Engineering can help bring your energy and industrial projects to life.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  <span>Start a Project</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  <span>View All Services</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 012 2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ background: selectedProject.gradient }}>
              <h2>{selectedProject.title}</h2>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="project-details">
                <div className="detail-grid">
                  <div className="detail-item">
                    <h4>Location</h4>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Capacity</h4>
                    <p>{selectedProject.capacity}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Status</h4>
                    <p>{selectedProject.status}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Client</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Timeline</h4>
                    <p>{selectedProject.timeline}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Impact</h4>
                    <p>{selectedProject.impact}</p>
                  </div>
                </div>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <p className="project-full-description">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .projects-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%);
          padding: 6rem 2rem;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-text {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .hero-text.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #0070f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
        
        .projects-content {
          padding: 4rem 2rem;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .stats-section,
        .projects-section,
        .capabilities-section,
        .cta-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
          margin-bottom: 4rem;
        }
        
        .stats-section.animate-in,
        .projects-section.animate-in,
        .capabilities-section.animate-in,
        .cta-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-section h2,
        .projects-section h2,
        .capabilities-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin: 0 0 3rem 0;
          color: #1a1a1a;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #666;
          font-weight: 600;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        
        .project-header {
          padding: 2rem;
          color: white;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .project-icon {
          font-size: 2.5rem;
        }
        
        .project-status {
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .project-meta {
          margin-bottom: 1rem;
        }
        
        .meta-item {
          display: flex;
          margin-bottom: 0.5rem;
        }
        
        .meta-label {
          font-weight: 600;
          color: #666;
          min-width: 80px;
        }
        
        .meta-value {
          color: #1a1a1a;
        }
        
        .project-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .learn-more-btn {
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .learn-more-btn:hover {
          background: #0051cc;
          transform: translateY(-2px);
        }
        
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .capability-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .capability-card:hover {
          transform: translateY(-5px);
        }
        
        .capability-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .capability-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .capability-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .cta-content h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }
        
        .cta-content p {
          font-size: 1.1rem;
          color: #666;
          margin: 0 0 2rem 0;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: #0070f3;
          color: white;
          border: 2px solid #0070f3;
        }
        
        .btn-primary:hover {
          background: #0051cc;
          border-color: #0051cc;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.25);
        }
        
        .btn-secondary {
          background: transparent;
          color: #0070f3;
          border: 2px solid #0070f3;
        }
        
        .btn-secondary:hover {
          background: #0070f3;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,112,243,0.25);
        }
        
        .btn-icon {
          width: 18px;
          height: 18px;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }
        
        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          width: 100%;
        }
        
        .modal-header {
          padding: 2rem;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header h2 {
          margin: 0;
          font-size: 1.8rem;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }
        
        .modal-body {
          padding: 2rem;
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .detail-item h4 {
          font-weight: 600;
          color: #0070f3;
          margin: 0 0 0.5rem 0;
        }
        
        .detail-item p {
          margin: 0;
          color: #666;
        }
        
        .project-features {
          margin-bottom: 2rem;
        }
        
        .project-features h4 {
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        
        .project-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .project-features li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: #666;
        }
        
        .project-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0070f3;
          font-weight: bold;
        }
        
        .project-full-description {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .modal-overlay {
            padding: 1rem;
          }
          
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
