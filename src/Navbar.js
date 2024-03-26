// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(10px); }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #333;
    color: #fff;
`;

const StyledList = styled.ul`
    display: flex;
    gap: 2em;
`;

const StyledLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &.active {
        color: #ffcc00;
    }

    &:hover {
        color: #ffcc00;
        animation: ${slideRight} 0.5s forwards;
    }
`;

const Navbar = () => {
    return (
        <StyledNav>
            <h1>Yogesh Munsah</h1>
            <StyledList>
                <li><StyledLink exact to="/" activeClassName="active">Home</StyledLink></li>
                <li><StyledLink to="/about" activeClassName="active">About</StyledLink></li>
                <li><StyledLink to="/projects" activeClassName="active">Projects</StyledLink></li>
                <li><StyledLink to="/contact" activeClassName="active">Contact</StyledLink></li>
            </StyledList>
        </StyledNav>
    );
};

export default Navbar;
