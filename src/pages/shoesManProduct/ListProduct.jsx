import React from "react";
import { useSelector } from "react-redux";
import SmallNavListProduct from "../../components/smallNav/SmallNavListProduct";

const ListProduct = () => {
  const { products } = useSelector((state) => state.panier);
  console.log(products);

  return (
    <>
    <SmallNavListProduct name={products.name} txt='Chaussures hommes'/>
    <div className="containerPanier">
    <h2 className="titrePanier">Votre panier d'achats</h2>
      <ul>
        {products?products.map((product) => (
            <li className="listProduct" key={product.id}>
            <img style={{ width: "120px" }} src={product.picture} alt="" />
            <div className="infosProduct">
              <h4 className="productName">{product.name}</h4>
              <p className="productPrice">{product.price}</p>
            </div>
          </li>
        )):''}
      </ul>
    </div>
    </>
  );
};

export default ListProduct;
