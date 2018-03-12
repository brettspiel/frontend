import { createStore, applyMiddleware, compose, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers, StoreState } from "./modules";
import { history } from "./history";

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
  reducers
);

export const store = createStore(persistedReducer, enhancer) as Store<
  StoreState
>;
