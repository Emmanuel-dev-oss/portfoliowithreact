import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faMobile, faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons';
import AnimatedElement from './embeded/AnimatedSection';
import AnimatedElements from './embeded/3dAnimation';

const Services = () => {
  const services = [
    {
      icon: faMobile,
      title: "WEB DEVELOPMENT",
      description: "I don't just build websites; I engineer full-stack solutions that drive results. From lightning-fast, secure backends to dynamic, responsive frontends, I deliver seamless user experiences designed for conversion and scale.",
      animation: "fadeInLeft"
    },
    {
      icon: faVideo ,
      title: "VIDEO EDITING",
      description: "I transform raw footage into compelling visual narratives. Whether for marketing, education, or social media, I cut, pace, and refine every project to maximize viewer engagement, emotional impact, and clear communication.",
      animation: "fadeInRight"
    },
    {
      icon: faDesktop,
      title: "DESKTOP APP DEVELOPMENT",
      description: "I create robust, high-performance native applications that streamline complex processes. Focused on security and intuitive UX, I deliver reliable software that enhances internal productivity and data management.",
      animation: "fadeInLeft"
    },
    {
      icon: faCube,
      title: "3D DESIGN AND ANIMATION",
      description: "I translate concepts into photorealistic 3D models and visualizations. Specializing in product prototypes and presentation assets, I provide the stunning visual clarity needed to secure investment and accelerate market adoption.",
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