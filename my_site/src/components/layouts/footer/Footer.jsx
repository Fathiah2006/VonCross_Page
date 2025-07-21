import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        
        <div className="footer-col">
          <h3 className="footer-brand">VonCross</h3>
          <p>Your trusted digital solutions provider. We design, develop, and deliver with passion and precision.</p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaEnvelope />
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Case Studies</a></li>
            <li><a href="#contact">Pricing</a></li>
            <li><a href="#insights">Insights</a></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>CyberSecurity & Cloud Migration</li>
            <li>AI & Machine Learning</li>
            <li>Software Development</li>
            <li>Courses & Training Programs</li>
            <li>Data Analytics & Business Intelligence</li>
            <li>IT Consulting & Strategy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Riverside, CA, USA</li>
            <div className='footer-email'>
                <a href="mailto:fathiahkazeem@gmail.com">info@VonCross.com</a>
            </div>
            <a href="tel:+12345678901" className="phone-link">+1 (234) 567-8901</a> 
            </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VonCross Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
