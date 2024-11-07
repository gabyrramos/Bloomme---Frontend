// Footer.tsx
import React from 'react';
import '../../styles/FrontPage/Footer.style.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="subscribe">
                <h3>Suscríbete</h3>
                <p>Recibe nuestras últimas novedades</p>
                <input type="email" placeholder="Correo Electrónico" />
            </div>
            <div className="contact-info">
                <p>Tienda: hola #319 ....</p>
                <p>28/12/154 / 996252658</p>
                <p>Copyright 2021 - Tienda de regalos hechos a mano</p>
            </div>
            <div className="follow-us">
                <h3>Síguenos</h3>
                <div className="social-icons">
                    <a href="#whatsapp">WhatsApp</a>
                    <a href="#facebook">Facebook</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

