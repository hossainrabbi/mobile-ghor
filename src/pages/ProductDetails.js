import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Container } from '../globalStyle';

const ProductDetails = () => {
    const { productId } = useParams();
    return (
        <>
            <Navbar />
            <Container>products Details {productId}</Container>
        </>
    );
};

export default ProductDetails;
