import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Contact from "../views/contact";

const Index=()=>{
    return(
   <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />

   </Routes>
    )
}
export default Index;