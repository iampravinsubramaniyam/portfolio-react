import React, { useContext, useEffect } from 'react'
import "../styles/about.css"
import {skills, bubbles} from '../data/data.js'
import stone from "../images/about/wall.png"
import {useInView} from 'framer-motion'
import { useRef } from 'react'
import DataContext from '../context/DataContext.js'
import BubblesAnimation from '../components/BubblesAnimation.js'


const About = () => {
  const {aboutStatus} = useContext(DataContext);

  const about = useRef(null)
  const tech = useRef(null)

  const aboutContainer = useInView(about);
  const techSkills = useInView(tech);

  useEffect(()=>{
    if(aboutContainer){
      aboutStatus();
    }
  },[aboutContainer])




  return (
    <div className='about' id = 'about'ref={about}>
      <div className="about-wraper">

        <div class="content">
            <div class = "about-heading" style={aboutContainer?{width: "120px"}:{width: "0px"}}>About Me</div>
            <p 
              class = "para"

            >Hey !<br></br><br></br> I am a recent graduate with a strong foundation in computer science and engineering. My expertise lies in programming languages such as C and C++, where I have honed my skills in algorithm design and data structures. Additionally, I am proficient in web development technologies, including HTML, CSS, and JavaScript, allowing me to create dynamic and responsive web applications. I also have experience with React for building user interfaces and Java with Spring Boot, Hibernate, and JPA for backend development. My knowledge extends to database management with MySQL, enabling me to design and manage robust data systems.
            <br></br><br></br>I'm
                excited to bring my knowledge and energy to a
                Organization. Looking for a dynamic position where I can
                use my academic background, pick the brains of seasoned
                experts, and actively support the company's expansion.
          </p>
        </div>

        <div className="tech-skills-container">
          <div className="tech-box">
          <h3 className = "skillSetHeading">Tech Stack</h3>
            <ul className='tech-skills-wraper' ref = {tech}>
              {skills.map(skill => (
                <li style={techSkills ? {width: "40px"} : {width: "0px"}}>
                  <img src={skill.path} alt={skill.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>

      <img className = 'stone-wall' src={stone} alt="stone" />
        <BubblesAnimation/>
    </div>
  )
}

export default About