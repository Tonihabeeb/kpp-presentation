import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Deep Engineering KPP Technology</title>
        <meta name="description" content="Get in touch with Deep Engineering for KPP technology inquiries, partnerships, and project consultations." />
      </Head>

      <div className="contact-page">
        <div className="hero-section">
          <div className="container">
            <h1>Contact Deep Engineering</h1>
            <p className="hero-subtitle">
              Ready to revolutionize your energy generation? Let&apos;s discuss how KPP technology can transform your operations.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technology">Technology Questions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="investment">Investment Information</option>
                      <option value="project">Project Consultation</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <h2>Get in Touch</h2>
                
                <div className="office-card">
                  <h3>🇮🇶 Iraq Office</h3>
                  <div className="office-details">
                    <p><strong>Address:</strong></p>
                    <p>Italian Village 1, Villa 267<br />
                    Erbil, Kurdistan Region, Iraq</p>
                    
                    <p><strong>Email:</strong></p>
                    <p><a href="mailto:info.iq@deepengineering.co">info.iq@deepengineering.co</a></p>
                    
                    <p><strong>Phone:</strong></p>
                    <p><a href="tel:+9647504445577">+964 750 444 5577</a></p>
                  </div>
                </div>

                <div className="office-card">
                  <h3>🇬🇧 UK Office</h3>
                  <div className="office-details">
                    <p><strong>Address:</strong></p>
                    <p>71-75 Shelton Street, Covent Garden<br />
                    London, WC2H 9JQ, United Kingdom</p>
                    
                    <p><strong>Email:</strong></p>
                    <p><a href="mailto:info.uk@deepengineering.co">info.uk@deepengineering.co</a></p>
                    
                    <p><strong>Phone:</strong></p>
                    <p><a href="tel:+442071234567">+44 20 7123 4567</a></p>
                  </div>
                </div>

                <div className="quick-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link href="/technology">KPP Technology Overview</Link></li>
                    <li><Link href="/performance">Performance Data</Link></li>
                    <li><Link href="/company">About Our Company</Link></li>
                    <li><Link href="/quote">Request a Quote</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-content {
          padding: 4rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-section h2,
        .contact-info-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .submit-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .office-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(148, 163, 184, 0.2);
          margin-bottom: 2rem;
        }

        .office-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .office-details p {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }

        .office-details strong {
          color: #1e293b;
        }

        .office-details a {
          color: #3b82f6;
          text-decoration: none;
        }

        .office-details a:hover {
          text-decoration: underline;
        }

        .quick-links {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .quick-links h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .quick-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-links li {
          margin-bottom: 0.75rem;
        }

        .quick-links a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .quick-links a:hover {
          color: #1e40af;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form,
          .office-card,
          .quick-links {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
