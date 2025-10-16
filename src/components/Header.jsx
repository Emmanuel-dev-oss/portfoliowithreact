import React, { useState } from 'react';

const Header = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
 
    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen)
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    return (
        <>
         <header className='header'>
            <div className="container">
                <div className="logo">
                    <span>AM</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav">
                    <a href="#about" onClick={closeSideNav}>ABOUT ME</a>
                    <a href="#portfolio" onClick={closeSideNav}>PORTFOLIO</a>
                    <a href="#services" onClick={closeSideNav}>SERVICES</a>
                    <a href="#experience" onClick={closeSideNav}>EXPERIENCE</a>
                    <a href="#contact" onClick={closeSideNav} className='contact'>CONTACT</a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className='menu-toggle' onClick={toggleSideNav} aria-label='Toggle navigation menu'>
                    <span className={`hamburger-line ${isSideNavOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isSideNavOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isSideNavOpen ? 'active' : ''}`}></span>
                </button>
            </div>
         </header>

         {/* Side Navigation */}
        <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
           <div className="side-nav-content">

                {/* Close Button */}
                <button 
                    className="side-nav-close"
                    onClick={closeSideNav}
                    aria-label="Close navigation menu"
                >
                    &times;
                </button>

                {/* Navigation Links */}
                <nav className="side-nav-links">
                    <a href="#about" onClick={closeSideNav} className="side-nav-link">
                        <span className="link-number">01</span>
                        <span className="link-text">ABOUT ME</span>
                    </a>
                    <a href="#portfolio" onClick={closeSideNav} className="side-nav-link">
                        <span className="link-number">02</span>
                        <span className="link-text">PORTFOLIO</span>
                    </a>
                    <a href="#services" onClick={closeSideNav} className="side-nav-link">
                        <span className="link-number">03</span>
                        <span className="link-text">SERVICES</span>
                    </a>
                    <a href="#experience" onClick={closeSideNav} className="side-nav-link">
                        <span className="link-number">04</span>
                        <span className="link-text">EXPERIENCE</span>
                    </a>
                    <a href="#contact" onClick={closeSideNav} className="side-nav-link">
                        <span className="link-number">05</span>
                        <span className="link-text">CONTACT</span>
                    </a>
                </nav>

                {/* Additional Info (optional) */}
                <div className="side-nav-footer">
                    <div className="contact-info">
                        <p>Email: hello@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" aria-label="GitHub">GitHub</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                    </div>
                </div>
            </div>
            
                {/* Overlay */}
            <div 
                className={`side-nav-overlay ${isSideNavOpen ? 'open' : ''}`}
                onClick={closeSideNav}></div>
            </div>
      </>
    );
};

export default Header;