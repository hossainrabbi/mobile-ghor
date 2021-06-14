import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container } from '../../globalStyle';

export const Nav = styled.nav`
    background-color: #000000;
    height: 65px;
    display: flex;
    align-items: center;
`;

export const NavContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    margin: 0 5px;
    padding: 5px;

    @media screen and (max-width: 991px) {
        display: block;
        width: 100%;
    }
`;

export const NavLinkBtn = styled(Link)`
    @media screen and (max-width: 991px) {
        display: block;
        width: 100%;
    }
`;

export const NavLogo = styled(NavLink)`
    font-size: 22px;
    font-weight: 600;
    span {
        color: #f13a02ff;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 991px) {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 20px;
        font-size: 1.8rem;
        line-height: 1px;
        transform: translateY(-50%);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 991px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 53px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        transition: all 0.5s ease;
        background-color: #000000;
        padding-bottom: 10px;
    }
`;

export const NavBtn = styled(Button)`
    margin-left: 10px;
    width: auto;
    border-radius: 5px;

    @media screen and (max-width: 991px) {
        margin-left: 0;
        margin-top: 10px;
        width: 100%;
        border-radius: 0;
    }
`;
