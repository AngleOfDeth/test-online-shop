import Home from "./components/pages/home/Home";
import Product from "./components/pages/product/Product";
import Blog from "./components/pages/blog/Blog";
import About from "./components/pages/about/About";
import ProductDetail from "./components/pages/productDetail/ProductDetail";

import { Routes , Route , Navigate } from "react-router-dom";

const Leyout = () => {
  return (
    <>
        <Routes>
            <Route path="/" element = {  <Home/> }  />
            <Route path="/home" element = { <Navigate replace to="/"/> }  />
            <Route path="/product" element = { <Product/> }  />
            <Route path="/productDetail" element = { <ProductDetail/> }  />
            <Route path="/blog" element = { <Blog/> }  />
            <Route path="/about" element = { <About/> }  />
        </Routes>
    </>
  )
}

export default Leyout