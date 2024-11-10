import { useNavigate } from 'react-router-dom';
import { ILogin } from '../models/Login.model';

export const useLoginConnection = () => {
  const navigate = useNavigate();
  const loginUser = async({email, password}: ILogin) => {
    try {
      const response = await fetch('https://bloomme-backend.onrender.com/api/login', {
        method: 'POST',
        // mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({email, password}), //LOS DATOS SE ENVIAN COMO JSON EN EL CUERPO DE LA SOLICITUD
      });
      if(!response.ok) {
        const errorData = await response.json();
        // console.log("🚀 ~ loginUser ~ response:", errorData);
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ loginConnection ~ data:", data);
      const token = data.tokenUser; // OBTIENE EL TOKEN DESPUÉS DE LA AUTENTICACIÓN
      localStorage.setItem("token", token); // GUARDA EL TOKEN EN LOCALSTORAGE
      localStorage.setItem("username", email);
      navigate("/home"); // A DONDE TE VA A MANDAR
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return { loginUser };
};