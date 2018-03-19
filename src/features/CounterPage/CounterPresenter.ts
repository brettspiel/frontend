import { Dispatch } from "redux";
import { counterActions } from "../../modules/counter";
import { CounterRepository } from "../../domain/repositories/CounterRepository";

export class CounterPresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private counterRepository: CounterRepository
  ) {
    this.counterRepository.onUpdate(count => {
      this.dispatch(counterActions.set(count));
    });
  }

  increment(amount: number) {
    this.counterRepository.add(amount).catch();
  }

  incrementAsync(amount: number) {
    setTimeout(() => {
      this.increment(amount);
    }, 1000);
  }
}
