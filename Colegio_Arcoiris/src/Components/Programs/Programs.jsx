import React, { useState } from 'react' // Importar useState
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
// ... (Imports de íconos y assets omitidos por brevedad)
import { FaMedal } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChairFill } from "react-icons/pi";
import { FaChildReaching } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

// 💡 Estructura de datos centralizada
const programsData = [
  {
    id: 'inicial',
    title: 'Nivel Inicial',
    image: program_1,
    details: 'Énfasis en el desarrollo psicomotor y socioemocional. Aprendizaje basado en el juego y la exploración sensorial.',
    grades: '3 - 5 años',
    colorClass: 'title_uno',
    buttonClass: 'btn_uno'
  },
  {
    id: 'primaria',
    title: 'Primaria',
    image: program_2,
    details: 'Formación integral con foco en habilidades de lectura, escritura y pensamiento lógico. Uso de metodologías activas y proyectos colaborativos.',
    grades: '1°, 2°, 3°, 4°, 5°, 6°',
    colorClass: 'title_dos',
    buttonClass: 'btn_dos'
  },
  {
    id: 'secundaria',
    title: 'Secundaria',
    image: program_3,
    details: 'Preparación pre-universitaria y desarrollo de liderazgo. Cursos especializados en ciencias, tecnología y humanidades con orientación vocacional.',
    grades: '1°, 2°, 3°, 4°, 5°',
    colorClass: 'title_tres',
    buttonClass: 'btn_tres'
  }
];


// 1. Importar el nuevo componente Modal
import ProgramModal from './ProgramModal';


const Programs = () => {
  // 2. Estado para controlar el modal y los datos a mostrar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramData, setSelectedProgramData] = useState(null);

  // 3. Función para abrir el modal, cargando los datos
  const openModal = (programId) => {
    const data = programsData.find(p => p.id === programId);
    setSelectedProgramData(data);
    setIsModalOpen(true);
  };

  // 4. Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgramData(null); 
  };
  
  return (
    <div className='programs'>

      {/* 5. Mapeamos el array de datos para renderizar cada programa */}
      {programsData.map((program) => (
        <div className="program" key={program.id}>
          <img src={program.image} alt={program.title} />
          
          <div className={`program-title ${program.colorClass}`}>
            <h2>{program.title}</h2>
            <ul className='items-program'>
              <li><FaMedal className='icon_program'/>Educacion de Calidad</li>
              <li><SiGoogleclassroom  className='icon_program'/> Aulas Innovadoras</li>
              <li><PiChairFill  className='icon_program'/>Presencial</li>
              <li><FaChildReaching className='icon_program' />{program.grades}</li>
            </ul>
            <div className='btn_box'>
                <FaAngleDoubleRight className='icon_program2' />
                <FaAngleDoubleRight className='icon_program2' />
                <FaAngleDoubleRight className='icon_program2' /> 
                {/* 6. Enlazar el botón a la función openModal con el ID correcto */}
                <button 
                  className={`btn_program ${program.buttonClass}`}
                  onClick={() => openModal(program.id)} 
                >
                  Mas Informacion
                </button>
            </div>
          </div>
        </div>
      ))}

      {/* 7. Renderizar el modal condicionalmente */}
      <ProgramModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        data={selectedProgramData} 
      />
    </div>
  )
}

export default Programs