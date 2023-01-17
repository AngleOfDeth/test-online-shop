import React from 'react'
import "./header.css"
import TopMenu from "./topMenu/TopMenu";
import Logo from "../globalComponents/logo/Logo";
import Helper from './helper/Helper';
const Header = () => {
  return (
    <header className='header'>
      <section className='header__box'>
        <Logo/>
        <TopMenu/>
        <Helper/>
      </section>
    </header>
  )
}

export default Header