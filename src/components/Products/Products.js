import React from 'react';
import { Container } from '../../globalStyle';
import ProductItem from './ProductItem';
import { Grid } from './Products.element';

const Products = ({ products, handleClick }) => (
    <Container>
        <Grid>
            {products.map((item) => (
                <ProductItem handleClick={handleClick} item={item} key={item.id} />
            ))}
        </Grid>
    </Container>
);

export default Products;
