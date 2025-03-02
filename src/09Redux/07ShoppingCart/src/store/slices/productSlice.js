import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        list: [],
        error: ''
    },
    reducers: {
        fetchProducts(state){
            state.loading = true;
        },
        fetchError(state, action){
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        },
        updateAllproducts(state, action){
            state.loading = false;
            state.list = action.payload;
            // state = action.payload; just update the copy state that immer uses and not original
            state.error = '';
        }
    }
})

export const getAllProducts = state => state.products.list;
export const getAllProductsLoadingState = state => state.products.loading;
export const getAllProductsError = state => state.products.error;

export const {updateAllproducts, fetchProducts, fetchError} = slice.actions;
export default slice.reducer;