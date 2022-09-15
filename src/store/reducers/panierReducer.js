import { createReducer } from "@reduxjs/toolkit";

const initialState={
    articles: [],
};

const panierReducer = createReducer(initialState, ()=>{});


export default panierReducer;