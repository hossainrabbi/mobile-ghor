import styled from 'styled-components';
import { Button, Grid } from '../../globalStyle';

export const GridCart = styled(Grid)`
    grid-template-columns: repeat(4, 1fr);
    background-color: #dddddd47;
    margin-bottom: 10px;
    padding: 0 15px;

    img {
        width: 70px;
        display: inline-block;
    }

    img,
    h4 {
        justify-self: left;
        align-self: center;
    }

    @media screen and (max-width: 556px) {
        column-gap: 5px;
    }
`;

export const CartQuantity = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 10px;
    }
`;

export const CartBtn = styled(Button)`
    font-size: 20px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
`;

export const Price = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
