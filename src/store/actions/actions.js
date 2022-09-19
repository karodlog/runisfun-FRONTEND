import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('user/register',

    async (data, thunkAPI)=>{
        const response = await axios.post('http://localhost:5000/api/auth/register', data);
        return response.data;
    
});
export const loginUser = createAsyncThunk('user/login',
    async (data, thunkAPI)=>{
        const response = await axios.post('http://localhost:5000/api/auth/login', data);
        return response.data;
});
export const logOutUser = createAction('user/logout');




