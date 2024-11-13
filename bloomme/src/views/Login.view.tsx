import { useLoginConnection} from '../services/Login.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './../styles/Login.style.css';
import google from '../assets/Google.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

export const Login = () => {
  const [ email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginUser} = useLoginConnection();
  const handleLogin = async() =>{
    try {
      await loginUser({ email, password });
      setError('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      setError(errorMessage);
    };
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };
  return(
    <>
      <main className='container-main-login'>
        <div className='container-main-login-div'>
          <h1 className='container-main-login-title text-5xl mt-48'>SIGN IN</h1>
          <p className='container-main-login-text mt-4'> Don't have an account? <Link to='/register' className='container-main-login-link'>Sign up</Link></p>
          <figure className='container-login-image my-10'>
            <img src={google} alt="google" className='icon-google-login'/>
            <img src={facebook} alt="facebook" className='icon-google-login'/>
            <img src={instagram} alt="user" className='icon-google-login'/>
          </figure>
          <form action="login" className='login-form flex flex-col items-center' onSubmit={handleFormSubmit}>
            <label htmlFor="email-login" className='label-email-login'></label>
            <input type="text" name="email-login" id='email-login' required placeholder='Username/Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password-login' className='label-password-login'> </label>
            <input type="password" name="password-login" id='password-login' required placeholder='Password           ' value={password} onChange={(e) => setPassword(e.target.value)}/>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className='button-form-login'> SIGN IN NOW <FontAwesomeIcon icon={faChevronRight} /> </button>
          </form>
        </div>
      </main>
    </>
  );
};