import React from 'react';
import Title from '../Title/Title';
import './Services.css';

// Datos de los servicios ofrecidos
const servicesData = [
    {
        id: 1,
        title: "Tutoría y Refuerzo Académico",
        description: "Sesiones personalizadas y grupales para fortalecer el aprendizaje en áreas clave como matemáticas, ciencias y comunicación, asegurando el éxito escolar.",
        icon: "📘"
    },
    // {
    //     id: 2,
    //     title: "Comedor Saludable y Nutrición",
    //     description: "Ofrecemos un menú balanceado y nutritivo, supervisado por un especialista, garantizando la alimentación adecuada para el desarrollo de los estudiantes.",
    //     icon: "🍎"
    // },
    // {
    //     id: 3,
    //     title: "Talleres Extracurriculares",
    //     description: "Amplia variedad de actividades como robótica, arte, música, deportes y ajedrez, fomentando el talento, la creatividad y las habilidades blandas.",
    //     icon: "🎨"
    // },
    {
        id: 4,
        title: "Orientación Psicológica",
        description: "Soporte emocional y académico para estudiantes y familias, ayudando en la gestión de emociones, habilidades sociales y toma de decisiones.",
        icon: "🧠"
    },
    {
        id: 5,
        title: "Enfermería",
        description: "Contamos con servicio de enfermería permanente para los estudiantes para asi brindar tranquilidad a los padres y atención inmediata.",
        icon: "🩹"
    },
    // {
    //     id: 6,
    //     title: "Plataforma Educativa Digital",
    //     description: "Acceso a nuestra plataforma virtual para tareas, materiales de estudio, seguimiento de notas y comunicación directa entre padres y docentes.",
    //     icon: "💻"
    // },
];

const Services = () => {
    return (
        <div className="services-section" id="services">
            <div className="container">
                <Title subTitle='Descubre' title='Nuestros Servicios Educativos y Complementarios' />
                
                <div className="services-grid">
                    {servicesData.map(service => (
                        <div key={service.id} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;