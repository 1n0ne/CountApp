import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: {
        plusOne: (state) => {
            state.count++;
        },

        subOne: (state) => {
            state.count--;
        },

        reset: (state) => {
            state.count=0;
        }
    }
})

export const {plusOne, subOne, reset} = counterSlice.actions;
export default counterSlice.reducer;

