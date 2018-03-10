import {
  CounterActionTypes, CounterIncrementAction
} from "../actions/counter";

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

type CounterActions =
  | CounterIncrementAction;

export const counterReducer = (state: CounterState = initialState, action: CounterActions): CounterState => {
  switch (action.type) {
    case CounterActionTypes.CounterIncrementAction: {
      return { ...state, count: state.count + action.amount };
    }
    default: {
      return state;
    }
  }
}
