//https://bloomme-backend.onrender.com/api/unlocked-rewards?type=avatar

export const useRewardConnection = (type:string) => {
  const rewardApi = async() => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://bloomme-backend.onrender.com/api/unlocked-rewards?type=${type}`, {
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
      console.log("🚀 ~ rewardApi ~ data:", data)
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return rewardApi;
};