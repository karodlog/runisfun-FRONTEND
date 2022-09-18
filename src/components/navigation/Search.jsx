import React, { useContext, useEffect, useState } from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../context/userContext";
import { useSelector } from "react-redux";

const Search = () => {
  const { toggleModals } = useContext(UserContext);
  const connected = useSelector((state) => state.auth.isConnected);
  const [logout, setlogout] = useState();
  const [byebye, setbyebye] = useState();



const logoutfunction = ()=>{

  const timer = setTimeout(()=>{
    setbyebye("Merci de votre visite et à bientôt");
  }, 1000);
  setTimeout(()=>{
    setlogout(() => window.location.reload());

  },5000)
  return() => clearTimeout(timer)

}
  
 


  let element;
  if (!connected) {
    element = (
      <div>
        <button
          style={{ width: "110px", height: "30px" }}
          onClick={() => toggleModals("login")}
          type="btn"
        >
          Se connecter
        </button>
        <button
          style={{ width: "110px", height: "30px" }}
          onClick={() => toggleModals("register")}
          type="btn"
        >
          S'enregistrer
        </button>
      </div>
    );
  } else {
    element = (
      <div>
        <button
          onClick={logoutfunction}
          style={{ width: "230px", height: "30px" }}
          type="btn"
        >
          Se déconnecter
        </button>
      </div>
    );
  }


  return (
    <div className="search">
      <div className="buttons">
        {element}
        <div className="panier">
          <label htmlFor="article">
            <span>Mon</span>
            <span>panier</span>
          </label>
          <div className="pictoCaddie">
            <h4 id="nbreArticles">4</h4>
            <FontAwesomeIcon
              className="articles"
              icon={faBasketShopping}
              size="2x"
              color="white"
            />
          </div>
        </div>
      </div>
      <input id="aurevoir" type="text" placeholder={byebye} />
    </div>
  );
};

export default Search;
