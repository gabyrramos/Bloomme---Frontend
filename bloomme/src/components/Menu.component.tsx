import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Menu.style.css';
import { IMenu } from '../models/Menu.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Menu = ({title, avatarUrl}: IMenu) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  return(
    <div className="container-menu">
      <div className='container-menu-logo'> <img src={logo} alt="Logo" className='container-menu-logo' /> </div>
      <div className='container-menu-theme'>
        <div className='menu-theme-quiz'> <Link to='/quiz' className='menu-theme-quiz'> Quiz </Link></div>
        <div className='menu-theme-progres'> <Link to='/progres' className='menu-theme-paths'> My progres </Link></div>
        <div className='menu-theme-paths'> <Link to='/routes' className='menu-theme-paths'> Routes </Link></div>
        <div className='menu-theme-safeZone'> <Link to='/safe' className='menu-theme-safeZone'> Safe area </Link></div>
      </div>
      <div className='container-menu-perfil' >
        <Link to='/search'> <FontAwesomeIcon icon={faMagnifyingGlass} className='menu-perfil-search'/> </Link>
        <div className='container-menu-perfil-name'> {title} </div>
        {/* <div className='container-menu-perfil-avatar'> {avatarUrl} </div> */}
        <div className='container-menu-perfil-avatar'>
          <img src={avatarUrl} alt={title} className='menu-perfil-avatar'/>
          <FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-menu'/>
          {profileOpen && (
            <div className="menu-dropdown">
              <ul>
                <li><Link to="/" className='menu-text-hover'> Log Out <FontAwesomeIcon icon={faArrowRightFromBracket}/></Link></li>
                <li><Link to="#" onClick={() => console.log("Configuración")}>Profile</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};