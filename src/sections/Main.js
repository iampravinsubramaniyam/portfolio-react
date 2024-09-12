import React, { useEffect, useRef, useState } from 'react';
import "../styles/main.css";
import AutoType from '../components/AutoType';
import { useInView } from 'framer-motion';

import sea from "../images/main/sea.png";
import clouds from '../images/main/clouds.png';
import cloud from '../images/main/cloud.png';
import boat from '../images/main/boat.png';
import WheelContainer from '../components/WheelContainer';
import LastUpdated from '../components/LastUpdated';
import { FaCaretRight } from "react-icons/fa";
import resume from "../resume/PRAVEEN S (BTECH - IT)- RESUME.pdf";

const Main = ({ setMainInView }) => {
  const [isSeaLoaded, setSeaLoaded] = useState(false);
  const [isCloudsLoaded, setCloudsLoaded] = useState(false);
  const [isCloudLoaded, setCloudLoaded] = useState(false);
  const [isBoatLoaded, setBoatLoaded] = useState(false);

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

      <WheelContainer main={main} content={<LastUpdated />} />

      <div className="cloud-container">
        <div className="resume-container">
          <a className='resume-cloud' href={resume} download>
            <img
              src={cloud}
              alt="Download CV"
              className={!isCloudLoaded ? 'blur' : ''}
              onLoad={() => setCloudLoaded(true)}
            />
          </a>
          <div className="resume-indication">
            Resume <FaCaretRight className='resume-indicator' />
          </div>
        </div>
        <img
          src={clouds}
          alt="clouds"
          className={!isCloudsLoaded ? 'blur' : ''}
          onLoad={() => setCloudsLoaded(true)}
        />
      </div>

      <img
        className={`boat ${!isBoatLoaded ? 'blur' : ''}`}
        src={boat}
        alt="boat"
        onLoad={() => setBoatLoaded(true)}
      />
      <img
        className={`sea ${!isSeaLoaded ? 'blur' : ''}`}
        src={sea}
        alt="sea"
        onLoad={() => setSeaLoaded(true)}
      />
    </div>
  );
};

export default Main;
