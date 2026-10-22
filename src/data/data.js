

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

import { SiC, SiCplusplus, SiTailwindcss, SiSap, SiSpring,
  SiCloudfoundry, SiPostman, SiIntellijidea, 
  SiMicrosoftsqlserver } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaProjectDiagram, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


import { SiTypescript, SiRedux, SiMicrosoftazure, SiGithubactions } from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";
import { FaBitbucket, FaLinux, FaServer, FaDatabase } from "react-icons/fa";


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
const icon = (Icon, color) => <Icon color={color} className="skill-icon" />;

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: icon(FaJava, "#f89820") },
      { name: "JavaScript", icon: icon(TbBrandJavascript, "#f0db4f") },
      { name: "TypeScript", icon: icon(SiTypescript, "#3178c6") },
      { name: "Python", icon: icon(FaPython, "#3776ab") },
      { name: "C", icon: icon(SiC, "#5c6bc0") },
      { name: "C++", icon: icon(SiCplusplus, "#00599c") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: icon(RiReactjsLine, "#61dafb") },
      { name: "React Native", icon: icon(TbBrandReactNative, "#61dafb") },
      { name: "Redux", icon: icon(SiRedux, "#764abc") },
      { name: "HTML", icon: icon(FaHtml5, "#e34f26") },
      { name: "CSS", icon: icon(FaCss3Alt, "#1572b6") },
      { name: "Tailwind CSS", icon: icon(SiTailwindcss, "#06b6d4") },
      { name: "SAP Fiori/UI5", icon: icon(SiSap, "#0faaff") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: icon(SiSpringboot, "#6db33f") },
      { name: "Spring MVC", icon: icon(SiSpring, "#6db33f") },
      { name: "Spring Security", icon: icon(SiSpringsecurity, "#6db33f") },
      { name: "Node.js", icon: icon(FaNodeJs, "#339933") },
      { name: "RESTful APIs", icon: icon(TbApi, "#e8590c") },
      { name: "Microservices", icon: icon(FaProjectDiagram, "#7048e8") },
      { name: "JPA", icon: icon(FaDatabase, "#1c7ed6") },
      { name: "Hibernate", icon: icon(SiHibernate, "#8a9a5b") },
      { name: "Maven", icon: icon(SiApachemaven, "#c71a36") },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: icon(SiMysql, "#4479a1") },
      { name: "SQL", icon: icon(TbSql, "#f29111") },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Azure", icon: icon(SiMicrosoftazure, "#0078d4") },
      { name: "CI/CD", icon: icon(SiGithubactions, "#2088ff") },
      { name: "Linux Server Mgmt", icon: icon(FaLinux, "#e5b800") },
      { name: "SAP BTP Cockpit", icon: icon(SiSap, "#0faaff") },
      { name: "Cloud Foundry", icon: icon(SiCloudfoundry, "#0c9ed5") },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: icon(FaGitAlt, "#f05032") },
      { name: "GitHub", icon: icon(FaGithub, "#24292e") },
      { name: "Bitbucket", icon: icon(FaBitbucket, "#0052cc") },
      { name: "IntelliJ IDEA", icon: icon(SiIntellijidea, "#fe315d") },
      { name: "VS Code", icon: icon(VscVscode, "#007acc") },
      { name: "Postman", icon: icon(SiPostman, "#ff6c37") },
      { name: "MySQL Workbench", icon: icon(SiMysql, "#00758f") },
      { name: "Azure Data Studio", icon: icon(SiMicrosoftsqlserver, "#cc2927") },
      { name: "Figma", icon: icon(FaFigma, "#f24e1e") },
      { name: "SAP Business App Studio", icon: icon(SiSap, "#0faaff") },
    ],
  },
];

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
      linkTo: "https://leetcode.com/u/iampravin/",
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


  const achiements = [
  "Solved 400+ DSA problems on LeetCode",
  "Earned 50-day and 100-day streak badges on LeetCode (2023 & 2024)",
  "Earned CSS Certification on HackerRank",
  "Delivered 10+ end-to-end projects, including 5 full-stack applications"
]


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


const domains = [
  "Java Full Stack",
  "Full-Stack Development",
  "Front-End",
  "Back-End",
]

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
  export{profiles,achiements}
  export{projects}
  export {domains,details}
  export { skillCategories, bubbles }