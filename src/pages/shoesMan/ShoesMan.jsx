import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import BarreFiltreShoes from "../../components/barreFiltre/BarreFiltreShoes";
import runner1 from "./jakob-owens-7tMKyuV-9yo-unsplash.png";
import { Link } from "react-router-dom";
import Nav from "../../components/navigation/Nav";
import Footer from "../../components/Footer/Footer";

const ShoesMan = () => {
  const [data, setdata] = useState([]);
  const [activity, setactivity] = useState('');
  const [promo, setpromo] = useState('');

  const categories = ["running", "trail", "hike"];
  const promotions = ["new", "discount", "good deal"];
  

  const url = "http://localhost:5000/api/manshoes/";

  //   appel à l'api
  useEffect(() => {
    axios.get(url).then((res) => setdata(res.data));
  }, []);

  const resetRecherche = ()=>{
    setactivity('')
    setpromo('')
  }

  return (
    <div className="containerShoesman" >
      <Nav />
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
          <button className="reset" onClick={resetRecherche}>RESET SEARCH</button>
        </div>
      </div>

      <div className="runner">
        <img className="runner1" src={runner1} alt="" />
      </div>

      <ul className="listCard">
        <BarreFiltreShoes />
        {data
        // mise en place des filtres pour afficher les card selon les différents critères
            .filter((element) => element.activity.includes(activity))
            .filter((element) => element.promo.includes(promo))
          .map((element, index) => (
            <Link
              to={{
                pathname: `/shoesman/${element._id}`,
              }}
            >
              <Card key={index} element={element} />
            </Link>
          ))}
      </ul>
              <Footer/>
    </div>
  );
};

export default ShoesMan;
