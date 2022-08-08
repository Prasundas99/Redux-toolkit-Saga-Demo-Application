import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: "cat",
    initialState: {
        data:[],
        isloading: false,
        error: null
    },
    reducers: {
        getCat: (state) => {
            state.isloading = true;
            state.error = null;
        },
        getCatSuccess: (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        },
        getCatError: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        }
    }
});

export const { getCat, getCatSuccess, getCatError } = catSlice.actions;

export default catSlice.reducer;