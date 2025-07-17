import React from 'react';
import { FaEye, FaUsers, FaDollarSign, FaSearch, FaUserCheck, FaShieldAlt } from 'react-icons/fa';
import './WhyVoncross.css'; // Ensure you have this CSS file for styling    

const whyItems = [
  {
    icon: <FaEye />,
    title: 'Full transparency',
    description:
      'The whole process is as transparent as possible. We immediately establish a roadmap, clear KPIs and conditions for their implementation, type of reporting, daily events, sync-ups, and product testing conditions.'
  },
  {
    icon: <FaUsers />,
    title: 'Client involvement',
    description:
      'We determine the degree of Client involvement. We can work on a turnkey basis, or we may work with the direct participation of the Client’s management — our processes are adapted easily.'
  },
  {
    icon: <FaDollarSign />,
    title: 'Reasonable costs',
    description:
      'We offer fair prices for both parties: you get a well-tested application with easily maintainable code, and we get enough resources to grow as professionals.'
  },
  {
    icon: <FaSearch />,
    title: 'Scoping',
    description:
      'At VonCross, accurate scoping ensures a thorough understanding of your business needs and project requirements. Through detailed analysis and collaboration, we define goals, prioritize features, and establish a clear development roadmap, masterfully navigating challenges like uncontrollable scope creep and incomplete requirements that often lead to budget overruns.'
  },
  {
    icon: <FaUserCheck />,
    title: 'Resource planning',
    description:
      'The project’s success heavily relies on the people. Over the past 7 years, we elaborated techniques to select the most suitable candidates for every role. We ensure that the candidate is a perfect fit in terms of their wishes, interests and skills, avoiding both underqualified and overqualified allocations.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Risk management',
    description:
      'Honesty about project risks, proactiveness, and a risk mitigation plan—this is our approach to risk management. We continuously evaluate operational, technology, business, and external risk factors, which allows us to identify potential threats early on. We focus on avoiding risks with the greatest potential damage to project outcomes and maintaining full transparency about the project’s health.'
  }
];

const WhyVonCross = () => {
  return (
    <section className="why-voncross">
      <h2 className="section-title">
        Why companies work with <span className="highlight">VonCross</span>
      </h2>
      <div className="why-grid">
        {whyItems.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVonCross;
