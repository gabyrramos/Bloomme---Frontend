// Footer.tsx
import React from 'react';
import '../../styles/FrontPage/Footer.style.css';
import Facebookicon from '../../assets/Facebookicon.png';
import Instagramicon from '../../assets/lnstagramicon.png';
import Whatsappicon from '../../assets/WhatsAppicon.png';

export const Footer: React.FC = () => {
    return (
      <footer className="landingfooter">
        <div className="contact-info">
          <h3 style={{textAlign: 'center'}}>Contact Us</h3>
          <p>hello@bloomme.com</p>
          <p>Copyright 2024 - Bloomme</p>
        </div>
        <div className="subscribe">
          <h3 style={{textAlign: 'center'}}>Subscribe</h3>
          <p>Receive our newsletter!</p>
          <input type="email" className='landingplaceholder' placeholder="Insert your email" />
        </div>
        <div className="follow-us">
          <h3 style={{textAlign: 'center'}}>Follow Us</h3>
          <div className="social-icons">
            <a href="#whatsapp"><img src={Whatsappicon} alt="WhatsApp" /></a>
            <a href="#facebook"><img src={Facebookicon} alt="Facebook" /></a>
            <a href="#instagram"><img src={Instagramicon} alt="Instagram" /></a>
          </div>
        </div>
      </footer>
    );
  };

