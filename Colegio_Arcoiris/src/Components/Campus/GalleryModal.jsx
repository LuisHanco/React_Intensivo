import React, { useState } from 'react';
import './GalleryModal.css';

// Las imágenes se pasan como props desde Campus.jsx

const GalleryModal = ({ isVisible, onClose, images }) => {
    // 1. Estado para manejar la imagen actual en el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!isVisible || images.length === 0) return null;

    // 2. Funciones de navegación
    const goToNext = (e) => {
        e.stopPropagation(); // Previene que el clic cierre el modal
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = (e) => {
        e.stopPropagation(); // Previene que el clic cierre el modal
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // La imagen visible actualmente
    const currentImage = images[currentIndex];

    // Evita que un clic dentro del contenido cierre el modal
    const handleContentClick = (e) => e.stopPropagation();

    return (
        // Overlay - Cierra el modal si se hace clic fuera del contenido
        <div className="gallery-modal-overlay" onClick={onClose}>
            <div className="gallery-modal-content" onClick={handleContentClick}>
                
                {/* Botón de cierre */}
                <button onClick={onClose} className="gallery-close-btn" aria-label="Cerrar Galería">&times;</button>
                
                <div className="modal-header">
                    <h2>Galería Completa del Campus</h2>
                    <p>Explora nuestras instalaciones, aulas y áreas recreativas.</p>
                </div>

                {/* Área del Carrusel (Imagen Principal) */}
                <div className="image-carousel">
                    {/* Botón Anterior */}
                    <button onClick={goToPrev} className="nav-arrow prev-arrow" aria-label="Anterior">
                        &lt;
                    </button>
                    
                    {/* Imagen activa */}
                    <img 
                        src={currentImage} 
                        alt={`Foto del campus ${currentIndex + 1}`} 
                        className="active-modal-image" 
                        // Fallback en caso de que la imagen no cargue
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/212ea0/ffffff?text=Imagen+no+disponible'; }}
                    />
                    
                    {/* Botón Siguiente */}
                    <button onClick={goToNext} className="nav-arrow next-arrow" aria-label="Siguiente">
                        &gt;
                    </button>
                </div>

                {/* Indicadores de posición */}
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>

                <p className="image-counter">
                    {currentIndex + 1} / {images.length}
                </p>
                
            </div>
        </div>
    );
};

export default GalleryModal;