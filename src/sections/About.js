import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import "../styles/about.css";

import { skillCategories } from '../data/data.js';
import stone from "../images/about/wall.png";
import BubblesAnimation from '../components/BubblesAnimation.js';

import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";


const About = ({ setAboutInView }) => {
  const tech = useRef(null);
  const about = useRef(null);
  const [isStoneLoaded, setStoneLoaded] = useState(false);

  const aboutStatus = useInView(about);
  const techStatus = useInView(tech);

  useEffect(() => {
    setAboutInView(aboutStatus);
  }, [aboutStatus, setAboutInView]);

  return (
    <div className='about' id='about' ref={about}>
      <div className="about-wraper">
        <div className="content">
          <div className={`about-heading ${aboutStatus ? "show-about-heading" : "hide-about-heading"}`}>
            About Me
          </div>
<p className="para">
  Hey!<br /><br />
  I'm a <strong className="highlight">Java Full Stack Developer</strong> with <strong className="highlight">2+ years of professional experience</strong> building and shipping <strong className="highlight">10+ production-grade, bug-free applications</strong> using <strong className="highlight">React, Redux, TypeScript, Java, Spring Boot,</strong> and <strong className="highlight">SQL</strong>. Since September 2024, I've been working at BAPS Consulting in Coimbatore, delivering <strong className="highlight">reliable, bug-free software</strong> from idea to production.
  <br /><br />
  I can <strong className="highlight">manage an entire software project solo</strong>, end to end:
  <br />
  <strong className="highlight">Design</strong> → <strong className="highlight">Development</strong> → <strong className="highlight">Deployment</strong> → <strong className="highlight">Monitoring</strong> → <strong className="highlight">Maintenance</strong> → <strong className="highlight">Quick Production Support</strong>
  <br /><br />
  I build responsive, state-driven frontends with <strong className="highlight">React, TypeScript, and Tailwind CSS</strong>, backed by <strong className="highlight">Spring Boot, JPA/Hibernate</strong>, and well-tuned SQL schemas. I also manage <strong className="highlight">Linux server</strong> deployments, monitoring, and backups, and I've kept a <strong className="highlight">bug-free production record</strong> while handling multiple projects at the same time.
  <br /><br />
  Alongside my core Java full stack work, I also develop <strong className="highlight">SAP Fiori/UI5</strong> applications, integrate SAP Build workflows, and deploy on <strong className="highlight">SAP BTP</strong>.
  <br /><br />
  I enjoy building scalable, user-focused applications, learning new technologies, and sharing what I learn. Feel free to reach out if you'd like to talk tech, collaborate, or connect.
</p>

<div className={`about-contact ${aboutStatus ? "contact-animate" : ""}`}>
  <span className="about-contact-label">Let's Connect !!</span>
  <br></br>

  <div className="splitLine"></div>

  <a className="about-mail" href="tel:+919384929320">
    <FaPhoneAlt className="about-phone-icon" />
    +91 93849 29320
  </a>
  <a className="about-mail" href="mailto:pravinsubramaniyam@gmail.com">
    <SiGmail className="about-mail-icon" />
    pravinsubramaniyam@gmail.com
  </a>
</div>


        </div>

      <div className="tech-skills-container">
  <div className="tech-box" ref={tech}>
    <h3 className="skillSetHeading">Technical Skills</h3>

    {skillCategories.map((category, catIndex) => (
      <div className="skill-category" key={category.title}>
        <h4 className="skill-category-title">{category.title}</h4>
        <ul className="skill-list">
          {category.skills.map((skill, index) => (
            <li
              key={skill.name}
              className={`skill-chip ${techStatus ? "show-chip" : "hide-chip"}`}
              style={{ transitionDelay: `${catIndex * 0.15 + index * 0.05}s` }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
      </div>

      <img
        className={`stone-wall ${!isStoneLoaded ? 'blur' : 'loaded'}`}
        src={stone}
        alt="stone wall"
        onLoad={() => setStoneLoaded(true)}
      />
      <BubblesAnimation />
    </div>
  );
};

export default About;
