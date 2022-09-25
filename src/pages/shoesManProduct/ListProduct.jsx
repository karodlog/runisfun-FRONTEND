import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Article from "../../components/article/Article";
import SmallNavListProduct from "../../components/smallNav/SmallNavListProduct";
import { clearProduct } from "../../store/actions/panier-actions";

const ListProduct = () => {
  const { products} = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const [sousTotal, setsousTotal] = useState();

  const handleClear = () => {
    dispatch(clearProduct());
  };

  return (
    <div className="bigContainer">
      <SmallNavListProduct name={products.name} txt="Chaussures hommes" />
      <div className="containerPanier">
        <div className="containerTxtPanier">
          <h2 className="titrePanier">Votre panier d'achats</h2>
          <button className="resetBtn" onClick={handleClear}>Reset list</button>
        </div>
        <ul>
          {products
            ? products.map((product) => (
                <Article product={product} />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ListProduct;
