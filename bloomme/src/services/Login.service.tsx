import { useNavigate } from 'react-router-dom';
import { ILogin } from '../models/Login.model';

export const useLoginConnection = () => {
  const navigate = useNavigate();
  const loginUser = async({email, password}: ILogin) => {
    try {
      const response = await fetch('https://bloomme-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}), //LOS DATOS SE ENVIAN COMO JSON EN EL CUERPO DE LA SOLICITUD
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ loginConnection ~ data:", data);
      const token = data.tokenUser; // OBTIENE EL TOKEN DESPUÉS DE LA AUTENTICACIÓN
      localStorage.setItem("token", token); // GUARDA EL TOKEN EN LOCALSTORAGE
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username);
      // En tu controlador de login, construye la URL completa de la imagen
      // const avatarUrl = `https://bloomme-backend.onrender.com/uploads/${data.user.current_avatar}`;
      localStorage.setItem("avatar", data.user.current_avatar);
      localStorage.setItem("background", data.user.current_background);
      navigate("/home");
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return { loginUser };
};