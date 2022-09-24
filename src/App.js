import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accessoires from "./pages/Accessoires/Accessoires";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import ClothesMan from "./pages/clothesMan/ClothesMan";
import ClothesWoman from "./pages/clothesWoman/ClothesWoman";
import Home from "./pages/Home/Home";
import ShoesMan from "./pages/shoesMan/ShoesMan";
import ShoesWoman from "./pages/shoesWoman/ShoesWoman";
import Nav from "./components/navigation/Nav";
import Login from "./components/login-register/Login";
import Register from "./components/login-register/Register";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import ShoesManProduct from "./pages/shoesManProduct/ShoesManProduct";
import ShoesWomanProduct from "./pages/shoesManProduct/ShoesWomanProduct";
import AccessoiresProduct from "./pages/shoesManProduct/AccessoiresProduct";
import ListProduct from "./pages/shoesManProduct/ListProduct";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  return (
    <BrowserRouter>
      <Login />
      <Register />
      <div className="containerHome"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoesman" element={<ShoesMan />} />
        <Route path="/shoesman/:id" element={<ShoesManProduct />} />
        <Route path="/shoeswoman" element={<ShoesWoman />} />
        <Route path="/shoeswoman/:id" element={<ShoesWomanProduct />} />
        <Route path="/clothesman" element={<ClothesMan />} />
        <Route path="/clotheswoman" element={<ClothesWoman />} />
        <Route path="/accessories" element={<Accessoires />} />
        <Route path="/accessories/:id" element={<AccessoiresProduct />} />
        <Route path="/pagepanier" element={<ListProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
