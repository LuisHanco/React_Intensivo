import React, {useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

import {Link, Element} from 'react-scroll'

import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);



  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }






  return (
    <nav className= {`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo collegue'/>
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><a href=""><Link to='hero' smooth={true} offset={0} duration={500}>Incio</Link></a></li>
        <li><a href=""><IoIosArrowDown /><Link to='about' smooth={true} offset={-150} duration={500}>Nosotros</Link></a></li>
        <li><a href=""><IoIosArrowDown /><Link to='programs' smooth={true} offset={-260} duration={500}>Niveles</Link></a></li>
        <li><a href=""><Link to='programs' smooth={true} offset={-260} duration={500}>Matriculas</Link></a></li>
        <li><a href=""><IoIosArrowDown /><Link to='programs' smooth={true} offset={-260} duration={500}>Servicios</Link></a></li>
        <li><a href=""><Link to='transparencia' smooth={true} offset={-260} duration={500}>Transparencia</Link></a></li>
        <li><a href=""><Link to='contact' smooth={true} offset={-260} duration={500} className='btn-1'>Contacto</Link></a></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
