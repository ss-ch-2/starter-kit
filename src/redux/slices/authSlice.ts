import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../actions/authActions";
interface AuthState {
    currentuser:any,
    token:string |null,
    loading:boolean,
    error:string |null
}

const initialState:AuthState = {
    currentuser : null,
    token : null,
    loading : false,
    error : null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder.addCase(LoginUser.pending,state=> {
            state.loading = true
            state.error = null
            
        })
            .addCase(LoginUser.fulfilled,(state,action)=> {
            state.loading = false
            state.currentuser=action.payload.currentuser
            state.token=action.payload.token
            localStorage.setItem('token',action.payload.token)
            
        })
               .addCase(LoginUser.rejected,(state,action)=> {
            state.loading = false
            state.error = null
            
        })

    }


})



export default AuthSlice.reducer
