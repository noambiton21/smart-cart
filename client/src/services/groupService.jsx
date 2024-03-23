import axios from "axios";
import baseURL from "../config";

const groupService = axios.create({
  baseURL: `${baseURL}/api/groups`,
});
export const getGroups = async () => {
  try {
    const response = await groupService.get("/");
    return response.data;
  } catch (error) {
    console.error("Error getting groups:", error);
    throw error;
  }
};

// Add more service functions as needed for CRUD operations on groups
