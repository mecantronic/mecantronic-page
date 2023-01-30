import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Servicios } from "./pages/Servicios";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/servicios/:servicio" element={<Servicios />}></Route>
        <Route path="/products/:product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
