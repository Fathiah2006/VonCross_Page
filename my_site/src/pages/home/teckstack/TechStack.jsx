import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TechStack.css';

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="techstack-section">
      <h2 className="techstack-title">
        <span className="highlight">Core tech stack</span> we work with
      </h2>

      <div className="tech-group">
        <h4>Backend development</h4>
        <div className="tech-icons" data-aos="flip-up">
          <img src="/images/java.png" alt="Java" />
          <img src="/images/.net.png" alt=".NET" />
          <img src="/images/php.png" alt="PHP" />
          <img src="/images/R.png" alt="Ruby on Rails" />
          <img src="/images/python.png" alt="Python" />
          <img src="/images/node.png" alt="Node.js" />
          <img src="/images/js.webp" alt="JavaScript" />
        </div>
      </div>

      <div className="tech-group">
        <h4>Frontend development</h4>
        <div className="tech-icons" data-aos="flip-up">
          <img src="/images/react.png" alt="React" />
          <img src="/images/angular.jpg" alt="Angular" />
          <img src="/images/next.png" alt="Next.js" />
          <img src="/images/vu.png" alt="Vue.js" />
          <img src="/images/boot.png" alt="Bootstrap" />
          <img src="/images/jquery.png" alt="jQuery" />
          <img src="/images/django.png" alt="Django" />
        </div>
      </div>

      <div className="tech-group">
        <h4>Mobile development</h4>
        <div className="tech-icons" data-aos="flip-up">
          <img src="/images/native .png" alt="React Native" />
          <img src="/images/ios.png" alt="iOS" />
          <img src="/images/andriod.png" alt="Android" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
