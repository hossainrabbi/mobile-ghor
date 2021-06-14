import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../customHooks/useCart';
import { Button, GridItem } from '../../globalStyle';
import { ProductContent, ProductImg } from './Products.element';

const ProductItem = ({ item }) => {
    const { id, title, price, brand, imageUrl } = item;
    const { handleClick } = useCart();
    const history = useHistory();

    const handleProductDetails = (productId) => {
        history.push(`/product/${productId}`);
    };

    return (
        <GridItem>
            <ProductImg onClick={() => handleProductDetails(id)} src={imageUrl} alt={title} />
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
