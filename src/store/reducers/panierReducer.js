import { createReducer } from "@reduxjs/toolkit";
import { addProduct, clearProduct } from "../actions/panier-actions";

const initialState ={
    products: [],
    msg: 'départ'
};

const panierReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(addProduct, (state, action)=>{
            state.products.push(action.payload);
        })
        .addCase(clearProduct, (state) => {
            state.products = [];
        })

    });

export default panierReducer