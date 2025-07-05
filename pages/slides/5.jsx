import SlideLayout from '../../components/SlideLayout';

export default function Slide5() {
  return (
    <SlideLayout prevHref="/slides/4" nextHref="/slides/6">
      <div className="slide-content">
        <div className="title-section">
          <h2>Case Studies & Success Stories</h2>
          <p className="subtitle">Real-world Applications & Results</p>
        </div>
        
        <div className="case-studies-content">
          <div className="case-study">
            <div className="case-header">
              <h3>Industrial Complex - Norway</h3>
              <span className="case-location">Oslo, Norway</span>
            </div>
            
            <div className="case-details">
              <div className="case-specs">
                <div className="spec">
                  <span className="spec-label">System Size:</span>
                  <span className="spec-value">50kW</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">2023</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Annual Output:</span>
                  <span className="spec-value">438 MWh</span>
                </div>
                <div className="spec">
                  <span className="spec-label">CO2 Savings:</span>
                  <span className="spec-value">175 tons/year</span>
                </div>
              </div>
              
              <div className="case-results">
                <h4>Results Achieved:</h4>
                <ul>
                  <li>30% reduction in energy costs</li>
                  <li>99.2% system uptime</li>
                  <li>ROI achieved in 3.2 years</li>
                  <li>Zero maintenance issues</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="case-study">
            <div className="case-header">
              <h3>Commercial Building - Germany</h3>
              <span className="case-location">Berlin, Germany</span>
            </div>
            
            <div className="case-details">
              <div className="case-specs">
                <div className="spec">
                  <span className="spec-label">System Size:</span>
                  <span className="spec-value">25kW</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">2024</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Annual Output:</span>
                  <span className="spec-value">219 MWh</span>
                </div>
                <div className="spec">
                  <span className="spec-label">CO2 Savings:</span>
                  <span className="spec-value">87 tons/year</span>
                </div>
              </div>
              
              <div className="case-results">
                <h4>Results Achieved:</h4>
                <ul>
                  <li>25% reduction in electricity bills</li>
                  <li>Enhanced building sustainability rating</li>
                  <li>Improved tenant satisfaction</li>
                  <li>Minimal space requirements</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="testimonials-section">
            <h3>Client Testimonials</h3>
            <div className="testimonials-grid">
              <div className="testimonial">
                <blockquote>
                  "The KPP system has exceeded our expectations. The energy savings are substantial and the system requires virtually no maintenance."
                </blockquote>
                <cite>- Energy Manager, Oslo Industrial Complex</cite>
              </div>
              
              <div className="testimonial">
                <blockquote>
                  "Installation was smooth and the performance has been outstanding. Our sustainability goals are now within reach."
                </blockquote>
                <cite>- Facility Director, Berlin Commercial Building</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 