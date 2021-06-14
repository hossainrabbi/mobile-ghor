import styled from 'styled-components';
import { Grid } from '../../globalStyle';

export const GridProducts = styled(Grid)`
    grid-template-columns: repeat(3, 1fr);
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    cursor: pointer;
`;

export const ProductContent = styled.div`
    padding: 0 10px;

    h4,
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        strong {
            width: 50%;
        }
    }

    div {
        margin-bottom: 10px;
    }
`;
