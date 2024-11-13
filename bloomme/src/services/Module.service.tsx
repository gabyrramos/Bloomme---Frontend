export const getModule = async (moduleId: number) => {
  try {
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/module/${moduleId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};
