import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import data from '../data';

const Home = () => {
    const [products, setProducts] = useState([...data]);
    const [cart, setCart] = useState([]);
    console.log(setProducts);

    const handleClick = (id) => {
        const product = products.find((productItem) => productItem.id === id);
        setCart([...cart, product]);
    };

    return (
        <>
            <Navbar cart={cart} />
            <Products handleClick={handleClick} products={products} />
        </>
    );
};

export default Home;
