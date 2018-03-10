import {Action} from "redux";

export enum CounterActionTypes {
  CounterIncrementAction = 'CounterIncrementAction',
}

export interface CounterIncrementAction extends Action {
  type: CounterActionTypes.CounterIncrementAction,
  amount: number,
}
export const increment = (amount: number) => {
  return {
    type: CounterActionTypes.CounterIncrementAction,
    amount,
  };
}
