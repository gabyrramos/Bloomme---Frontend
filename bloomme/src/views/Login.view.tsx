import { useLoginConnection} from '../services/Login.service';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './../styles/Login.style.css';
import sing from '../assets/sing.svg';
import user from '../assets/User.svg';

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
    document.body.style.backgroundImage =`url(${sing})`;
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize = "cover";
    // return() => {
    // document.body.style.backgroundColor = "";
    // };
  }, []);
  return(
    <>
      <main className='container-main-login'>
        <h1>SIGN IN</h1>
        <p> Don't have an account?  Sign up</p>
        <form action="login" className='login-form'>
          <label htmlFor="email-login" className='label-email-login'></label>{/*for es reemplazado por htmlFor, para evitar conflictos. */}
          <img src={user} alt="user" className='icon-user'/>
          <input type="text" name="email-login" id='email-login' required placeholder='Username / Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor='password-login' className='label-password-login'> </label>
          <FontAwesomeIcon icon={faLock} className="iconArrowLeft"/>
          <input type="password" name="password-login" id='password-login' required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <p> Forgot your password?</p>
          {error && <p className="error-message">{error}</p>} {/* Aquí muestra el error */}
          <button type="submit" className='button-form-login' onClick={hadleLogin}> Login </button> {/* AQUÍ SE EJECUTA LA FUNCIÓN HADLELOGIN */}
        </form>
      </main>
    </>
  );
};






















// import { useLoginConnection} from '../services/Login.service';
// import { useState } from 'react';
// import './../styles/Login.style.css';

// export const Login = () => {
//   const [ email, setEmail] = useState('');//SE INICIALIZA EL CAMPO VACIO, CON SET SE ACTUALIZA A LO QUE ESCRIBA EL USUARIO
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(''); // Variable para mostrar el error en caso de que ocurra
//   const { loginUser} = useLoginConnection();
//   const hadleLogin = async() =>{//LLAMA A LA FUNCIÓN LOGIN USER UBICADA EN USELOGINCONNECTION Y PASA EL EMAIL Y PASSWORD
//     try {
//       await loginUser({ email, password });
//       setError(''); // Limpia cualquier error previo si es exitoso
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
//       setError(errorMessage);
//     };
//   };
//   return(
//     <>
//       <form action="login" className='login-form'>
//         <label htmlFor="email-login" className='label-email-login'> Email </label>{/*for es reemplazado por htmlFor, para evitar conflictos. */}
//         <input type="text" name="email-login" id='email-login' required placeholder='Write your email here' value={email} onChange={(e) => setEmail(e.target.value)}/>
//         <label htmlFor='password-login' className='label-password-login'> Password </label>
//         <input type="password" name="password-login" id='password-login' required placeholder='Write your password here' value={password} onChange={(e) => setPassword(e.target.value)}/>
//         {error && <p className="error-message">{error}</p>} {/* Aquí muestra el error */}
//         <button type="submit" className='button-form-login' onClick={hadleLogin}> Login </button> {/* AQUÍ SE EJECUTA LA FUNCIÓN HADLELOGIN */}
//       </form>
//     </>
//   );
// };