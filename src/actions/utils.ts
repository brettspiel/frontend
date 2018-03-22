import produce from "immer";
import {State} from "../state";
import {cirquit} from "../libs/redux-cirquit";

export const createAction = (producer: (state: State) => void) => cirquit<State>(state => produce(state, producer));
