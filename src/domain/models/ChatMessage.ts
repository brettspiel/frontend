import { User } from "./User";

export interface ChatMessage {
  id: string;
  message: string;
  createdAt: string;
  user: User;
}
