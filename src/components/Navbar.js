import React, { useEffect, useState } from 'react'
import "../styles/header.css"
import {Link} from 'react-scroll';
import {options} from '../data/data.js'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import useWindowDimensions from '../config/useWindowDimensions.js'


const Navbar = () => {
  const { height, width } = useWindowDimensions();


  const [menuStyles, setMenuStyles] = useState({
    display : "none",
    top: "-500px",
    right: "-200px"
  })


  const [barStyles, setBarStyles] = useState({
    display : "inline"
  })

  useEffect(()=>{
    const setStyles = () =>{
      const finalBarStyle ={
        display: width <= 770 ? "inline": "none"
      }
      setBarStyles(finalBarStyle)
    }
    setStyles();
  },[width])

  


  const handleMenu = (status) =>{
    if(status){
      setBarStyles({display: "none"})
    }else{
      setBarStyles({display: "inline"})
    }

    let newMenuStyle = {
      display: menuStyles.display === "none"? "inline": "none",
      top: menuStyles.top === "-500px" ? "0px":"-500px",
      right: menuStyles.right === "-200px" ? "0px":"-200px"
    }
    setMenuStyles(newMenuStyle);
  }

  return (
    <div className='navbar'>
      <Link className = 'logo' style = {{color:"rgb(14, 140, 157)", cursor: "pointer"}} to = "home" smooth = {true} offset = {-100} duration = {500}>Praveen.Fl</Link>
      <ul className='navbar-link-container'>{options.map(linkData => (
        <li>
            <Link className = 'navbar-link' to = {linkData.linkTo} smooth = {true} offset = {-100} duration = {500}>{linkData.name}</Link>
        </li>
      ))}
      </ul>
      <IoMdMenu 
        onClick={() => handleMenu(true)}
        style={barStyles}
        className='menu-open-bar'
      />

      <div className="drop-menu-container" style = {menuStyles}>
        <ul className='drop-menu-wrapper'>{options.map(linkData => (
            <li>
                <Link className = 'navbar-link' to = {linkData.linkTo} smooth = {true} offset = {-100} duration = {500}>{linkData.name}</Link>
            </li>
          ))}
        </ul>
        <IoCloseSharp 
          className='close-bar'
          onClick={() => handleMenu(false)}
        />
      </div>


      </div>
  )
}

export default Navbar