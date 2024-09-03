import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const AutoType = () => {

    return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'PraveenSubramaniyam',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
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
      speed={5}
      style={{ fontSize: '1.2em', display: 'inline-block', color: 'rgb(14, 140, 157)', fontWeight: "500" }}
      repeat={Infinity}
    />
  );
}

export default AutoType