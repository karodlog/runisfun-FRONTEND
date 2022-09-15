import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import panierReducer from "./reducers/panierReducer";


const store = configureStore({
    reducer:{
        auth: authReducer,
        panier: panierReducer,
    },
    devTools: true,
})


export default store;