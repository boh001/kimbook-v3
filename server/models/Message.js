import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Message", MessageSchema);
export default model;
