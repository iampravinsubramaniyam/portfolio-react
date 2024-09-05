import "../styles/project.css";
import points from '../images/projects/points.png';
import { projects } from '../data/data.js';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Projects = ({ setProjectsInView }) => {
  const blurryEffect = {
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)"
  };

  const project = useRef(null)
  const projectStatus = useInView(project);

  useEffect(() => {
    setProjectsInView(projectStatus);
  }, [projectStatus, setProjectsInView]);

  return (
    <div className='projects' id='projects'>
      <ul className="project-wraper" ref={project} style={projectStatus ? blurryEffect : {}}>
        {projects.map((data, index) => (
          <li
            key={index}
            className='project-card'
            style={projectStatus ? { transform: "translateX(0px)", transition: "transform 1s ease" } : { transform: "translateX(2000px)", transition: "transform 0.5s ease" }}
          >
            <img src={data.image} alt={`Screenshot of ${data.name}`} />
            <h1>{data.name}</h1>
            <div className="description">{data.desc}</div>
            <ul className='tech-stack'>
              <p style={{ color: "#6A9C89", whiteSpace: "nowrap" }}>Tech Stack</p>
              {data.techStacks.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <img className='back-image' src={points} alt="Decorative points background" />
      <h1 className='projects-title'>Projects</h1>
    </div>
  );
};

export default Projects;
