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

gsap.registerPlugin(ScrollToPlugin);

function App() {
  return (

    <BrowserRouter>
        <div className='containerHome'></div>
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoesman" element={<ShoesMan />} />
        <Route path="/shoeswoman" element={<ShoesWoman />} />
        <Route path="/clothesman" element={<ClothesMan />} />
        <Route path="/clotheswoman" element={<ClothesWoman />} />
        <Route path="/accessories" element={<Accessoires />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
