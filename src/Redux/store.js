import { configureStore } from "@reduxjs/toolkit";
import Slicer from "./Slicer";

export const  store = configureStore({
 
    reducer:{
       user:Slicer 
    }
})