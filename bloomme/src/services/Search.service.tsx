export const useSearchConnection = () => {
  const searchApi = async() => {
    try {
      const response = await fetch('https://bloomme.free.beeceptor.com/users', {
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
  return { searchApi };
};