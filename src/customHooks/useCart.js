import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/actions/action';

const useCart = () => {
    const { cartItems, products } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setCartItem = (items) => {
        dispatch(addToCart(items));
    };

    const handleClick = (id) => {
        const product = products.find((productItem) => productItem.id === id);
        const itemIndex = cartItems.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            setCartItem([...cartItems, { ...product, quantity: 1 }]);
        } else {
            setCartItem(
                cartItems.map((item) =>
                    item.id === id
                        ? {
                              ...product,
                              quantity: parseInt(item.quantity) + 1,
                          }
                        : item
                )
            );
        }
    };

    const cartIncrement = (id) => {
        const cartItem = cartItems.find((item) => item.id === id);

        const incrementCart = cartItems.map((item) =>
            item.id === id
                ? {
                      ...cartItem,
                      quantity: parseInt(item.quantity) + 1,
                  }
                : item
        );

        setCartItem(incrementCart);
    };

    const cartDecrement = (id) => {
        const cartItem = cartItems.find((item) => item.id === id);

        const decrementCart = cartItems.map((item) =>
            item.id === id
                ? {
                      ...cartItem,
                      quantity: parseInt(item.quantity) > 1 ? parseInt(item.quantity) - 1 : 1,
                  }
                : item
        );

        setCartItem(decrementCart);
    };

    const removeItem = (id) => {
        const removeCart = cartItems.filter((item) => item.id !== id);

        setCartItem(removeCart);
    };

    const removeCart = () => {
        setCartItem([]);
    };

    const total = cartItems.reduce((acc, sum) => acc + sum.quantity * sum.price, 0);

    return { handleClick, cartIncrement, cartDecrement, total, removeItem, removeCart };
};

export default useCart;
