import React from 'react'
import './Redes.css'
import { FaFacebookF, FaTiktok, FaRegClock } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const Redes = () => {

  // Función de manejo de clic para mostrar el mensaje de "En desarrollo"
  const handleUnderConstructionClick = (e, targetName) => {
    // 🛑 ESENCIAL: Detiene la acción por defecto del enlace (navegación),
    // asegurando que se muestre el alert.
    e.preventDefault(); 
    
    // Muestra el mensaje solicitado con el nombre del elemento para claridad.
    alert(`El enlace para ${targetName} aún no está disponible. Estamos trabajando en ello.`); 
  };
  
  // Enlaces reales (DEBES REEMPLAZAR CON TUS VALORES)
  const socialLinks = {
    facebook: 'https://www.facebook.com/sionsansebastian',
    tiktok: 'https://www.tiktok.com/@TuUsuarioTikTok',
    whatsapp: 'https://wa.me/51932661357',
    email: 'mailto:tu.correo@ejemplo.com',
  };

  return (
    <div className='redes'>
     <div className="container-redes">
       <ul className='tp-uno'>
        <li>Siguenos en:</li>
        
        {/* ENLACES A REDES SOCIALES (FUNCIONALES) */}
        <li><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
        <li><a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a></li>
        <li><a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a></li>
        <li><a href={socialLinks.email}><MdEmail /></a></li>
        
        {/* 💡 Si quieres que el mensaje de "en desarrollo" salga en los de redes,
             reemplaza las líneas de arriba por:
             <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'Facebook')}><FaFacebookF /></a></li>
             ... y así sucesivamente para todas las redes.
        */}
        
      </ul>
      <ul className='tp-dos'>
        {/* Horario - No es un enlace */}
        <li><FaRegClock /> <span>Lunes - Viernes: 8:00 am - 4:00 pm</span></li>

        {/* ENLACES INTERNOS (APLICANDO EL MENSAJE DE "EN CONSTRUCCIÓN") */}
        <li>
          {/* Se usa href="#" y el manejador onClick */}
          <a 
            href="#" 
            onClick={(e) => handleUnderConstructionClick(e, 'la sección de Alumnos')}>
            <PiStudentBold />
            <span>Alumnos</span>
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={(e) => handleUnderConstructionClick(e, 'la sección de Docentes')}>
            <GiTeacher />
            <span>Docentes</span>
          </a>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Redes