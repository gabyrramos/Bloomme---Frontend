import { Link, useLocation } from 'react-router-dom';//USELOCATION es un hook proporcionado por react-router-dom que devuelve el objeto location actual de la aplicación
import logo from '../assets/BlueLogo.png';
import '../styles/Menu.style.css';
import { IMenu } from '../models/Menu.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Menu = ({title, avatarUrl}: IMenu) => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const [selected, setSelected] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  // const handleClick = (option: string) => {
  //   setSelected(option);
  // };
  const isSelected = (path:string) => location.pathname === path;
  return(
    <div className="container-menu">
      <div className='container-menu-logo'> <img src={logo} alt="Logo" className='container-menu-logo' /> </div>
      <div className='container-menu-theme'>
        <div className='menu-theme-quiz'> <Link to='/quiz' className={`menu-theme-paths ${isSelected('/quiz') ? 'selected' : ''}`}> Quiz </Link></div>
        <div className='menu-theme-quiz'> <Link to='/progress' className={`menu-theme-paths ${isSelected('/My progres') ? 'selected' : ''}`}> My progress </Link></div>
        <div className='menu-theme-quiz'> <Link to='/paths' className={`menu-theme-paths ${isSelected('/paths') ? 'selected' : ''}`}> Paths </Link></div>
        <div className='menu-theme-quiz'> <Link to='/safe' className={`menu-theme-safeZone ${isSelected('Safe area') ? 'selected' : ''}`}> Safe area </Link></div>
        {/* <div className='menu-theme-quiz'> <Link to='/safe' className={`menu-theme-safeZone ${selected === 'Safe area' ? 'selected' : ''}`} onClick={() => handleClick('Safe area')}> Safe area </Link></div> */}
      </div>
      <div className='container-menu-perfil' >{/*startsWith: si la ruta actual comienza con */}
        {location.pathname !== '/search' && !location.pathname.startsWith('/quizQuestion') && (//SI LA RUTA ACTUAL ES DIFERENTE DE SEARCH, RENDERIZA EL ICONO DE LUPA
          <Link to='/search'> <FontAwesomeIcon icon={faMagnifyingGlass} className='menu-perfil-search'/> </Link>
        )}
        <div className='container-menu-perfil-name'> {title} </div>
        {/* <div className='container-menu-perfil-avatar'> {avatarUrl} </div> */}
        <div className='container-menu-perfil-avatar'>
          <img src={avatarUrl} alt={title} className='menu-perfil-avatar'/>
          <FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-menu'/>
          {profileOpen && (
            <div className="menu-dropdown">
              <ul>
                <li>
                  <Link to="/login" replace>
                    <span>Log Out</span><FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Link>
                </li>
                <li><Link to="#" onClick={() => console.log("Configuración")}>Profile</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};




/*
El objeto location contiene información sobre la ruta actual, incluyendo:
pathname: la ruta actual (por ejemplo, /search)
search: la cadena de consulta (por ejemplo, ?query=abc)
state: el estado asociado con la ruta actual (opcional)
hash: el fragmento de la URL (por ejemplo, #anchor)

location.pathname devuelve la ruta actual sin la cadena de consulta ni el fragmento.

*/