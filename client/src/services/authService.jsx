import axios from "axios";
import baseURL from "../config";

const authService = axios.create({
  baseURL: `${baseURL}/api/auth`,
});

export const login = async (userData) => {
  try {
    const response = await authService.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await authService.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};
