import React, { useState } from 'react';
import './NewsSliderModal.css';
import img1 from './assets/01-Modal.jpeg';

// Datos de ejemplo para las noticias (¡Reemplaza las rutas de imagen!)
const newsData = [
  { 
    id: 1, 
    title: "¡Inscripciones Abiertas!", 
    text: "Aproveche nuestro descuento especial del 15% para matrículas tempranas en todos los niveles. ¡Cupos limitados!", 
    image: img1 // Usando una imagen genérica del proyecto
  },
  { 
    id: 2, 
    title: "Taller de Robótica", 
    text: "Nuevo taller extracurricular para estudiantes de primaria y secundaria. ¡Inscríbete hoy mismo!", 
    image: img1 // Usando una imagen genérica del proyecto
  },
  { 
    id: 3, 
    title: "Evento del Día Familiar", 
    text: "Te esperamos este sábado para compartir juegos, comida y actividades con toda la comunidad del colegio.", 
    image: img1 // Usando una imagen genérica del proyecto
  },
];

const NewsSliderModal = ({ isVisible, onClose }) => {
  
  // Estado para controlar el índice de la diapositiva activa
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = newsData.length;

  if (!isVisible) return null;

  // Lógica para avanzar a la siguiente diapositiva (circular)
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Lógica para retroceder a la diapositiva anterior (circular)
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Diapositiva actual
  const currentSlide = newsData[activeIndex];

  return (
    <div className="modal-overlay">
      <div className="modal-content-slider">
        
        {/* Botón de cierre global */}
        <button onClick={onClose} className="close-btn">&times;</button>

        <div className="slider-item">
          <img src={currentSlide.image} alt={currentSlide.title} className="slider-image" />
          
          <div className="slider-text">
            <h2>{currentSlide.title}</h2>
            <p>{currentSlide.text}</p>
            
            {/* Botones de navegación */}
            <div className="slider-controls">
              <button onClick={prevSlide} className="nav-btn">← Anterior</button>
              <button onClick={nextSlide} className="nav-btn">Siguiente →</button>
            </div>

            {/* Indicadores de diapositiva */}
            <div className="slide-indicators">
                {newsData.map((_, index) => (
                    <span 
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>

            {/* Botón de acción/cerrar */}
            <button onClick={onClose} className="btn dark-btn">
                Entendido / Ir a la Web
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsSliderModal;