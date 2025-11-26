import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import Redes from './Components/Redes/Redes'
import NewsSliderModal from './Components/NewsSliderModal/NewsSliderModal'
import Transparency from './Components/Transparencia/Transparency'
import MissionVision from './Components/MisionVision/MissionVision'
import Services from './Components/Services/Services'
import Enrollment from './Components/Enrollment/Enrollment'

const App = () => {

const [playState, setPlayState] = useState(false);
const [modalVisible, setModalVisible] = useState(true);

// Función para cerrar el modal de noticias
  const closeModal = () => {
    setModalVisible(false);
    // 💡 Consejo: Aquí podrías usar sessionStorage para que el modal no aparezca 
    // en la misma sesión de navegador después de cerrarlo una vez.
  };

  return (
    <div>

      {modalVisible && <NewsSliderModal isVisible={modalVisible} onClose={closeModal} />}
      <Redes/>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About setPlayState={setPlayState}/>
        <MissionVision/>
        <Title subTitle='' title='NUESTROS PROGRAMAS EDUCATIVOS' />
        <Programs/>
        <Enrollment/>
        <Title subTitle='Galeria' title='Fotos del Colegio' />
        <Campus/>
        <Services/>
        <Transparency/>
        <Title subTitle='Contactanos' title='Estamos muy cerca de ti' />
        <Contact/>
      </div>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
