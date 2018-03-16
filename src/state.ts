import {initialize} from "./libs/cirquit/index";

const initialState = { counter: { count: 0 } };

export const { Provider, connect } = initialize(initialState);
