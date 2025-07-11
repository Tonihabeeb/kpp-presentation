import { useToast } from '../hooks/useAdvancedInteractions';
import { useState } from 'react';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => removeToast(toast.id)}
        >
          <div className="toast-content">
            <div className="toast-icon">
              {toast.type === 'success' && '✅'}
              {toast.type === 'error' && '❌'}
              {toast.type === 'info' && 'ℹ️'}
              {toast.type === 'warning' && '⚠️'}
            </div>
            <div className="toast-message">
              {toast.title && <div className="toast-title">{toast.title}</div>}
              <div className="toast-text">{toast.message}</div>
            </div>
            <button 
              className="toast-close"
              onClick={(e) => {
                e.stopPropagation();
                removeToast(toast.id);
              }}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
          <div className="toast-progress">
            <div 
              className="toast-progress-bar"
              style={{
                animationDuration: `${toast.duration || 5000}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Enhanced Contact Form with Toast Notifications
export function EnhancedContactForm() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addToast({
        type: 'success',
        title: 'Message Sent Successfully',
        message: 'We\'ll get back to you within 24 hours.',
        duration: 4000
      });

      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Failed to Send Message',
        message: 'Please try again or contact us directly.',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="enhanced-contact-form">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>
      
      <div className="form-field">
        <label htmlFor="company">Company (Optional)</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="form-textarea"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
      >
        {isSubmitting ? (
          <>
            <span className="submit-spinner"></span>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
