import { useLoginConnection} from '../services/Login.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './../styles/Login.style.css';
import background from '../assets/SignIn.svg';
import google from '../assets/Google.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

export const Login = () => {
  const [ email, setEmail] = useState('');//SE INICIALIZA EL CAMPO VACIO, CON SET SE ACTUALIZA A LO QUE ESCRIBA EL USUARIO
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Variable para mostrar el error en caso de que ocurra
  const { loginUser} = useLoginConnection();
  const hadleLogin = async() =>{//LLAMA A LA FUNCIÓN LOGIN USER UBICADA EN USELOGINCONNECTION Y PASA EL EMAIL Y PASSWORD
    try {
      await loginUser({ email, password });
      setError(''); // Limpia cualquier error previo si es exitoso
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      setError(errorMessage);
    };
  };
  useEffect(()=> {
    document.body.style.backgroundImage =`url(${background})`;
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
    document.body.style.height = "100vh"; // Asegura que el body ocupe toda la altura de la ventana
    // document.body.style.overflow = "hidden"; // Evita el scroll si la imagen es más grande
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);
  return(
    <>
      <main className='container-main-login'>
        <div className='container-main-login-div'>
          <h1 className='container-main-login-title'>SIGN IN</h1>
          <p className='container-main-login-text'> Don't have an account? <Link to='/register' className='container-main-login-link'>Sign up</Link></p>
          <figure className='container-login-image'>
            <img src={google} alt="google" className='icon-google-login'/>
            <img src={facebook} alt="facebook" className='icon-google-login'/>
            <img src={instagram} alt="user" className='icon-google-login'/>
          </figure>
          <form action="login" className='login-form'>
            <label htmlFor="email-login" className='label-email-login'></label>
            <input type="text" name="email-login" id='email-login' required placeholder='Username/Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password-login' className='label-password-login'> </label>
            <input type="password" name="password-login" id='password-login' required placeholder='Password           ' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p> Forgot your password?</p>
            {/* <input type="password" name="password-login" id='password-login' required placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)}/> */}
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className='button-form-login' onClick={hadleLogin}> SIGN IN NOW <FontAwesomeIcon icon={faChevronRight} /> </button>
          </form>
        </div>
      </main>
    </>
  );
};