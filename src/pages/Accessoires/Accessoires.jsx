import React from "react";
import Nav from "../../components/navigation/Nav";
import montreFond from './montre.png'

const Accessoires = () => {
  return (
    <div className="accesoires">
      <Nav />
      <div className="montre">
        <img className="montrePhoto" src={montreFond} alt="" />
      </div>
    </div>
  );
};

export default Accessoires;
