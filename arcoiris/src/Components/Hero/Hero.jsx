import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>I.E.P. ARCO IRIS</h1>
        <p>"Formando personas con valores competentes, críticas y creativas."</p>
        <button className='btn'>Explora Mas... <img src={dark_arrow} alt="" /></button>
      </div>
      
      {/* --- FORMULARIO DE PRE-MATRÍCULA AGREGADO --- */}
      <div className="pre-matricula-form">
        <h2>Pre-Matrícula Inicial, Primaria y Secundaria</h2>
        <form>
          <div className="form-group">
            <label htmlFor="studentName">Nombre del Alumno/a:</label>
            <input type="text" id="studentName" name="studentName" required />
          </div>
          <div className="form-group">
            <label htmlFor="level">Nivel de Interés:</label>
            <select id="level" name="level" required>
              <option value="">Selecciona un Nivel</option>
              <option value="inicial">Inicial</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="parentEmail">Celular del Padre/Madre:</label>
            <input type="email" id="parentEmail" name="parentEmail" required />
          </div>
          <button type="submit" className='btn form-btn'>Enviar Solicitud</button>
        </form>
      </div>
      {/* ------------------------------------------ */}
      
    </div>
  )
}

export default Hero