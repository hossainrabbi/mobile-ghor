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

export const Button = styled.button`
    padding: 8px 10px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    background-color: #f13a02ff;
    border-radius: 0;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;

    span {
        margin-left: 8px;
    }
`;

export default GlobalStyle;
