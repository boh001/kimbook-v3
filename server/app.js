import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());

export default app;
