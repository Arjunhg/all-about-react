import {createStore} from 'redux';
import { productsList } from './productList';


const initialState = {
    products: productsList,
    cartItems: [],
    wishList: []
};

const CART_ADD_ITEMS = 'cart/addItems';
const CART_REMOVE_ITEMS = 'cart/removeItems';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantity';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantity';
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

function reducer(state=initialState, action){
    switch(action.type){
        case CART_ADD_ITEMS:
            const existingItem = state.cartItems.find(cartItem => cartItem.producId===action.payload.productId);
            if(existingItem){
               return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem => 
                        cartItem.productId===action.payload.productId ? {...item, quantity: item.quantity + action.payload.quantity} : cartItem
                    )
               }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        case CART_REMOVE_ITEMS:
            return {
                ...state,
                cartItem: state.cartItems.filter(item => item.productId!==action.payload.productId)
            }
        case CART_ITEM_INCREASE_QUANTITY:
            if(!action.payload || typeof action.payload.productId === 'undefined'){
                console.error('Invalid payload for CART_ITEM_INCREASE_QUANTITY');
                return state;
            }
            return {
                ...state,
                cartItems: state.cartItems.map(cartItem => {//map() already creates a new array instance, so we don’t need to explicitly spread the old array.
                    if(cartItem.productId === action.payload.productId){
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem;
                })
            }
        case CART_ITEM_DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems
                    .map(cartItem => {
                        if(cartItem.productId===action.payload.productId){
                            return {...cartItem, quantity: cartItem.quantity - 1}
                        }
                        return cartItem;
                    })
                    .filter(cartItem => cartItem.quantity>0)
            }
        case WISHLIST_ADD_ITEM:
           const itemExist = state.wishList.find(item => item.productId === action.payload.productId);
           if(itemExist){
               return state;
           }
           return {
            ...state,
            wishList: [...state.wishList, action.payload]
        }
        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishList: state.wishList.filter(wishListItem => wishListItem.productId !== action.payload.productId),
            }
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Intial State",store.getState());

store.dispatch({type: CART_ADD_ITEMS, payload: {productId: 1, quantity: 1}});
store.dispatch({type: CART_ADD_ITEMS, payload: {productId: 12, quantity: 1}});
console.log("State after adding items",store.getState());

store.dispatch({
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: {productId: 12}
})
console.log("State after increasing quantity",store.getState());
store.dispatch({
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: {productId: 12}
})
console.log("State after decreasing quantity",store.getState());
store.dispatch({
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: {productId: 12}
})
console.log("State after decreasing quantity and removing negative quantity",store.getState());
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 1}});
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 18}});
console.log("State after adding items to wishlist",store.getState());
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 1}});
console.log("State after removing items from wishlist",store.getState());
