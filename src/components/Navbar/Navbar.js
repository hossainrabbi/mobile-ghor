import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import {
    MobileIcon,
    Nav,
    NavBtn,
    NavContainer,
    NavLink,
    NavLinkBtn,
    NavLogo,
    // eslint-disable-next-line prettier/prettier
    NavMenu
} from './Navbar.element';

const Navbar = () => {
    const { cartItems } = useSelector((state) => state);
    const [click, setClick] = useState(false);

    return (
        <IconContext.Provider value={{ color: '#ffffff' }}>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        Mobile <span>Ghor</span>
                    </NavLogo>
                    <MobileIcon onClick={() => setClick(!click)}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={() => setClick(!click)} click={click}>
                        <NavLink to="/">Home</NavLink>
                        <NavLinkBtn to="/cart">
                            <NavBtn>
                                <FiShoppingCart />
                                <span>{cartItems.length}</span>
                            </NavBtn>
                        </NavLinkBtn>
                        <NavLinkBtn to="/login">
                            <NavBtn>Login</NavBtn>
                        </NavLinkBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
