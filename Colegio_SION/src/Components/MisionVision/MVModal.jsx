// MVModal.jsx
import React from 'react';
import './MVModal.css'; // Crea este archivo CSS

const MVModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const { title, fullContent } = data; // Obtenemos el título y el contenido completo

  return (
    <div className="mv-modal-overlay" onClick={onClose}>
      <div className="mv-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="mv-modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className='mv-modal-title'>{title}</h2>
        
        <div className="mv-modal-body">
          {fullContent} {/* Renderizamos el contenido React directamente */}
        </div>
        
        <button className="mv-modal-cta-btn" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
};

export default MVModal;