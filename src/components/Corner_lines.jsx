import React, { useRef, useEffect, useState } from 'react';
import Header from './Header';
import Info from './Info';
const Corner_lines = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const colors = ['#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6'];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerHeight = 
  windowWidth < 768 ? '75%' : windowWidth < 1024 ? '85%' : '100%';

  const containerStyle = {
    height: containerHeight,  
    width: '100%',            
    position: 'absolute',
    overflow: 'hidden',
    right: '0',               
    bottom: '0',  
  };
  const zoopMarginStyle = {
    marginTop: windowWidth < 768 ? '40px' : '70px',
  };

  return (
      <div style={containerStyle}>
        {colors.map((color, index) => (
          <Line key={index} color={color} index={index} windowWidth={windowWidth} />
        ))}
      </div>
  );
};

const Line = ({ color, index, windowWidth }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleTransform = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lineRef.current) {
        const moveFactorY = (y - window.innerHeight / 2) * 0.01 * (index + 1);
        lineRef.current.style.transform = `translateY(${moveFactorY}px) rotate(-45deg)`;
      }
    };

    document.addEventListener('mousemove', handleTransform);
    return () => {
      document.removeEventListener('mousemove', handleTransform);
    };
  }, [index]);

  const baseLineWidth = windowWidth < 768
    ? 800 + index * 40
    : windowWidth < 1024
      ? 800 + index * 60
      : 1200 + index * 100;

  const lineWidth = windowWidth < 768 ? baseLineWidth * 0.75 : baseLineWidth;

  const maxWidth = 1200;
  const minWidth = 1200;  
  const finalLineWidth = Math.max(Math.min(lineWidth, maxWidth), minWidth);

  const bottomOffset = windowWidth < 768 ? 10 + index * 15 : 10 + index * 15;

  const lineStyle = {
    position: 'absolute',
    right: '0%',
    bottom: `${bottomOffset}%`,
    width: `${finalLineWidth}px`,
    height: '1.5px',
    backgroundColor: color,
    transform: 'rotate(-45deg)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.1s ease, width 0.1s ease',
  };

  return <div ref={lineRef} style={lineStyle} />;
};

export default Corner_lines
