import { createAction, getType } from "typesafe-actions";
import { $call } from "utility-types";

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

export const counterActions = {
  increment: createAction("Counter/increment", (amount: number) => ({
    type: "Counter/increment",
    amount
  }))
};

const returnsOfActions = Object.values(counterActions).map($call);
type AppAction = typeof returnsOfActions[number];

export const counterReducer = (
  state: CounterState = initialState,
  action: AppAction
): CounterState => {
  switch (action.type) {
    case getType(counterActions.increment): {
      return { ...state, count: state.count + action.amount };
    }
    default:
      return state;
  }
};
