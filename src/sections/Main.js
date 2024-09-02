import React from 'react'
import "../styles/main.css"
import sea from '../images/main/sea.png'
import boat from '../images/main/boat.png'
import wheel from '../images/main/wheel.png'
import AutoType from '../components/AutoType'
import LastUpdated from '../components/LastUpdated'
import clouds from '../images/main/clouds.png'
import cloud from '../images/main/cloud.png'




const Main = () => {
  return (
    <div className='main' id = "home" >
      <div className="autospell-warper">
          <h1>Hey !..</h1>
          <div className="autospell">I'm <AutoType/></div>
      </div>

      <div className="wheel-container">
        <img className='wheel' src={wheel} alt="wheel" />
        <LastUpdated/>
      </div>

      <div className="cloud-container">
        <div className="resume-container">
          <a className='resume-cloud' href={cloud} download>
            <img src={cloud} alt="cv cloud" />
            <a className = 'download-title' href={cloud} download>Resume</a>
            </a>
        </div>
        <img src={clouds} alt="clouds" />
      </div>


      <img className= 'boat' src={boat} alt="boat" />
      <img className = "sea" src= {sea} alt="sea" />
    </div>
  )
}

export default Main