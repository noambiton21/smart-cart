import express from "express";
import { addItem, removeItem } from "../controllers/shoppingListController.js";

const router = express.Router();

router.post("/add", addItem);
router.delete("/remove/:itemId", removeItem);

export default router;
