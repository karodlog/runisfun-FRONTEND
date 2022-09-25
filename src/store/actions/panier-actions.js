import { createAction } from "@reduxjs/toolkit";
import { _isUndefined } from "gsap/gsap-core";

export const addProduct = createAction('product/add', (product)=>({
    payload: {
        
        ...product,
        msg: "produit ajouté au panier"
    }
}))