import React, { useRef } from 'react'
import "../styles/profiles.css"
import mountain from '../images/profiles/mountain.png'
import {profiles,achiements} from '../data/data'
import { useInView } from 'framer-motion';
import { useEffect } from 'react';


const Profiles = ({setProfilesInView}) => {

  const profile = useRef(null)
  const profileStatus = useInView(profile);

  const profileIcons = useRef(null)
  const profileIconsStatus = useInView(profileIcons);


  useEffect(() => {
    setProfilesInView(profileStatus);
  }, [profileStatus, setProfilesInView]);

  return (
    <div className='profiles' id = 'profiles'>

      <div className="profiles-container"  ref = {profile}>
        <div className="profiles-wraper">
            <ul className="myProfiles" ref={profileIcons}>
                {profiles.map((profile,index) => (
                  <li 
                    key ={index}
                    className = {`link-wraper ${profileIconsStatus? "show-profiles":"hide-profiles"}`}>
                    <a href={profile.linkTo}>{profile.logo}</a>
                  </li>
                ))}
            </ul>
        </div>

        <div className={`achivement-wraper ${profileStatus ? "show-achivement": "hide-achiement"}`}>
              <h1>Achivements</h1>
              <ul className="achivement-content">
                  {achiements.map((data,index) => (
                    <li key = {index}>{data+"."}</li>
                  ))}
              </ul>
        </div>
      </div>

      <img className = 'mountain' src={mountain} alt="" />
      <h1 className='profiles-heading'>Profiles<div className='hider' style={profileStatus ? {left: "120%"}: {left: "0%"}}></div></h1>

    </div>
  )
}

export default Profiles