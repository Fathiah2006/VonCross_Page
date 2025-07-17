import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  return (
    <section className="values-section">
      <div className="container">
        <h2 className="values-heading">
          Building on strong <span className="highlight">values</span>
        </h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Sustainability Commitment</h3>
            <p>
              We are committed to supporting sustainable growth and contributing to a better future.
              As proud members of the Council for Inclusive Capitalism, we integrate sustainable practices
              into our projects and operations, prioritizing long-term solutions that positively impact
              the environment, society, and economy.
            </p>
          </div>

          <div className="value-item">
            <h3>Client-Centric Approach</h3>
            <p>
              Our Clients are at the heart of everything we do. We work tirelessly to understand their needs,
              exceed their expectations, and deliver solutions that align with their business goals,
              ensuring long-lasting and mutually beneficial relationships.
            </p>
          </div>

          <div className="value-item">
            <h3>Agility and Adaptability</h3>
            <p>
              As evangelists of Agile and modern technologies, we embrace change in the technological landscape
              and adapt quickly. Our agile approach and well-established processes enable us to meet dynamic
              Client requirements and stay ahead of market trends.
            </p>
          </div>

          <div className="value-item">
            <h3>Security and Confidentiality</h3>
            <p>
              As an ISO 9001 and ISO 27001-certified company, we adhere to the highest international standards
              for information security. From day one, we sign NDAs, implement industry-standard measures like
              two-factor authentication for internal systems, and enforce strict confidentiality rules among
              employees. We take every necessary step to ensure the Client's business data remains secure.
            </p>
          </div>

          <div className="value-item">
            <h3>Cultural Sensitivity</h3>
            <p>
              We respect and adapt to the cultural nuances of our Clients, employees, and partners.
              We operate internationally in regions like the USA, EU, Africa, Asia, and Latin America.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
