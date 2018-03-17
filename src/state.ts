import {initialize} from "./libs/cirquit/index";
import {User} from "./domain/models/User";

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
}

const initialState: State = {
  counter: { count: 0 },
};

export const { Provider, connect } = initialize(initialState);
