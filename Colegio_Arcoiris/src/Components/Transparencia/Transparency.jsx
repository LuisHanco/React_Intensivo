import React, { useState } from 'react';
import Title from '../Title/Title';
import PDFViewerModal from './PDFViewerModal';
import './Transparency.css';

// 💡 DATOS DE DOCUMENTOS: Reemplaza estas URLs con los enlaces públicos de tus documentos de Google Drive.
// Asegúrate de que los enlaces de Drive sean accesibles públicamente para que el iframe pueda cargarlos.
const documents = [
  { id: 1, title: 'Reglamento Interno 2024', url: 'https://placehold.co/600x400/212ea0/ffffff?text=Reglamento.pdf', icon: '📝' },
  { id: 2, title: 'Plan Anual de Trabajo', url: 'https://placehold.co/600x400/212ea0/ffffff?text=Plan+Anual.pdf', icon: '🗓️' },
  { id: 3, title: 'Estados Financieros (Año 2023)', url: 'https://placehold.co/600x400/212ea0/ffffff?text=EEFF.pdf', icon: '📊' },
  { id: 4, title: 'Código de Conducta Ética', url: 'https://placehold.co/600x400/212ea0/ffffff?text=Codigo.pdf', icon: '⚖️' },
];

const Transparency = () => {
  // Estado para la URL del PDF a mostrar. Si es null, el modal está cerrado.
  const [currentPdfUrl, setCurrentPdfUrl] = useState(null);

  const openPdfModal = (url) => {
    // Para que el modal funcione correctamente, debe ser una URL real de PDF.
    // Aquí estoy usando placeholders, pero en la práctica debe ser un link de Drive.
    setCurrentPdfUrl(url); 
  };

  const closePdfModal = () => {
    setCurrentPdfUrl(null);
  };

  return (
    <div className="transparency">
      <Title subTitle='Transparencia' title='Documentos Institucionales de Acceso Público' />

      <div className="document-list">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="document-card"
            onClick={() => openPdfModal(doc.url)}
          >
            <span className="doc-icon">{doc.icon}</span>
            <h3 className="doc-title">{doc.title}</h3>
            <span className="doc-action">Ver Documento &rarr;</span>
          </div>
        ))}
      </div>

      {/* Visor de PDF flotante */}
      <PDFViewerModal 
        isVisible={!!currentPdfUrl} // visible si currentPdfUrl no es null
        pdfUrl={currentPdfUrl}
        onClose={closePdfModal}
      />
    </div>
  );
};

export default Transparency;