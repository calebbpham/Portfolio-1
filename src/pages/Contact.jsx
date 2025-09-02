import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Contact page: displays contact form with EmailJS integration
export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Form reference for EmailJS
  const form = useRef();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration - using environment variables for security
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });
        // Reset form element
        e.target.reset();
      })
      .catch((error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Enter your message here ..."
              rows="6"
            />
          </div>

          {/* Send Button */}
          <button 
            type="submit" 
            className="send-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Failed to send message. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 