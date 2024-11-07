// Hero.tsx
import React from 'react';
import '../../styles/FrontPage/Hero.style.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <h1>Explore and Learn</h1>
            <p>
            Empowering young girls to understand their bodies and minds, you can build confidence and gain valuable knowledge in a safe, supportive space. We believe that learning about oneself should be fun, empowering, and something to celebrate!
            </p>
            <img src="/path/to/character-image.png" alt="Character" className="hero-image" />
        </section>
    );
};

export default Hero;
