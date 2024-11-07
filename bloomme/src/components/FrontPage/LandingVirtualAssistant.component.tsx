// VirtualAssistant.tsx
import React from 'react';
import '../../styles/FrontPage/LandingVirtualAssistant.style.css';

const LandingVirtualAssistant: React.FC = () => {
    return (
        <section className="landingassistant" id="assistant">
            <h2>Your Virtual Assistant</h2>
            <p>Briefly explain how the virtual assistant can respond to questions about topics like:</p>
            <ul>
                <li>Sexual health and well-being</li>
                <li>Managing anxiety and emotions</li>
                <li>Advice on friendships and relationships</li>
            </ul>
            <p>
                <i>"To get started, simply type your questions or choose a topic you're interested in. We’re here to provide information and support in a safe, private space."</i>
            </p>
            <img src="/path/to/bunny-image.png" alt="Bunny illustration" className="assistant-image" />
        </section>
    );
};

export default LandingVirtualAssistant;