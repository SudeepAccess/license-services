import { configureStore } from "@reduxjs/toolkit";
import AddinfoSlicer from "../Slicer/Slicer";





export const Store = configureStore({
    reducer:{
        addinfo:AddinfoSlicer
    }
})
