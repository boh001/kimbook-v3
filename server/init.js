import dotenv from "dotenv";
import socketIO from "socket.io";
import app from "./app";
import "./db";
import "./models/User";
import "./models/Content";
import "./models/Comment";
import "./models/Message";
import "./models/ChatRoom";
import socketController from "./sockets/socketController";

dotenv.config();

const port = process.env.SERVER_PORT || 3002;
const server = app.listen(port, () =>
  console.log(`server connection to ${port}`)
);
const io = socketIO.listen(server);
io.on("connection", (socket) => {
  socketController(socket);
});
