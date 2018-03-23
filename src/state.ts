import { User } from "./domain/models/User";
import {ChatMessage} from "./domain/models/ChatMessage";

export interface State {
  counter: {
    count: number;
  };
  user?: User;
  server?: {
    protocol: "http:" | "https:";
    host: string;
    port: number;
  };
  lounge: {
    chatMessages: ChatMessage[];
  }
}

export const initialState: State = {
  counter: {
    count: 0
  },
  lounge: {
    chatMessages: []
  }
};
