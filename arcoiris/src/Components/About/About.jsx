import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>about university</h3>
            <h2>Nurturing tomorrows leaders today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis neque quo culpa unde inventore eligendi in fuga a voluptatem voluptate, distinctio mollitia quisquam ut recusandae quidem, natus cumque magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis neque quo culpa unde inventore eligendi in fuga a voluptatem voluptate, distinctio mollitia quisquam ut recusandae quidem, natus cumque magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis neque quo culpa unde inventore eligendi in fuga a voluptatem voluptate, distinctio mollitia quisquam ut recusandae quidem, natus cumque magnam.</p>
        </div>
    </div>
  )
}

export default About
