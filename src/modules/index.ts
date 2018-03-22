import { combineReducers } from "redux";
import {cirquitReducer, CirquitState} from "./cirquit";

export interface StoreState {
  cirquit: CirquitState;
}

export const reducers = combineReducers({
  cirquit: cirquitReducer,
});
