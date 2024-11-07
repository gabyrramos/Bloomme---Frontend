// Header.tsx
import React from 'react';
import BlueLogo from '../../assets/BlueLogo.png';
import '../../styles/LandingHeader.style.css';

const LandingHeader: React.FC = () => {
    return (
        <header className="landingHeader">
            <img src={BlueLogo} alt="Bloom me logo" className="landingLogo" />
            <nav className='landingMenu'>
                <a href="#services">Our Service</a>
                <a href="#assistant">Assistant</a>
            </nav>
            <div className='landingRegisterOptions'>
                <a href="#sign-in">Sign In</a>
                <a href="#sign-up">Sign Up</a>
            </div>
        </header>
    );
};

export default LandingHeader;
