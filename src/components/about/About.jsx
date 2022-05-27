import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {BsTelephone} from 'react-icons/bs'
import {FaAddressBook} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsTelephone className="about__icon"/>
                <h5>Phone</h5>
                 <small>+84352540904</small>
              </article>
              <article className="about__card">
                <FaAddressBook className="about__icon"/>
                <h5>Address</h5>
                 <small>48,stress 3 ,BauSim, TanThongHoi,CuChi,TPHCM</small>
              </article>
              <article className="about__card">
                <MdOutlineEmail className="about__icon"/>
                <h5>Email</h5>
                 <small>phudang24012000@gmail.com</small>
              </article>
              
            </div>
            <div className="about__socials ">
                <a href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-v%C4%83n-ph%C3%BA-89517a240/" 
                target="_blank" rel="noreferrer"> <BsLinkedin className="about__icon"/><span className="pan">Information Facebook </span></a>
                <a href="https://www.facebook.com/dang.vanphu.79/" 
                target="_blank" rel="noreferrer"> <FaFacebookF className="about__icon"/><span className="pan">Information LinkedIn </span> </a>
            </div>

            <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About