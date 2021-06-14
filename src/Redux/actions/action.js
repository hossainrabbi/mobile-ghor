import { ADD_TO_CART } from './actionType';

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: cartItem,
});

export const addToCarts = () => ({
    type: ADD_TO_CART,
});
