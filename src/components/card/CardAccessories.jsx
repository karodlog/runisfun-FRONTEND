import React from "react";
import pictoWoman from "../card/person-dress-solid.svg"

const CardAccessories = ({ element }) => {
//   let changeColorBoxPrice;
//   let changeColorPromo;
//   let changeColorCard;
//   if (element.promo === "new") {
//     changeColorBoxPrice = "containerPrice";
//     changeColorPromo = "infoPrice";
//     changeColorCard = "containerCard";
//   }
//   if (element.promo === "discount") {
//     changeColorBoxPrice = "containerPrice containerPriceOrange";
//     changeColorPromo = "infoPrice infoPriceOrange";
//     changeColorCard = "containerCard containerCardOrange";
//   }
//   if (element.promo === "good deal") {
//     changeColorBoxPrice = "containerPrice containerPriceRouge";
//     changeColorPromo = "infoPrice infoPriceRed";
//     changeColorCard = "containerCard containerCardRed";
//   }

  return (
    <div>
        
      <li className="containerCardAccessories">
        
        {/* <div className="pictoWoman">
          <img src={pictoWoman} className="pictoWomanImg" alt="" />
        </div> */}
        <div className="containerPictureAccessories">
          <img src={element.picture} alt="" />
        </div>
        <div className="">
          <h4 className="promoShoes">{element.promo}</h4>
        </div>
        <div className="containerTxtAccessories">
          <div className="infosAccessories">
            <h5 className="brandAccessories">{element.brand}</h5>
            <h4 className="nameAccessories">{element.name}</h4>
            <p className="descriptionAccessories">{element.description}</p>

            <div className="infoShoes">
              <h4 className="activityShoes">{element.activity}</h4>
            </div>
          </div>

        </div>
        <div className="containerPriceAccessories">
          <h2 className="price">{element.price}</h2>
        </div>
      </li>
    </div>
  );
};

export default CardAccessories;
