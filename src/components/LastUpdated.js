import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const LastUpdated = () => {
    return (
        <TypeAnimation
          sequence={[
            '@Last Updated 2026-10-22 02:50:00 UTC',
            1000,
          ]}
          wrapper="span"
          speed={5}
          style={{ fontSize: '14px', display: 'inline-block', color: 'black', fontWeight: "500" , opacity: "0.4"}}
          repeat={Infinity}
        />
      );
}

export default LastUpdated