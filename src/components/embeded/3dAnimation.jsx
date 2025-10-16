import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElements = ({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.15
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
    rootMargin: '-50px 0px', // Start animation slightly before element enters viewport
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `animate-${animation}` : ''}`}
      style={{
        '--animation-delay': `${delay}s`,
        '--animation-duration': `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElements;