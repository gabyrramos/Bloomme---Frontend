// Header.tsx
import React from 'react';
import BlueLogo from '../assets/BlueLogo.png';
import '../styles/Header.style.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={BlueLogo} alt="Bloom me logo" className="logo" />
            <nav>
                <a href="#services">Our Service</a>
                <a href="#assistant">Assistant</a>
            </nav>
            <div>
                <a href="#sign-in">Sign In</a>
                <a href="#sign-up">Sign Up</a>
            </div>
        </header>
    );
};

export default Header;
