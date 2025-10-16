import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNodeJs, faPython, faAws, faCss3, faJava, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import AnimatedElement from './embeded/AnimatedSection';
import AnimatedElements from './embeded/3dAnimation';

const Experience = () => {
  const technologies = [
    { name: 'faAWS', icon: faAws, delay: '0.2'},
    { name: "CSS3", icon: faCss3, delay: '0.4'},
    { name: "ReactJS", icon: faReact, delay: '0.6'},
    { name: "HTML", icon: faHtml5, delay: '0.8'},
    { name: "Java", icon: faJava, delay: '0.9'},
    { name: "Javascript", icon: faJs, delay: '0.7' },
    { name: "Node.Js", icon: faNodeJs, delay: '0.5'},
    { name: "Python", icon: faPython, delay: '0.3'}
  ];

  return (
    <section id="experience" className="container">
      <div className="experience">
        <AnimatedElement animation="fadeInUp" delay={0.6}>
            <h2 className="section-title">EXPERIENCE</h2>
        </AnimatedElement>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <AnimatedElement animation='fadeIn' key={index} className="tech-item" delay={tech.delay}>
              <span className="tech-icon"><FontAwesomeIcon icon={tech.icon}  size="1x" style={{ color: '#0056b3'}} /></span>
              <span className="tech-name">{tech.name}</span>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;