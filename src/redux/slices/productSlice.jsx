import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    //ürünler bu adresten çekilecek ve bana dönecek
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;

})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;

        }

    },
    extraReducers: (builder) => {
        //İSTEK ATILDIĞINDA

        builder.addCase(getAllProducts.pending, (state, action) => {

            //isteği attık bekleme modundaysak 
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            //ürünleri başarılı bir şekilde aldığı an 
            state.loading = false;
            state.products = action.payload;

        })

    }

})
export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer