import React, { useContext, useState } from 'react'
import "../styles/navigationbar.css"
import { FaHome } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import {Link} from 'react-scroll';
import DataContext from '../context/DataContext';



const Navigationbar = () => {

    const {homeIconStyle,aboutIconStyle,profileIconStyle,projectIconStyle,contactIconStyle} = useContext(DataContext)
    const optionData = [
        {
            linkTo:"home",
            icon: <FaHome style={homeIconStyle}/>
        },
        {
          linkTo: "about",
          icon:<BiSolidUserDetail style={aboutIconStyle}/>
        },{
          linkTo: "profiles",
          icon: <CgProfile style={profileIconStyle}/>
        },
        {
          linkTo: "projects",
          icon:<FaCode style={projectIconStyle}/>
        },
        {
          linkTo: "contact",
          icon:<IoIosContact style={contactIconStyle}/>,
        }
      ]
  return (
    <>
        <ul className='navigationbar'>{optionData.map(linkData => (
            <li>
                <Link className = 'navigationbar-link' to = {linkData.linkTo} smooth = {true} offset = {-100} duration = {500}>{linkData.icon}</Link>
            </li>
            ))}
        </ul>
    </>
  )
}

export default Navigationbar