import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobile, faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons';
import AnimatedElement from './embeded/AnimatedSection';
import AnimatedElements from './embeded/3dAnimation';

const Services = () => {
  const services = [
    {
      icon: faMobile,
      title: "MOBILE APP DEVELOPMENT",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      animation: "fadeInLeft"
    },
    {
      icon: faVideo ,
      title: "VIDEO EDITING",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      animation: "fadeInRight"
    },
    {
      icon: faDesktop,
      title: "DESKTOP APP DEVELOPMENT",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      animation: "fadeInLeft"
    },
    {
      icon: faCode,
      title: "PROGRAMMING LANGUAGES",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      animation: "fadeInRight"
    }
  ];

  return (
    <section id="services" className="pad container">
      <div className="services">
        <AnimatedElement animation="fadeInUp" delay={0.6}>
         <h2 className="section-title">SERVICES</h2>
        </AnimatedElement>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedElements animation={service.animation} delay={0.6} duration={0.9} threshold={0.1} key={index} className="service-card" >
                <div className="service-card-header">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon}  size="1x" style={{ color: '#0056b3'}} />
                    </div>
                    <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
            </AnimatedElements>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;