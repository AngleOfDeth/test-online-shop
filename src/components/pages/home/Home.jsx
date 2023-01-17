
import Category from '../../category/Category'
import Products from '../../prodcuts/Products'
import "./home.css"
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Blog from '../../blog/Blog';


const Home = () => {
  const sliderImage = [
    {
      id : 1,
      img : require("../../../assets/images/banner01.jpg")
    },
    {
      id : 2,
      img : require("../../../assets/images/banner02.jpg")
    },
    {
      id : 3,
      img : require("../../../assets/images/banner03.jpg")
    },
    {
      id : 4,
      img : require("../../../assets/images/banner04.jpg")
    },
    {
      id : 5,
      img : require("../../../assets/images/banner05.jpg")
    },
    {
      id : 6,
      img : require("../../../assets/images/banner06.jpg")
    },
  ]

  return(
   <div className='slider'>
   <>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        {sliderImage.map((item)=> {
          return (
            <SwiperSlide key={item.id} > <img src={item.img} alt="عکس اسلایدر" /> </SwiperSlide>
          )
        })}

  
      </Swiper>
    </>

    <Category/>
    <Products/>

    <Blog/>
   </div> 
  )
}

export default Home