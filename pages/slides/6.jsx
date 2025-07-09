import SlideLayout from '../../components/SlideLayout';
import Image from 'next/image';

export default function Slide6() {
  return (
    <SlideLayout prevHref="/slides/5">
      <div className="slide-content">
        <div className="title-section">
          <h2>Conclusion & Next Steps</h2>
          <p className="subtitle">The Future of Sustainable Energy Generation</p>
        </div>
        
        <div className="conclusion-content">
          <div className="summary-section">
            <h3>🎯 Key Takeaways</h3>
            <div className="takeaways-grid">
              <div className="takeaway">
                <h4>🔬 Physics-Based Innovation</h4>
                <p>KPP leverages well-established physics principles (Archimedes&apos; Principle and Newton&apos;s Laws) in an innovative configuration to generate continuous power.</p>
              </div>
              
              <div className="takeaway">
                <h4>🌱 Zero-Emission Technology</h4>
                <p>No fuel, no combustion, no emissions. KPP produces clean electricity 24/7 using only buoyancy and gravity.</p>
              </div>
              
              <div className="takeaway">
                <h4>⚡ Proven Performance</h4>
                <p>100KW+ demonstrated capacity with ~1% power consumption for air compression. System operates continuously with minimal maintenance.</p>
              </div>
              
              <div className="takeaway">
                <h4>🌍 Global Scalability</h4>
                <p>Successfully deployed across multiple regions, demonstrating versatility and applicability for various market segments.</p>
              </div>
            </div>
          </div>
          
          <div className="future-vision">
            <h3>🔮 Future Vision</h3>
            <div className="vision-content">
              <div className="vision-text">
                <p>
                  Kinetic Power Plant technology represents a paradigm shift in sustainable energy generation. 
                  By harnessing the fundamental forces of nature through innovative engineering, we can create 
                  a cleaner, more sustainable future for generations to come.
                </p>
              </div>
              <div className="vision-image">
                <Image 
                  src="/images/dyzyn-dkhly-llqaa.avif" 
                  alt="Future Vision" 
                  width={400} 
                  height={250}
                  className="future-image"
                />
              </div>
            </div>
          </div>
          
          <div className="competitive-advantages">
            <h3>🏆 Competitive Advantages</h3>
            <div className="advantages-list">
              <div className="advantage">
                <h4>Patent Protection</h4>
                <p>Comprehensive intellectual property covering buoyancy power plant design and methodology</p>
              </div>
              <div className="advantage">
                <h4>Proven Technology</h4>
                <p>Successfully tested and deployed in Germany and Serbia with ongoing global expansion</p>
              </div>
              <div className="advantage">
                <h4>Scalable Solution</h4>
                <p>Modular design allows adaptation from small residential to large industrial applications</p>
              </div>
              <div className="advantage">
                <h4>Environmental Leadership</h4>
                <p>Zero-emission technology contributing to global sustainability goals</p>
              </div>
            </div>
          </div>
          
          <div className="next-steps">
            <h3>🚀 Next Steps</h3>
            <div className="steps-grid">
              <div className="step">
                <h4>1. Technology Demonstration</h4>
                <p>Schedule a live demonstration of KPP technology at your facility</p>
              </div>
              <div className="step">
                <h4>2. Feasibility Study</h4>
                <p>Conduct site-specific analysis and energy requirements assessment</p>
              </div>
              <div className="step">
                <h4>3. Pilot Project</h4>
                <p>Implement small-scale pilot to validate performance in your environment</p>
              </div>
              <div className="step">
                <h4>4. Full Deployment</h4>
                <p>Scale up to full production capacity based on pilot results</p>
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h3>📞 Contact Information</h3>
            <div className="contact-content">
              <div className="contact-details">
                <p><strong>Deep Engineering Co.</strong></p>
                <p>Global patent-holder of Kinetic Power Plant (KPP®) technology</p>
                <div className="contact-info">
                  <p>🌐 <strong>Website:</strong> [Your Website]</p>
                  <p>📧 <strong>Email:</strong> [Your Email]</p>
                  <p>📱 <strong>Phone:</strong> [Your Phone]</p>
                </div>
              </div>
              <div className="contact-image">
                <Image 
                  src="/images/EEcUFDJ3mSLaKA_GrxCqI.avif" 
                  alt="Contact Information" 
                  width={300} 
                  height={200}
                  className="contact-img"
                />
              </div>
            </div>
          </div>
          
          <div className="footer-note">
            <p><em>Thank you for your interest in Kinetic Power Plant technology. Together, we can revolutionize sustainable energy generation.</em></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slide {
          padding: 2rem;
        }
  
  .slide-content {
    margin-top: 2rem;
  }
  
  .conclusion-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .takeaways-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .takeaway {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .vision-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
  
  .future-image {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
  
  .advantages-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .advantage {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #28a745;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .step {
    background: #e3f2fd;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid #2196f3;
  }
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
  
  .contact-details {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .contact-info {
    margin-top: 1rem;
  }
  
  .contact-img {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .footer-note {
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
    font-style: italic;
  }
      `}</style>
    </SlideLayout>
  );
}