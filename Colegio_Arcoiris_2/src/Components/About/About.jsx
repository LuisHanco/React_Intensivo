import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>Sobre Nosotros</h3>
            <h2>Breve Reseña Institucional</h2>
            <p>La Institución Educativa Privada "ARCO IRIS" es un referente de calidad y excelencia en el distrito de San Sebastián, Cusco. Guiados por nuestro Proyecto Educativo Institucional (PEI) 2024–2028, nuestra misión es formar ciudadanos competentes y responsables, promoviendo el liderazgo y la conciencia social desde el Nivel Inicial hasta Secundaria.</p>
            <p>Nuestra gestión se enfoca en tres ejes clave: calidad pedagógica (centrada en el desarrollo de competencias), calidad institucional (fortaleciendo la comunidad educativa) y calidad administrativa (asegurando la transparencia y eficiencia). En ARCO IRIS, nos comprometemos a brindar un ambiente seguro y óptimo donde cada estudiante pueda gestionar su aprendizaje de manera autónoma y alcanzar su máximo potencial.</p>
            
        </div>
    </div>
  )
}

export default About
