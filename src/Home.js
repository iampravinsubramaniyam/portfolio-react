import React , {useEffect, useState} from 'react'
import "./styles/home.css"
import Header from './sections/Header'
import Main from './sections/Main'
import About from './sections/About'
import Profiles from './sections/Profiles'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Navigationbar from './components/Navigationbar'



const Home = () => {

  const [mainInView, setMainInView] = useState(true);
  const [aboutInView, setAboutInView] = useState(true);
  const [profilesInView, setProfilesInView] = useState(true);
  const [projectInView, setProjectsInView] = useState(true);
  const [contactInView, setContactInView] = useState(true);

  useEffect(()=>{
    const setTitle = () =>{
      document.title = mainInView? "Praveen.Fl | Home": aboutInView? "Praveen.Fl | About":profilesInView?"Praveen.Fl | Profiles" : projectInView ? "Praveen.Fl | Projects": "Praveen.Fl | Contact";
    }

    setTitle();

  },[mainInView,aboutInView,profilesInView,projectInView,contactInView])

  return (
    <div className='home'>
          <Header/>
          <Main setMainInView = {setMainInView}/>
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