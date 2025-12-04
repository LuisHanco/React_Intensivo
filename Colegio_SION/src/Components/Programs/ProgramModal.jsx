// ProgramModal.jsx
import React, { useState } from 'react';
import './ProgramModal.css';

const ProgramModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  // 🚨 Desestructuración de los nuevos campos de datos (schedule y historicalPricing)
  const { title, details, grades, colorClass, buttonClass, schedule, historicalPricing } = data; 
  
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
    e.preventDefault();
    
    const { nombre, celular, email } = formData;
    
    // 💡 Tu número de WhatsApp aquí (incluye el código de país, ej: +51987654321)
    const whatsappNumber = '51932661357'; 

    // Mensaje prellenado
    const message = `
      *Solicitud de Matrícula - ${title}*
      
      Hola, mi nombre es *${nombre}* y estoy interesado(a) en la matrícula para el nivel ${title}.
      
      *Datos de Contacto:*
      - Teléfono: ${celular}
      - Email: ${email}
      
      Por favor, necesito más detalles sobre el proceso. ¡Gracias!`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  // Evita que un clic en el contenido cierre el modal
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="program-modal-content" onClick={handleContentClick}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Cerrar">&times;</button>
        
        <h2 className={`modal-title-program ${colorClass}`}>{title}</h2>
        <p className="modal-program-details">{details}</p>
        <p className="modal-program-grades">Grados: <strong>{grades}</strong></p>

        {/* --- 1. SECCIÓN DE HORARIOS --- */}
        {schedule && schedule.length > 0 && (
            <div className="program-schedule">
                <h3>Horarios y Modalidades</h3>
                <ul>
                    {schedule.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
        
        {/* --- 2. CUADRO HISTÓRICO DE PRECIOS DISCRETO (con <details>) --- */}
        {historicalPricing && historicalPricing.length > 0 && (
            <details className="historical-pricing-details">
                <summary className="pricing-summary">
                    Histórico de Pensiones y Matriculas (Últimos Años)
                </summary>
                <div className="pricing-table-container">
                    <table className="pricing-history-table">
                        <thead>
                            <tr>
                                <th>Año</th>
                                <th>Matrícula (S/)</th>
                                <th>Mensualidad (S/)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Resaltamos el año actual */}
                            {historicalPricing.map((item) => (
                                <tr key={item.year} className={item.year === new Date().getFullYear() ? 'current-year-row' : ''}>
                                    <td>{item.year}</td>
                                    <td>{item.matricula}</td>
                                    <td>{item.mensualidad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="pricing-note">* Precios referenciales sujetos a cambios. Consulta por el precio actual en el formulario de abajo.</p>
                </div>
            </details>
        )}

        {/* --- SECCIÓN DEL FORMULARIO DE CONTACTO --- */}
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