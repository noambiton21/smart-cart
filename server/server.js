import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import shoppingListRoutes from "./routes/shoppingListRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/groups", authMiddleware);
app.use("/api/shopping-list", authMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/shopping-list", shoppingListRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
