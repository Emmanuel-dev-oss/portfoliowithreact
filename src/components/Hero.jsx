import React, {useState, useEffect} from 'react';
import Animation from './embeded/Animation';
import AnimatedElement from './embeded/AnimatedSection'

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={`pad container ${loaded ? 'loaded' : ''}`}>
      <div className="hero hero-container">
        <div className="hero-content">
          <AnimatedElement className="hero-text" animation='fadeInUp' delay={0.2}>
            <h4>I'm</h4>
            <h1 className='name'>Adejola Michtutors</h1>
            <h1> A WEB DEVELOPER</h1>
            <h1>ELECTRICAL ENGINEER</h1> 
            <div className="full-text"><h1>3D PRODUCT DESIGNER</h1><div className="full-stop"></div></div>
          </AnimatedElement>
          <AnimatedElement className="btn-primary cta-btn" animation='fadeInUp' delay={0.2}>
            <p>Previous Projects</p>
          </AnimatedElement>
        </div>

        <AnimatedElement className="hero-img" animation='fadeInUp' delay={0.2}>
          <Animation/>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;