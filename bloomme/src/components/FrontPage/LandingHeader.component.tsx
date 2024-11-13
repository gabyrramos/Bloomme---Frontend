// Header.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueLogo from "../../assets/BlueLogo.png";
import "../../styles/FrontPage/LandingHeader.style.css";

const LandingHeader: React.FC = () => {
  const [activeLink, setActiveLink] = useState("sign-up");
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    setActiveLink(link);
    if (link === "sign-in") {
      navigate("/login", { state: { replace: true } });
    } else if (link === "sign-up") {
      navigate("/register", { state: { replace: true } });
    }
  };

  return (
    <header className="landingHeader">
      <img src={BlueLogo} alt="Bloom me logo" className="landingLogo" />
      <nav className="landingMenu">
        <a href="#services">Our Service</a>
        <a href="#assistant">Assistant</a>
      </nav>
      <div className="landingRegisterOptions">
        <a
          className={activeLink === "sign-in" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleClick("sign-in");
          }}
        >
          Sign In
        </a>
        <a
          className={activeLink === "sign-up" ? "active" : ""}
          onClick={() => handleClick("sign-up")}
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default LandingHeader;

