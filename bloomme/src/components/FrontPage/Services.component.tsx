// Services.tsx
import React from 'react';
import '../../styles/FrontPage/Services.style.css';

const ServiceItem: React.FC<{ title: string; description: string; color: string }> = ({ title, description, color }) => (
    <div className="service-item" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section className="services" id="services">
            <h2>Our Services</h2>
            <div className="services-list">
                <ServiceItem title="Quiz" description="Lorem ipsum dolor sit amet..." color="#ffd1dc" />
                <ServiceItem title="Progress" description="Lorem ipsum dolor sit amet..." color="#ffe7b6" />
                <ServiceItem title="Routes" description="Lorem ipsum dolor sit amet..." color="#b8e6cf" />
                <ServiceItem title="Safe Area" description="Lorem ipsum dolor sit amet..." color="#c0dbff" />
            </div>
        </section>
    );
};

export default Services;
