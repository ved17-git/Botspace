import { createSlice } from "@reduxjs/toolkit";

const dmSlice=createSlice({
    name:"dmslice",
    initialState:{
        message:"",
    },
    reducers:{
        addMessage:(state, action)=>{
            state.message=action.payload
        }
    }
})

export const {addMessage}=dmSlice.actions
export default dmSlice.reducer