import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const ShoesManProduct = () => {
  const { id } = useParams();

  const [value, setvalue] = useState([]);
  const url = `http://localhost:5000/api/manshoes/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => setvalue(res.data));
  }, []);

  console.log(value);

  return (
    <div className="shoesManProduct">
      <div className="cardShoesManProduct">
        <div className="container-img-showcase">
          <img className="img-showcase" src={value.picture} alt="produit" />
        </div>
        <div className="product-infos">
          <h2 className="nameProduct">{value.name}</h2>
          <p>Prix: {value.price}</p>
          <p className="descriptionProduct">{value.description}</p>
          {/* <form> */}
            {/* <label htmlFor="quantity">Quantité</label> */}
            {/* <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs} /> */}
            {/* <button>Ajouter au panier</button> */}
            {/* <span className="adding-infos"></span>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default ShoesManProduct;
