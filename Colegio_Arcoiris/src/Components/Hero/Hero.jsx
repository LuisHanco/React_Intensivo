import React from 'react'
import './Hero.css'
import { MdOutlineReadMore } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa"; // Importamos el icono de WhatsApp

const Hero = () => {

  // 1. Configura aquí tu número de teléfono (con código de país, sin el +)
  // Ejemplo Perú: 51999999999
  const phoneNumber = "51900000000"; 

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    // 2. Capturamos los datos del formulario
    const formData = new FormData(event.target);
    const parentName = formData.get("parentName"); // Nombre apoderado
    const studentName = formData.get("studentName");
    const level = formData.get("level");
    const parentPhone = formData.get("parentEmail"); // Usamos el campo que tenías como parentEmail para el cel

    // 3. Validación simple (opcional)
    if (!parentName || !studentName || !level || !parentPhone) {
      alert("Por favor, completa todos los campos para continuar.");
      return;
    }

    // 4. Construimos el mensaje
    const message = `
Hola 👋, estoy interesado en la Pre-Matrícula 2026 del Colegio Arco Iris.
    
📋 *Mis Datos:*
👤 *Apoderado:* ${parentName}
student *Alumno:* ${studentName}
🎓 *Nivel de interés:* ${level}
📱 *Mi contacto:* ${parentPhone}

Quedo atento a su respuesta. Gracias.`;

    // 5. Codificamos el mensaje para URL y redirigimos
    const url = `https://wa.me/${+51910977254}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='hero container' id='hero'> {/* Agregué id='hero' para que el Navbar funcione */}
      <div className="hero-text">
        <p className='note'>Colegio Arco Iris</p>
        <h1>
            <span className='hero-text-uno'>Educación de Calidad</span> <br /> 
            <span className='hero-text-dos'>Para un Futuro Brillante</span>
        </h1>
        <p>Formando líderes con valores y pensamientos educativos sólidos.</p>
        <button className='btn'>
            <span className='btn_1'>¡Conoce Más!</span> 
            <span className='btn_2'><MdOutlineReadMore /></span>
        </button>
      </div>
      
      {/* --- FORMULARIO CON WHATSAPP --- */}
      <div className="pre-matricula-form">
        <h2>Pre-Matrícula 2026</h2>
        <form onSubmit={handleWhatsAppSubmit}>
          <div className="form-group">
            {/* CORRECCIÓN: Se agregó name="parentName" y required */}
            <input 
                type="text" 
                name="parentName" 
                placeholder='Nombre de Apoderado'  
                className='input_01' 
                required
            />
            
            <input 
                type="text" 
                id="studentName" 
                name="studentName" 
                required 
                placeholder='Nombre del Estudiante' 
                className='input_01'
            />
          </div>
          
          <div className="form-group">
            <select id="level" name="level" required>
              <option value="">Selecciona un Nivel</option>
              <option value="Inicial">Inicial</option>
              <option value="Primaria">Primaria</option>
              <option value="Secundaria">Secundaria</option>
            </select>
          </div>
          
          <div className="form-group">
            <input 
                type="tel" 
                id="parentEmail" 
                name="parentEmail" 
                placeholder='Celular del Apoderado' 
                required 
            />
          </div>

          <button type="submit" className='btn_2 form-btn' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            Solicitar Informes <FaWhatsapp size={20}/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero