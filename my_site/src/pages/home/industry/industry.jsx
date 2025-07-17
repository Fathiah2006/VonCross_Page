import React from 'react';
import './Industry.css';
import {
  Stethoscope,
  BookOpen,
  ShoppingCart,
  Factory,
  Briefcase,
  RadioTower,
  Building2,
  Wrench,
  Megaphone,
  Landmark
} from 'lucide-react';

const industry = [
  { icon: <Stethoscope />, title: 'Health', desc: 'We develop services, tools, and systems to provide patients and staff with up-to-date software.' },
  { icon: <BookOpen />, title: 'Education', desc: 'E-learning solutions that make education flexible, engaging, and highly efficient.' },
  { icon: <ShoppingCart />, title: 'Retail', desc: 'We build stronger connections with customers through web and mobile apps with 24/7 availability.' },
  { icon: <Factory />, title: 'Manufacturing', desc: 'Software for supply chain, inventory, warehouses, production, automation, and more.' },
  { icon: <Briefcase />, title: 'Professional Services', desc: 'CRM, billing tools, document systems, and more — built for professionals by professionals.' },
  { icon: <RadioTower />, title: 'Telecoms', desc: 'Network management, customer experience, security, and automation solutions.' },
  { icon: <Landmark />, title: 'U.S. Government', desc: 'We deliver secure, compliant digital solutions for public sector missions and operations.' },
  { icon: <Wrench />, title: 'Engineering & Construction', desc: 'From BIM tools to IoT integration, we build the digital backbone of the construction industry.' },
  { icon: <Megaphone />, title: 'Marketing & Advertising', desc: 'We build effective tools to optimize strategy, analytics, and audience engagement.' },
];

const Industry = () => (
  <section className="industries-section">
    <h2 className="industries-title"><span className="highlight">Industries</span> we help</h2>
    <div className="industries-grid">
      {industry.map((item, index) => (
        <div className="industry-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Industry;
