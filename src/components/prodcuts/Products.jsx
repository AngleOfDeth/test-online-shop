import React from 'react'
import TitleComponents from '../globalComponents/titleComponents/TitleComponents'
import ProductCard from "../globalComponents/productCard/ProductCard";
import "./products.css"
import { useState } from "react";

const Products = () => {

  const [product] = useState([
    {
      id : 1,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 2,
      img : require("../../assets/images/p2.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 3,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },   {
      id : 4,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 5,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    },
    {
      id : 6,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 7,
      img : require("../../assets/images/p2.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 8,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },   {
      id : 9,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    
    },
    {
      id : 10,
      img : require("../../assets/images/p1.jpg"),
      title : "لباس",
      desc : "این لباس قشنگه",
      price : "۲۰۰",
      discount : "۱۵٪",
      route : "/productDetail"
    },
  ])

  return (
    <section className='products'>
      <div><TitleComponents titleText={"محصولات"} /></div>
   <div className='products__box' >
   {product.map((item)=> {
        return(
          <ProductCard key={item.id} src={item.img} route={item.route}  title={item.title} desc={item.desc} price ={item.price}  discount={item.discount}  />  
        )
      })}
   </div>
    </section>
  )
}

export default Products