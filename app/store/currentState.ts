import { createSlice } from "@reduxjs/toolkit";

const currentState=createSlice({
    name:"currentState",
    initialState:{
        current:"post"
    },
    reducers:{
        updateState:(state,action)=>{
                state.current= action.payload
        }
    }
})

export const{updateState}=currentState.actions
export default currentState.reducer