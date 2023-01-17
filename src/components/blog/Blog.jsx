import React from 'react'
import "./blog.css"
import TitleComponents from "../globalComponents/titleComponents/TitleComponents";
import { useState } from "react";
import { Link } from "react-router-dom";


const Blog = () => {

   const testBlog  = [
    {
        id : 1,
        img : "", 
        title : "",
        desc : "",
        route : "/blog"
    },
    {
        id : 2,
        img : "", 
        title : "",
        desc : "",
        route : "/blog"
    },
    {
        id : 3,
        img : "", 
        title : "",
        desc : "",
        route : "/blog"
    },
    {
        id : 4,
        img : "", 
        title : "",
        desc : "",
        time : "",
        route : "/blog"
    },
];

  return (
    <section className='blog'>
        <TitleComponents titleText={"بلاگ ها"} />

        <div className='blog__box'>
            {testBlog.map((item) => {
                return(
                    <article key={item.id} >
                        sdfjs
                    </article>
                )
            })}
        </div>

    </section>
  )
}

export default Blog


// {blogInfo.map((item)=>{
//     return(
//         <Link to ={item.route}>
//             <article className='blog_Item'>
//                 <img src="" alt=""  />
//                 <h3 className='blog__title'> {item.title} </h3>
//                 <p className='blog__desc'> {item.desc} </p>
//                 <p className='blog__time'> {item.time} </p>
//         </article>
//         </Link>
//     )
// // })}