import {cirquit} from "../libs/redux-cirquit";
import {State} from "../state";
import * as uuid from "uuid";

export const createUser = (name: string) => cirquit<State>(state => ({
  ...state,
  user: {
    id: uuid.v4(),
    name
  }
}));

export const deleteUser = () => cirquit<State>(state => {
  const { user, ...others } = state;
  return {
    ...others
  };
});
