import "../styles/project.css";
import points from '../images/projects/points.png';
import { projects } from '../data/data.js';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Projects = ({ setProjectsInView }) => {


  const project = useRef(null)
  const projectStatus = useInView(project);

  useEffect(() => {
    setProjectsInView(projectStatus);
  }, [projectStatus, setProjectsInView]);

  return (
    <div className='projects' id='projects'>
      <ul className={`project-wraper ${projectStatus?"blur-effect":""}`} ref={project} >
        {projects.map((data, index) => (
          <li
            key={index}
            className={`project-card ${projectStatus?"show-projects":"hide-projects"}`}>
            <img src={data.image} alt={`Screenshot of ${data.name}`} />
            <h1>{data.name}</h1>
            <div className="description">{data.desc}</div>
            <ul className='tech-stack-wraper'>
              <p style={{ color: "#6A9C89", whiteSpace: "nowrap" }}>Tech Stack</p>
              <div className="tech-stack">
                {data.techStacks.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </div>
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
