import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio8.jpg'
import IMG2 from '../../assets/portfolio7.jpg'


const data= [
  {
    id:1,
    image:IMG1,
    title:'Responsive React Movies App With API',
    github:'https://github.com/PhuDang555/React-tMove',
    demo:'https://movie-two-sigma.vercel.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Build & Deploy React JS Portfolio Website Tutorial',
    github:'https://github.com/PhuDang555/informationcv',
    demo:'https://informationcv.vercel.app/'
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
            <a  href={github}
                className='btn' 
                target="_blank" 
                rel="noreferrer"
            >
            GitHub
            </a>
            <a href={demo}
              className='btn' 
              target="_blank" 
              rel="noreferrer"
              >
              Live Demo
              </a>
        </div>
      </article>   
          )
        })
      }  
    </div>
    </section>
  )
}

export default Portfolio