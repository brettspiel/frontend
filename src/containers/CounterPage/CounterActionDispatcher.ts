import {Dispatch} from "redux";
import {counterActions} from "../../modules/counter";

export class CounterActionDispatcher {
  constructor(private dispatch: Dispatch<any>) {}

  increment(amount: number) {
    this.dispatch(counterActions.increment(amount));
  };

  incrementAsync(amount: number) {
    setTimeout(() => {
      this.dispatch(counterActions.increment(amount));
    }, 1000);
  }
}
