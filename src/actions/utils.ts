import { CirquitActionMeta, createCirquitAction } from "redux-cirquit";
import produce from "immer";
import { State } from "../state";

export const createAction = (
  producer: (state: State) => void,
  meta: CirquitActionMeta = {}
) =>
  createCirquitAction<State>(state => produce(state, producer), {
    namespace: "app",
    meta
  });
