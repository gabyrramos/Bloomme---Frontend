export const useQuizConnection = () => {
  const quizApi = async(/*category: string, id: string*/) => {
    try {
      const url = `https://bloomme-backend.onrender.com/api/quiz-categories`;//OBTENER TODAS LAS CATEGORIAS
      // if (id !== "") {
      //   url += `${category}/${id}`;
      // }
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
  const quizApiAI = async(categoryId: number) => {
    try {
      const token = localStorage.getItem('token');
      const url = `https://bloomme-backend.onrender.com/api/quiz/category/${categoryId}`;//OBTENER PREGUNTAS DE LA IA
      // if (id !== "") {
      //   url += `${category}/${id}`;
      // }
      const response = await fetch(url, {
        method: "GET",
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
      console.log("🚀 ~ quizApiAI ~ data:", data)
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  const quizApiAnswers = async(param) => {
    try {
      // const token = localStorage.getItem('token');
      const response = await fetch('https://bloomme-backend.onrender.com/api/finish-quiz/category', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ quizApiAnswers ~ data:", data);
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  return { quizApi, quizApiAI, quizApiAnswers };
};

//CONSUMIR: GET PARA TRAER LAS PREGUNTAS, MANDAR LAS RESPUESTAS, TRAER LOS PUNTOS