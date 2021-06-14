import React from 'react';
import { Button } from '../../globalStyle';
import { GridItem, ProductContent, ProductImg } from './Products.element';

const ProductItem = ({ item, handleClick }) => {
    const { id, title, price, brand, imageUrl } = item;
    return (
        <GridItem>
            <ProductImg src={imageUrl} alt={title} />
            <ProductContent>
                <h4>
                    <span>{title}</span>
                    <span>{brand}</span>
                </h4>
                <div>
                    <strong>${price}</strong>
                    <Button type="button" onClick={() => handleClick(id)}>
                        Add to Cart
                    </Button>
                </div>
            </ProductContent>
        </GridItem>
    );
};

export default ProductItem;
