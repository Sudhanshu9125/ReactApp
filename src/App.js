import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Menu from "./component/Menu"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import ProductDetails from "./component/ProductDetails"

export default function App() {
  return (
    <>
    <Router>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}