import SlideLayout from '../../components/SlideLayout';

export default function Slide6() {
  return (
    <SlideLayout prevHref="/slides/5">
      <div className="slide-content">
        <div className="title-section">
          <h2>Conclusion & Next Steps</h2>
          <p className="subtitle">Moving Forward with KPP Technology</p>
        </div>
        
        <div className="conclusion-content">
          <div className="summary-section">
            <h3>Key Takeaways</h3>
            <div className="takeaways-grid">
              <div className="takeaway">
                <h4>Proven Technology</h4>
                <p>KPP systems demonstrate reliable performance with 85-92% efficiency and 99.5% uptime</p>
              </div>
              
              <div className="takeaway">
                <h4>Economic Benefits</h4>
                <p>Significant cost savings with ROI achieved in 3-5 years and minimal maintenance requirements</p>
              </div>
              
              <div className="takeaway">
                <h4>Environmental Impact</h4>
                <p>Zero-emission energy generation contributing to sustainability goals and carbon reduction</p>
              </div>
              
              <div className="takeaway">
                <h4>Scalable Solution</h4>
                <p>Flexible deployment from 5kW to 100kW+ to meet diverse energy requirements</p>
              </div>
            </div>
          </div>
          
          <div className="next-steps-section">
            <h3>Recommended Next Steps</h3>
            <div className="steps-timeline">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Initial Consultation</h4>
                  <p>Schedule a technical review to assess your specific requirements and site feasibility</p>
                  <span className="timeline">Week 1</span>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Detailed Assessment</h4>
                  <p>Comprehensive site analysis and energy audit to determine optimal system configuration</p>
                  <span className="timeline">Week 2-3</span>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Proposal Development</h4>
                  <p>Custom system design with detailed specifications, timeline, and investment analysis</p>
                  <span className="timeline">Week 4-5</span>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Project Initiation</h4>
                  <p>Contract finalization and project kickoff with dedicated implementation team</p>
                  <span className="timeline">Week 6</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h3>Get Started Today</h3>
            <div className="contact-info">
              <div className="contact-item">
                <h4>Deep Engineering Co.</h4>
                <p>Your trusted partner in sustainable energy solutions</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-method">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">info@deepengineering.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">Website:</span>
                  <span className="contact-value">www.deepengineering.com</span>
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <p className="cta-text">Ready to transform your energy infrastructure?</p>
              <div className="cta-buttons">
                <button className="cta-button primary">Schedule Consultation</button>
                <button className="cta-button secondary">Download Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 