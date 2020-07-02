import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = mongoose.connection;
const MONGO_URL = process.env.PRODUCTION
  ? process.env.MONGOATLAS
  : process.env.MONGO_URL;
db.on("error", () => console.log("DB connection Error!!"));
db.once("open", () => console.log("Connected to mongoDB"));
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
