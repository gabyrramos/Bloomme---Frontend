import { Link, useLocation, useNavigate } from 'react-router-dom';//USELOCATION es un hook proporcionado por react-router-dom que devuelve el objeto location actual de la aplicación
import logo from '../assets/BlueLogo.png';
import '../styles/Menu.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const Menu = () => {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  useEffect(()=>{
    const name = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar'); // Obtiene la URL del avatar desde localStorage
    setName(name || '');
    setAvatarUrl(avatar || ''); // Establece el avatar en el estado
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
      <div className='container-menu-perfil' >{/*startsWith: si la ruta actual comienza con */}
        {location.pathname !== '/search' && !location.pathname.startsWith('/quizQuestion') && (//SI LA RUTA ACTUAL ES DIFERENTE DE SEARCH, RENDERIZA EL ICONO DE LUPA
          <Link to='/search'> <FontAwesomeIcon icon={faMagnifyingGlass} className='menu-perfil-search'/> </Link>
        )}
        <div className='container-menu-perfil-name'> {name} </div>
        <div className='container-menu-perfil-avatar'>
          <img src={avatarUrl} alt={name} className='menu-perfil-avatar'/>
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