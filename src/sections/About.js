import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import "../styles/about.css";
import { skills } from '../data/data.js';
import stone from "../images/about/wall.png";
import BubblesAnimation from '../components/BubblesAnimation.js';

const About = ({ setAboutInView }) => {
  const tech = useRef(null);
  const about = useRef(null)
  const aboutStatus = useInView(about);
  const techStatus = useInView(tech)

  useEffect(() => {
    setAboutInView(aboutStatus);
  }, [aboutStatus, setAboutInView]);

  return (
    <div className='about' id='about' ref={about}>
      <div className="about-wraper">
        <div className="content">
          <div className="about-heading" style={aboutStatus ? { width: "120px" } : { width: "0px" }}>About Me</div>
          <p className="para">
            Hey!<br /><br />
            I am a recent graduate with a strong foundation in computer science and engineering. My expertise lies in programming languages such as C and C++, where I have honed my skills in algorithm design and data structures. Additionally, I am proficient in web development technologies, including HTML, CSS, and JavaScript, allowing me to create dynamic and responsive web applications. I also have experience with React for building user interfaces and Java with Spring Boot, Hibernate, and JPA for backend development. My knowledge extends to database management with MySQL, enabling me to design and manage robust data systems.
            <br /><br />
            I'm excited to bring my knowledge and energy to an organization. Looking for a dynamic position where I can use my academic background, pick the brains of seasoned experts, and actively support the company's expansion.
          </p>
        </div>

        <div className="tech-skills-container">
          <div className="tech-box">
            <h3 className="skillSetHeading">Tech Stack</h3>
            <ul className='tech-skills-wraper' ref={tech}>
              {skills.map((skill, index) => (
                <li key={index} style={techStatus ? { width: "40px" } : { width: "0px" }}>
                  <img src={skill.path} alt={skill.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <img className='stone-wall' src={stone} alt="stone" />
      <BubblesAnimation />
    </div>
  );
};

export default About;
