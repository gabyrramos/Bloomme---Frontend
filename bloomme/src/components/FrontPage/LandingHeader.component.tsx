// Header.tsx
import React, { useState } from 'react';
import BlueLogo from '../../assets/BlueLogo.png';
import '../../styles/FrontPage/LandingHeader.style.css';


const LandingHeader: React.FC = () => {
    const [activeLink, setActiveLink] = useState('sign-up');
  
    const handleClick = (link: string) => {
      setActiveLink(link);
    };
  
    return (
      <header className="landingHeader">
        <img src={BlueLogo} alt="Bloom me logo" className="landingLogo" />
        <nav className='landingMenu'>
          <a href="#services">Our Service</a>
          <a href="#assistant">Assistant</a>
        </nav>
        <div className='landingRegisterOptions'>
          <a
            href="#sign-in"
            className={activeLink === 'sign-in' ? 'active' : ''}
            onClick={() => handleClick('sign-in')}
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className={activeLink === 'sign-up' ? 'active' : ''}
            onClick={() => handleClick('sign-up')}
          >
            Sign Up
          </a>
        </div>
      </header>
    );
  };
  
  export default LandingHeader;



// const LandingHeader: React.FC = () => {
//     return (
//         <header className="landingHeader">
//             <img src={BlueLogo} alt="Bloom me logo" className="landingLogo" />
//             <nav className='landingMenu'>
//                 <a href="#services">Our Service</a>
//                 <a href="#assistant">Assistant</a>
//             </nav>
//             <div className='landingRegisterOptions'>
//                 <a href="#sign-in">Sign In</a>
//                 <a href="#sign-up">Sign Up</a>
//             </div>
//         </header>
//     );
// };

// export default LandingHeader;
