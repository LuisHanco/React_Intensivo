import React, { useState } from 'react';
import Title from '../Title/Title';
import PDFViewerModal from './PDFViewerModal';
import './Transparency.css';
import { GiBrain } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

import { GrDocumentPdf } from "react-icons/gr";

// 💡 DATOS DE DOCUMENTOS: Reemplaza estas URLs con los enlaces públicos de tus documentos de Google Drive.
// Asegúrate de que los enlaces de Drive sean accesibles públicamente para que el iframe pueda cargarlos.
const documents = [
  // 1. Reglamento Interno (RI)
  { id: 1, title: 'Reglamento Interno (RI)', url: 'https://drive.google.com/file/d/1eW1vbmlJAUuXU4q3fwi09Mk15oG3FXo1/preview', icon: <GrDocumentPdf />
},
  // 2. Plan Anual de Trabajo (PAT)
  { id: 2, title: 'Plan Anual de Trabajo (PAT)', url: 'https://drive.google.com/file/d/1QAV0spIcKxKqjgf1FzYsQFanS7zeQdii/preview', icon: <GrDocumentPdf />
 },
  // 3. Proyecto Curricular Institucional (PCI)
  { id: 3, title: 'Proyecto Curricular Institucional (PCI)', url: 'https://drive.google.com/file/d/1CBBfCyGyIRgZkqV5wymNhwAi-jJ_UwwF/preview', icon: <GrDocumentPdf />
 },
  // 4. Proyecto Educativo Institucional (PEI)
  { id: 4, title: 'Proyecto Educativo Institucional (PEI)', url: 'https://drive.google.com/file/d/181Lj566aOCu3CLvWuDC3LCXweDQpzKrO/preview', icon: <GrDocumentPdf />
 },
];

const Transparency = () => {
  // Estado para la URL del PDF a mostrar. Si es null, el modal está cerrado.
  const [currentPdfUrl, setCurrentPdfUrl] = useState(null);

  const openPdfModal = (url) => {
    // Para que el modal funcione correctamente, debe ser una URL real de PDF.
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
          <div key={doc.id} className="document-card" onClick={() => openPdfModal(doc.url)} >
            <span className="doc-icon">{doc.icon}</span>
            <h3 className="doc-title">{doc.title}</h3>
            <span className="doc-action">Ver Documento </span>
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