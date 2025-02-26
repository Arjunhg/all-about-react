import { combineReducers, createStore } from 'redux';
import productReduer from './reducers/productsReducer';
import cartReducer, {addCartItem, removeCartItem, increaseQuantity, decreaseQuantity} from './reducers/cartReducer';
import wishListReducer, {addWish, removeWish} from './reducers/wishListReducer';

const reducer = combineReducers({
    products: productReduer,
    cart: cartReducer,
    wishList: wishListReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch(addCartItem(1));
store.dispatch(addCartItem(12));
console.log(store.getState());

store.dispatch(increaseQuantity(12));
console.log(store.getState());

store.dispatch(decreaseQuantity(12));
store.dispatch(decreaseQuantity(12));
console.log(store.getState());

store.dispatch(addWish(1));
store.dispatch(addWish(12));
console.log(store.getState());

store.dispatch(removeWish(1));
console.log(store.getState());