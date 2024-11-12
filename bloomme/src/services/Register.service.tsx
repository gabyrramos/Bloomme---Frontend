export const registerPost = async(data) => {
  try {
    const response = await fetch("https://bloomme-backend.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const resData = await response.json();
    localStorage.setItem("assistant", resData.assistant_id  );
    return resData;
  } catch (error) {
    console.log({ error });
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};
