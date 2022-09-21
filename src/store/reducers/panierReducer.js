import { createReducer } from "@reduxjs/toolkit";
import { panierCustomerAdd, panierCustomerUpdate } from "../actions/actions";

const initialState ={
    value: 0
};

const panierReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(panierCustomerAdd, (state, action)=>{
            state.value++

                console.log("addproduct");
        })

        // .updateCase(panierCustomerUpdate, (state, action)=>{

        // })

})
// export const {addCase} = panierReducer.actions;

export default panierReducer;