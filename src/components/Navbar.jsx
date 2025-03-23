import React from 'react'
import logo from "../assets/harsh-bajpai_logo.jpg"
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-0 px-10" >
        <div className="flex flex-shrink-0 items-center">
            <a href="/"  aria-label="Home" >
            <img src={logo} className="mx-2" width={70} height = {3} alt='logo' style={{ marginLeft: '-1cm' }}/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href='https://www.linkedin.com/in/harshbajpai72'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href='https://github.com/its-harsh72'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
            <i className="fa-brands fa-github"></i>
            </a>
            <a href='https://www.hackerrank.com/certificates/847ed35112b8'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
            <i className="fa-brands fa-hackerrank"></i>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
