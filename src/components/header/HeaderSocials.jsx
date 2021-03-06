import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/katherinemarcott/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/KatherineMarcott" target='_blank' rel="noreferrer"><FaGithub /> </a>
        <a href="https://twitter.com/CodingKatCodes" target='_blank' rel="noreferrer"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials