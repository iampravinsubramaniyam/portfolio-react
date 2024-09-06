import React , {useState} from 'react'
import "./styles/home.css"
import Header from './sections/Header'
import Main from './sections/Main'
import About from './sections/About'
import Profiles from './sections/Profiles'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Navigationbar from './components/Navigationbar'


import sea from "./images/main/sea.png"
import clouds from './images/main/clouds.png';
import cloud from './images/main/cloud.png';
import boat from './images/main/boat.png';
import wheel from './images/main/wheel.png';



const Home = () => {

  const [mainInView, setMainInView] = useState(true);
  const [aboutInView, setAboutInView] = useState(true);
  const [profilesInView, setProfilesInView] = useState(true);
  const [projectInView, setProjectsInView] = useState(true);
  const [contactInView, setContactInView] = useState(true);


  return (
    <div className='home'>
          <Header/>
          <Main 
            setMainInView = {setMainInView}
            sea = {sea}
            clouds = {clouds}
            cloud = {cloud}
            boat = {boat}
            wheel = {wheel}
          />
          <About setAboutInView = {setAboutInView}/>
          <Profiles setProfilesInView = {setProfilesInView}/>
          <Projects setProjectsInView = {setProjectsInView}/>
          <Footer setContactInView = {setContactInView}/>
          <Navigationbar
              mainInView = {mainInView}
              aboutInView ={aboutInView}
              profilesInView = {profilesInView}
              projectInView ={projectInView}
              contactInView = {contactInView}
          />
    </div>
  )
}

export default Home