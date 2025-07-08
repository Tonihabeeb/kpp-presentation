import Link from 'next/link';

export default function Partnerships() {
  return (
    <div className="partnerships-page">
      <div className="hero-section">
        <div className="container">
          <h1>Strategic Partnerships</h1>
          <p>Building the future of clean energy through collaboration</p>
        </div>
      </div>

      <div className="partnerships-content">
        <div className="container">
          <section className="partnership-categories">
            <div className="category-grid">
              <div className="category-card">
                <h3>Technology Partners</h3>
                <p>Leading engineering firms and technology providers advancing KPP implementation</p>
                <div className="partner-logos">
                  <div className="partner-placeholder">Partner 1</div>
                  <div className="partner-placeholder">Partner 2</div>
                  <div className="partner-placeholder">Partner 3</div>
                </div>
              </div>

              <div className="category-card">
                <h3>Financial Partners</h3>
                <p>Investment institutions supporting clean energy infrastructure development</p>
                <div className="partner-logos">
                  <div className="partner-placeholder">Investor 1</div>
                  <div className="partner-placeholder">Investor 2</div>
                  <div className="partner-placeholder">Investor 3</div>
                </div>
              </div>

              <div className="category-card">
                <h3>Implementation Partners</h3>
                <p>Construction and installation specialists for KPP deployment</p>
                <div className="partner-logos">
                  <div className="partner-placeholder">Contractor 1</div>
                  <div className="partner-placeholder">Contractor 2</div>
                  <div className="partner-placeholder">Contractor 3</div>
                </div>
              </div>

              <div className="category-card">
                <h3>Research Partners</h3>
                <p>Universities and research institutions advancing KPP technology</p>
                <div className="partner-logos">
                  <div className="partner-placeholder">University 1</div>
                  <div className="partner-placeholder">University 2</div>
                  <div className="partner-placeholder">University 3</div>
                </div>
              </div>
            </div>
          </section>

          <section className="partnership-ecosystem">
            <h2>Partnership Ecosystem</h2>
            <p>Explore our comprehensive network of strategic alliances</p>
            <Link href="/partnerships/ecosystem" className="btn btn-primary">
              View Ecosystem Map
            </Link>
          </section>

          <section className="become-partner">
            <h2>Become a Partner</h2>
            <p>Join our mission to revolutionize global energy infrastructure</p>
            <div className="partnership-benefits">
              <div className="benefit">
                <h4>Technology Access</h4>
                <p>Early access to cutting-edge KPP technology and innovations</p>
              </div>
              <div className="benefit">
                <h4>Market Opportunities</h4>
                <p>Exclusive regional and sector-specific partnership opportunities</p>
              </div>
              <div className="benefit">
                <h4>Co-Innovation</h4>
                <p>Collaborative research and development initiatives</p>
              </div>
            </div>
            <Link href="/contact" className="btn btn-secondary">
              Partner With Us
            </Link>
          </section>
        </div>
      </div>

      <style jsx>{`
        .partnerships-page {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--primary-900) 0%, var(--primary-700) 100%);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-section p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .partnerships-content {
          padding: 4rem 0;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--primary-200);
        }

        .category-card h3 {
          color: var(--primary-800);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .category-card p {
          color: var(--primary-600);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .partner-logos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .partner-placeholder {
          background: var(--primary-100);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          color: var(--primary-600);
          font-size: 0.9rem;
          border: 2px dashed var(--primary-300);
        }

        .partnership-ecosystem {
          background: var(--primary-50);
          padding: 3rem;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 4rem;
        }

        .partnership-ecosystem h2 {
          color: var(--primary-800);
          margin-bottom: 1rem;
        }

        .partnership-ecosystem p {
          color: var(--primary-600);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .become-partner {
          text-align: center;
        }

        .become-partner h2 {
          color: var(--primary-800);
          margin-bottom: 1rem;
        }

        .become-partner > p {
          color: var(--primary-600);
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .partnership-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .benefit {
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: var(--shadow-md);
        }

        .benefit h4 {
          color: var(--accent-600);
          margin-bottom: 0.5rem;
        }

        .benefit p {
          color: var(--primary-600);
          line-height: 1.5;
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--accent-600);
          color: white;
        }

        .btn-primary:hover {
          background: var(--accent-700);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: var(--primary-600);
          color: white;
        }

        .btn-secondary:hover {
          background: var(--primary-700);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .partnership-benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
