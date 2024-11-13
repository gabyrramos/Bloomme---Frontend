export const useRewardConnection = () => {
  const rewardApi = async(type:string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://bloomme-backend.onrender.com/api/user-reward/${type}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
  const rewardApiBackground = async() => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://bloomme-backend.onrender.com/api/reward/34`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
  return {rewardApi, rewardApiBackground};
};