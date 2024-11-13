import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/BlueLogo.png';
import '../styles/Menu.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const Menu = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatarUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  useEffect(()=>{
    const name = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');
    setName(name || '');
    setAvatarUrl(avatar || '');
  }, []);

  const handleNavigate = () => {
    navigate(`/progress/`);
  };
  const isSelected = (path:string) => location.pathname === path;
  return(
    <div className="container-menu">
      <div className='container-menu-logo'> <Link to='/home'><img src={logo} alt="Logo" className='container-menu-logo' /></Link>  </div>
      <div className='container-menu-theme'>
        <div className='menu-theme-quiz'> <Link to='/quiz' className={`menu-theme-paths ${isSelected('/quiz') ? 'selected' : ''}`}> Quiz </Link></div>
        <div className='menu-theme-quiz'> <button onClick={handleNavigate} className={`menu-theme-paths ${isSelected('/My progres') ? 'selected' : ''}`}> My progress </button></div>
        <div className='menu-theme-quiz'> <Link to='/paths' className={`menu-theme-paths ${isSelected('/paths') ? 'selected' : ''}`}> Paths </Link></div>
        <div className='menu-theme-quiz'> <Link to='/safearea' className={`menu-theme-safeZone ${isSelected('Safe area') ? 'selected' : ''}`}> Safe area </Link></div>
      </div>
      <div className='container-menu-perfil' >
        {location.pathname !== '/search' && !location.pathname.startsWith('/quizQuestion') && (
          <Link to='/search'> <FontAwesomeIcon icon={faMagnifyingGlass} className='menu-perfil-search'/> </Link>
        )}
        <div className='container-menu-perfil-name'> {name} </div>
        <div className='container-menu-perfil-avatar'>
          <img src={avatar} alt={name} className='menu-perfil-avatar'/>
          <FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-menu'/>
          {profileOpen && (
            <div className="menu-dropdown">
              <ul>
                <li>
                  <Link to="/login" replace>
                    <span>Log Out</span><FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Link>
                </li>
                <li><Link to="#">Profile</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};