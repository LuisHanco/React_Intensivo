import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title} <span className='line_title'></span></h2>
    </div>
  )
}

export default Title
