import React from 'react';
import { FaDatabase, FaProjectDiagram, FaRobot, FaCube, FaEye, FaServer } from 'react-icons/fa';
import './AdvancedTech.css';

const techData = [
  {
    title: 'Big Data',
    icon: <FaDatabase />,
    description:
      'Data is the lifeblood of the modern digital era, and we are on top of it, helping businesses process and transform data for their needs. Whether it’s optimizing operations, enhancing customer experiences, or identifying market trends, our big data expertise transforms raw data into a strategic asset for the business.',
    points: [
      'data collection and integration from multiple sources',
      'scalable data pipeline development',
      'advanced data analytics and visualization',
      'predictive modeling and forecasting',
      'real-time data processing and analysis',
      'big data infrastructure setup and management',
      'data warehouse and lake design',
      'machine learning integration for enhanced insights',
      'customer behavior and trend analysis',
      'data security and compliance solutions'
    ],
    link: 'Big Data development ',
    highlighted: true
  },
  {
    title: 'Internet of Things (IoT)',
    icon: <FaProjectDiagram />,
    description:
      'Connect devices, monitor operations, and streamline workflows with our IoT solutions. From smart manufacturing and predictive maintenance to supply chain optimization and remote monitoring, we deliver tailored IoT projects that drive innovation across industries.',
    points: [
      'custom IoT solution development',
      'IoT device integration and connectivity',
      'real-time data collection and analysis',
      'predictive maintenance solutions',
      'smart manufacturing and automation systems',
      'fleet management and tracking applications',
      'IoT consulting',
      'remote monitoring and control systems',
      'IoT data visualization and dashboards',
      'secure IoT infrastructure and compliance'
    ],
    link: 'IoT software development ',
    highlighted: true
  },
  {
    title: 'Artificial Intelligence',
    icon: <FaRobot />,
    description:
      'From predictive analytics to machine learning, computer vision, chatbot assistants, and AI-powered healthcare diagnostics, AI impacts spans every industry. We design tailored AI models and integrate AI tools into our projects to drive business transformation.',
    points: [
      'custom AI model development',
      'predictive analytics and forecasting solutions',
      'machine learning algorithm implementation',
      'natural language processing (NLP) for chatbots and assistants',
      'computer vision for image and video analysis',
      'AI-powered healthcare diagnostics and decision support',
      'AI tools for predictive maintenance',
      'consulting on implementing AI',
      'sentiment analysis and customer behavior prediction',
      'AI integration with existing software systems'
    ],
    link: 'AI development ',
    highlighted: true
  },
  {
    title: 'Blockchain',
    icon: <FaCube />,
    description:
      'Unlock the potential of blockchain technology with our services. From smart contracts and digital wallets to supply chain traceability and financial transactions, we develop secure software solutions with tamper-proof records and complete data integrity.',
    points: [
      'smart contract development and auditing',
      'custom blockchain application development',
      'blockchain integration with existing systems',
      'decentralized application (dApp) development',
      'tokenization and digital asset creation',
      'private and public blockchain networks',
      'blockchain-based supply chain solutions',
      'blockchain development consulting',
      'blockchain-powered identity management',
      'secure and tamper-proof data storage solutions'
    ],
    link: 'Blockchain development ',
    highlighted: true
  },
  {
    title: 'AR/VR (Augmented & Virtual Reality)',
    icon: <FaEye />,
    description:
      'Enhance user engagement through immersive technologies. Our AR and VR solutions transform customer experiences across education, healthcare, real estate, and gaming with interactive and realistic simulations.',
    points: [
      'interactive AR/VR application development',
      'training simulations and virtual walkthroughs',
      'real-time environment rendering',
      'AR-powered marketing campaigns',
      'immersive e-learning platforms',
      '3D modeling and animation for virtual experiences',
      'mobile AR/VR integration',
      'hardware-agnostic development',
      'gamification using VR',
      'AR for e-commerce and virtual try-ons'
    ],
    link: 'AR/VR solutions ',
    highlighted: true
  },
  {
    title: 'Edge Computing',
    icon: <FaServer />,
    description:
      'Reduce latency, improve reliability, and manage data closer to where it’s generated. We deploy edge computing solutions for real-time processing at the source, especially useful in IoT, industrial automation, and remote monitoring.',
    points: [
      'edge server deployment and configuration',
      'real-time data analytics at the edge',
      'low-latency computing architectures',
      'edge AI model deployment',
      'offline-first applications',
      'remote and industrial edge use cases',
      'IoT edge gateway integration',
      'resilient and secure data handling',
      'cloud-to-edge synchronization',
      'network optimization for edge workloads'
    ],
    link: 'Edge computing services ',
    highlighted: true
  }
];

const AdvancedTech = () => {
  return (
    <section className="advanced-tech-section">
      <h2 className="advanced-title">
        <span className="highlight">Advanced</span> tech we work with
      </h2>

      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div className={`tech-card ${tech.highlighted ? 'hover-highlight' : ''}`} key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
            <ul>
              {tech.points.map((point, i) => (
                <li key={i}> {point}</li>
              ))}
            </ul>
            <a href="#" className="tech-link">{tech.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvancedTech;
