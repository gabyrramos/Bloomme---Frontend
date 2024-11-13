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
        body: JSON.stringify({email, password}),
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      const token = data.tokenUser;
      localStorage.setItem("token", token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("avatar", data.user.current_avatar);
      const backgrounds = data.user.current_background;
      localStorage.setItem("background", backgrounds);
      localStorage.setItem("assistant", data.user.assistant_id  );
      navigate("/home");
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return { loginUser };
};