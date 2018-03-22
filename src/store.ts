import { createStore, applyMiddleware, compose, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { history } from "./history";
import {createCirquitReducer} from "./libs/redux-cirquit";
import {initialState, State} from "./state";

const router = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(router, thunk),
  window["devToolsExtension"] ? window["devToolsExtension"]() : (f: any) => f
);

const persistedReducer = persistReducer(
  {
    key: "root",
    storage
  },
  createCirquitReducer(initialState)
);

export const store = createStore(persistedReducer, enhancer) as Store<
  State
>;
