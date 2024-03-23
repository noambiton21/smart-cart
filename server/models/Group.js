import mongoose from "mongoose";

const { Schema, model } = mongoose;

const groupSchema = new Schema({
  name: { type: String, required: true },
  administrator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model("Group", groupSchema);
