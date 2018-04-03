import { createAction } from "./utils";

export const setConnectionInfo = (
  protocol: "https:" | "http:",
  host: string,
  port: number
) =>
  createAction(state => {
    state.server = {
      protocol,
      host,
      port
    };
  }, { protocol, host, port });
