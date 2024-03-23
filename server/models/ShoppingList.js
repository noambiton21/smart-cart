import mongoose from "mongoose";

const { Schema, model } = mongoose;

const shoppingListSchema = new Schema({
  group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

export default model("ShoppingList", shoppingListSchema);
