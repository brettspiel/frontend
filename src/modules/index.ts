import { combineReducers } from "redux";
import { counterReducer, CounterState } from "./counter";
import { userReducer, UserState } from "./user";
import {serverReducer, ServerState} from "./server";

export interface StoreState {
  counter: CounterState;
  user: UserState;
  server: ServerState;
}

export const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  server: serverReducer,
});
