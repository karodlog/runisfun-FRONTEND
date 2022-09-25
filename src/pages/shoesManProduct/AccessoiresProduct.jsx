import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SmallNavAccessories from "../../components/smallNav/SmallNavAccessories";
import { addProduct } from "../../store/actions/panier-actions";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AccessoiresProduct = () => {
  const dispatch = useDispatch();
  const [nbrProduct, setnbrProduct] = useState(1);
  const { id } = useParams();

  const [value, setvalue] = useState([]);
  const url = `http://localhost:5000/api/accessories/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => setvalue(res.data));
  }, []);

  const updateProduct = (e) => {
    setnbrProduct(Number(e.target.value));
  };

  const addToCart = (e) => {
    e.preventDefault();
    const article = {
      name: value.name,
      picture: value.picture,
      price: value.price,
      quantity: value.quantity,
    };
    const actionAddArticle = addProduct(article);
    dispatch(actionAddArticle);
  };

  const ajoutPanier = (e) => {
    setnbrProduct(Number(nbrProduct++));
  };
  
  return (
    <div className="shoesManProduct">
      <div className="bigContainer">
        <SmallNavAccessories name={value.name} txt="Accessoires" />
        <div className="cardShoesManProduct">
          <div className="generalProduct">
            <div className="containerImgAcc">
              <div className="container-img-showcaseAcc">
                <img
                  className="img-showcaseAcc"
                  src={value.picture}
                  alt="produit"
                />
              </div>
              <div className="container_SmallPictures">
                <div className="container_SmallPicture">
                  <img
                    src={value.picture}
                    alt="detailProduct"
                    className="smallPicture num01"
                  />
                </div>
                <div className="container_SmallPicture">
                  <img
                    src={value.picture}
                    alt="detailProduct"
                    className="smallPicture num02"
                  />
                </div>
                <div className="container_SmallPicture">
                  <img
                    src={value.picture}
                    alt="detailProduct"
                    className="smallPicture num03"
                  />
                </div>
              </div>
            </div>
            <div className="product-infos">
              <h4 className="brand">{value.brand}</h4>
              <h2 className="nameProduct">{value.name}</h2>
              <p>Prix: {value.price}</p>
              <p className="descriptionProduct">{value.description}</p>
              <form onSubmit={addToCart}>
                <div className="containerQuantity">
                  <label htmlFor="quantity">Quantité :</label>
                  <input
                    type="number"
                    id="quantity"
                    value={nbrProduct}
                    onChange={updateProduct}
                  />
                </div>
                <button className="addPanier">Ajouter au panier</button>
                <span className="adding-infos"></span>
              </form>
              <ul className="containerInfos">
                <li className="plusInfos"><span>Compass</span>: {value.compass}</li>
                <li className="plusInfos"><span>Altimeter</span>: {value.altimeter}</li>
                <li className="plusInfos">
                  <span>Waterproofing:</span> {value.waterproofing}
                </li>
                {value.chrono? <li className="plusInfos">
                  <span>Chronomètre</span>
                </li>:""}
              </ul>
            </div>
          </div>
          <div className="bandeauBas">
          <div className="containerCaddie">
              <Link to="/pagepanier">
                <div className="pictoCaddie">
                  <h4 id="nbreArticles">{nbrProduct}</h4>

                  <FontAwesomeIcon
                    className="articles"
                    icon={faBasketShopping}
                    size="2x"
                    color="white"
                  />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoiresProduct;
