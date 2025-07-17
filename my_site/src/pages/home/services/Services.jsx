import React, { useState } from 'react';
import './Services.css';

const serviceData = {
  'Web Development': 'We craft visually stunning, responsive websites and dynamic web applications that deliver real results. Our development process focuses on user experience, speed, and scalability — ensuring your digital presence performs flawlessly across all devices.',
  'Cloud Solutions': 'From cloud migration to full-stack cloud-native apps, we help businesses leverage the flexibility, security, and cost-efficiency of the cloud. Our experts work across AWS, Azure, and Google Cloud to build scalable infrastructures that grow with you.    ',
  'Cybersecurity & Cloud Migration': 'Our Team are certified cybersecurity experts who protect your digital assets with cutting-edge security solutions. We also specialize in seamless cloud migration, ensuring your data and applications are secure, compliant, and optimized for performance.',
  'AI & Machine Learning': 'Transform your business intelligence with predictive analytics, automation, and machine learning solutions. We harness your data to build intelligent systems that adapt, learn, and create value at scale.',
  'Software Development': 'Need something truly custom? We design and engineer powerful software tailored to your unique operations. Our end-to-end development lifecycle ensures transparency, efficiency, and quality delivery every time.',
  'Courses & Training Programs': `Bridge the skills gap with our hands-on training programs. We offer custom courses for developers, IT professionals, and teams — ensuring your workforce stays ahead of the curve.
  
What we do:
• Instructor-led virtual and on-site sessions
• Coding bootcamps
• Cybersecurity awareness training
• Corporate upskilling & mentorship`,

  'Data Analytics & Business Intelligence': `Make smarter decisions with real-time dashboards, data pipelines, and analytics platforms. Our BI solutions turn raw data into actionable insights that drive strategy and performance.
What we do:
• Dashboard development (Power BI, Tableau)
• Data warehousing & ETL
• Custom reporting & KPIs
• Forecasting & trend analysis
`,

  'IT Consulting & Strategy': `Navigate the complexities of technology with our expert consulting services. We assess your current systems, identify opportunities for improvement, and develop a strategic roadmap to achieve your business objectives.
What we do:
• Digital transformation consulting 
• Technology audits & roadmaps
• Infrastructure planning
• IT governance & compliance
`,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(Object.keys(serviceData)[0]);

  return (
    <section className="services-section">
      <div className="services-intro">
        <h2><span className="highlight">Services</span> we provide</h2>
        <p>
        At VonCross, we deliver cutting-edge technology solutions tailored to 
        meet your business goals. With a focus on innovation, reliability, and
         results, our services are built to empower growth, enhance efficiency,
          and future-proof your digital operations.
        </p>
      </div>

      <div className="services-content">
        <div className="services-menu">
          {Object.keys(serviceData).map((service) => (
            <button
              key={service}
              className={`service-tab ${selectedService === service ? 'active' : ''}`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="service-details">
          <h3>{selectedService}</h3>
          {serviceData[selectedService].split('\n').map((line, index) => (
  <p key={index}>{line}</p>
))}

          <a href="#" className="service-link">Explore {selectedService} →</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
