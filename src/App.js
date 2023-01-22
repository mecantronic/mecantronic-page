import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:product" element={<Product/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
