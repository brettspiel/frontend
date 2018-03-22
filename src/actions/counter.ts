import {State} from "../state";
import {cirquit} from "../libs/redux-cirquit";

export const add = (amount: number) => cirquit((state: State) => ({
  ...state,
  counter: {
    count: state.counter.count + amount
  }
}));

export const setCount = (count: number) => cirquit((state: State) => ({
  ...state,
  counter: {
    count
  }
}));
