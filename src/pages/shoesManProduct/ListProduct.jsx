import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Article from "../../components/article/Article";
import SmallNavListProduct from "../../components/smallNav/SmallNavListProduct";

const ListProduct = () => {
  const { products, msg } = useSelector((state) => state.panier);
  console.log(products);

  const [sousTotal, setsousTotal] = useState();

//   const addArticle = ()=>{
//     product.price + product.price
//     setsousTotal()
//   }

  return (
    
    <div className="bigContainer">
    <SmallNavListProduct name={products.name} txt='Chaussures hommes'/>
    <div className="containerPanier">
    <h2 className="titrePanier">Votre panier d'achats</h2>
      <ul>
        {products?products.map((product) => (
            <Article product={product}/>
        //     <li className="listProduct" key={product.id}>
        //     <img style={{ width: "120px" }} src={product.picture} alt="" />
        //     <div className="infosProduct">
        //       <h4 className="productName">{product.name}</h4>
        //       <p className="productPrice">{product.price}</p>
        //     </div>
        //     <button>Supprimer</button>
        //     <button>+1</button>
        //   </li>
        )):''}
      </ul>
    </div>
    </div>
    
  );
};

export default ListProduct;
