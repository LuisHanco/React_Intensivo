import React from 'react'
import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";



const Hero = () => {



  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fdc835c7-abb8-48d3-80e7-9befc062665f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    
    <div className='hero container'>
      <div className="hero-text">
        <p className='note'>Colegio Arco Iris</p>
        <h1><span className='hero-text-uno'>Educacion de Calidad</span> <br /> <span className='hero-text-dos'>Para un Futuro Brillante</span></h1>
        <p>Formando lideres con valores y pensamientos educativos </p>
        <button className='btn'><span className='btn_1'>¡Conoce Mas!</span> <span className='btn_2'><MdOutlineReadMore /></span></button>
      </div>

       {/* <div className="content-hero">
            <h1>Web Design & <br /> <span>Developer</span> <br />Course</h1>
            <p className='par'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet <br />odit mollitia eius quae dolorum tenetur assumenda praes
            entium veritatis aspernatur earum,<br /> quos rem sint vitae! Laborum iusto dolores exercitationem saepe odit!</p>

            <button className='cn'><a href="">ENTRAR</a></button>
        </div> */}
      
      {/* --- FORMULARIO DE PRE-MATRÍCULA AGREGADO --- */}
      <div className="pre-matricula-form">
        <h2>Pre-Matrícula 2026</h2>
        <form  onSubmit={onSubmit} >
          <div className="form-group">
            <input type="text" placeholder='Nombre de Apoderado'  className='input_01'/>
            {/* <label htmlFor="studentName">Nombre del Alumno/a:</label> */}
            <input type="text" id="studentName" name="studentName" required placeholder='Nombre del Estudiante' className='input_01'/>
          </div>
          <div className="form-group">
            {/* <label htmlFor="level">Nivel de Interés:</label> */}
            <select id="level" name="level" required>
              <option value="">Selecciona un Nivel</option>
              <option value="inicial">Inicial</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
            </select>
          </div>
          <div className="form-group">
            {/* <label htmlFor="parentEmail">Celular del Padre/Madre:</label> */}
            <input type="tel" id="parentEmail" name="parentEmail" placeholder='Celular del Apoderado' required />
          </div>
          <button type="submit" className='btn_2 form-btn'>Enviar Solicitud</button>
        </form>
        <span>{result}</span>
      </div>
      {/* ------------------------------------------ */}
      
    </div>
  )
}

export default Hero