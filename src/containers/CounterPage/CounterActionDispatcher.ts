import {Dispatch} from "redux";
import {increment} from "../../actions/counter";

export class CounterActionDispatcher {
  constructor(private dispatch: Dispatch<any>) {}

  increment(amount: number) {
    this.dispatch(increment(amount));
  };

  incrementAsync(amount: number) {
    setTimeout(() => {
      this.dispatch(increment(amount));
    }, 1000);
  }
}
