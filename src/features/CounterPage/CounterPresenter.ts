import { Dispatch } from "redux";
import { CounterRepository } from "../../domain/repositories/CounterRepository";
import { setCount } from "../../actions/counter";

export class CounterPresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private counterRepository: CounterRepository
  ) {
    this.counterRepository.onUpdate(count => {
      this.dispatch(setCount(count));
    });
  }

  handleClickIncrement = (amount: number) => {
    this.increment(amount);
  };

  handleClickIncrementAsync = (amount: number) => {
    setTimeout(() => {
      this.increment(amount);
    }, 1000);
  };

  private increment(amount: number) {
    this.counterRepository.add(amount).catch();
  }
}
