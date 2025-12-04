import React, { useState } from 'react';
import Title from '../Title/Title';
import './MissionVision.css';
import MVModal from './MVModal'; // Importamos el nuevo componente de modal

// Iconos que usabas en el original (asumiendo que los importaste en tu archivo original)
// Si necesitas los imports, añádelos aquí, ej:
// import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'; 
// Usaré solo los textos para mantener la claridad.
import { FaBullseye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

// Datos completos de Misión, Visión y Valores, listos para el modal
const mvData = {
  mission: {
    icon: <FaBullseye />, // Icono de Misión
    title: 'Nuestra Misión',
    shortDescription: 'Somos una Institucion Educativa, con servicio a la sociedad sin excepcion de personas, brindando una educacion de calidad educativa en el nivel de educacion Inicial, Primaria y Secundaria.',
    fullContent: (
      <>
        <p>
         Somos una Institucion Educativa, con servicio a la sociedad sin excepcion de personas, brindando una educacion de calidad educativa en el nivel de educacion Inicial, Primaria y Secundaria, con profesores comprometidos con la convivencia en principios y valores cristianos, capacitados en pedagogia activa, generando un ambiente fraterno de afecto y solidaridad con una actitud humana y virtuosa trabajamos por el bienestar de los alumnos donde desarrollan capacidades, habilidades de orden superior actitudes pertinentes para el estudio y la vida optimizando sus potencialidades que contribuyan con exito en los cambios de nuestra sociedad, de acuerdo al avance cientifico y tecnologico
        </p>
        {/* <ul className="mv-full-list mission-list">
            <li>✅ **Compromiso Cristiano:** Fomentamos la convivencia basada en principios y **valores cristianos**, promoviendo el respeto, la solidaridad y la empatía en nuestra comunidad.</li>
            <li>✅ **Calidad Educativa:** Contamos con profesores altamente **capacitados en pedagogía activa** y un currículo que busca el desarrollo de capacidades, habilidades de orden superior y actitudes pertinentes para el estudio y la vida.</li>
            <li>✅ **Bienestar Integral:** Generamos un **ambiente fraterno** de afecto y solidaridad, trabajando por el bienestar integral de los alumnos para que optimicen sus potencialidades.</li>
            <li>✅ **Visión de Futuro:** Preparamos a nuestros estudiantes para que contribuyan con éxito en los cambios de nuestra sociedad, de acuerdo al avance científico y tecnológico.</li>
        </ul> */}
      </>
    ),
  },
  vision: {
    icon: <FaEye />, // Icono de Visión
    title: 'Nuestra Visión',
    shortDescription: 'Ser en el 2028, una Institucion Educativa lider en educacion de calidad en sus tres niveles de enseñanza',
    fullContent: (
      <>
        <p>
          Ser en el 2028, una Institucion Educativa lider en educacion de calidad en sus tres niveles de enseñanza, donde nuestros estudiantes, docentes, directivos, y padres de familia vivan en armonia los principios y valores cristianos, donde se desarrolle el liderazgo personal y social, los estudiantes con actitudes de excelencia, capacidades, habilidades de orden superior en un contexto de sana convivencia y que contribuyan con exito en los cambios de la sociedad.
        </p>
        {/* <ul className="mv-full-list vision-list">
            <li>⭐ **Comunidad de Valores:** Estudiantes, docentes, directivos y padres de familia viven en armonía los principios y **valores cristianos**.</li>
            <li>⭐ **Liderazgo Desarrollado:** Se fomenta el **liderazgo** personal y social en todos los miembros de la comunidad.</li>
            <li>⭐ **Excelencia Académica:** Los estudiantes demuestran **actitudes de excelencia**, con capacidades y habilidades de orden superior.</li>
            <li>⭐ **Convivencia Armónica:** Se desarrolla un contexto de **sana convivencia**, donde cada uno contribuye al éxito social.</li>
        </ul> */}
      </>
    ),
  },
  values: {
    icon: <FaHandshake />, // Icono de Valores
    title: 'Nuestros Valores',
    shortDescription: 'Responsabilidad, Honestidad, Respeto, Solidaridad, Empatía y Justicia. Estos valores son el pilar de nuestra formación, asegurando que cada estudiante se convierta en un ciudadano íntegro y comprometido con la sociedad.',
    fullContent: (
      <>
        <p>
          Nuestros valores son el pilar de la formación integral, promoviendo un ciudadano íntegro y comprometido. Estos son:
        </p>
        {/* <ul className="mv-full-list values-list">
            <li>✨ **Responsabilidad:** Cumplimiento de deberes y compromisos.</li>
            <li>✨ **Honestidad:** Actuar con transparencia y verdad.</li>
            <li>✨ **Respeto:** Valoración y consideración hacia los demás.</li>
            <li>✨ **Solidaridad:** Apoyo mutuo y unión ante las dificultades.</li>
            <li>✨ **Empatía:** Capacidad de ponerse en el lugar del otro.</li>
            <li>✨ **Justicia:** Actuar con equidad e imparcialidad.</li>
        </ul> */}
      </>
    ),
  },
};

const MissionVision = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Función para abrir el modal con el contenido correcto
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
    <div className='mission-vision-section'>
      <div className="container">
        <Title subTitle='Nosotros' title='Misión, Visión y Valores' />

        <div className="mv-content">
          
          {/* Tarjeta de Misión (Flip Card) */}
          <div className="mv-card flip-card mission">
            <div className="flip-card-inner">
              
              {/* CARA FRONTAL: Ícono y Título */}
              <div className="flip-card-front">
                {/* <span className="mv-icon">{mvData.mission.icon}</span> */}
                <h2>Misión</h2>
              </div>
              
              {/* CARA TRASERA: Descripción Corta y Botón */}
              <div className="flip-card-back">
                <h2>Misión</h2>
                <p>{mvData.mission.shortDescription}</p>
                <button className="btn-mv-more" onClick={() => openMVModal('mission')}>Ver más detalle</button>
              </div>

            </div>
          </div>

          {/* Tarjeta de Visión (Flip Card) */}
          <div className="mv-card flip-card vision">
            <div className="flip-card-inner">

              {/* CARA FRONTAL: Ícono y Título */}
              <div className="flip-card-front">
                {/* <span className="mv-icon">{mvData.vision.icon}</span> */}
                <h2>Visión</h2>
              </div>

              {/* CARA TRASERA: Descripción Corta y Botón */}
              <div className="flip-card-back">
                <h2>Visión</h2>
                <p>{mvData.vision.shortDescription}</p>
                <button className="btn-mv-more" onClick={() => openMVModal('vision')}>Ver más detalle</button>
              </div>

            </div>
          </div>

          {/* Tarjeta de Valores (Flip Card) */}
          <div className="mv-card flip-card values">
            <div className="flip-card-inner">

              {/* CARA FRONTAL: Ícono y Título */}
              <div className="flip-card-front">
                {/* <span className="mv-icon">{mvData.values.icon}</span> */}
                <h2>Valores</h2>
              </div>

              {/* CARA TRASERA: Descripción Corta y Botón */}
              <div className="flip-card-back">
                <h2>Valores</h2>
                <p>{mvData.values.shortDescription}</p>
                <button className="btn-mv-more" onClick={() => openMVModal('values')}>Ver más detalle</button>
              </div>

            </div>
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