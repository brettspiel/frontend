import { createAction } from "./utils";

export const add = (amount: number) =>
  createAction(state => {
    state.counter.count += amount;
  }, { amount });

export const setCount = (count: number) =>
  createAction(state => {
    state.counter.count = count;
  }, { count });
