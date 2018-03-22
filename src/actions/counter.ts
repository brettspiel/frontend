import produce from "immer";
import {State} from "../state";
import {cirquit} from "../libs/redux-cirquit";

export const add = (amount: number) => cirquit<State>(state => produce(state, draft => {
  draft.counter.count += amount;
}));

export const setCount = (count: number) => cirquit<State>(state => produce(state, draft => {
  draft.counter.count = count;
}));
