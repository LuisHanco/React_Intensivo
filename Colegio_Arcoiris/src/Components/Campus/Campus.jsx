import React, { useState } from 'react'; // Importar useState
import './Campus.css';
import GalleryModal from './GalleryModal'; // Importar el nuevo modal
import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_2 from '../../assets/gallery-2.jpg';
import gallery_3 from '../../assets/gallery-3.jpg';
import gallery_4 from '../../assets/gallery-4.jpg';
import white_arrow from '../../assets/white-arrow.png';

// Lista de todas las imágenes disponibles para la galería principal y el modal
const campusImages = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    // Puedes añadir más rutas de imágenes aquí si las tienes en assets
    '../../assets/img-uno.jpg', // Ejemplo de imagen adicional del rar
    '../../assets/IMG_2700.jpg', // Ejemplo de otra imagen del rar
    '../../assets/Plaza_Cusco.jpg' // Ejemplo de otra imagen del rar
];

const Campus = () => {
    // Estado para controlar la visibilidad del modal de la galería
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // Las 4 imágenes que se muestran en la vista principal
    const visibleImages = campusImages.slice(0, 4); 

    return (
        <div className='campus'>

            <div className="gallery">
                {visibleImages.map((imgSrc, index) => (
                    <img 
                        key={index} 
                        src={imgSrc} 
                        alt={`Campus Foto ${index + 1}`} 
                        // Fallback en caso de que la imagen no cargue
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/ff7700/ffffff?text=Foto+Campus'; }}
                    />
                ))}
            </div>
            
            {/* Botón que ahora abre el modal */}
            <button onClick={openModal} className='btn dark-btn'> 
                Ver más aquí 
                <img src={white_arrow} alt="Flecha" />
            </button>
            
            {/* Renderizar el modal */}
            <GalleryModal 
                isVisible={modalOpen} 
                onClose={closeModal} 
                images={campusImages} // Pasar la lista completa de imágenes
            />
      
        </div>
    );
};

export default Campus;
