import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesWrapperRef = useRef(null);
  const servicesListRef = useRef(null);
  const [scrollClasses, setScrollClasses] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navbar scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll indicator for Services dropdown
  useEffect(() => {
    const updateScrollIndicators = () => {
      const list = servicesListRef.current;
      const wrapper = servicesWrapperRef.current;
      if (!list || !wrapper) return;

      const hideTop = list.scrollTop <= 0;
      const hideBottom = list.scrollTop + list.clientHeight >= list.scrollHeight;
      const cls = `${hideTop ? 'hide-top' : ''} ${hideBottom ? 'hide-bottom' : ''}`;
      setScrollClasses(cls);
    };

    const list = servicesListRef.current;
    if (list) {
      list.addEventListener('scroll', updateScrollIndicators);
      updateScrollIndicators(); // Initial check
    }

    return () => {
      if (list) list.removeEventListener('scroll', updateScrollIndicators);
    };
  }, [openDropdown]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>VonCross</h2>
      </div>

      {/* Mobile contact icon */}
      <div className="mobile-contact">
        <a href="#contact" className="contact-icon">
          <FaEnvelope />
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${mobileMenuOpen ? 'show' : ''}`} ref={dropdownRef}>
        <ul>
          <li>
            <div className="dropdown-toggle" onClick={() => toggleDropdown('about')}>
              <span>ABOUT US</span>
              <FaChevronDown className={openDropdown === 'about' ? 'rotate' : ''} />
            </div>
            <ul className={`dropdown ${openDropdown === 'about' ? 'show' : ''}`}>
              <li><a href="#">Our Team</a></li>
            </ul>
          </li>

          <li>
  <div className="dropdown-toggle" onClick={() => toggleDropdown('services')}>
    <span>SERVICES</span>
    <FaChevronDown className={openDropdown === 'services' ? 'rotate' : ''} />
  </div>

  <div
    className={`dropdown services-dropdown-wrapper ${openDropdown === 'services' ? 'show' : ''}`}
    ref={servicesWrapperRef}
  >
    <div className={`dropdown-wrapper ${scrollClasses}`}>
      <ul className="services-dropdown" ref={servicesListRef}>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Cloud Solutions</a></li>
        <li><a href="#">Cybersecurity & Cloud Migration</a></li>
        <li><a href="#">AI & Machine Learning</a></li>
        <li><a href="#">Software Development</a></li>
        <li><a href="#">Courses & Training Programs</a></li>
        <li><a href="#">Data Analytics & Business Intelligence</a></li>
        <li><a href="#">IT Consulting & Strategy</a></li>
      </ul>
    </div>
  </div>
</li>

          <li><a href="#case-studies">CASE STUDIES</a></li>
          <li><a href="#pricing">PRICING</a></li>

          <li>
            <div className="dropdown-toggle" onClick={() => toggleDropdown('insights')}>
              <span>INSIGHTS</span>
              <FaChevronDown className={openDropdown === 'insights' ? 'rotate' : ''} />
            </div>
            <ul className={`dropdown ${openDropdown === 'insights' ? 'show' : ''}`}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <a href="#contact" className="contact-btn">Get in Touch</a>
    </div>
  );
};

export default Navbar;
