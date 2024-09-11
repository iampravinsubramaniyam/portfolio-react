

import { TbBrandComedyCentral } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql, SiSpringsecurity } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


import bubble from "../images/about/bubble.png"


import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";



import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiApachemaven } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { SiAgora } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

import meet from "../images/projects/meet.png";
import blog from "../images/projects/blog.png";
import agro from "../images/projects/agrocart.jpg"

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import React from "react";


/**********   Navbar  ************** */


const options = [
  {
    name: "About Me",
    linkTo: "about"
  },{
    name: "Profiles",
    linkTo: "profiles"
  },
  {
    name: "Projects",
    linkTo: "projects"
  },
  {
    name: "Contact",
    linkTo: "contact"
  }
]


/**********   About    ********** */
const techIconStyle = {
  width: "70%",
  height: "70%",
  borderRadius: "50%",
  transition: "1s",
  opacity: "0.8"
}
const skills = [
    {
      name: "C",
      icon: <TbBrandComedyCentral style={techIconStyle}/>
    },
    {
      name: "C++",
      icon: <TbBrandCpp style={techIconStyle} />

    },    
    {
      name: "html",
      icon: <FaHtml5  style={techIconStyle}/>
    },    
    {
      name: "Css",
      icon: <FaCss3Alt  style={techIconStyle}/>
    },    
    {
      name: "js",
      icon: <TbBrandJavascript  style={techIconStyle}/>
    },    
    {
      name: "react",
      icon: <RiReactjsLine  style={techIconStyle}/>
    },    
    {
      name: "java",
      icon: <FaJava  style={techIconStyle}/>
    },   
    {
      name: "springboot",
      icon: <SiSpringboot  style={techIconStyle}/>
    },   
    {
      name: "hibernate",
      icon: <SiHibernate  style={techIconStyle}/>
    },    
    {
      name: "maven",
      icon: <SiApachemaven  style={techIconStyle}/>
    },
    {
      name: "mysql",
      icon: <SiMysql  style={techIconStyle}/>
    },
    {
      name: "git",
      icon: <FaGitAlt  style={techIconStyle}/>
    },
    {
      name: "github",
      icon: <FaGithub  style={techIconStyle}/>
    },
    {
      name: "python",
      icon: <FaPython  style={techIconStyle}/>
    },
    {
      name: "springsecurity",
      icon: <SiSpringsecurity  style={techIconStyle}/>
    }
  ]

  const bubbles = [
    {
      img: bubble,
      styles:{
        width: "30px",
        height: "30px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "40px",
        height: "40px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "80px",
        height: "80px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "20px",
        height: "20px",

      }
    },
    {
      img: bubble,
      styles:{
        width: "50px",
        height: "50px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "30px",
        height: "30px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "80px",
        height: "80px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "30px",
        height: "30px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "35px",
        height: "35px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "70px",
        height: "70px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "30px",
        height: "30px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "45px",
        height: "45px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "50px",
        height: "50px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "20px",
        height: "20px",
      }
    }
    ,
    {
      img: bubble,
      styles:{
        width: "30px",
        height: "30px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "40px",
        height: "40px",
      }
    },
    {
      img: bubble,
      styles:{
        width: "60px",
        height: "60px",
      }
    }
  ]



  /************  Profiles  ********** */

  const profiles = [
    {
      name: "leetcode",
      linkTo: "https://www.instagram.com/pravin.fl/",
      logo: <SiLeetcode className='link-logo'/>
    },
    {
      name: "codechef",
      linkTo: "https://www.codechef.com/users/baite_151",
      logo: <SiCodechef className='link-logo'/>
    },    
    {
      name: "linkedin",
      linkTo: "https://www.linkedin.com/in/pravinsubramaniyam/",
      logo: <IoLogoLinkedin className='link-logo'/>
    },    
    {
      name: "github",
      linkTo: "https://github.com/iampravinsubramaniyam",
      logo: <FaGithub className='link-logo'/>
    }
  ]

  const achiements = ["400+ DSA problems Solved in leetcode","Achieved 50 days and and 100 days batch in leetcode(2023)","Achieved 100 days batch in Leetcode(2024)","Achieved Css certificate in Hacker Rank"]



  /**************   Projects   ************/

  const projects = [
    {
      name: "Bloging website",
      desc: "Created a full-stack blogging website with a dynamic front end and a robust back end for effective content management and seamless user interactions.",
      techStacks: [
        <FaReact className='tech-icon'/>,
        <SiSpringboot className='tech-icon'/>,
        <SiHibernate className='tech-icon'/>,
        <SiApachemaven className='tech-icon'/>,
        <TbBrandMysql className='tech-icon'/>,
        <CgFigma className='tech-icon'/>
      ],
      image: blog,
      link: ""
    },
    {
      name: "Video Conferencing with cc for impaired Hearings",
      desc: "Developed a video conferencing platform with closed captioning for hearing-impaired users, allowing them to download a text file of the session's conversation.",
      image: meet,
      link: "",
      techStacks: [<FaHtml5 className='tech-icon'/>,
      <FaCss3Alt className='tech-icon'/>,
      <FaJs className='tech-icon'/>,
      <FaNodeJs className='tech-icon'/>,
      <SiAgora className='tech-icon'/>
      ]
    },
    {
      name: "Agrocart",
      desc: "Created an e-commerce website for agriculture, facilitating the online purchase of farming supplies and equipment.",
      image: agro,
      link: "",
      techStacks: [<FaHtml5 className='tech-icon'/>,
      <FaCss3Alt className='tech-icon'/>,
      <FaJs className='tech-icon'/>,
      <FaPhp className='tech-icon'/>,
      <SiXampp className='tech-icon'/>,
      <TbBrandMysql className='tech-icon'/>]
    },
  ]


  /************  Footer ********** */


const domains = ["Front-End Development","Back-End Development","Full-Stack Development","Java Development","Programming","UI / UX Design"]

const details = [
  {
    link: "https://wa.me/+919384929320/",
    logo: <FaWhatsapp className='logo'/>
  },
  {
    link: "mailto:pravinsubramaniyam@gmail.com",
    logo: <SiGmail className='logo'/>
  },    {
    link: "https://www.linkedin.com/in/pravinsubramaniyam/",
    logo: <FaLinkedin className='logo'/>
  },    {
    link: "https://www.instagram.com/pravin.fl/",
    logo: <FaInstagram className='logo'/>
  },
]



  export {options}
  export {skills,bubbles}
  export{profiles,achiements}
  export{projects}
  export {domains,details}