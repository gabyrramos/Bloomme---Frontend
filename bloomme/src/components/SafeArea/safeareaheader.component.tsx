import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueLogo from "../../assets/BlueLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/FrontPage/LandingHeader.style.css";
import Avatar from "../../assets/avatar.svg";

const SafeAreaHeader: React.FC = () => {
  const [activeLink, setActiveLink] = useState("safearea");
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    if (link !== "safearea") {
      setActiveLink(link);
      navigate(`/${link}`);
    }
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <header className="safeareaHeader">
      <img src={BlueLogo} alt="Bloom me logo" className="safeareaLogo" />
      <nav className="safeareaMenu">
        <a
          onClick={() => handleClick("quiz")}
          className={activeLink === "quiz" ? "active" : ""}
        >
          Quiz
        </a>
        <a
          onClick={() => handleClick("progress")}
          className={activeLink === "progress" ? "active" : ""}
        >
          My Progress
        </a>
        <a
          onClick={() => handleClick("paths")}
          className={activeLink === "paths" ? "active" : ""}
        >
          Routes
        </a>
        <a className="active">Safe Area</a>{" "}
        {/* "Safe Area" link is always active */}
      </nav>
      <div className="safeareaProfile">
        <div className="safeareaProfileContainer">
          <span className="safeareaProfileName">Gabriela</span>
          <div
            className="safeareaProfileAvatar active"
            onClick={handleProfileClick}
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="safeareaProfileAvatarImg"
            />
            <FontAwesomeIcon icon={faAngleDown} className="arrow-menu" />
          </div>
          {profileOpen && (
            <div className="safeareaDropdown">
              <ul>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="/login">
                    Log Out
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SafeAreaHeader;
