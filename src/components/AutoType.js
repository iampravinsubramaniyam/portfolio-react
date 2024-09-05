import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AutoType = () => {
  return (
    <TypeAnimation
      sequence={[
        'PraveenSubramaniyam',
        1000, // wait 1s before moving to the next text
        'Front-End Developer',
        1000,
        'Back-End Developer',
        1000,
        'Full-Stack Developer',
        1000,
        'Programmer',
        1000
      ]}
      wrapper="span"
      speed={60} 
      deletionSpeed={30} 
      cursor={true} 
      cursorStyle="|" 
      style={{ fontSize: '1.2em', display: 'inline-block', color: 'rgb(14, 140, 157)', fontWeight: "500" }}
      repeat={Infinity}
    />
  );
};

export default AutoType;
