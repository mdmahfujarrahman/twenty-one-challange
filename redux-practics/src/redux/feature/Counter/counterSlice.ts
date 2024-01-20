import { createSlice } from "@reduxjs/toolkit";

type ICountterState = {
    value: number;
};

const initialState: ICountterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementLike: (state) => {
            state.value += 1;
        },
        decrementLike: (state) => {
            state.value -= 1;
        },
    },
});

export const { incrementLike, decrementLike } = counterSlice.actions;

export default counterSlice.reducer;
