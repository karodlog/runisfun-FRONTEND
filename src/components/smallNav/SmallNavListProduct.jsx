import React from "react";
import { Link, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallNavListProduct = () => {
  return (
    <div className="containerSmallnav">
      <NavLink to="/">
        <span>
          <FontAwesomeIcon className="maison" icon={faHome} />
          ACCUEIL
        </span>
      </NavLink>
      <NavLink to="/shoesman/">
        <span style={{textTransform: "uppercase", marginLeft: "7px"}}> | chaussures hommes</span>
      </NavLink>
      <NavLink to="/shoeswoman/">
        <span style={{textTransform: "uppercase", marginLeft: "7px"}}> | chaussures femmes</span>
      </NavLink>
      <NavLink to="/accessories/">
        <span style={{textTransform: "uppercase", marginLeft: "7px"}}> | accessoires</span>
      </NavLink>
        
    </div>
  );
};

export default SmallNavListProduct;
