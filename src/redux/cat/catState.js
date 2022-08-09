import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: "cats",
    initialState: {
        data:[],
        isloading: false,
        error: null
    },
    reducers: {
        getCatsFetch: (state) => {
            state.isloading = true;
            state.error = null;
            state.data = [];
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

export const { getCatsFetch, getCatSuccess, getCatError } = catSlice.actions;

export default catSlice.reducer;