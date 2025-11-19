import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import Redes from './Components/Redes/Redes'

const App = () => {

const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Redes/>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='' title='NUESTROS PROGRAMAS EDUCATIVOS' />
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galeria' title='Fotos del Colegio' />
        <Campus/>
        {/* <Title subTitle='Testimonios' title='Que dice el Estudiante' />
        <Testimonials/> */}
        <Title subTitle='Contactanos' title='Estamos muy cerca de ti' />
        <Contact/>
      </div>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
