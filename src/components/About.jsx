import React from 'react';
import myImage from '../assets/myImage.png';
import AnimatedElement from '../components/embeded/AnimatedSection'
import AnimatedElements from '../components/embeded/3dAnimation'

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
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book it has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Pariatur eos odio suscipit. Consequatur illum aliquam debitis! 
                        Suscipit ipsam nostrum nisi culpa blanditiis eveniet minima ea 
                        dolores, quisquam nihil ad optio.
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