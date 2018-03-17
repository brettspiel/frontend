import { Dispatch } from "../../libs/cirquit";
import { State } from "../../state";
import { CounterRepository } from "../../domain/repositories/CounterRepository";

export class CounterPresenter {
  constructor(
    private dispatch: Dispatch<State>,
    private counterRepository: CounterRepository
  ) {
    this.counterRepository.onUpdate(count => {
      this.dispatch({ counter: { count } });
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
