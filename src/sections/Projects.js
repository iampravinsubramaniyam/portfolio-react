import React, { useContext } from 'react'
import "../styles/project.css"
import points from '../images/projects/points.png'
import {projects} from '../data/data.js'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import DataContext from '../context/DataContext.js'

const Projects = () => {
  const {projectStatus} = useContext(DataContext);

  const project = useRef(null)
  const projectInView = useInView(project)

  const blurryEffect = {
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)"
  }

  if(projectInView){
    projectStatus()
  }


  return (
    <div className='projects' id = 'projects' >
      <ul className="project-wraper" ref = {project} style={projectInView?blurryEffect:{}}>
        {projects.map((data,index) => (

          <li key = {index} className='project-card' style={projectInView ? {transform:"translateX(0px)"}:{transform:"translateX(2000px)"}}>
            <img src={data.image} alt="" />

            <h1 >{data.name}</h1>
            <div className="discription">{data.desc}</div>

            <ul className='tech-stack'>
              <p style={{color: "#6A9C89", whiteSpace: "nowrap"}}>Tech Stack</p>
              {data.techStacks.map((e,index) => (
                <li key = {index}>{e}</li>
              ))}
            </ul>

          </li>

        ))}

      </ul>
      <img className='back-image' src={points} alt="" />
      <h1 className='projects-title'>Projects</h1>
    </div>
  )
}

export default Projects