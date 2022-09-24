import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import CardAccessories from "../../components/card/CardAccessories";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/navigation/Nav";
import montreFond from "./montre.png";

const Accessoires = () => {
  const [data, setdata] = useState([]);
  const [type, settype] = useState("");


  const typeProduct = ["watch", "GPS", "headphones"];

  const url = "http://localhost:5000/api/accessories/";

  //   appel à l'api
  useEffect(() => {
    axios.get(url).then((res) => setdata(res.data));
  }, []);

  const resetRecherche = () => {
    settype("");
  };

  return (
    <div className="accessoires">
      <Nav />
      <div className="recherches">
        <div className="radio-container">
          <h4 className="activity">Products</h4>
          {typeProduct.map((el) => (
            <div className="selection">
              <label htmlFor={el}>{el}</label>
              <input
                type="radio"
                id={el}
                name="categoryAct"
                checked={el === type}
                onChange={(e) => settype(e.target.id)}
              />
            </div>
          ))}
          <button className="reset" onClick={resetRecherche}>
            RESET SEARCH
          </button>
        </div>
      </div>
      <div className="montre">
        <img className="montrePhoto" src={montreFond} alt="" />
      </div>
      <ul className="listCardAccessories">
        <BarreFiltreShoes />
        {data
          .filter((element) => element.type.includes(type))
          // .filter((element) => element.promo.includes(promo))
          .map((element, index) => (
            <Link
              to={{
                pathname: `/accessories/${element._id}`,
              }}
            >
              <CardAccessories key={index} element={element} />
            </Link>
          ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Accessoires;
