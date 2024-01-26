import React, { useState, useEffect } from 'react';
import './Footer.css';


const Footer = () => {
  const [isFooterVisible, setFooterVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setFooterVisibility(false);
      } else {
        setFooterVisibility(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='footer'>
      <p>¡Contáctanos!</p>
    </div>
  );
};

export default Footer;
