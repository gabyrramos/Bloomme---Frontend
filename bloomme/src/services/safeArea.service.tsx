export const getAllEmotions = async() => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://bloomme-backend.onrender.com/api/emotions",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorEmotions = await response.json();
      throw new Error(errorEmotions.message);
    }
    const emotions = await response.json();
    return emotions;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};

export const getExercisesByEmotion = async(emotion_id: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/exercises/${emotion_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorExercises = await response.json();
      throw new Error(errorExercises.message);
    }
    const exercises = await response.json();
    return exercises;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};

export const generateTaskByExercises = async(
  emotion_id: string,
  exercise_id: string,
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/generate-emotion-exercise-text?emotion_id=${emotion_id}&exercises_id=${exercise_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorTask = await response.json();
      throw new Error(errorTask.message);
    }
    const task = await response.json();
    console.log(
      "Here you have the exercise for the activity you selected📍",
      task,
    );
    return task;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};

export const addEmotion = async(emotion: string, token: string) => {
  try {
    const response = await fetch(
      "https://bloomme-backend.onrender.com/api/emotions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorEmotion = await response.json();
      throw new Error(errorEmotion.message);
    }
    const emotion = await response.json();
    return emotion;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  };
};

export const addExercise = async(exercise: string, token: string) => {
  try {
    const response = await fetch(
      "https://bloomme-backend.onrender.com/api/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorExercise = await response.json();
      throw new Error(errorExercise.message);
    }
    const exercise = await response.json();
    return exercise;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};

export const getEmergencyNum = async() => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/emergency-numbers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorTask = await response.json();
      throw new Error(errorTask.message);
    }
    const numbers = await response.json();
    return numbers;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    throw new Error(errorMessage);
  }
};