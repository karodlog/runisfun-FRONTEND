import React, {useContext} from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../context/userContext";


const Search = () => {
  const {toggleModals} = useContext(UserContext)

  return (
    <div className="search">
      <div className="buttons">
        <button onClick={()=> toggleModals('login')} type="btn">Se connecter</button>
        <button onClick={()=> toggleModals('register')} type="btn">S'enregistrer</button>
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
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
