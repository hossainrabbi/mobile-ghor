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
                    item.id === id ? { ...product, quantity: parseInt(item.quantity) + 1 } : item
                )
            );
        }
    };

    return { handleClick };
};

export default useCart;
