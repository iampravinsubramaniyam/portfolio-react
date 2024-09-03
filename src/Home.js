import React from 'react'
import "./styles/home.css"
import Header from './sections/Header'
import Main from './sections/Main'
import About from './sections/About'
import Profiles from './sections/Profiles'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Navigationbar from './components/Navigationbar'
import { DataProvider } from "./context/DataContext"


const Home = () => {
  return (
    <div className='home'>
        <DataProvider>
          <Header/>
          <Main/>
          <About/>
          <Profiles/>
          <Projects/>
          <Footer/>
          <Navigationbar/>
        </DataProvider>
    </div>
  )
}

export default Home