import { createAction, getType } from "typesafe-actions";
import { $call } from "utility-types";

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

export const counterActions = {
  set: createAction("counter/set", (count: number) => ({
    type: "counter/set",
    count
  })),
  increment: createAction("counter/increment", (amount: number) => ({
    type: "counter/increment",
    amount
  }))
};

const returnsOfActions = Object.values(counterActions).map($call);
type CounterAction = typeof returnsOfActions[number];

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case getType(counterActions.set): {
      return { count: action.count };
    }
    case getType(counterActions.increment): {
      return { ...state, count: state.count + action.amount };
    }
    default:
      return state;
  }
};
