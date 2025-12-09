import React, { useState } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const templateParams = {
        fullname: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      }

      await emailjs.send(
        'service_k0d89jh',
        'template_4puwl0p',
        templateParams,
        '0XpHI_viHOMrvwxxO'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's work together to create positive change</p>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you. Whether you have questions about our
                programs, want to partner with us, or are interested in getting
                involved, reach out to us.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-card-content">
                    <h4>Visit Us</h4>
                    <p>5a Bulevar Despota Stefana, Novi Sad, Serbia</p>
                    <p>Head Office</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-card-content">
                    <h4>Email Us</h4>
                    <p>info@africanbalkan.com</p>
                    <p>programs@africanbalkan.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-card-content">
                    <h4>Call Us</h4>
                    <p>+381 611 806 187</p>
                    <p>Mon-Fri: 9AM - 5PM</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <p>Stay connected and updated on our latest initiatives</p>
                <div className="social-links-contact">
                  <a
                    href="https://www.linkedin.com/company/africanbalkan"
                    className="social-btn"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://www.linkedin.com/company/africanbalkan"
                    className="social-btn"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/company/africanbalkan"
                    className="social-btn"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/africanbalkan"
                    className="social-btn"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="form-container">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                    />
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
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {submitStatus && (
                    <div className={`submit-message ${submitStatus}`}>
                      {submitStatus === 'success'
                        ? 'Thank you for your message! We will get back to you soon.'
                        : 'Failed to send message. Please try again or email us directly.'}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane />{' '}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
