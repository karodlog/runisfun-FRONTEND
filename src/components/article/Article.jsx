import React from 'react';
import ButtonsArticle from './ButtonsArticle';

const Article = ({product}) => {
    return (
        <div>
            <li className="listProduct" key={product.id}>
            <img style={{ width: "120px" }} src={product.picture} alt="" />
            <div className="infosProduct">
              <h4 className="productName">{product.name}</h4>
              <p className="productPrice">{product.price}</p>
            </div>
            <div className="boutons">

            <ButtonsArticle productPrice = {product.price}/>
            </div>
            </li>

        </div>
    );
};

export default Article;