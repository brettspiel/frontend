import { Dispatch } from "redux";
import { CounterRepository } from "../../domain/repositories/CounterRepository";
import {cirquit} from "../../libs/redux-cirquit";
import {CirquitState} from "../../modules";

export class CounterPresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private counterRepository: CounterRepository
  ) {
    this.counterRepository.onUpdate(count => {
      this.dispatch(cirquit<CirquitState>(state => ({
        ...state,
        counter: { count: count + 1 }
      })));
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
