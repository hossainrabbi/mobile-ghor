import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import useCart from '../customHooks/useCart';
import { Button, Container, Grid } from '../globalStyle';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useSelector((state) => state);
    const { handleClick } = useCart();

    const { id, title, brand, details, price, imageUrl } = products.find(
        (item) => item.id === parseInt(productId)
    );

    return (
        <>
            <Navbar />
            <Container style={{ marginTop: 30 }}>
                <ProductGrid>
                    <img src={imageUrl} alt="" />
                    <div>
                        <h3>Product Name: {title}</h3>
                        <h4>Company Name: {brand}</h4>
                        <h4>Price: {price}</h4>
                        <p>{details}</p>
                        <Button onClick={() => handleClick(id)}>Add to Cart</Button>
                    </div>
                </ProductGrid>
            </Container>
        </>
    );
};

const ProductGrid = styled(Grid)`
    grid-template-columns: repeat(2, 1fr);

    div {
        align-self: center;

        h3,
        h4,
        p {
            margin-bottom: 10px;
        }
    }
`;

export default ProductDetails;
