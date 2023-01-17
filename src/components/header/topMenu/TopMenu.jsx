import React from 'react'
import "./topMenu.css"
import {Link} from "react-router-dom";

const TopMenu = () => {

  const navbaritems = [
    {id :1 , title: "صفحه اصلی" , route : "/" },
    {id :2 , title: "محصولات" , route : "/product" },
    {id :3 , title: "بلاگ" , route : "/blog" },
    {id :4 , title: "درباره ما" , route : "/about" },
  ];

  return (
    <nav className="menu">
      <ul className='menu__list'>
        {navbaritems.map((item)=>{
          return(
            <li key={item.id} className='menu__item'> <Link className='menu__link' to={item.route} > {item.title} </Link> </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TopMenu