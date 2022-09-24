import React, { useContext, useEffect, useState } from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../context/userContext";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Search = ({value}) => {
  const { toggleModals } = useContext(UserContext);
  const connected = useSelector((state) => state.auth.isConnected);
  const firstname = useSelector((state) => state.auth.firstname);
  const [logout, setlogout] = useState();
  const [byebye, setbyebye] = useState();

  const [bonjour, setbonjour] = useState();
  setTimeout(()=>{
    if(connected){
      setbonjour(`Bonjour ${firstname} ! RunIsFun te souhaite la bienvenue.`)     
    }
  }, 2000)
clearTimeout(bonjour)
console.log(firstname);

const logoutfunction = ()=>{

  const timer = setTimeout(()=>{
    setbyebye(`Merci de ta visite ${firstname} et à très bientôt...`);
  }, 500);
  setTimeout(()=>{
    setlogout(() => window.location.reload());

  },3000)
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
        <Link to="/pagepanier">
        <div className="panier">
          <label htmlFor="article">
            <span>Mon</span>
            <span>panier</span>
          </label>
          <div className="pictoCaddie">
            <h4 id="nbreArticles"></h4>
            <FontAwesomeIcon
              className="articles"
              icon={faBasketShopping}
              size="2x"
              color="white"
            
            />
          </div>
        </div>
        </Link>
      </div>
      <input id="aurevoir" type="text" placeholder={byebye ? byebye : bonjour} />
    </div>
  );
};

export default Search;
