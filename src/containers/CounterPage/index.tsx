import { connect } from "../../state";
import { CounterPageComponent } from "./CounterPageComponent";
import { CounterPresenter } from "./CounterPresenter";
import { CounterRepository } from "../../domain/repositories/CounterRepository";

export interface OwnProps {
  socket: SocketIOClient.Socket;
}

export const CounterPage = connect((state, dispatch, ownProps: OwnProps) => ({
  count: state.counter.count,
  presenter: new CounterPresenter(dispatch, new CounterRepository(ownProps.socket))
}))(
  CounterPageComponent
);
