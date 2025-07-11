import React from 'react';
import Link from 'next/link';

export const SiemensButton = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  href = null,
  onClick,
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary': return 'btn-secondary';
      case 'outline': return 'btn-outline';
      case 'ghost': return 'btn-ghost';
      case 'danger': return 'btn-danger';
      case 'success': return 'btn-success';
      case 'industrial': return 'btn-industrial';
      default: return 'btn-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'btn-sm';
      case 'large': return 'btn-lg';
      case 'xl': return 'btn-xl';
      default: return 'btn-md';
    }
  };

  const buttonClasses = `
    siemens-btn 
    ${getVariantClass()} 
    ${getSizeClass()} 
    ${fullWidth ? 'full-width' : ''} 
    ${disabled ? 'disabled' : ''} 
    ${loading ? 'loading' : ''} 
    ${className}
  `.trim();

  const ButtonContent = () => (
    <>
      {loading && <span className="loading-spinner"></span>}
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        <ButtonContent />
        <style jsx>{`
          ${buttonStyles}
        `}</style>
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <ButtonContent />
      <style jsx>{`
        ${buttonStyles}
      `}</style>
    </button>
  );
};

const buttonStyles = `
  .siemens-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    border-radius: 8px;
    font-family: "Siemens Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    outline: none;
    letter-spacing: 0.025em;
  }

  .siemens-btn:focus-visible {
    outline: 2px solid #00e5ff;
    outline-offset: 2px;
  }

  .siemens-btn.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  .siemens-btn.loading {
    cursor: wait;
  }

  .siemens-btn.full-width {
    width: 100%;
  }

  /* Sizes */
  .btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    min-height: 2rem;
  }

  .btn-md {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    min-height: 2.5rem;
  }

  .btn-lg {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    min-height: 3rem;
  }

  .btn-xl {
    padding: 1.25rem 2.5rem;
    font-size: 1.2rem;
    min-height: 3.5rem;
  }

  /* Primary variant */
  .btn-primary {
    background: linear-gradient(135deg, #009999, #00bcd4);
    color: white;
    box-shadow: 0 2px 8px rgba(0, 153, 153, 0.3);
  }

  .btn-primary:hover:not(.disabled):not(.loading) {
    background: linear-gradient(135deg, #00bcd4, #00e5ff);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 153, 153, 0.4);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  /* Secondary variant */
  .btn-secondary {
    background: linear-gradient(135deg, #757575, #9e9e9e);
    color: white;
    box-shadow: 0 2px 8px rgba(117, 117, 117, 0.3);
  }

  .btn-secondary:hover:not(.disabled):not(.loading) {
    background: linear-gradient(135deg, #9e9e9e, #bdbdbd);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(117, 117, 117, 0.4);
  }

  /* Outline variant */
  .btn-outline {
    background: transparent;
    color: #009999;
    border: 2px solid #009999;
    box-shadow: none;
  }

  .btn-outline:hover:not(.disabled):not(.loading) {
    background: rgba(0, 153, 153, 0.1);
    border-color: #00bcd4;
    color: #00bcd4;
    transform: translateY(-1px);
  }

  /* Ghost variant */
  .btn-ghost {
    background: transparent;
    color: #009999;
    box-shadow: none;
  }

  .btn-ghost:hover:not(.disabled):not(.loading) {
    background: rgba(0, 153, 153, 0.1);
    color: #00bcd4;
  }

  /* Industrial variant */
  .btn-industrial {
    background: linear-gradient(135deg, #2d2d2d, #404040);
    color: #00e5ff;
    border: 1px solid rgba(0, 153, 153, 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .btn-industrial:hover:not(.disabled):not(.loading) {
    background: linear-gradient(135deg, #404040, #525252);
    color: white;
    border-color: rgba(0, 229, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 229, 255, 0.2);
  }

  /* Success variant */
  .btn-success {
    background: linear-gradient(135deg, #4caf50, #66bb6a);
    color: white;
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
  }

  .btn-success:hover:not(.disabled):not(.loading) {
    background: linear-gradient(135deg, #66bb6a, #81c784);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(76, 175, 80, 0.4);
  }

  /* Danger variant */
  .btn-danger {
    background: linear-gradient(135deg, #f44336, #ef5350);
    color: white;
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
  }

  .btn-danger:hover:not(.disabled):not(.loading) {
    background: linear-gradient(135deg, #ef5350, #e57373);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(244, 67, 54, 0.4);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }

  .btn-text {
    line-height: 1;
  }

  .loading-spinner {
    width: 1em;
    height: 1em;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default SiemensButton;
