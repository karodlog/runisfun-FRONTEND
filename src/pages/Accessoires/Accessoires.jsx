import React from "react";
import montreFond from './montre.png'

const Accessoires = () => {
  return (
    <div className="accesoires">
      <div className="montre">
        <img className="montrePhoto" src={montreFond} alt="" />
      </div>
    </div>
  );
};

export default Accessoires;
