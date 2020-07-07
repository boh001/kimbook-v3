import express from "express";
import session from "express-session";
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import "./passport";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routers/userRouter";
import homeRouter from "./routers/homeRouter";
import routes from "./routes";
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());
const SessionStore = MongoStore(session);
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SessionStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.HOME, homeRouter);
app.use(routes.USER, userRouter);

export default app;
