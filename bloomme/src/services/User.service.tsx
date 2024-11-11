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
      const url = `https://bloomme-backend.onrender.com/api/user/score`;
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
      console.log(data);
      // localStorage.setItem('score', data.user.total_point);
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };

  return { userApi, userIdApi };
};
