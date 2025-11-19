import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

import { FaMedal } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChairFill } from "react-icons/pi";
import { FaChildReaching } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";


const Programs = () => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={program_1} alt="" />
        {/* <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Inicial</p>
        </div> */}
        <div className='program-title title_uno'>
          <h2>Nivel Inicial</h2>
          <ul className='items-program'>
            <li><FaMedal className='icon_program'/>Educacion de Calidad</li>
            <li><SiGoogleclassroom  className='icon_program'/> Aulas Innovadoras</li>
            <li><PiChairFill  className='icon_program'/>Presencial</li>
            <li><FaChildReaching className='icon_program' />3 - 5 años</li>
          </ul>
          <div className='btn_box'><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /> <button className='btn_program btn_uno'>Mas Informacion</button></div>
         
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        {/* <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Primaria</p>
        </div> */}

        <div className='program-title title_dos'>
          <h2>Primaria</h2>
          <ul className='items-program'>
            <li><FaMedal className='icon_program'/>Educacion de Calidad</li>
            <li><SiGoogleclassroom  className='icon_program'/> Aulas Innovadoras</li>
            <li><PiChairFill  className='icon_program'/>Presencial</li>
            <li><FaChildReaching className='icon_program' />1°,2°,3°,4°,5°,6°</li>
          </ul>
          <div className='btn_box'><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /> <button className='btn_program btn_dos'>Mas Informacion</button></div>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        {/* <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Secundaria</p>
        </div> */}

        <div className='program-title title_tres'>
          <h2>Secundaria</h2>
          <ul className='items-program'>
            <li><FaMedal className='icon_program'/>Educacion de Calidad</li>
            <li><SiGoogleclassroom  className='icon_program'/> Aulas Innovadoras</li>
            <li><PiChairFill  className='icon_program'/>Presencial</li>
            <li><FaChildReaching className='icon_program' />1°,2°,3°,4°,5°</li>
          </ul>
          <div className='btn_box'><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /><FaAngleDoubleRight className='icon_program2' /> <button className='btn_program btn_tres'>Mas Informacion</button></div>
        </div>
      </div>

    </div>
  )
}

export default Programs
