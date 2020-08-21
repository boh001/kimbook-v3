import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  nickname: String,
  ID: String,
  email: String,
  avatarUrl: String,
  follow: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  follower: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  myContents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
  markContents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
});
UserSchema.plugin(passportLocalMongoose, { usernameField: "ID" });
const model = mongoose.model("User", UserSchema);
export default model;
