export const chatPost = async(message:string, token:string) => {
  try {
    const response = await fetch(
      "https://bloomme-backend.onrender.com/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
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
