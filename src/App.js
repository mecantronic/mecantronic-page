// @ts-nocheck
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/Footer/Footer";
import { Servicios } from "./pages/Servicios";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/servicios/:servicio" element={<Servicios />}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/products/:product" element={<Product />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer /> 
    </BrowserRouter>
  );
}
export default App;
