import React, { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal.component";
import { useNavigate } from "react-router-dom";
import BlueLogo from "../../assets/BlueLogo.png";
import Avatar from "../../assets/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../../styles/FrontPage/LandingHeader.style.css";
import "../../styles/SafeArea/profilemodal.style.css";


const SafeAreaHeader: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState('')
  const [profileOpen, setProfileOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    setActiveLink(link);
    console.log({link})
    navigate(`/${link}`);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    setName(username || "Guest")
    const currentPath = window.location.pathname.split("/")[1];
    setActiveLink(currentPath);
    const localAvatar = localStorage.getItem("avatar");
    setAvatar(localAvatar || Avatar);
  },[]);
  // const handleProfileClick = () => {
  //   setProfileOpen(!profileOpen);
  // };

  const handleProfileModal = () => {
    setShowProfileModal(true);
    setProfileOpen(false);
  };


  return (
    <><header className="safeareaHeader pl-20">
      <a
        onClick={() => handleClick("home")}
        className={'cursor-pointer ' + activeLink === "home" ? "active" : ""}
      >
        <img src={BlueLogo} alt="Bloom me logo" className="safeareaLogo cursor-pointer w-auto" />
      </a>
      <nav className="safeareaMenu m-0">
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
        <a
          onClick={() => handleClick("safearea")}
          className={activeLink === "safearea" ? "active" : ""}
        >
          Safe Area
        </a>
        {/* "Safe Area" link is always active */}
      </nav>
      <div className="safeareaProfile">
        <div className="safeareaProfileContainer">
          <span className="safeareaProfileName">{name}</span>
          <div
            className="safeareaProfileAvatar active"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="safeareaProfileAvatarImg" />
            <FontAwesomeIcon icon={faAngleDown} className="arrow-menu" />
          </div>
          {profileOpen && (
            <div className="safeareaDropdown">
              <ul>
                <li>
                <a onClick={handleProfileModal}>Profile</a>
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
    {showProfileModal && (
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    )}
    </>
  );
};

export default SafeAreaHeader;
