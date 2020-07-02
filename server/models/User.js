import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  ID: String,
  email: String,
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
UserSchema.plugin(passportLocalMongoose, { usernameField: "ID" });
const model = mongoose.model("User", UserSchema);
export default model;
