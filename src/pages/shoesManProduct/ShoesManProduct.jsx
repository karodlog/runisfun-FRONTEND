import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import pictures from '../../pictures';



const ShoesManProduct = () => {

    const [value, setvalue] = useState([]);
    const url = "http://localhost:5000/api/manshoes/";
  
    useEffect(() => {
      axios.get(url).then((res) => setvalue(res.data));
    }, []);

    
    console.log(value[0]);

    const dataPiece = value.map((piece, index) => piece)
    console.log(dataPiece[0]);


    const {id} = useParams();
    console.log(id);

    const productClicked = dataPiece.findIndex(
        (objet) => objet.name ===id);

        console.log(productClicked);

// console.log(pictures[0].lienPicture);

    return (
      <div className="shoesManProduct">
        <div className="container-img-showcase">
          {/* <img
            className="img-showcase"
            src={`https://images2.imgbox.com/${pictures[productClicked].img}.png`}
            alt="produit"
          /> */}
        </div>
        <div className="product-infos">
          {/* <h2>{dataPiece[productClicked].name}</h2>
          <p>Prix: {dataPiece[productClicked].price} €</p> */}
          <form>
            {/* <label htmlFor="quantity">Quantité</label> */}
            {/* <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs} /> */}
            {/* <button>Ajouter au panier</button> */}
            <span className="adding-infos"></span>
          </form>

        </div>
      </div>
    );
};

export default ShoesManProduct;