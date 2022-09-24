import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SmallNav from "../../components/smallNav/SmallNav";
import SmallNavAccessories from "../../components/smallNav/SmallNavAccessories";
import { panierCustomerAdd } from "../../store/actions/actions";
import { addCase } from "../../store/reducers/panierReducer";

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

    // const itemAdded = {
    //   ...value._id,
    //   quantity: nbrProduct,
    // };

    // dispatch(panierCustomerAdd());
  };
  return (
    <div className="shoesManProduct">
      <div className="bigContainer">
        <SmallNavAccessories name={value.name} txt="Accessoires" />
        <div className="cardShoesManProduct">
          <div className="generalProduct">
            <div className="containerImg">
              <div className="container-img-showcase">
                <img
                  className="img-showcase"
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
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoiresProduct;
