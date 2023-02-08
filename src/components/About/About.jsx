import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'


const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
          <div className="about__me">
            <div className="about__me-image">
              <img  src={ME} alt="About Image"/>
            </div>
          </div>

          <div className="about__content">
            <p>As a beginner in the field of Information Technology, I strive to associate myself with an organization where I can utilize my skills in the best possible manner, which further gives me an opportunity to grow in my career journey while contributing to the development of the organization.</p>
            <h5>Professional Skills</h5>
            <ul className='about__list'>
              <li>Concentrative</li>
              <li>Problem Solving</li>
              <li>Team Player</li>
              <li>Hard Working</li>
            </ul>
            <div className='lt'><a href='#contact' className='btn btn-primary'>Let's Talk</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
