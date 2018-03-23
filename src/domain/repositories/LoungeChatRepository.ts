import { ChatMessage } from "../models/ChatMessage";
import { User } from "../models/User";

export class LoungeChatRepository {
  constructor(private socket: SocketIOClient.Socket) {}

  add(user: User, message: string): void {
    this.socket.emit("add", user, message);
  }

  onUpdate(handler: (messages: ChatMessage[]) => void): void {
    this.socket.on("update", handler);
  }
}
