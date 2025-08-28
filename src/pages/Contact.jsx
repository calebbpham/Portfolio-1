import React, { useState } from 'react';
import './Contact.css';

// Contact page: displays a contact form with inputs and send button
export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
  );
} 