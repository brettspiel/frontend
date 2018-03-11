import { connect } from "react-redux";
import { CounterPageComponent } from "./CounterPageComponent";
import { StoreState } from "../../modules";
import { CounterPresenter } from "./CounterPresenter";
import { Dispatch } from "redux";
import { CounterRepository } from "../../domain/repositories/CounterRepository";

export interface OwnProps {
  socket: SocketIOClient.Socket;
}

const mapStateToProps = (state: StoreState) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps) => ({
  presenter: new CounterPresenter(
    dispatch,
    new CounterRepository(ownProps.socket)
  )
});

export const CounterPage = connect(mapStateToProps, mapDispatchToProps)(
  CounterPageComponent
);
