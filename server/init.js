import app from "./app";
import dotenv from "dotenv";
import "./db";
dotenv.config();

const port = process.env.SERVER_PORT || 3002;

app.listen(port, () => console.log(`server connection to ${port}`));
