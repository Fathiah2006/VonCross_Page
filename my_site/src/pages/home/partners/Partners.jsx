import React, { useEffect } from 'react';
import './Partners.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  




// Partners component


const Partners = () => {

  useEffect(() => { 
    AOS.init ({duration: 1000,once: true,easing: 'ease-in-out',});
  }, []);


  return (
    <section className="partners-section">
      <div className="partners-left"  data-aos="fade-right">
        <h2>
          For <span className="highlight">7+ years</span> now we have been responsible for your projects and we are proud of it!
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>250+</h3>
            <p>Developed custom solutions</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Countries, including the USA</p>
          </div>
          <div className="stat-box">
            <h3>3+</h3>
            <p>Years’ Client engagement</p>
          </div>
          <div className="stat-box">
            <h3>70%</h3>
            <p>Senior engineers</p>
          </div>
          <div className="stat-box">
            <h3>98%</h3>
            <p>Satisfaction rate</p>
          </div>
        </div>
      </div>

      <div className="partners-right"  data-aos="fade-left">
        <div className="partners-logos">
          <img src="/images/aws.png" alt="AWS" />
          <img src="/images/ebay.png" alt="eBay" />
          <img src="/images/goggle.png" alt="Google" />
          <img src="/images/micro.png" alt="Microsoft" />
          <img src="/images/netflix.png" alt="Netflix" />
          <img src="/images/delta.png" alt="Delta" />
          <img src="/images/ibm.png" alt="IBM" />
          <img src="/images/kuber.jpg" alt="Kubernetes" />
          <img src="/images/oracle.png" alt="Oracle" />
          <img src="/images/sales.png" alt="Salesforce" />
          <img src="/images/slack.png" alt="Slack" />
          <img src="/images/calendly.png" alt="Calendly" />
          <img src="/images/cyber.png" alt="Cyber"/>
          <img src="/images/datadog.png" alt="Datadog" />
          <img src="/images/nord.png" alt="Nord" />
          <img src="/images/digital.png" alt="Digital" />


        </div>
      </div>
    </section>
  );
};

export default Partners;