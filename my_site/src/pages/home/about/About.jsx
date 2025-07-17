import React, {useState} from 'react';
import './About.css';
import { FaPlay } from 'react-icons/fa';

const About = () => {
       const [showVideo, setShowVideo]= useState (false);

  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="about-title">
          About <span className="highlight">Von</span>Cross
        </h2>
      </div>

      <div className="about-content">
        <div className="about-left" data-aos="fade-right">
          <div className="about-container">
            <h3 className="about-subtitle">
              <span className="highlight"><span>Who</span> We Are  </span>
            </h3>
            <p className="about-description">
            VonCross is a dynamic software company focused on delivering cutting-edge digital solutions that drive innovation and growth. We specialize in web and mobile applications, SaaS platforms, and AI-powered technologies that solve real business problems and create new opportunities.

With a client-first approach and a team of highly skilled developers, designers, and strategists, VonCross helps businesses in healthcare, finance, e-commerce, and beyond transform their ideas into powerful, scalable software. Our solutions are built to not only meet current needs but to grow with you into the future.

At VonCross, we believe great software starts with understanding. That’s why we combine deep industry knowledge with technical excellence to craft solutions that are intuitive, reliable, and impactful. Whether you're building your first product or upgrading your existing systems, we're the partner that turns complexity into clarity — and vision into value.            </p>
            <a href="/our-team" className="about-link">Meet Our Team →</a>
          </div>
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="video-wrapper">
            {showVideo ? (
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&autoplay=0"
              title="VonCross Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            ) : (
              <div className='video-thumbnail' onClick={() => setShowVideo(true)}>
                 <img src="/images/frame.png" alt="Video Thumbnail" />
                  <div className="play-button">
                    <FaPlay size={22}/>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
