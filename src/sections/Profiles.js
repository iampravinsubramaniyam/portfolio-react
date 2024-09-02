import React from 'react'
import "../styles/profiles.css"
import mountain from '../images/profiles/mountain.png'
import {profiles,achiements} from '../data/data'
import { useInView } from 'framer-motion';
import { useRef } from 'react';





const Profiles = () => {

  const profilesContainer = useRef(null)
  const profilesContainerInView = useInView(profilesContainer);

  return (
    <div className='profiles' id = 'profiles'>

      <div className="profiles-container">
        <div className="profiles-wraper">
            <ul className="myProfiles" ref = {profilesContainer}>
                {profiles.map(profile => (
                  <li 
                    style={profilesContainerInView? {top: "0px"}: {top: "120px"}}
                    className="link-wraper">
                    <a href={profile.linkTo}>{profile.logo}</a>
                  </li>
                ))}
            </ul>
        </div>

        <div className="achivement-wraper" style={profilesContainerInView? {transform: "translateX(0px)"}: {transform: "translateX(200px)"}}>
              <h1>Achivements</h1>
              <ul className="achivement-content">
                  {achiements.map(data => (
                    <li>{data+"."}</li>
                  ))}
              </ul>
        </div>
      </div>

      <img className = 'mountain' src={mountain} alt="" />
      <h1 className='profiles-heading'>Profiles<div className='hider' style={profilesContainerInView ? {left: "120%"}: {left: "0%"}}></div></h1>
    </div>
  )
}

export default Profiles