import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Incio</li>
        <li>Programas</li>
        <li>Sobre</li>
        <li>Testimoniales</li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
