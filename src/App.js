import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Product } from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:product" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
