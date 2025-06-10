import { createSlice } from "@reduxjs/toolkit";

const commentSlice=createSlice({
    name:"comment",
    initialState:{
        text:"Enter a comment..."
    },
    reducers:{
        addComment:(state,action)=>{
              state.text=action.payload
        }
    }

})

export const {addComment}=commentSlice.actions
export default commentSlice.reducer