import React from 'react';
import useCart from '../../customHooks/useCart';
import { CartBtn, CartQuantity, GridCart, Price } from './Cart.element';

const CartItem = ({ item }) => {
    const { id, title, imageUrl, price, quantity } = item;
    const { cartIncrement, cartDecrement, removeItem } = useCart();

    return (
        <GridCart>
            <h4>{title}</h4>
            <img src={imageUrl} alt={title} />
            <CartQuantity>
                <CartBtn type="button" onClick={() => cartDecrement(id)}>
                    -
                </CartBtn>
                <span>{quantity}</span>
                <CartBtn type="button" onClick={() => cartIncrement(id)}>
                    +
                </CartBtn>
            </CartQuantity>
            <Price>
                <h4>${quantity * price}</h4>
                <CartBtn onClick={() => removeItem(id)}>X</CartBtn>
            </Price>
        </GridCart>
    );
};

export default CartItem;
