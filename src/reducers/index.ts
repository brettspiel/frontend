import {combineReducers} from "redux";
import {counterReducer, CounterState} from './counter';

export interface StoreState {
  counter: CounterState
}

export const reducers = combineReducers({
  counter: counterReducer,
});
