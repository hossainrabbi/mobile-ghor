import data from '../../data';
import { ADD_TO_CART } from '../actions/actionType';

const initialState = {
    products: [...data],
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
