import {cirquit} from "../libs/redux-cirquit";
import {State} from "../state";

export const setConnectionInfo = (
  protocol: 'https:' | 'http:',
  host: string,
  port: number
) => cirquit<State>(state => ({
  ...state,
  server: {
    protocol,
    host,
    port
  }
}));
