import { createCirquitAction } from "redux-cirquit";
import produce from "immer";
import { State } from "../state";

export const createAction = (producer: (state: State) => void) =>
  createCirquitAction<State>(state => produce(state, producer));
