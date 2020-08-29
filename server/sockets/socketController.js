import events from "./events";
import { joinRoom, sendMessage } from "./eventController";

export default (socket) => {
  socket.on(events.JOINROOM, (data) => {
    joinRoom(socket, data);
  });
  socket.on(events.SENDMESSAGE, (data) => {
    sendMessage(socket, data);
  });
};
