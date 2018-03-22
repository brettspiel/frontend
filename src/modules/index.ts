import { combineReducers } from "redux";
import {User} from "../domain/models/User";
import {createCirquitReducer} from "../libs/redux-cirquit";

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

const cirquitReducer = createCirquitReducer(initialState);

export interface StoreState {
  cirquit: CirquitState;
}

export const reducers = combineReducers({
  cirquit: cirquitReducer,
});
