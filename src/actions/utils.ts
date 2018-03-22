import produce from "immer";
import { State } from "../state";
import { createCirquitAction } from "../libs/redux-cirquit";

export const createAction = (producer: (state: State) => void) =>
  createCirquitAction<State>(state => produce(state, producer));
