import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/header.css"
import Navbar from '../components/Navbar'


const Header = () => {

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffSet || document.documentElement.scrollTop);
  const [topScale, setTopScale] = useState(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      

      const currentScrollPos = window.pageYOffSet || document.documentElement.scrollTop;
      if (prevScrollpos > currentScrollPos) {
        setTopScale(0); // Show navbar
      } else {
        setTopScale(-500); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  let headerStyle = {
    top: `${topScale}px`
  }


  return (
    <div className='header' style={headerStyle}>
      <Navbar/>
    </div>
  )
}

export default Header