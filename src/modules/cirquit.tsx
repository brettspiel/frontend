import { Action } from "redux";
import {User} from "../domain/models/User";

export interface CirquitState {
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

export const initialState: CirquitState = {
  counter: {
    count: 0
  }
};

export interface CirquitReducer {
  (state: CirquitState): CirquitState;
}

export interface CirquitAction extends Action {
  type: '@cirquit/action';
  name: string;
  reducer: CirquitReducer;
}

export const cirquit = (reducer: CirquitReducer): CirquitAction => ({
  type: '@cirquit/action',
  name: reducer.name,
  reducer
});

export const cirquitReducer = (
  state: CirquitState = initialState,
  action: CirquitAction
): CirquitState => {
  switch (action.type) {
    case '@cirquit/action': {
      return action.reducer(state);
    }
    default: {
      return state;
    }
  }
}
