
export const CART_ADD_ITEM = '/cart/addItem';
const CART_REMOVE_ITEM = '/cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = '/cart/increaseQuantity';
const CART_ITEM_DECREASE_QUANTITY = '/cart/decreaseQuantity';

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