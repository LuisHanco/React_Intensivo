// Enrollment.jsx
import React, { useState } from 'react'; // 💡 [MODIFICADO] Importar useState
import Title from '../Title/Title';
import './Enrollment.css';
import EnrollmentModal from './EnrollmentModal'; // 💡 [NUEVO] Importar el modal

// Datos existentes
const enrollmentSteps = [
    {
        number: 1,
        title: "Solicitud de Información",
        description: "Completa nuestro formulario de contacto en línea o visítanos para una entrevista informativa y un tour por las instalaciones.",
        icon: "📝"
    },
    {
        number: 2,
        title: "Evaluación Diagnóstica",
        description: "El estudiante realizará una pequeña evaluación para conocer su nivel y asegurar una correcta nivelación en el aula.",
        icon: "🧠"
    },
    {
        number: 3,
        title: "Presentación de Documentos",
        description: "Una vez aceptada la vacante, entrega toda la documentación requerida en la oficina de secretaría dentro del plazo establecido.",
        icon: "📂"
    },
    {
        number: 4,
        title: "Formalización y Pago",
        description: "Realiza el pago de la cuota de inscripción y matrícula para asegurar el cupo del estudiante en el grado correspondiente.",
        icon: "💰"
    },
];

const requiredDocuments = [
    "Presencia de Padre y/o Apoderado",
    "Ficha Unica de Matrícula del SIAGE (Solo para Traslados)",
    "Tarjeta de Vacuna (Nivel Inicial)",
    "Copia del DNI del estudiante y de ambos padres o apoderados.",
    "Certificado de Estudios. (Solo para Traslados)",
    "Carta de Compromiso debidamente firmara",
];
// Fin de datos existentes

const Enrollment = () => {
    // 💡 [NUEVO] Estado para el modal de matrícula
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="enrollment-section" id="enrollment">
            <div className="container">
                <Title subTitle='Proceso Fácil' title='Proceso de Matrícula' />
                
                <div className="enrollment-content">
                    
                    {/* 1. Pasos del Proceso */}
                    <div className="enrollment-process">
                        <h2>Pasos para Inscribirte</h2>
                        <div className="steps-grid">
                            {enrollmentSteps.map((step) => (
                                <div className="step-card" key={step.number}>
                                    <span className="step-number">{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <span className="step-icon">{step.icon}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* 2. Documentos Requeridos */}
                    <div className="enrollment-docs">
                        <h2>Documentación Requerida</h2>
                        <ul className="doc-list">
                            {requiredDocuments.map((doc, index) => (
                                <li key={index}>
                                    <span className="doc-icon">✔️</span> {doc}
                                </li>
                            ))}
                        </ul>
                        
                        {/* 💡 [MODIFICADO] Botón para abrir el modal */}
                        <button 
                            onClick={openModal} 
                            className="btn dark-btn enroll-cta"
                        >
                            Solicitar Vacante Ahora
                        </button>
                        
                        <p className="enroll-note">
                            * Los cupos son limitados por grado. Recomendamos iniciar el proceso con anticipación.
                        </p>
                    </div>
                </div>
            </div>

            {/* 💡 [NUEVO] Renderizar el modal */}
            <EnrollmentModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </div>
    );
};

export default Enrollment;