import React from 'react';
import { useSelector } from 'react-redux';
import useCart from '../../customHooks/useCart';
import { Container } from '../../globalStyle';
import ProductItem from './ProductItem';
import { Grid } from './Products.element';

const Products = () => {
    const { products } = useSelector((state) => state);
    const { handleClick } = useCart();

    return (
        <Container>
            <Grid>
                {products.map((item) => (
                    <ProductItem handleClick={handleClick} item={item} key={item.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
