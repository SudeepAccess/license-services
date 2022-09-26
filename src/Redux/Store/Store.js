import { configureStore } from "@reduxjs/toolkit";
import AddinfoSlicer from "../Slicer/Slicer";
import thunk from "redux-thunk";






export const Store = configureStore(
    {
    reducer:{
        addinfo:AddinfoSlicer,
        

    },
})
