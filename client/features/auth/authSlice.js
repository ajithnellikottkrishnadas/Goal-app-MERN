import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";

const user= JSON.parse(localStorage.getItem("user"));

const initialState={
    user: user? user:null,
    isError: false,
    isSucces: false,
    isLoading: false,
    message:"",
}

//registeruser

export const register= createAsyncThunk('auth/register', async(user, thunkAPI)=>{
     try {
        return await authService.register(user)
     } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
     }
})

export const authSlice= createSlice({
    name:authSlice,
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading= false,
            state.isError=false,
            state.isSucces=false,
            state.message=""
        },
        extraReducer:(builder)=>{
            builder
               .addCase(register.pending, (state)=>{
                state.isLoading=true
               })
               .addCase(register.fulfilled,(state, action)=>{
                state.isLoading= false
                state.isSucces=true
                state.user= action.payload
               })
               .addCase(register.rejected, (state, action)=>{
                state.isLoading=false
                state.isError=true
                state.message= action.payload
                state.user= null
               })
        }
    }
})

export const {reset}= authSlice.actions;
export default authSlice.reducer;