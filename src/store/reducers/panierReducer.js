import { createReducer } from "@reduxjs/toolkit";
import { addProduct } from "../actions/panier-actions";

const initialState ={
    products: [],
    msg: 'départ'
};

const panierReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(addProduct, (state, action)=>{
            state.products.push(action.payload);
            state.msg = 'Produit ajouté';
        })
    });

export default panierReducer