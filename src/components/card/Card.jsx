import React from "react";
import pictoMan from './person-solid.svg'


const Card = ({ element }) => {
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
        </div>
        <div className="containerPrice">
            <h2 className="price">{element.price}</h2>


        </div>
      </li>
    </div>
  );
};

export default Card;
