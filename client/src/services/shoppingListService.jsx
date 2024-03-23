import axios from "axios";
import baseURL from "../config";

const shoppingListService = axios.create({
  baseURL: `${baseURL}/api/shopping-list`,
});

export const getShoppingList = async () => {
  try {
    const response = await shoppingListService.get("/");
    return response.data;
  } catch (error) {
    console.error("Error getting shopping list:", error);
    throw error;
  }
};

// Add more service functions as needed for CRUD operations on shopping lists
