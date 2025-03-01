// import { produce } from "immer";
import { createSlice } from '@reduxjs/toolkit'

/* Action Types
export const CART_ADD_ITEM = '/cart/addItem';
const CART_REMOVE_ITEM = '/cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = '/cart/increaseQuantity';
const CART_ITEM_DECREASE_QUANTITY = '/cart/decreaseQuantity';
*/

/* Action Creators
export function addToCart(productId){
    return {type: CART_ADD_ITEM, payload: {productId}}
}
export function removeCartItem(productId){
    return {type: CART_REMOVE_ITEM, payload: {productId}}
}

export function increaseQuantity(productId){
    return {type: CART_ITEM_INCREASE_QUANTITY, payload: {productId}}
}

export function decreaseQuantity(productId){
    return {type: CART_ITEM_DECREASE_QUANTITY, payload: {productId}}
}
    */


// Using Immer
/*
export default function cartReducer(originalState = [], action) {
    return produce(originalState, (state) => {
      const existingItemIndex = state.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      )
      switch (action.type) {
        case CART_ADD_ITEM:
          if (existingItemIndex !== -1) {
            state[existingItemIndex].quantity += 1
            break
          }
          state.push({ ...action.payload, quantity: 1 })
          break
        case CART_REMOVE_ITEM:
          state.splice(existingItemIndex, 1)
          break
        case CART_ITEM_INCREASE_QUANTITY:
          state[existingItemIndex].quantity += 1
          break
        case CART_ITEM_DECREASE_QUANTITY:
          state[existingItemIndex].quantity -= 1
          if (state[existingItemIndex].quantity === 0) {
            state.splice(existingItemIndex, 1)
          }
      }
  
      return state
    })
  }
*/

/*
export default function cartReducer(state = [], action){
    switch(action.type){
        case CART_ADD_ITEM:
            const existinngItem = state.find(
                cartItem => cartItem.productId === action.payload.productId
            );
            if(existinngItem){
                return state.map(cartItem => {
                    if(cartItem.productId === existinngItem.productId){
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem
                })
            }
            return [...state, {...action.payload, quantity: 1}];
        case CART_REMOVE_ITEM:
            return state.filter(
                cartItem => cartItem.productId !== action.payload.productId
            )
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map(
                cartItem => {
                    if(cartItem.productId === action.payload.productId){
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem
                }
            )
        case CART_ITEM_DECREASE_QUANTITY:
            return state.map(
                cartItem => {
                    if(cartItem.productId === action.payload.productId){
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    }
                    return cartItem
                }
            ).filter(cartItem => cartItem.quantity > 0);

        default :
            return state;
    }
}
*/


const findItemIndex = (state, action) => state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
)

const slice = createSlice({
    name: 'cart', //name of action type (name of slice)
    initialState: [], 
    reducers: {
        // here every function acts like switch case
        // switch case in form of objects
        addToCart(state, action){ //behind the scene redux toolkit will call this function
            const existingItemIndex = findItemIndex(state, action);
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            }else{
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem(state, action){
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)
        },
        increaseQuantity(state, action){
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity += 1
        },
        decreaseQuantity(state, action){
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1
            if (state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1)
            }
        }
    }
})
// slice creates it's own reducer, action creators

// console.log(slice.actions);
// console.log(slice.actions.addToCart());
// console.log(slice.reducer);

export const {addToCart, removeCartItem, increaseQuantity, decreaseQuantity} = slice.actions;

export default slice.reducer;