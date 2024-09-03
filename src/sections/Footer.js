import React, { useContext, useEffect } from 'react'
import "../styles/footer.css"
import { domains,details } from '../data/data'
import {useInView} from 'framer-motion'
import { useRef } from 'react'
import DataContext from '../context/DataContext'

const Footer = () => {
  const {contactStatus} = useContext(DataContext)
  const contact = useRef(null)
  const contactInView = useInView(contact)

  useEffect(()=>{
    if(contactInView){
      contactStatus()
    }
  },[contactInView])


  return (
    <div className='footer' >

        <div className="domain-container">
          <div className="domain-wraper">
            <h1>I'm Interested About</h1>
            <ul className="domain-box">
              {domains.map(domain =>(
                <li className='domain-name'>{domain}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-container" ref = {contact} id = 'contact'>
          <div className="contact-wraper">
            <h1>Contact Me</h1>
            <ul className="contact-box">
              {details.map(data => (
                <li style={contactInView?{top: "0px"}:{top: "80px"}}><a href={data.link} target='blank'>{data.logo}</a></li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer