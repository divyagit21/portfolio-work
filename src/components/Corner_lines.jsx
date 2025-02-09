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

// const StyleSheet = () => {
//     return (
//         <style>{`
//           .corner{
//            color:var(--secondary-color);
//           } 
//         `}</style>
//     )
// }
export default Corner_lines

// import React, { useRef, useEffect, useState } from 'react';
// import Header from './Header';
// import Info from './Info';
// const Corner = () => {
//   // Use windowWidth state to adjust container size dynamically
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const colors = ['#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6', '#fff4d6'];

//   useEffect(() => {
//     // Event listener for window resize
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Dynamically set height based on window width
//   const containerHeight = windowWidth < 768 ? '50%' : windowWidth < 1024 ? '75%' : '100%';

//   // Container style based on window size
//   const containerStyle = {
//     height: containerHeight,  // Dynamic height
//     width: '100%',            // Full width
//     position: 'absolute',
//     overflow: 'hidden',
//     // backgroundColor: 'pink',  // Just for illustration
//     right: '0',               // Align to the right
//     bottom: '0',              // Align to the bottom
//     display: 'flex',          // Allow flexbox behavior for content inside
//     flexDirection: 'column',  // Arrange child items in a column
//   };
//   const zoopMarginStyle = {
//     marginTop: windowWidth < 768 ? '40px' : '70px',
//   };

//   return (
//     <div 
//     // style={{ position: 'relative', top:0,height: '100vh',
//     //  backgroundColor: 'red',
//     //  zIndex:'1' }}
//      >
//         {/* <Header /> */}
//       {/* <div style={zoopMarginStyle}> */}
//           {/* <Info/> */}
//         {/* </div> */}
//       <div style={containerStyle}>
//         {colors.map((color, index) => (
//           <Line key={index} color={color} index={index} windowWidth={windowWidth} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Line = ({ color, index, windowWidth }) => {
//   const lineRef = useRef(null);

//   useEffect(() => {
//     const handleTransform = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;

//       if (lineRef.current) {
//         const moveFactorY = (y - window.innerHeight / 2) * 0.01 * (index + 1);
//         lineRef.current.style.transform = `translateY(${moveFactorY}px) rotate(-45deg)`;
//       }
//     };

//     document.addEventListener('mousemove', handleTransform);
//     return () => {
//       document.removeEventListener('mousemove', handleTransform);
//     };
//   }, [index]);

//   // Calculate line width dynamically based on screen size
//   const baseLineWidth = windowWidth < 768
//     ? 800 + index * 40
//     : windowWidth < 1024
//       ? 800 + index * 60
//       : 1200 + index * 100;

//   const lineWidth = windowWidth < 768 ? baseLineWidth * 0.75 : baseLineWidth;

//   // Set min and max width to avoid lines getting too small or too large
//   const maxWidth = 1200;
//   const minWidth = 1200;  // Minimum line width when scaling down
//   const finalLineWidth = Math.max(Math.min(lineWidth, maxWidth), minWidth);

//   const bottomOffset = windowWidth < 768 ? 10 + index * 15 : 10 + index * 15;

//   const lineStyle = {
//     position: 'absolute',
//     right: '0%',
//     bottom: `${bottomOffset}%`,
//     width: `${finalLineWidth}px`,
//     height: '1.5px',
//     backgroundColor: color,
//     transform: 'rotate(-45deg)',
//     transformOrigin: 'bottom right',
//     transition: 'transform 0.1s ease, width 0.1s ease',
//   };

//   return <div ref={lineRef} style={lineStyle} />;
// };

// export default Corner;