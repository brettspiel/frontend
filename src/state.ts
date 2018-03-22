import {User} from "./domain/models/User";

export interface State {
  counter: {
    count: number;
  },
  user?: User,
  server?: {
    protocol: 'http:' | 'https:';
    host: string;
    port: number;
  }
}

export const initialState: State = {
  counter: {
    count: 0
  }
};
