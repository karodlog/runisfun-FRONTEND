import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SmallNav from "../../components/smallNav/SmallNav";
import { addProduct } from "../../store/actions/panier-actions";
import ListProduct from "./ListProduct";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ShoesManProduct = () => {

  const dispatch = useDispatch();
  

  const [nbrProduct, setnbrProduct] = useState(1);
  const { id } = useParams();

  const [value, setvalue] = useState([]);
  const url = `http://localhost:5000/api/manshoes/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => setvalue(res.data));
  }, []);

const updateProduct = e =>{
  setnbrProduct(Number(e.target.value))
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const addToCart = e =>{
  e.preventDefault()
  const article = {
    name: value.name,
    picture: value.picture,
    price: value.price
  }
  const actionAddArticle = addProduct(article);
  dispatch(actionAddArticle)
  }

const ajoutPanier = e=>{
  nbrProduct= (nbrProduct+1)
  setnbrProduct()
}




  return (
    <div className="shoesManProduct">
      <div className="bigContainer">
        <SmallNav name={value.name} txt='Chaussures hommes'/>
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
                <div className="containerQuantity containersize">
                  <label htmlFor="size">Pointure :</label>
                  <select name="pointure" id="size">
                    <option value="">Votre pointure</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                  </select>
                </div>
                <div className="containerQuantity">
                  <label htmlFor="quantity">Quantité :</label>
                  <input type="number" id="quantity" value={nbrProduct} onChange={updateProduct} />
                </div>
                <button onClick={ajoutPanier} className="addPanier">Ajouter au panier</button>
                <span className="adding-infos"></span>
              </form>
            </div>
          </div>
          <div className="bandeauBas">
            <p>Voir le panier</p>
            <div className="pictoCaddie">
            <h4 id="nbreArticles">{nbrProduct}</h4>
            <Link to="/pagepanier">
            <FontAwesomeIcon
              className="articles"
              icon={faBasketShopping}
              size="2x"
              color="white"
            />
            </Link>
          </div>

          </div>
        </div>
      </div>
      {/* <ListProduct /> */}
    </div>
  );
};

export default ShoesManProduct;
