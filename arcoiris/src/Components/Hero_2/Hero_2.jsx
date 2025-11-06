import React from 'react'
import './Hero_2.css'

const Hero_2 = () => {
  return (
    <div className='main'>

        {/* <div className="navbar_hero">
            <div className="icon">
                <h2 className="logo">Luis Hanco</h2>
            </div>


            <div className="menu">
                <ul>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">SOBRE NOSOTROS</a></li>
                    <li><a href="">SERVICIOS</a></li>
                    <li><a href="">UBICANOS</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
            </div>

            <div className="search">
                <input type="search"  className='srch' name='' placeholder='Type To Text' />
                <a href=""><button className='btn'>Buscar</button></a>
            </div>

       


        </div> */}



 <div className="content-hero">
            <h1>Web Design & <br /> <span>Developer</span> <br />Course</h1>
            <p className='par'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet <br />odit mollitia eius quae dolorum tenetur assumenda praes
            entium veritatis aspernatur earum,<br /> quos rem sint vitae! Laborum iusto dolores exercitationem saepe odit!</p>

            <button className='cn'><a href="">ENTRAR</a></button>
        </div>
      
        <div className="form-hero">
                <h2>Login Here</h2>
                <input type="email" name='email' placeholder='Ingresa Correo Aqui'/>
                <input type="password" name='' placeholder='Ingresa Contraseña Aqui' />
                <button className='btn'>Entrar</button>
                <p className="link">No tienes cuenta <br />
                <a href="">Entrar </a> Aqui</p>
                <p className="liw">Entrar Con</p>
            </div>
    </div>
  )
}

export default Hero_2
