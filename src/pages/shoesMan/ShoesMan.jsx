import React, { useEffect, useState } from "react";
import Nav from "../../components/navigation/Nav";
import TitrePage from "../../components/TitrePage";
import axios from "axios";
import Card from "../../components/card/Card";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import Footer from "../../components/Footer/Footer";
import runner1 from './jakob-owens-7tMKyuV-9yo-unsplash.png'
import runner3 from './runner-detour.png'

const ShoesMan = () => {
  const [data, setdata] = useState([]);


  const url = "http://localhost:5000/api/manshoes/";

  //   appel à l'api
  useEffect(() => {
    axios.get(url).then((res) => setdata(res.data));
  }, []);

  return (
    <div>
      <div className="runner">
        <img className="runner1" src={runner1}alt="" />
        {/* <img className="runner2" src={runner2}alt="" /> */}
      </div>
      {/* <div className="runnerDetour">
        <img className="runner3" src={runner3}alt="" />
      </div> */}


      <ul className="listCard">
      <BarreFiltreShoes />
        {data
        .map((element, index) => (
            <>
          <Card key={index} element={element} />
          </>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default ShoesMan;
