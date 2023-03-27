// @ts-nocheck
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Servicios } from "./pages/Servicios";
import { Error404 } from "./pages/Error404";
function App() {
  
/*
  document.querySelectorAll("*").forEach(el => {
    const { offsetWidth } = document.documentElement    
    if(el.offsetWidth > offsetWidth){
      console.log("PRODUCE SCROLL =>",el) 
      alert(el)      
    }
  })
  */
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> {/* RESPONSIVE PENDIENTE(Marca, Servicios y CasosExito) */}
        <Route path="/servicios/:servicio" element={<Servicios />}></Route>
        
        {/* HACER PAGINA ERROR =>> <Route path="/*" element={<Error404 />}></Route> */}

        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/products/:product" element={<Product />}></Route>
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}
export default App;
