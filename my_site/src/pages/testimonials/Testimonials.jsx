import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '/images/client1.jpg';
import client2 from '/images/client2.jpg';
import client3 from '/images/client3.jpg';
import client4 from '/images/client4.jpg';
import client5 from '/images/client5.jpg';

const testimonials = [
  {
    quote: "Enrolling in this tech school was the best decision of my career.The hands-on projects and mentorship helped me land my dream job within months!",
    name: "Daniel Moss",
    role: "CEO, Tech Solutions",
    image: client1
  },
  {
    quote: "I came in with zero tech background, but the structured curriculum and supportive instructors made it easy to catch up and excel.",
    name: "Lisa Turner",
    role: "CTO, SkyNet Systems",
    image: client2
  },
  {
    quote: "From Excel basics to real-world data modeling, this school equipped me with the skills top employers are looking for. I felt job-ready on day one.",
    name: " Michael Johnson",
    role: "Operations Manager, BlueCom",
    image: client3
  },
  {
    quote: "What stood out was how updated and practical the courses were. We didn’t just learn theory — we built real solutions.",
    name: "Samuel Reed",
    role: "Founder, DataDrip",
    image: client4
  },
  {
    quote: "The community here is unmatched. It’s more than just a school — it’s a launchpad for anyone serious about tech."

,
    name: "Chloe Grant",
    role: "HR Lead, TalentBridge",
    image: client5
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <h2 className="section-title">What <span>Clients Say</span>  About Us</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-client">
                <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="client-image" />
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <span className="client-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
