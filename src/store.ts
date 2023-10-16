import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/counterSlice";
export type RootState = {
    CounterR: ReturnType<typeof counterSlice>,
}
export const store= configureStore({
    reducer:{
        CounterR: counterSlice,
    },
})


 