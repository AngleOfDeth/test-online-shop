import React from 'react'
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ( {src , title , desc , price , discount ,  route } ) => {
  return (
    <>
    <Link to={route} > 
    <article className='productCard'>
            <img className='productCard__img' src={src} alt="عکس محصول" />
            <h3 className='productCard__title'> {title}  </h3>
            <p className='productCard__desc'> {desc} </p>
            <p className='productCard__price'>  {price}  تومان  </p>
            <span className='productCard__discount'> {discount} </span>
        </article>
     </Link>
    </>
  )
}

export default ProductCard