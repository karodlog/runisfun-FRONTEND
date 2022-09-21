import { createReducer } from "@reduxjs/toolkit";
import { panierCustomerAdd, panierCustomerUpdate } from "../actions/actions";

const initialState={
    articles: [],
};

const panierReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(panierCustomerAdd, (state, action)=>{
            state.articles.push=(action.payload)

                console.log("addproduct");
        })

        // .updateCase(panierCustomerUpdate, (state, action)=>{

        // })

})


export default panierReducer;