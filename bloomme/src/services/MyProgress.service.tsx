import { Reward } from "../models/MyProgress.model";

export const fetchRewardsApi = async() => {
  try {
    const token = localStorage.getItem("token");
    const url = `https://bloomme-backend.onrender.com/api/user-reward/avatar`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error in request: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};

export const getAllRewardsApi = async() => {
  try {
    const token = localStorage.getItem("token");
    const url = `https://bloomme-backend.onrender.com/api/allreward`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error in request: ${response.statusText}`);
    }

    const data: Reward[] = await response.json();

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};

export const getUserRewardsApi = async() => {
  try {
    const token = localStorage.getItem("token");
    const url = `https://bloomme-backend.onrender.com/api/user-reward/avatar`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error in request: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};


export const getUserUnlockedRewardsApi = async() => {
  try {
    const token = localStorage.getItem("token");
    const url = `https://bloomme-backend.onrender.com/api/unlocked-rewards?type=avatar`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error in request: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};