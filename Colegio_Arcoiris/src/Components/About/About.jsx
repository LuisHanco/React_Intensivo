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
            <p>La Institución Educativa Privada “ARCO IRIS”, se encuentra ubicada en la Prolongación Av. de la Cultura A-14 Paradero Camionero, del Distrito de San Sebastián, Provincia y Departamento del Cusco, fue creada por R.D. Nº 0279 del 18 de febrero de 1998 - DREC, en los tres niveles de Educación Básica Regular: Inicial, Primaria y Secundaria; empezando a funcionar el primero de marzo del mismo año, con una población estudiantil de 13 alumnos, gracias a su gestor principal de quien en vida fue el Profesor AQUILINO ESPINOZA CHALLCO.</p>
            <p>Actualmente la Institución Educativa Privada “ARCO IRIS”, atiende a una población estudiantil de más de 300 alumnos distribuidos en los tres niveles de Educación Básica Regular, siendo la Promotora señora C.P.C. BETTY ELISABETH ROJAS DE ESPINOZA y la Directora Lic. KARINA LIZT ESPINOZA ROJAS, quienes laboran intensamente para el mejor progreso de la Institución; y así lograr el mejor servicio educativo en bien de la sociedad cusqueña y por ende del país.</p>
            <p>La Institución Educativa, cuenta con docentes capacitados y especializados en las diferentes ramas del conocimiento humano; así como la enseñanza, orientada a la práctica constante de valores y buenas actitudes, los mismos que deben perennizarse; en el sentimiento de identificación de todo alumno del colegio “ARCO IRIS”.</p>
            <h4>“TODO ARCO-IRIANO ES SOLIDARIO, HONRADO Y AFECTUOSO”</h4>
            
        </div>
    </div>
  )
}

export default About
