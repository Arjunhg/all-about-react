import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        incr: (state) => {
            state.value += 1;
        },
        decr: (state) => {
            state.value -= 1;
        }
    }
})

export const { incr, decr } = counterSlice.actions;
export default counterSlice.reducer;