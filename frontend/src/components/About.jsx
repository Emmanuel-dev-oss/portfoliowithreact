import React from 'react';
import myImage from '../assets/myImage.jpg';
import AnimatedElement from './embeded/AnimatedSection'
import AnimatedElements from './embeded/3dAnimation'

const About = () => {
  return (
    <section id="about" className="pad container">
      <div className="about">
        <AnimatedElements animation='fadeInUp' delay={0.6} duration={0.9} threshold={0.1} className="about-img">
            <img src={myImage} alt="my-image" className='portrait'/>
        </AnimatedElements>

        <div className="about-content">
            <AnimatedElement animation="fadeInLeft" delay={0.6}>
              <h2 className="section-title">ABOUT ME</h2>
            </AnimatedElement>

            <div className="about-text">
                <AnimatedElement animation="fadeInLeft" delay={0.6} className="about-description">
                    <p>
                       I am a versatile and solutions-oriented Website Developer with strong technical and creative abilities. I hold a degree in Electrical and Electronic Engineering from Federal University Oye-Ekiti, backed by over 5 years of experience in the electrical field*.
                       As an educator, I have taught and mentored students for 6 years, with a passion for academic excellence. I am also the Founder and CEO of MICHTUTORS ACADEMY, established in 2019, dedicated to academic coaching and digital skills training.
                       In addition, I am a 3D Modeler and Product Designer, with hands-on experience in creating interactive and high-quality visual designs.
                    </p>
                  </AnimatedElement>
                <AnimatedElement animation="fadeInLeft" delay={0.6} className="about-actions">
                    <button className="btn-primary btn">Hire Me</button>
                    <button className="btn-secondary">Resume</button>
                </AnimatedElement>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;