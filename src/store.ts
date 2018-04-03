import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  combineReducers
} from "redux";
import { createCirquitReducer } from "redux-cirquit";
import {
  routerMiddleware,
  routerReducer,
  RouterState
} from "react-router-redux";
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

export interface ReduxState {
  app: State;
  routing: RouterState;
}

const persistedReducer = persistReducer(
  {
    key: "root",
    storage
  },
  combineReducers<ReduxState>({
    app: createCirquitReducer(initialState, { namespace: "app" }),
    routing: routerReducer
  })
);

export const store = createStore(persistedReducer, enhancer) as Store<State>;
