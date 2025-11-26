import React, { useState, useEffect } from 'react';
import './Hero.css';
import { MdOutlineReadMore } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import bgImage1 from '../../assets/Galeria/02-img.jpg'; 
import bgImage2 from '../../assets/gallery-2.jpg'; 
import bgImage3 from '../../assets/Galeria/05-img.jpg';

const Hero = () => {

  // --- DATOS DEL SLIDER ---
  // 💡 IMPORTANTE: Reemplaza las rutas de las imágenes con las TUS REALES
  // y los textos con tus mensajes.
  const slides = [
    { 
        image: `url(${bgImage1})`, // O 'url(../../assets/imagen1.jpg)'
        title: 'Educación de Calidad',
        subtitle: 'Para un Futuro Brillante',
        message: 'Descubre nuestros programas académicos y prepárate para el éxito.'
    },
    { 
        image: `url(${bgImage2})`,
        title: 'Formando Líderes',
        subtitle: 'Con Valores y Excelencia',
        message: 'Únete a una comunidad educativa que transforma el potencial en realidad.'
    },
    { 
       image: `url(${bgImage3})`,
        title: 'Inscripciones Abiertas',
        subtitle: '¡Tu Momento es Ahora!',
        message: 'Ambiente seguro, tecnología y docentes comprometidos.'
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // --- LÓGICA DEL SLIDER AUTOMÁTICO ---
  useEffect(() => {
    // El slider cambia cada 6 segundos (6000 ms)
    const interval = setInterval(() => {
        setCurrentSlideIndex(prevIndex => 
            (prevIndex + 1) % slides.length
        );
    }, 6000); 

    // Limpieza al desmontar el componente
    return () => clearInterval(interval);
  }, [slides.length]); 
  
  const currentSlide = slides[currentSlideIndex];

  // --- LÓGICA DEL FORMULARIO DE WHATSAPP (Mantenida) ---
  const phoneNumber = "+51944093797"; 

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const parentName = formData.get("parentName");
    const studentName = formData.get("studentName");
    const level = formData.get("level");
    const parentPhone = formData.get("parentEmail");

    if (!parentName || !studentName || !level || !parentPhone) {
      alert("Por favor, completa todos los campos para continuar.");
      return;
    }

    const message = `
Hola 👋, estoy interesado en la Pre-Matrícula 2026 del Colegio Arco Iris.
    
📋 *Mis Datos:*
👤 *Apoderado:* ${parentName}
student *Alumno:* ${studentName}
🎓 *Nivel de interés:* ${level}
📱 *Mi contacto:* ${parentPhone}

Quedo atento a su respuesta. Gracias.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    // Aplicamos el fondo y la transición dinámica directamente al elemento HERO
    <div 
        className='hero container' 
        id='hero' 
        style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,.7)), ${currentSlide.image}` }}
    >
      <div className="hero-content-wrapper"> {/* Nuevo contenedor para el texto y formulario */}
        
        {/* TEXTO DINÁMICO */}
        <div className="hero-text">
          <p className='note'>Colegio Arco Iris</p>
          <h1 className='slide-fade'> {/* Clase para la animación del texto */}
              <span className='hero-text-uno'>{currentSlide.title}</span> <br /> 
              <span className='hero-text-dos'>{currentSlide.subtitle}</span>
          </h1>
          <p className='slide-fade'>{currentSlide.message}</p>
          <button className='btn'>
              <span className='btn_1'>¡Conoce Más!</span> 
              <span className='btn_2'><MdOutlineReadMore /></span>
          </button>
        </div>
        
        {/* FORMULARIO FIJO */}
        <div className="pre-matricula-form">
          <h2>Pre-Matrícula 2026</h2>
          <form onSubmit={handleWhatsAppSubmit}>
            <div className="form-group">
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
    </div>
  )
}

export default Hero