import React from 'react'
import "../styles/navigationbar.css"
import { FaHome } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import {Link} from 'react-scroll';



const Navigationbar = ({mainInView,aboutInView,profilesInView,projectInView,contactInView})=>{


    const optionData = [
        {
            linkTo:"home",
            icon: <FaHome style={mainInView ? {color: "rgb(14, 140, 157)"} :{}}/>
        },
        {
          linkTo: "about",
          icon:<BiSolidUserDetail style={aboutInView ? {color: "rgb(14, 140, 157)"} :{}}/>
        },{
          linkTo: "profiles",
          icon: <CgProfile style={profilesInView ? {color: "rgb(14, 140, 157)"} :{}}/>
        },
        {
          linkTo: "projects",
          icon:<FaCode style={projectInView ? {color: "rgb(14, 140, 157)"} :{}}/>
        },
        {
          linkTo: "contact",
          icon:<IoIosContact style={contactInView ? {color: "rgb(14, 140, 157)"} :{}}/>,
        }
      ]
  return (
    <>
        <ul className='navigationbar'>{optionData.map((linkData,index) => (
            <li key={index}>
                <Link className = 'navigationbar-link' to = {linkData.linkTo} smooth = {true} offset = {-100} duration = {500}>{linkData.icon}</Link>
            </li>
            ))}
        </ul>
    </>
  )
}

export default Navigationbar