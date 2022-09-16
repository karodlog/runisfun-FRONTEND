import React from "react";
import pictoWoman from "../card/person-dress-solid.svg"

const CardWoman = ({ element }) => {
  let changeColorBoxPrice;
  let changeColorPromo;
  let changeColorCard;
  if (element.promo === "new") {
    changeColorBoxPrice = "containerPrice";
    changeColorPromo = "infoPrice";
    changeColorCard = "containerCard";
  }
  if (element.promo === "discount") {
    changeColorBoxPrice = "containerPrice containerPriceOrange";
    changeColorPromo = "infoPrice infoPriceOrange";
    changeColorCard = "containerCard containerCardOrange";
  }
  if (element.promo === "good deal") {
    changeColorBoxPrice = "containerPrice containerPriceRouge";
    changeColorPromo = "infoPrice infoPriceRed";
    changeColorCard = "containerCard containerCardRed";
  }

  return (
    <div>
      <li className={changeColorCard}>
        <div className="pictoWoman">
          <img src={pictoWoman} className="pictoWomanImg" alt="" />
        </div>
        <div className="containerPicture">
          <img src={element.picture} alt="" />
        </div>
        <div className={changeColorPromo}>
          <h4 className="promoShoes">{element.promo}</h4>
        </div>
        <div className="containerTxt">
          <div className="infosShoes">
            <h5 className="brandShoes">{element.brand}</h5>
            <h4 className="nameShoes">{element.name}</h4>
            <p className="descriptionShoes">{element.description}</p>

            <div className="infoShoes">
              <h4 className="activityShoes">{element.activity}</h4>
            </div>
          </div>

          <h3 className="barredPriceShoes">
            <strike>{element.barredPrice}</strike>
          </h3>
        </div>
        <div className={changeColorBoxPrice}>
          <h2 className="price">{element.price}</h2>
        </div>
      </li>
    </div>
  );
};

export default CardWoman;
