import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/counterSlice";

export const store= configureStore({
    reducer:{
        CounterR: counterSlice,
    },
})


 