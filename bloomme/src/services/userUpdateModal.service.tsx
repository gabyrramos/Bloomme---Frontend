const userUpdateModal = async ({
  username,
  password,
  age,
  country,
  assistant_name,
}: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/user/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          password,
          age,
          country,
          assistant_name,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }
    const data = await response.json();
    console.log("Usuario actualizado correctamente", data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};

export default userUpdateModal;
