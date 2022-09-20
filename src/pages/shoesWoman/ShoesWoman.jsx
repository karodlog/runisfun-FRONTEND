import axios from "axios";
import React, { useEffect, useState } from "react";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import CardWoman from "../../components/card/CardWoman";
import Footer from "../../components/Footer/Footer";
import runnerWoman from "./bluewater-sweden-adIdmBMErV8-unsplash.png";

const ShoesWoman = () => {
  const [datawoman, setdatawoman] = useState([]);
  const [activity, setactivity] = useState("");
  const [promo, setpromo] = useState("");

  const categories = ["running", "trail", "hike"];
  const promotions = ["new", "discount", "good deal"];

  const url = "http://localhost:5000/api/womanshoes/";

  useEffect(() => {
    axios.get(url).then((res) => setdatawoman(res.data));
  }, []);

  const resetRecherche = () => {
    setactivity("");
    setpromo("");
  };

  return (
    <div className="containerShoeswoman">
      <div className="recherches">
        <div className="radio-container">
          <h4 className="activity">Activity</h4>
          {categories.map((category) => (
            <div className="selection">
              <label htmlFor={category}>{category}</label>
              <input
                type="radio"
                id={category}
                name="categoryAct"
                checked={category === activity}
                onChange={(e) => setactivity(e.target.id)}
              />
            </div>
          ))}
          <h4 className="activity">Promo</h4>
          {promotions.map((prom) => (
            <div className="selection">
              <label htmlFor={prom}>{prom}</label>
              <input
                type="radio"
                id={prom}
                name="categoryrProm"
                checked={prom === promo}
                onChange={(e) => setpromo(e.target.id)}
                defaultChecked=""
              />
            </div>
          ))}
          <button className="reset" onClick={resetRecherche}>
            RESET SEARCH
          </button>
        </div>
      </div>

      <div className="runneuse">
        <img className="runnerWom" src={runnerWoman} alt="" />
      </div>

      <ul className="listCard">
        <BarreFiltreShoes />
        {datawoman
          .filter((element) => element.activity.includes(activity))
          .filter((element) => element.promo.includes(promo))

          .map((element, index) => (
            <>
              <CardWoman key={index} element={element} />
            </>
          ))}
      </ul>
    </div>
  );
};

export default ShoesWoman;
