import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    //localStorage de basket diye birşey varsa arraya çevirmiş bir şekilde dön 
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];//yoksa boş dizi döndür
}



const initialState = {
    products: getBasketFromStorage(),

}
const writeFromBasketToStorage = (basket) => {
    //ürünleri yazdırıyoruz
    localStorage.setItem("basket", JSON.stringify(basket))

}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha önceden eklenmiş 

            }
            else {
                //daha önce eklenmemiş
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        }

    }

})

export const { addProductToBasket } = basketSlice.actions

export default basketSlice.reducer

