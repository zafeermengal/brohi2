import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>  
            <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>  
            <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>  
            <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>

          </div>

            <p>
            Experienced JavaScript Developer with 5 years in the industry. Proficient with React. Used problem-solving aptitude to enhance application performance by 14%. Created data visualization tools and integrated designs. Increased speed of product lifecycle and 100% of the time delivered projects within deadline. Seeking to join BravDev to leverage experience with JavaScript to impress existing clients and obtain new ones.
            </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About