import React from 'react';
import './Transparency.css';

/**
 * PDFViewerModal: Ventana flotante para mostrar documentos PDF.
 * @param {boolean} isVisible - Controla si el modal es visible.
 * @param {string|null} pdfUrl - URL pública del documento a mostrar.
 * @param {function} onClose - Función para cerrar el modal.
 */
const PDFViewerModal = ({ isVisible, pdfUrl, onClose }) => {
  
  if (!isVisible || !pdfUrl) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div 
        className="pdf-modal-content" 
        // Evita que el clic dentro del modal lo cierre
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button onClick={onClose} className="pdf-close-btn">&times;</button>
        
        {/* 💡 IMPORTANTE: Usa la URL de tu Google Drive. Debe ser un link de COMPARTIR público. */}
        {/* Para incrustar PDFs de Google Drive, usa el formato: 
            https://docs.google.com/gview?url=[TU_URL_PUBLICA_DIRECTA]&embedded=true 
            o el link de 'Compartir' que ofrece Google Drive. */}
        <iframe 
          src={pdfUrl} 
          title="Visor de Documento de Transparencia"
          className="pdf-iframe"
          frameBorder="0"
          loading="lazy"
        >
          Tu navegador no soporta la incrustación de PDF. Por favor, <a href={pdfUrl} target="_blank" rel="noopener noreferrer">descarga el documento aquí</a>.
        </iframe>
        
      </div>
    </div>
  );
};

export default PDFViewerModal;