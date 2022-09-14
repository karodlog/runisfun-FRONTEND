import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import runner1 from './jakob-owens-7tMKyuV-9yo-unsplash.png'

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
      </div>

      <ul className="listCard">
      <BarreFiltreShoes />
        {data
        .map((element, index) => (
            <>
          <Card key={index} element={element} />
          </>
        ))}
      </ul>

      
    </div>
  );
};

export default ShoesMan;
