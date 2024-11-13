export const useQuizConnection = () => {
  const quizApi = async() => {
    try {
      const url = `https://bloomme-backend.onrender.com/api/quiz-categories`;
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
      const url = `https://bloomme-backend.onrender.com/api/quiz/category/${categoryId}`;
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
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  const quizApiAnswers = async(param) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://bloomme-backend.onrender.com/api/finish-quiz/category', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(param),
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
  return { quizApi, quizApiAI, quizApiAnswers };
};

export const sendApiResult = async(categoryid: any, results: number) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://bloomme-backend.onrender.com/api/submit-score/category/${categoryid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({score: results}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const resData = await response.json();
    return resData;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};

export const fetchModuleQuiz = async(id: number) => {
  try {
    const token = localStorage.getItem('token');
    const url = `https://bloomme-backend.onrender.com/api/quiz/module/${id}`;
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
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};