import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../actions/authActions";
interface AuthState {
    user:any,
    tokens:string |null,
    loading:boolean,
    error:string |null
}

const initialState:AuthState = {
    user : null,
    tokens : null,
    loading : false,
    error : null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        Logout:state=>{
            state.user = null
            state.tokens=null
            state.error=null
            localStorage.removeItem('tokens');

        }
    },
    extraReducers:builder => {
        builder.addCase(LoginUser.pending,state=> {
            state.loading = true
            state.error = null
            
        })
            .addCase(LoginUser.fulfilled,(state,action)=> {
            state.loading = false
            state.user=action.payload.user
            state.tokens=action.payload.tokens
            localStorage.setItem('token',JSON.stringify(action.payload.tokens))
            
        })
               .addCase(LoginUser.rejected,(state,action)=> {
            state.loading = false
            state.error = null
            
        })

    }


})



export default AuthSlice.reducer
export const {Logout} = AuthSlice.actions
