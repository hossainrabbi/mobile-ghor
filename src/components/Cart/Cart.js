import React from 'react';
import { useSelector } from 'react-redux';
import useCart from '../../customHooks/useCart';
import { Container } from '../../globalStyle';
import { ClearButton, GridCart, Price } from './Cart.element';
import CartItem from './CartItem';

const Cart = () => {
    const { cartItems } = useSelector((state) => state);
    const { total, removeCart } = useCart();

    return (
        <Container style={{ marginTop: 20 }}>
            {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
            {total > 0 ? (
                <GridCart style={{ padding: 15 }}>
                    <h3>Total:</h3>
                    <i /> <i />
                    <Price>
                        <h3>${total}</h3>
                        <ClearButton onClick={() => removeCart()}>Clear</ClearButton>
                    </Price>
                </GridCart>
            ) : (
                <h3 style={{ textAlign: 'center' }}>Cart is empty</h3>
            )}
        </Container>
    );
};

export default Cart;
