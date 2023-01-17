import React from 'react'
import "./category.css"
import { Link } from "react-router-dom";

const Category = () => {

  const categoryItems = [
    {
      id: 1,
      img : require("../../assets/images/category01.jpg"),
      title : "مجلسی",
      route : "/product"
    },
    {
      id: 2,
      img : require("../../assets/images/category02.jpg"),
      title : "اسپرت",
      route : "/product"
    },
    {
      id: 3,
      img : require("../../assets/images/category03.jpg"),
      title : "راحتی",
      route : "/product"
    },
  ]

  return (
    <section className='categoy__box'>
      {categoryItems.map((item)=> {
        return (
       <Link key={item.id} className='category__link' to={item.route}>
          <article className='category__item'>
          <img className='category__img' src={item.img} alt="عکس دسته بندی" />
          <h2 className='category__title'> {item.title} </h2>
        </article>
        </Link>
        )
      })}
    </section>
  )
}

export default Category