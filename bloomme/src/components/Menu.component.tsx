import { Link } from 'react-router-dom';
import '../styles/Menu.style.css';
export const Menu = () => {
  return(
    <div className="container-menu">
      <div className='container-menu-logo'> logo </div>
      <div className='container-menu-theme'>
        <div className='container-menu-theme-Quiz'> <Link to='/quiz' className='container-menu-theme-Quiz'> Quiz </Link></div>
        <div className='container-menu-theme-paths'> Rutas </div>
        <div className='container-menu-theme-progress'> Mi progreso </div>
        <div className='container-menu-theme-safeZone'> Zona segura </div>
      </div>
      <div className='container-menu-perfil'> Anna </div>
    </div>
  );
};