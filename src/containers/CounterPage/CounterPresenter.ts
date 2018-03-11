import { Dispatch } from "redux";
import { counterActions } from "../../modules/counter";
import {CounterRepository} from "../../domain/repositories/CounterRepository";

export class CounterPresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private counterRepository: CounterRepository,
  ) {}

  async increment(amount: number) {
    const result = await this.counterRepository.add(amount);
    this.dispatch(counterActions.set(result));
  }

  incrementAsync(amount: number) {
    setTimeout(() => {
      this.increment(amount);
    }, 1000);
  }
}
