import { IUser } from "../models/User.model";

export const useUserConnection = () => {
  const userApi = async() => {
    try {
      const response = await fetch('https://bloomme-backend.onrender.com/api/user', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };

  const userIdApi = async() => {
    try {
      const token = localStorage.getItem('token');
      const url = `https://bloomme-backend.onrender.com/api/profile`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("🚀 ~ userIdApi ~ data:", data)
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  const userUpdate = async({email, password, avatar, username}: IUser) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://bloomme-backend.onrender.com/api/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({email, password, avatar, username}),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar el avatar');
      }
      const data = await response.json();
      console.log("🚀 ~ userUpdate ~ data:", data);
      console.log("🚀 ~ userUpdate ~ data:", data.user.current_avatar);
      localStorage.setItem('avatar', data.user.current_avatar);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };

  return { userApi, userIdApi, userUpdate };
};
