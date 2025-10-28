import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `animate-${animation}` : ''}`}
      style={{
        '--animation-delay': `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;