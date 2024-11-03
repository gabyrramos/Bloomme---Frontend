import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#010020';
    return () => {
      document.body.style.backgroundColor = ''; // Restaurar el color original
    };
  }, []);
  return (
    <>
      <div className="container-home">
        <div className="container-home-button">
          <button type="button" className="buttonHomeInit"><Link to="/register" replace className="homeLink"> INICIO </Link></button>
        </div>
      </div>
    </>
  );
};