export interface SetState<State> {
  (state: State | ((state: State) => State)): void;
}

export interface Dispatch<State> {
  (setState: SetState<State>): void;
}
