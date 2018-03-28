import { createStore, applyMiddleware, compose, Store } from "redux";
import { createCirquitReducer } from "redux-cirquit";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { history } from "./history";
import { initialState, State } from "./state";
import { setAutoFreeze } from "immer";

// redux-persist mutates state, so we need cancel auto freeze feature in immer
setAutoFreeze(false);

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

export const store = createStore(persistedReducer, enhancer) as Store<State>;
