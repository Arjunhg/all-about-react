import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";
import {produce} from 'immer';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    wishList: wishListReducer,
})

// export const store = createStore(rootReducer, window.___REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = configureStore({reducer: rootReducer});

// console.log(store.getState());

const user = [
    {
        name: "Arjun",
        age: 21,
    },
    {
        name: "Ram",
        age: 22,
    },
    {
        name: "Krishna",
        age: 23,
    }
]

/* user.forEach(item => {
    if(item.name === "Ram"){
        item.age = 20;
    }
}) //mpdify orignal array or user user[1].age = 20
console.log("Orignal is:",user);*/

/* const dummy = user.map(item => 
    item.name === "Ram" ? {...item, age: 20} : item
)
console.log("Dummy is:",dummy);
*/


const dummy = produce(user, (userCopy) => {
    userCopy[1].age = 20;
})
console.log("Dummy is:",dummy);
console.log("Orignal is:",user);
