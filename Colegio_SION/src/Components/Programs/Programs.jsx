import React, { useState } from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import { FaMedal } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChairFill } from "react-icons/pi";
import { FaChildReaching } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProgramModal from './ProgramModal'; // Importar el modal

// 💡 Estructura de datos centralizada - ¡CON HORARIOS Y PRECIOS!
const programsData = [
  {
    id: 'inicial',
    title: 'Nivel Inicial',
    image: program_1,
    details: 'Énfasis en el desarrollo psicomotor y socioemocional. Aprendizaje basado en el juego y la exploración sensorial.',
    grades: '3 - 5 años',
    colorClass: 'title_uno',
    buttonClass: 'btn_uno',
    // -----------------------------------------------------
    // 🚨 NUEVOS DATOS: HORARIOS
    schedule: [
      'Horario regular: 7:45 AM - 1:00 PM',
      // 'Horario extendido (Opcional): 1:00 PM - 3:30 PM (Talleres)',
      // 'Ingreso flexible: 8:00 AM'
    ],
    // 🚨 NUEVOS DATOS: PRECIOS HISTÓRICOS (Soles Peruanos S/)
    historicalPricing: [
      { year: 2022, matricula: 180, mensualidad: 190 },
      { year: 2023, matricula: 200, mensualidad: 230 },
      { year: 2024, matricula: 200, mensualidad: 230 },
      { year: 2025, matricula: 250, mensualidad: 260 },
      { year: 2026, matricula: 260, mensualidad: 270 } // Año Actual
    ]
    // -----------------------------------------------------
  },
  {
    id: 'primaria',
    title: 'Primaria',
    image: program_2,
    details: 'Formación integral con foco en habilidades de lectura, escritura y pensamiento lógico. Uso de metodologías activas y proyectos colaborativos.',
    grades: '1°, 2°, 3°, 4°, 5°, 6°',
    colorClass: 'title_dos',
    buttonClass: 'btn_dos',
    // -----------------------------------------------------
    // 🚨 NUEVOS DATOS: HORARIOS
    schedule: [
      'Horario regular: 7:45 AM - 1:45 PM',
      // 'Día completo: Clases curriculares y Talleres extracurriculares.',
      // 'Refuerzo académico: 2:30 PM - 3:30 PM (Martes y Jueves)'
    ],
    // 🚨 NUEVOS DATOS: PRECIOS HISTÓRICOS
    historicalPricing: [
      { year: 2022, matricula: 180, mensualidad: 200 },
      { year: 2023, matricula: 200, mensualidad: 240 },
      { year: 2024, matricula: 200, mensualidad: 240 },
      { year: 2025, matricula: 250, mensualidad: 270 },
      { year: 2026, matricula: 260, mensualidad: 280 }
    ]
    // -----------------------------------------------------
  },
  {
    id: 'secundaria',
    title: 'Secundaria',
    image: program_3,
    details: 'Preparación pre-universitaria intensiva. Desarrollo de pensamiento crítico y orientación vocacional. Clases dictadas por especialistas.',
    grades: '1°, 2°, 3°, 4°, 5°',
    colorClass: 'title_tres',
    buttonClass: 'btn_tres',
    // -----------------------------------------------------
    // 🚨 NUEVOS DATOS: HORARIOS
    schedule: [
      'Horario regular: 7:45 AM - 2:20 PM',
      // 'Énfasis en preparación pre-universitaria y orientación vocacional.',
      // 'Talleres electivos: Tarde (Lunes, Miércoles, Viernes)'
    ],
    // 🚨 NUEVOS DATOS: PRECIOS HISTÓRICOS
    historicalPricing: [
      { year: 2022, matricula: 180, mensualidad: 200 },
      { year: 2023, matricula: 200, mensualidad: 250 },
      { year: 2024, matricula: 200, mensualidad: 250 },
      { year: 2025, matricula: 250, mensualidad: 280 },
      { year: 2026, matricula: 260, mensualidad: 290 }
    ]
    // -----------------------------------------------------
  }
];

const Programs = () => {
  // 1. Estados para el control del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramData, setSelectedProgramData] = useState(null);

  // 2. Función para abrir el modal
  const openModal = (programId) => {
    const program = programsData.find(p => p.id === programId);
    if (program) {
      setSelectedProgramData(program);
      setIsModalOpen(true);
    }
  };

  // 3. Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgramData(null); // Limpiar datos al cerrar
  };

  return (
    <div className='programs'>
      {/* 4. Mapeo y renderizado de programas */}
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
                {/* 5. Enlazar el botón a la función openModal con el ID correcto */}
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

      {/* 6. Renderizar el modal condicionalmente */}
      <ProgramModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        data={selectedProgramData} // Pasar los datos completos
      />
    </div>
  )
}

export default Programs