import React from "react";
import pictoMan from "./person-solid.svg";

const Card = ({ element }) => {

  let changeColorBoxPrice;
  let changeColorPromo;
  if(element.promo==='new'){
    changeColorBoxPrice= "containerPrice"
    changeColorPromo= "promoShoes"
  }
  if(element.promo==='discount'){
    changeColorBoxPrice="containerPriceOrange"
    changeColorPromo= "promoShoesOrange"

  }
  if(element.promo==='good deal'){
    changeColorBoxPrice="containerPriceRouge"
    changeColorPromo= "promoShoesRouge"

  }

  return (
    <div>
      <li className="containerCard">
        <div className="picto">
          <img src={pictoMan} className="pictoImg" alt="" />
        </div>
        <div className="containerPicture">
          <img src={element.picture} alt="" />
        </div>
        <div className="containerTxt">
          <h5 className="brandShoes">{element.brand}</h5>
          <h4 className="nameShoes">{element.name}</h4>
          <p className="descriptionShoes">{element.description}</p>

          <div className="infoShoes">
            <h4 className="activityShoes">{element.activity}</h4>
            <div className="infoPrice">
              <h4 className={changeColorPromo}>{element.promo}</h4>
              <h4 className="barredPriceShoes"><strike>{element.barredPrice}</strike></h4>
            </div>
          </div>
        </div>
        <div className={changeColorBoxPrice}>
          <h2 className="price">{element.price}</h2>
        </div>
      </li>
    </div>
  );
};

export default Card;
