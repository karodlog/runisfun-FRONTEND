import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/navigation/Nav";
import montreFond from './montre.png'

const Accessoires = () => {
  return (
    <div className="accessoires">
      <Nav />
      <div className="montre">
        <img className="montrePhoto" src={montreFond} alt="" />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Accessoires;
