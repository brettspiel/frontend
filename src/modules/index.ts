import { combineReducers } from "redux";
import { counterReducer, CounterState } from "./counter";
import { userReducer, UserState } from "./user";

export interface StoreState {
  counter: CounterState;
  user: UserState;
}

export const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});
