import React, { useEffect, useRef } from 'react';
import "../styles/main.css";
import AutoType from '../components/AutoType';
import { useInView } from 'framer-motion';

import sea from "../images/main/sea.png"
import clouds from '../images/main/clouds.png';
import cloud from '../images/main/cloud.png';
import boat from '../images/main/boat.png';
import WheelContainer from '../components/WheelContainer';
import LastUpdated from '../components/LastUpdated';
import { FaCaretRight } from "react-icons/fa";
import resume from "../resume/PRAVEEN S (BTECH - IT)- RESUME.pdf"

const Main = ({ setMainInView}) => {
  const main = useRef(null);
  const mainStatus = useInView(main);

  useEffect(() => {
    setMainInView(mainStatus);
  }, [mainStatus, setMainInView]);



  return (
    <div className='main' id="home">
      <div className="autospell-warper">
        <h1>Hey !..</h1>
        <div className="autospell">I'm <AutoType /></div>
      </div>

      <WheelContainer main = {main} content={<LastUpdated />}/>

      <div className="cloud-container">
        <div className="resume-container">
          <a className='resume-cloud' href={resume} download>
            <img src={cloud} alt="Download CV" />
          </a>
          <div className="resume-indication">
            Resume <FaCaretRight className='resume-indicator'/>
          </div>
        </div>
        <img src={clouds} alt="clouds" />
      </div>

      <img className='boat' src={boat} alt="boat" />
      <img className="sea" src={sea} alt="sea" />
    </div>
  );
};

export default Main;
