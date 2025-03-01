import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import wishListReducer from "./wishListReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    wishList: wishListReducer,
})

export const store = createStore(rootReducer, window.___REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());