import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'


const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonails</h2>

        <div className="container testimonials__container">
          <article className="testimonials">
            <div className="client__avatar">
              <img src={AVTR1} alt="" />
            </div>
            <div>
              <h5 className="client__name">Dang Van Phu</h5>
              <small className="client__review">
              My name is Dang Van Phu. I was born 2000.
              I’m currently a Senior of Nguyen
              Tat Thanh University (NTTU)
              <br/>
              I'm a web developer with 2 months of experience in
              ReactJS framework and 2 months of NodeJS,
              Express and MongoDB. My favorite combo is MERN
              stack (MongoDB, Express, ReactJS and NodeJs).
              Front-end is my strong point. I especially love
              ReactJS which is a really powerful teachnology.
              
              </small>
              </div>
          </article>
        </div>
   </section>
  )
}

export default Testimonials