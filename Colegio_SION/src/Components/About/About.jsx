import React from 'react'
import './About.css'
import about_img from '../../assets/Galeria/Nostros/01-img.webp'
// import play_icon from '../../assets/play-icon.png'
import { FaYoutube } from "react-icons/fa"

import { CiPlay1 } from "react-icons/ci";

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/> */}
       <CiPlay1 
            className="play-icon" 
            onClick={()=>{setPlayState(true)}}
            size={80} // Ajustamos el tamaño del ícono
            color='white' // Le damos un color blanco para que se vea sobre el fondo
        />
        </div>
        <div className="about-right">
            <h3>Sobre Nosotros</h3>
            <h2>Reseña Histórica </h2>
            <p>La institución Educativa Privada Cristiana "SION" fue fundada mediante la Resolución Directoral N2 2045-DREC, emitida el 06 de octubre de 2010, comenzando sus actividades educativas ese mismo afio. A lo largo de sus 14 años de servicio al distrito de San Sebastián, esta institución ha consolidado un compromiso firme con la educación. El Prof. Aquilino Espinoza Chalco fue su primer promotor y director, liderando la gestión pedagógica, administrativa e institucional en la IE.</p>
            <p>Actualmente, la I.E. "SION" ofrece servicios educativos en los niveles de inicial, primaria y secundaria, operando en su local propio, al lado del instituto Arco Iris. El nombre de la institución tiene un origen bíblico profundo. En las escrituras, "Sion" fue el nombre de una antigua fortaleza que luego se convirtió en la "Ciudad de David" tras ser conquistada por este rey. SION es también mencionado coma el monte santo de Israel, lugar de especial relevancia espiritual. Con el tiempo, este nombre adquirió una connotación más trascendente, representando la presencia de Dios y el reino espiritual en la tradición cristiana.</p>
            <p>En el Nuevo Testamento, el significado de Sion se amplía para referirse al reino espiritual de Dios y Jerusalén celestial. Desde esta perspectiva, la esencia de Sion es la presencia de Jesucristo y el Espíritu Santo, que se manifiesta donde haya dos o tres reunidos en Su nombre, convirtiendo esa congregación en el "pueblo escogido de Sion". Por lo tanto, Sion simboliza la conexión directa entre lo humano y lo divino, desde el corazón del hombre hasta la mayor comunidad cristiana, reflejando la certeza de que el reino de Dios está entre nosotros.</p>
            <p>A lo largo de estos años, la I.E. "SION" ha logrado una sólida posición pedagógica gracias a su equipo docente, que integra en su labor metodologías activas como los aprendizajes basados	en investigación	(ABI)	y en problemas	(ABP).	Este enfoque incorpora	las interacciones pedagógicas fundamentales, coma la atención y la memoria, en consonancia con los últimos hallazgos de la neuroeducación.
En 2024, la institución ha innovado en su oferta educativa con la implementación de talleres de teatro, pintura y ludoteca recreativa, colocando a la I.E. "SION" a la vanguardia de las instituciones que promueven buenas prácticas docentes. Con esta renovación, la escuela reafirma su compromiso con una educación integral, orientada al desarrollo pleno de sus estudiantes.
</p>
           
            
        </div>
    </div>
  )
}

export default About
