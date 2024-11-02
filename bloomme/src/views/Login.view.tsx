import { useLoginConnection} from '../services/Login.service';
import { useState } from 'react';
import { Menu } from '../components/Menu.component';
import './../styles/Login.style.css';

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
    }  };
  return(
    <>
      <div>
        <Menu/>
      </div>
      <form action="login" className='login-form'>
        <label htmlFor="email-login" className='label-email-login'> Email </label>{/*for es reemplazado por htmlFor, para evitar conflictos. */}
        <input type="text" name="email-login" id='email-login' required placeholder='write your email here' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password-login' className='label-password-login'> Password </label>
        <input type="password" name="password-login" id='password-login' required placeholder='Write your password here' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {error && <p className="error-message">{error}</p>} {/* Aquí muestra el error */}
        <button type="submit" className='button-form-login' onClick={hadleLogin}> Login </button> {/* AQUÍ SE EJECUTA LA FUNCIÓN HADLELOGIN */}
      </form>
    </>
  );
};