import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const ButtonsArticle = ({productPrice}) => {
  return (
      <div className="containerButtons">
        <button>+1</button>
      <button>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
        <button>-1</button>
    </div>
  );
};

export default ButtonsArticle;
