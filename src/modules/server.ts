import {createAction, getType} from "typesafe-actions";
import {$call} from "utility-types";

export type Protocol = 'http:' | 'https:';

export interface ServerState {
  protocol?: Protocol;
  host?: string;
  port?: number;
}

export const initialState: ServerState = {};

export const serverActions = {
  setConnectionInfo: createAction('server/setConnectionInfo', (protocol: Protocol, host: string, port: number) => ({
    type: 'server/setConnectionInfo',
    protocol,
    host,
    port
  })),
};

const returnsOfActions = Object.values(serverActions).map($call);
type ServerAction = typeof returnsOfActions[number];

export const serverReducer = (state: ServerState = initialState, action: ServerAction): ServerState => {
  switch (action.type) {
    case getType(serverActions.setConnectionInfo): {
      return {
        ...state,
        protocol: action.protocol,
        host: action.host,
        port: action.port,
      };
    }
    default: {
      return state;
    }
  }
}
