import React, { useEffect,  } from 'react';
import './hero.css';

const Hero = () => {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    const interval = setInterval(() => {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      index = (index + 1) % slides.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Your reliable partner in <span className="highlight">digital</span> transformation
          </h1>
          <p className="hero-subtext">
            Empowering businesses with intelligent technologies:
            custom software, the Internet of Things solutions, AI apps, and more.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Book Consultation</a>
            <a href="#services" className="btn outline">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
