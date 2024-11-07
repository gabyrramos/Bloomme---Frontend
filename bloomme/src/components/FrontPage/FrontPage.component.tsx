// App.tsx
import React from 'react';
import Header from '../Header.component';
import Hero from './Hero.component'
import Services from '../FrontPage/Services.component';
import VirtualAssistant from '../FrontPage/VirtualAssistant.component';
import Footer from './Footer.component';
import '../../styles/FrontPage/FrontPage.style.css';

export const FrontPage: React.FC = () => {
    return (
        <div className="frontpage">
            <Header />
            <Hero />
            <Services />
            <VirtualAssistant />
            <Footer />
        </div>
    );
};


