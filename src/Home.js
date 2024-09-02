import React from 'react'
import "./styles/home.css"
import Header from './sections/Header'
import Main from './sections/Main'
import About from './sections/About'
import Profiles from './sections/Profiles'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Main/>
        <About/>
        <Profiles/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home