import React from 'react'
import './Redes.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const Redes = () => {
  return (
    <div className='redes'>
     <div className="container-redes">
       <ul className='tp-uno'>
        <li>Siguenos en:</li>
        <li><a href=""><FaFacebookF /></a></li>
        <li><a href=""><FaTiktok /></a></li>
        <li><a href=""><IoLogoWhatsapp /></a></li>
        <li><a href=""><MdEmail /></a></li>
        
      </ul>
      <ul className='tp-dos'>
        <li><FaRegClock /> <span>Lunes - Viernes: 8:00 am - 5:00 pm</span></li>
        <li><a href=""><PiStudentBold /><span>Alumnos</span></a></li>
        <li><a href=""><GiTeacher /><span>Docentes</span></a></li>
      </ul>
     </div>
    </div>
  )
}

export default Redes
