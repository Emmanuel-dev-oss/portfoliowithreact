import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AnimatedElement from './embeded/AnimatedSection';
import AnimatedElements from './embeded/3dAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const socials = [
    {icon: faPhone, description: '09112337655'},
    {icon: faEnvelopeSquare, description: 'adejolamichtutors2@gmail.com'},
    {icon: faLocation, description: 'House No: 07 Rafsar Town, mirpurkhas, 69000, Sinah Pakistan'}
  ];

  const getInTouch = [
      { icon: faFacebook, link: 'https://www.facebook.com/micheal.adejola.2025', delay: '0.2' },
      { icon: faInstagram, link: 'https://www.instagram.com/michealadejola?igsh=cm82MDM5a2c1Ym15', delay: '0.4' },
      { icon: faLinkedin, link: 'https://www.linkedin.com/in/michael-adejola-650aa5271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', delay: '0.6' },
      { icon: faBehance, link: 'https://www.behance.net/michaeladejola', delay: '0.5' },
      { icon: faWhatsapp, link: 'https://wa.me/message/WSIVF4COZL6TD1', delay: '0.3' }
    ];

  return (
    <section id="contact" className="container">
      <div className="footer">
        <AnimatedElement animation="fadeInUp" delay={0.6}>
             <h2 className="section-title">CONTACT</h2>
        </AnimatedElement>
          <div className="footer-top">
             <div className="footer-content">
                <AnimatedElement className="write-up" animation="fadeInLeft" delay={0.6}>
                  <h3>Drop Me a Message</h3>
                  <p>Send me a brief message about your needs, and let's schedule a time to discuss how I can integrate into your workflow and deliver solutions that scale
                  </p>
                </AnimatedElement>
                <AnimatedElement className="social-container" animation="fadeInLeft" delay={0.6}>
                  {socials.map((social, index) => (
                      <div key={index} className="social">
                        <span className="social-icon"><FontAwesomeIcon icon={social.icon}  size="2x" style={{ color: '#fff'}} /></span>
                        <span className="social-name">{social.description}</span>
                      </div>
                  ))}
                </AnimatedElement>
              </div>

            <AnimatedElements className="footer-register" animation='fadeInUp' delay={0.6} duration={0.9} threshold={0.1}>
              <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder='micheal'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='userresponse@gmail.com'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                      id="message"
                      name="message"
                      placeholder='...'
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </AnimatedElements>
           </div>

           <hr />

          <div className="footer-bottom">
           <AnimatedElement className='logo' animation="fadeIn" delay={0.6}>
                <span>AM</span>
            </AnimatedElement>

            <div className="bottom-right">
                <AnimatedElement className='copyright' animation="fadeIn" delay={0.6}>
                    <a href="https://www.linkedin.com/in/emmanuel-abidoye" className='footer-link'><h5>2025 - emmanuxdev, All rights reserved</h5></a>
                </AnimatedElement>
                <div className="get-in-touch">
                    {getInTouch.map((reach, index) => (
                      <AnimatedElement animation='fadeIn' key={index} className="media" delay={reach.delay}>
                       <a href={reach.link}><FontAwesomeIcon icon={reach.icon}  size="2x" style={{ color: '#fff'}} /></a>
                      </AnimatedElement>
                    ))}
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;