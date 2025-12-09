import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">AFBi</h3>
            <p className="footer-description">
              African Balkan Institute is dedicated to promoting cultural
              exchange, education, and sustainable development between African
              and Balkan regions.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/africanbalkan"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/africanbalkan"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/africanbalkan"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/company/africanbalkan"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              <li>
                <Link to="/programs">Education & Scholarships</Link>
              </li>
              <li>
                <Link to="/programs">Cultural Exchange</Link>
              </li>
              <li>
                <Link to="/programs">Research & Development</Link>
              </li>
              <li>
                <Link to="/programs">Community Projects</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>5a Bulevar Despota Stefana, Novi Sad, Serbia</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:info@afbi.org">info@africanbalkan.com</a>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:+1234567890">+381 611 806 187</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} African Balkan Institute. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
