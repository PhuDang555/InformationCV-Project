import React from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail,BiExtension} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {useState} from 'react'

const Nav = () => {

  const [activeNav,setActiveNav] =useState('#')
  return (
    <nav>
      <a href=" # " className={activeNav ==='#'? 'active':''} onClick={()=>setActiveNav('#')}> <AiOutlineHome/> </a>
      <a href="#about" className={activeNav ==='#about'? 'active':''} onClick={()=>setActiveNav('#about')}> <AiOutlineUser/> </a>
      <a href="#experience" className={activeNav ==='#experience'? 'active':''} onClick={()=>setActiveNav('#experience')}> <FiSettings/> </a>
      <a href="#portfolio" className={activeNav ==='#portfolio'? 'active':''} onClick={()=>setActiveNav('#portfolio')}> <BiBook/> </a>
      <a href="#testimonials" className={activeNav ==='#testimonials'? 'active':''} onClick={()=>setActiveNav('#testimonials')}> <BiExtension/> </a>
      <a href="#contact" className={activeNav ==='#contact'? 'active':''} onClick={()=>setActiveNav('#contact')}> <BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav