import React, { useEffect, useRef } from 'react';
import "../styles/main.css";
import AutoType from '../components/AutoType';
import LastUpdated from '../components/LastUpdated';

import { useInView } from 'framer-motion';

const Main = ({ setMainInView, sea, clouds, cloud, boat, wheel }) => {
  const main = useRef(null);
  const mainStatus = useInView(main);

  useEffect(() => {
    setMainInView(mainStatus);
  }, [mainStatus, setMainInView]);

  useEffect(()=>{

    const seaImage = new Image();

    seaImage.onload = ()=>{
      console.log("complate")
    }

    seaImage.src = sea

  },[sea,clouds,cloud,boat,wheel])


  return (
    <div className='main' id="home">
      <div className="autospell-warper">
        <h1>Hey !..</h1>
        <div className="autospell">I'm <AutoType /></div>
      </div>

      <div className="wheel-container" ref={main}>
        <img className='wheel' src={wheel} alt="wheel" />
        <LastUpdated />
      </div>

      <div className="cloud-container">
        <div className="resume-container">
          <a className='resume-cloud' href={cloud} download>
            <img src={cloud} alt="Download CV" />
          </a>
        </div>
        <img src={clouds} alt="clouds" />
      </div>

      <img className='boat' src={boat} alt="boat" />
      <img className="sea" src={sea} alt="sea" />
    </div>
  );
};

export default Main;
