// EnrollmentModal.jsx
import React, { useState } from 'react';
import './EnrollmentModal.css'; // Crear este archivo de estilos

const EnrollmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nombreApoderado: '',
    celular: '',
    email: '',
    nivelInteres: 'Inicial', // Valor por defecto
    gradoInteres: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsappSend = (e) => {
    e.preventDefault();

    const { nombreApoderado, celular, email, nivelInteres, gradoInteres } = formData;
    
    // ⚠️ IMPORTANTE: REEMPLAZA '51987654321' con tu número de WhatsApp real 
    // (incluye el código de país, pero sin el signo +).
    const whatsappNumber = '51944093797'; 

    // Mensaje prellenado para WhatsApp
    const message = `
      *SOLICITUD DE MATRÍCULA - COLEGIO*
      
      Hola, he llenado el formulario de solicitud de vacante.
      
      *Detalles del Interesado:*
      - Nombre del Apoderado: *${nombreApoderado}*
      - Celular: ${celular}
      - Email: ${email}
      
      *Interés de Matrícula:*
      - Nivel: ${nivelInteres}
      - Grado Específico: ${gradoInteres || 'No especificado'}
      
      Por favor, necesito contactar con el área de admisión para continuar el proceso. ¡Gracias!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${51944093797}?text=${encodedMessage}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Opcional: Cerrar el modal y resetear el formulario
    setFormData({ 
        nombreApoderado: '', 
        celular: '', 
        email: '', 
        nivelInteres: 'Inicial', 
        gradoInteres: '' 
    });
    onClose();
  };

  return (
    <div className="enroll-modal-overlay" onClick={onClose}>
      <div 
        className="enroll-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className='enroll-modal-title'>
            <span className="icon">📝</span>
            Solicitud de Vacante
        </h2>
        <p className='enroll-modal-subtitle'>
            Completa el formulario para iniciar el proceso. Te responderemos inmediatamente por WhatsApp.
        </p>
        
        <form onSubmit={handleWhatsappSend} className="enroll-form">
            <label>
                Nombre del Apoderado
                <input 
                    type="text" 
                    name="nombreApoderado" 
                    placeholder="Nombre completo" 
                    value={formData.nombreApoderado}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Celular (WhatsApp)
                <input 
                    type="tel" 
                    name="celular" 
                    placeholder="Ej: 987654321" 
                    value={formData.celular}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Correo Electrónico
                <input 
                    type="email" 
                    name="email" 
                    placeholder="ejemplo@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <div className="form-group-inline">
                <label>
                    Nivel de Interés
                    <select 
                        name="nivelInteres" 
                        value={formData.nivelInteres}
                        onChange={handleChange}
                        required
                    >
                        <option value="Inicial">Nivel Inicial (3-5 años)</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                    </select>
                </label>
                <label>
                    Grado de Interés
                    <input 
                        type="number" 
                        name="gradoInteres" 
                        placeholder="Ej: 3°" 
                        value={formData.gradoInteres}
                        onChange={handleChange}
                        min="1"
                        max="6" 
                    />
                </label>
            </div>
            
            <button 
                type="submit"
                className="btn-submit-whatsapp" 
            >
              Enviar a WhatsApp y Confirmar Vacante 🚀
            </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModal;