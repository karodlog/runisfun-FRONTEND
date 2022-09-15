import { createReducer } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser } from "../actions/actions";

const initialState ={
    isConnected: false,
    token: null,
    errorMsg: null
};

const authReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isConnected = true;
            state.token = action.payload;
            state.errorMsg = null;
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.isConnected = false;
            state.token = null;
            state.errorMsg = 'Merci de remplir tous les champs svp';
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isConnected = true;
            state.token = action.payload;
            state.errorMsg = null;
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.isConnected = false;
            state.token = null;
            state.errorMsg = 'Email ou mot de passe incorrect';
        })
        .addCase(logOutUser, (state, action)=>{
            state.isConnected = false;
            state.token = null;
            state.errorMsg = null;
        })
})


export default authReducer;