import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import "../styles/about.css";

import { skillCategories } from '../data/data.js';
import stone from "../images/about/wall.png";
import BubblesAnimation from '../components/BubblesAnimation.js';

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
        I'm a Java Full Stack Developer with 2+ years of professional experience building and shipping 10+ production-grade applications using React, Redux, TypeScript, Java, Spring Boot, and SQL. Since September 2024, I've been working at BAPS Consulting in Coimbatore, where I own the full software lifecycle: UI design, RESTful API development, deployment, and production support.
        <br /><br />
        I build responsive, state-driven frontends with React, TypeScript, and Tailwind CSS, backed by Spring Boot, JPA/Hibernate, and well-tuned SQL schemas. I also manage Linux server deployments, monitoring, and backups, and I've kept a bug-free production record while handling multiple projects at the same time.
        <br /><br />
        Alongside my core Java full stack work, I also develop SAP Fiori/UI5 applications, integrate SAP Build workflows, and deploy on SAP BTP.
        <br /><br />
        I'm looking for a role where I can keep building scalable, user-focused applications, learn from experienced engineers, and take on bigger ownership.
      </p>
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
