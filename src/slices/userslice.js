import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin=createAsyncThunk('loginuser',async(userCredentialsObjet,thunkApi)=>{
    let response=await axios.post('/userapp/login',userCredentialsObjet);
    if(response.data.message==="success"){
        localStorage.setItem("token",response.data.payload);
        return response.data.userObj;
    }
    if(response.data.message==='invalid user' || response.data.message==='Invalid password'){
        return thunkApi.rejectWithValue(response.data);
    }
})

let userSlice=createSlice({
    name:'user',
    initialState:{
        userObj:{},
        isError:false,
        isSuccess:false,
        isLoading:false,
        errMsg:'',
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj=null;
            state.isError=false;
            state.isLoading=false;
            state.errMsg='';
            return state;
        }
    },
    extraReducers:{
        [userLogin.pending]:(state,action)=>{
            state.isLoading=true;
            state.isError=true;
            state.isSuccess=false;
        },
        [userLogin.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.userObj=action.payload;
            state.isError=false;
            state.isSuccess=true;
            state.errMsg='';
        },
        [userLogin.rejected]:(state,action)=>{
            state.userObj={};
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.errMsg=action.payload.message;
        }
    }
})

export default userSlice.reducer;
export const {clearLoginStatus}=userSlice.actions;