import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-v%C4%83n-ph%C3%BA-89517a240/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/PhuDang555" target="_blank" rel="noreferrer"> <BsGithub/> </a>
        <a href="https://www.facebook.com/dang.vanphu.79/" target="_blank" rel="noreferrer"> <FaFacebookF/> </a>
    </div>
  )
}

export default HeaderSocials