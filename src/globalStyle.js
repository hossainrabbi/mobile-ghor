import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    img{
        max-width: 100%;
        object-fit: contain;
    }

`;

export const Container = styled.div`
    width: 100 vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 991px) {
        padding: 0 15px;
    }
`;

export const Grid = styled.div`
    display: grid;
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

export const Button = styled.button`
    padding: 8px 10px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    background-color: #f13a02ff;
    border-radius: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    span {
        margin-left: 8px;
    }
`;

export default GlobalStyle;
