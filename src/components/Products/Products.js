import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../../globalStyle';
import ProductItem from './ProductItem';
import { GridProducts } from './Products.element';

const Products = () => {
    const { products } = useSelector((state) => state);

    return (
        <Container>
            <GridProducts>
                {products.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </GridProducts>
        </Container>
    );
};

export default Products;
