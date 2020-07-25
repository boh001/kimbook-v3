import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  files: [
    {
      originalname: String,
      contentType: String,
      fileUrl: String,
    },
  ],
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likeUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const model = mongoose.model("Content", ContentSchema);
export default model;
