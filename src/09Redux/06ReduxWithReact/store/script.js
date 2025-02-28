import { combineReducers, createStore } from 'redux';
import productReduer from './productsReducer.js';
import cartReducer from './cartReducer.js';
import wishListReducer from './wishListReducer.js';

const reducer = combineReducers({
    products: productReduer,
    cart: cartReducer,
    wishList: wishListReducer,
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store);

// store.dispatch(addCartItem(1));
// store.dispatch(addCartItem(12));
// console.log(store.getState());

// store.dispatch(increaseQuantity(12));
// console.log(store.getState());

// store.dispatch(decreaseQuantity(12));
// store.dispatch(decreaseQuantity(12));
// console.log(store.getState());

// store.dispatch(addWish(1));
// store.dispatch(addWish(12));
// console.log(store.getState());

// store.dispatch(removeWish(1));
// console.log(store.getState());