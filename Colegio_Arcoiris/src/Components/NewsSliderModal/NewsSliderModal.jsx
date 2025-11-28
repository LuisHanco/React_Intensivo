import React, { useState, useEffect } from 'react'; // 🚨 Importamos useEffect
import './NewsSliderModal.css';
import img1 from './assets/01-Modal.jpg';
import img2 from './assets/02-Modal.png';
import img3 from './assets/03-Modal.png';
import img4 from './assets/04-Modal.png';

// Datos de ejemplo para las noticias (¡Reemplaza las rutas de imagen!)
const newsData = [
  { 
    id: 1, 
    title: "¡Inscripciones Abiertas!", 
    text: "Aproveche nuestro descuento especial del 15% para matrículas tempranas en todos los niveles. ¡Cupos limitados!", 
    image: img1 // Reemplaza por la importación de tu imagen 1
  },
  { 
    id: 2, 
    title: "Taller de Robótica", 
    text: "Nuevo taller extracurricular para estudiantes de primaria y secundaria. ¡Inscríbete hoy mismo!", 
    image: img2 // Reemplaza por la importación de tu imagen 2
  },
  { 
    id: 3, 
    title: "Evento del Día Familiar", 
    text: "Te esperamos este sábado para compartir juegos, comida y actividades con toda la comunidad del colegio.", 
    image: img3 // Reemplaza por la importación de tu imagen 3
  },
  {
    id:4,
    title:"banner cuatro",
    text:"Hola",
    image:img4
  }
];

// Solo usamos 'onClose' como prop, tal como lo recibe de App.jsx
const NewsSliderModal = ({ isVisible, onClose }) => { 
  
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = newsData.length;

  if (!isVisible) return null;

  // --- LÓGICA DE SLIDER AUTOMÁTICO (Autoplay) ---
  useEffect(() => {
    // Cambia el slide cada 4 segundos
    const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000); 

    // Limpieza al desmontar el componente
    return () => clearInterval(interval);
  }, [totalSlides]); 
  
  // Lógica para avanzar a la siguiente diapositiva (circular)
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Lógica para retroceder a la diapositiva anterior (circular)
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // --- LÓGICA DEL BOTÓN DE ACCIÓN: CERRAR Y NAVEGAR ---
  // Esta función llama a onClose y luego fuerza la navegación.
  const handleActionClick = () => {
    onClose(); // Primero cerramos el modal
    
    // 🚨 Navegación Forzada: Busca el componente con id='enrollment' y navega.
    const enrollmentSection = document.getElementById('enrollment'); 
    
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback si el ID no se encuentra, navega a la URL
      window.location.hash = '#enrollment';
    }
  };

  const currentSlide = newsData[activeIndex];

  return (
    <div className="modal-overlay">
      <div className="modal-content-slider">
        
        {/* Botón de cierre global (X) */}
        <button onClick={onClose} className="close-btn">&times;</button>

        <div className="slider-item">
            {/* Imagen que ahora ocupa todo el modal */}
            <img 
                key={currentSlide.id} // Key para forzar la animación de cambio de imagen
                src={currentSlide.image} 
                alt={currentSlide.title} 
                className="slider-image modal-full-image" 
            />
            
            {/* Controles de navegación */}
            {/* <div className="slider-controls-overlay">
                <button onClick={prevSlide} className="nav-btn prev-btn">{'<'}</button>
                <button onClick={nextSlide} className="nav-btn next-btn">{'>'}</button>
            </div> */}
            
            {/* Indicadores de diapositiva (puntos) */}
            <div className="slide-indicators-overlay">
                {newsData.map((_, index) => (
                    <span 
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>

            {/* Botón de acción/navegación - Usa la función handleActionClick */}
            {/* <button 
                onClick={handleActionClick} 
                className="modal-action-btn"
            >
                Más Detalles / Ir a Matrícula
            </button> */}

            {/* Ocultamos el div de texto (será invisible con el nuevo CSS) */}
             <div className="slider-text">
                <h2>{currentSlide.title}</h2>
                <p>{currentSlide.text}</p>
             </div>
          
        </div>

      </div>
    </div>
  );
};

export default NewsSliderModal;