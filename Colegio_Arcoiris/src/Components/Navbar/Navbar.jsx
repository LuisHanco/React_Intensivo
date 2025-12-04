

import React, {useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
// ¡La importación de menu_icon DEBE ELIMINARSE!

import {Link, Element} from 'react-scroll'

// ÍCONOS DE REACT NECESARIOS
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  // 💡 BLOQUE useEffect LIMPIO Y CORREGIDO
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Función de limpieza para evitar fugas de memoria
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const [mobileMenu, setMobileMenu] = useState(false);
  
  // FUNCIÓN DE TOGGLE PARA EL MENÚ
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className= {`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo collegue'/>
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><a href=""><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Incio</Link></a></li>
        <li><a href=""><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>Nosotros</Link></a></li>
        <li><a href=""><Link to='programs' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Niveles</Link></a></li>
        <li><a href=""><Link to='enrollment' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Matriculas</Link></a></li>
        <li><a href=""><Link to='services' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Servicios</Link></a></li>
        <li><a href=""><Link to='transparency' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Transparencia</Link></a></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn-1' onClick={toggleMenu}>Contacto</Link></li>
      </ul>
      
      {/* CONTENEDOR E ICONO DINÁMICO */}
      <div className="menu-icon-container" onClick={toggleMenu}>
        {mobileMenu ? 
          <FaTimes className='menu-icon' size={30} /> : // Muestra la 'X'
          <FaBars className='menu-icon' size={30} /> // Muestra la 'Hamburguesa'
        }
      </div>

    </nav>
  )
}

export default Navbar
