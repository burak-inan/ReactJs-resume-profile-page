import React, { useEffect, useRef } from 'react'
import MobileMenu from './mobile-menu/mobile-menu'
import Avatar from './avatar/avatar'
import "./header.css"
import Name from './name/name'
import SocialIcons from './social-icons/social-icons'
import MainNav from './main-nav/main-nav'
import CopyRight from './copyright/copyright'

const Header = () => {

  const sidenav= useRef(null);

  const toggleNav= ()=> {
    
    console.log(sidenav.current);
    sidenav.current.classList.toggle("sidenav");
  }  

  return (
    <header className="header pull-left" ref={sidenav}>
      <MobileMenu toggleNav={toggleNav}/>
      <Avatar/>
      <Name/>
      <SocialIcons/>
      <MainNav/>
      <CopyRight/>
    </header>
  )
}

export default Header