import socketio from "socket.io-client";

const socket = socketio.connect("http://localhost:3000");
export const getSocket = () => socket;
