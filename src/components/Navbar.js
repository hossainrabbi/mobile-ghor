import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <Nav>
        <Container>
            <Logo>
                <Link to="/">
                    Mobile <span>Ghor</span>
                </Link>
            </Logo>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <NavCart>
                <Link to="/cart">
                    <Button>
                        <FiShoppingCart />
                        <span>2</span>
                    </Button>
                </Link>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </NavCart>
        </Container>
    </Nav>
);

const Nav = styled.nav`
    background-color: #000000;
    height: 65px;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    max-width: 1200px;
    width: 1170px;
    height: 100%;
    margin: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: #ffffff;
        margin: 0 8px;
        padding: 5px;
    }
`;

const Logo = styled.div`
    a {
        font-size: 22px;
        font-weight: 600;
    }

    span {
        color: #f13a02ff;
    }
`;

const NavCart = styled.div`
    display: flex;
    align-items: center;

    a {
        display: flex;
        align-items: center;

        svg {
            display: inline-block;
        }
    }
`;

const Button = styled.button`
    padding: 8px 10px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    background-color: #f13a02ff;
    border-radius: 5px;
    display: flex;
    align-items: center;

    span {
        margin-left: 8px;
    }
`;

export default Navbar;
