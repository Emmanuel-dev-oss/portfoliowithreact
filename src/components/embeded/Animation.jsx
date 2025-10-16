import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCode, faCube, faRobot, faGlobe, faFilm } from '@fortawesome/free-solid-svg-icons';

const DynamicHeroIcons = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const heroIcons = [
    { icon: faBolt, title: 'Electrical Engineering', color: '#007bff'},
    { icon: faCode, title: 'Web Development', color: '#007bff' },
    { icon: faCube, title: '3D Animation', color: '#007bff' },
    { icon: faRobot, title: 'Robotics & AI', color: '#007bff' },
    { icon: faGlobe, title: 'Full Stack', color: '#007bff' },
    { icon: faFilm, title: 'Motion Design', color: '#007bff' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % heroIcons.length);
    }, 4000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-icon-container">
      <FontAwesomeIcon 
        icon={heroIcons[currentIcon].icon} 
        className="hero-main-icon rotate-infinite"
        style={{ color: heroIcons[currentIcon].color }}
      />
      <div className="hero-title">{heroIcons[currentIcon].title}</div>
    </div>
  );
};

export default DynamicHeroIcons;