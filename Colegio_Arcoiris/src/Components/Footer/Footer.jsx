import React from 'react'
import './Footer.css'
import icon_logo from '../../assets/icon.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";


const Footer = () => {
  return (
   <footer>
    <div className="wape-footer">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>





<div className='contenedor_footer'>
    <div className="col_footer uno_footer">
      <img src={icon_logo} alt=""  className='logo_footer'/>
       <p><strong>Ruc:  </strong> 20109774254</p>
      <p><strong>Direccion: </strong> San Sebastian - Paradero camionero, Cusco, Peru </p>
      <p><strong>Telefono:  </strong> 944 093 797</p>
      <p><strong>Correo: </strong>informes@arcoiris.edu.pe</p>
      <p><strong>Horario de Atencion:</strong> Lunes a Viernes de 08:00 am - 04:00 pm</p>
      
    </div>

    {/* <div className='col_footer'>
       <h3>Datos <div className="underline"><span></span></div></h3>
     
    </div> */}
    <div className="col_footer dos_footer" >
      <h3>Transparencia <div className="underline"><span></span></div></h3>
      <ul>
      <li><a href="">Reglamento Interno</a></li>
      <li><a href="">Plan Anual de Trabajo</a></li>
      <li><a href="">Proyecto Curricular Institucional</a></li>
      <li><a href="">Proyecto Educativo Institucional</a></li>
      </ul>
     
      
    </div>
    <div className="col_footer tres_footer">
      <h3>Políticas y Legalidad <div className="underline"><span></span></div></h3>
      <ul>
        <li><a href="">Politica de privacidad</a></li>
        <li><a href="">Terminos y Condiciones</a></li>
        <li><a href="">Ubicacion</a></li>
      </ul>
    </div>

    <div className="col_footer cuatro_footer">

        <h3>Boletin <div className="underline"><span></span></div></h3>
        <form action="">
          <input type="email" placeholder='Ingresa tu correo' required/>
        <button type='submit'>Enviar</button>
        </form>

        <div className='social-icons'>

                  <h3>Siguenos en: <div className="underline"><span></span></div></h3>
                 <ul className='icons_footer'>
                  
                  <li><a href="https://www.facebook.com/profile.php?id=61567199312312"><FaFacebookF/></a></li>
                  <li><a href=""><FaTiktok /></a></li>
                  <li><a href=""> <IoLogoWhatsapp /></a></li>
                  <li><a href=""><MdEmail /></a></li>
                  
                </ul>
        </div>
    </div>

</div>

<div className="casilla_footer">
  <p>Copyright &copy; - 2025 Arco Iris</p>
</div>
   

</div>
   </footer>

    
  )
}

export default Footer
