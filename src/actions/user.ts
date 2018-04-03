import * as uuid from "uuid";
import { createAction } from "./utils";

export const createUser = (name: string) =>
  createAction(
    state => {
      state.user = {
        id: uuid.v4(),
        name
      };
    },
    { name }
  );

export const deleteUser = () =>
  createAction(state => {
    delete state.user;
  });
