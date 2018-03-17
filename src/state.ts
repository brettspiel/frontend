import {initialize} from "./libs/cirquit/index";

export interface State {
  counter: {
    count: number;
  };
  user?: {
    id: string;
    name: string;
  };
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
