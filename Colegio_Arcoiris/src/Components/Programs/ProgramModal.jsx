// ProgramModal.jsx
import React, { useState } from 'react';
import './ProgramModal.css';

const ProgramModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const { title, details, grades, colorClass, buttonClass } = data;
  
  // Nuevo estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
  });

  // 1. Manejador de cambios del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Función clave: Enviar a WhatsApp
  const handleWhatsappSend = (e) => {
    e.preventDefault(); // Previene el envío normal del formulario

    const { nombre, celular, email } = formData;
    
    // 💡 Tu número de WhatsApp aquí (incluye el código de país, ej: +51987654321)
    const whatsappNumber = '+51944093797'; 

    // Mensaje prellenado
    const message = `
      *Solicitud de Matrícula - ${title}*
      
      Hola, mi nombre es *${nombre}* y estoy interesado(a) en la matrícula para el nivel ${title}.
      
      *Datos de Contacto:*
      - Teléfono: ${celular}
      - Email: ${email}
      
      Por favor, necesito más información sobre el proceso. ¡Gracias!
    `.trim();

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construir el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${+51944093797}?text=${encodedMessage}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Opcional: Cerrar el modal después del envío
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`program-modal-content ${colorClass}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className='modal-title-program'>{title}</h2>
        
        <div className="modal-body-content">
            <p className='modal-grades'>Grados/Edades: {grades}</p>
            <p className='modal-details'>{details}</p>
        </div>

        {/* --- Formulario de Contacto --- */}
        <div className="whatsapp-form-container">
            <h3>¡Contáctanos para Inscribirte!</h3>
            <p>Llena este formulario y te enviaremos la solicitud por WhatsApp para una respuesta inmediata.</p>
            
            <form onSubmit={handleWhatsappSend}>
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre Completo del Apoderado" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="tel" 
                    name="celular" 
                    placeholder="Celular (ej: 987654321)" 
                    value={formData.celular}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo Electrónico" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <button 
                    type="submit"
                    className={`btn-call-to-action ${buttonClass}`} 
                >
                  Enviar Solicitud
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;