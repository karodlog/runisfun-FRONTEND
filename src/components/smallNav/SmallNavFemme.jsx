import React from "react";
import { Link, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallNavFemme = ({name, txt}) => {
  return (
    <div className="containerSmallnav">
      <NavLink to="/">
        <span>
          <FontAwesomeIcon className="maison" icon={faHome} />
          ACCUEIL
        </span>
      </NavLink>
      <NavLink to="/shoeswoman/">
        <span style={{textTransform: "uppercase", marginLeft: "7px"}}> ➔ {txt}</span>
      </NavLink>
        <span style={{marginLeft: "7px"}}> ➔ {name}</span>
    </div>
  );
};

export default SmallNavFemme;
