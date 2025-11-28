import React, { useState } from 'react';
import Title from '../Title/Title';
import './MissionVision.css';
import MVModal from './MVModal'; // Importamos el nuevo componente de modal

// Datos completos de Misión, Visión y Valores, listos para el modal
const mvData = {
  mission: {
    title: 'Nuestra Misión',
    shortDescription: 'Somos una Institución Educativa dedicada a brindar una educación de calidad en todos los niveles, fomentando valores cristianos y el desarrollo integral.',
    fullContent: (
      <>
        <p>
          Somos una Institución Educativa dedicada a brindar una **educación de calidad** en todos los niveles (Inicial, Primaria y Secundaria), priorizando los siguientes ejes:
        </p>
        {/* <ul className="mv-full-list">
          <li>✅ **Compromiso Cristiano:** Fomentamos la convivencia basada en principios y **valores cristianos**, promoviendo el respeto, la solidaridad y la empatía en nuestra comunidad educativa.</li>
          <li>👨‍🏫 **Pedagogía Activa:** Contamos con profesores altamente capacitados en **pedagogía activa y metodologías innovadoras**, que estimulan la participación, la curiosidad y el pensamiento crítico de nuestros estudiantes.</li>
          <li>🫂 **Ambiente Fraterno:** Generamos un ambiente de afecto, solidaridad y una actitud humana virtuosa, donde cada estudiante se siente valorado y seguro para aprender y crecer.</li>
          <li>🚀 **Desarrollo Integral:** Optimizamos las **capacidades y habilidades de orden superior** en nuestros alumnos, incluyendo el pensamiento crítico, la resolución de problemas y la creatividad, preparándolos para los desafíos del futuro.</li>
          <li>🌐 **Impacto Social:** Preparamos a los estudiantes para contribuir con éxito en el desarrollo social, científico y tecnológico, siendo agentes de cambio positivo en su comunidad y en el mundo.</li>
        </ul> */}
      </>
    ),
    icon: '🌟'
  },
  vision: {
    title: 'Nuestra Visión',
    shortDescription: 'Ser una Institución modelo, eficiente y eficaz, formando líderes con capacidad crítica y creativa para un futuro sostenible.',
    fullContent: (
      <>
        <p>
          Ser una **Institución modelo, eficiente y eficaz**, formando líderes con capacidad crítica y creativa. Nos proyectamos como:
        </p>
        {/* <ul className="mv-full-list">
          <li>🔬 **Enfoque Educativo:** Un centro humanista, **científico y tecnológico**, que integra la innovación y la excelencia académica con una profunda formación en valores humanos.</li>
          <li>🎯 **Gestión:** Basada en una gestión democrática y descentralizada, equitativa y de calidad, asegurando la participación de toda la comunidad educativa y la mejora continua.</li>
          <li>🧠 **Ciudadanía Crítica:** Formando personas con **capacidad crítica, reflexiva y creativa**, capaces de analizar su entorno, proponer soluciones y adaptarse a un mundo en constante cambio.</li>
          <li>🤝 **Identidad Fortalecida:** Desarrollando proyectos de vida y una identidad fortalecida, promoviendo la autoestima, la autonomía y el sentido de pertenencia en cada estudiante.</li>
          <li>🌍 **Aporte Sostenible:** Contribuyendo al desarrollo sostenible a nivel local, regional y nacional, formando ciudadanos comprometidos con el cuidado del medio ambiente y la justicia social.</li>
        </ul> */}
      </>
    ),
    icon: '🔭'
  },
  values: {
    title: 'Nuestros Valores',
    shortDescription: 'Nuestros pilares fundamentales son la Responsabilidad, el Respeto, la Integridad y la Innovación.',
    fullContent: (
      <>
        <p>
          En nuestra institución, los valores no son solo palabras, sino los principios que guían cada una de nuestras acciones y decisiones. Nos esforzamos por inculcar en nuestros estudiantes los siguientes pilares:
        </p>
        {/* <ul className="mv-full-list values-full-list">
          <li>🌟 **Responsabilidad:** Cumplir con nuestros deberes y compromisos, asumiendo las consecuencias de nuestras acciones.</li>
          <li>💖 **Respeto:** Valorar y aceptar la diversidad de opiniones, creencias y culturas, tratando a los demás con consideración.</li>
          <li>🤝 **Integridad:** Actuar con honestidad, transparencia y coherencia entre lo que pensamos, decimos y hacemos.</li>
          <li>💡 **Innovación:** Buscar constantemente nuevas ideas y métodos para mejorar el aprendizaje, la enseñanza y el desarrollo institucional.</li>
        </ul> */}
      </>
    ),
    icon: '🤝'
  }
};

const MissionVision = () => {
  // Estado para controlar qué modal está abierto y con qué datos
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Función para abrir el modal con el contenido específico
  const openMVModal = (type) => {
    setModalContent(mvData[type]);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeMVModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="mission-vision-section" id="mission-vision">
      <div className="container">
        <Title subTitle='Nuestra Identidad' title='Misión, Visión y Valores' />

        <div className="mv-content">
          
          {/* Tarjeta de Misión */}
          <div className="mv-card mission">
            <span className="mv-icon">{mvData.mission.icon}</span>
            <h2>Misión</h2>
            <p>{mvData.mission.shortDescription}</p>
            <button className="btn-mv-more" onClick={() => openMVModal('mission')}>Ver más</button>
          </div>

          {/* Tarjeta de Visión */}
          <div className="mv-card vision">
            <span className="mv-icon">{mvData.vision.icon}</span>
            <h2>Visión</h2>
            <p>{mvData.vision.shortDescription}</p>
            <button className="btn-mv-more" onClick={() => openMVModal('vision')}>Ver más</button>
          </div>

          {/* Tarjeta de Valores */}
          <div className="mv-card values">
            <span className="mv-icon">{mvData.values.icon}</span>
            <h2>Valores</h2> {/* Cambiado de 'Valores Clave' a 'Valores' */}
            <p>{mvData.values.shortDescription}</p>
            <button className="btn-mv-more" onClick={() => openMVModal('values')}>Ver más</button>
          </div>
          
        </div>
      </div>

      {/* Renderizar el modal si está abierto */}
      {isModalOpen && modalContent && (
        <MVModal 
          isOpen={isModalOpen} 
          onClose={closeMVModal} 
          data={modalContent} 
        />
      )}
    </div>
  );
};

export default MissionVision;