import { createAction } from "./utils";
import { ChatMessage } from "../domain/models/ChatMessage";

export const setLoungeChatMessages = (messages: ChatMessage[]) =>
  createAction(state => {
    state.lounge.chatMessages = messages;
  });
