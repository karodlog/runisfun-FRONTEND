import axios from "axios";
import React, { useEffect, useState } from "react";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import CardWoman from "../../components/card/CardWoman";
import Footer from "../../components/Footer/Footer";
import runnerWoman from "./bluewater-sweden-adIdmBMErV8-unsplash.png";

const ShoesWoman = () => {
  const [datawoman, setdatawoman] = useState([]);

  const url = "http://localhost:5000/api/womanshoes/";

  useEffect(() => {
    axios.get(url).then((res) => setdatawoman(res.data));
  }, []);

  return (
    <div>
      <div className="runneuse">
        <img className="runnerWom" src={runnerWoman} alt="" />
      </div>

      <ul className="listCard">
        <BarreFiltreShoes />
        {datawoman
            .map((element, index)=>(
                <>
                <CardWoman key={index} element={element} />
                </>
            ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ShoesWoman;
