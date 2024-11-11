export const useQuizConnection = () => {
  const quizApi = async(category: string, id: string) => {
    try {
      let url = `https://bloomme-backend.onrender.com/api/`;
      if (id !== "") {
        url += `${category}/${id}`;
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ loginConnection ~ data:", data);
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return { quizApi };
};