import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice' 
import commentReducer from './commentSlice'
import currentReducer from './currentState'
import dmReducer from './dmSlice'


export const store=configureStore({
    reducer:{
        posts:postReducer,
        comments:commentReducer,
        dm:dmReducer,

        current:currentReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;