import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
`;

export const GridItem = styled.article`
    box-shadow: 0 0 15px #00000025;
    margin-bottom: 30px;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
        box-shadow: 0 0 15px #000000;
    }
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
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
