import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={program_1} alt="" />
        {/* <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Inicial</p>
        </div> */}
        <div className='program-title'>
          <h2>Inicial</h2>
          <ul>
            <li>Educacion de Calidad</li>
            <li>Aulas Innovadoras</li>
            <li>Presencial</li>
            <li>3 - 5 años</li>
          </ul>
          <button>Mas Informacion</button>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        {/* <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Primaria</p>
        </div> */}

        <div className='program-title'>
          <h2>Primaria</h2>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        {/* <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Secundaria</p>
        </div> */}

        <div className='program-title'>
          <h2>Secundaria</h2>
        </div>
      </div>

    </div>
  )
}

export default Programs
