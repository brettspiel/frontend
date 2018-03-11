import { connect } from "react-redux";
import { CounterPageComponent } from "./CounterPageComponent";
import { StoreState } from "../../modules";
import { CounterPresenter } from "./CounterPresenter";
import { Dispatch } from "redux";
import {CounterRepository} from "../../domain/repositories/CounterRepository";

export interface OwnProps {
  serverUrl: string;
  initialCount: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => ({
  count: ownProps.initialCount + state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps) => ({
  presenter: new CounterPresenter(dispatch, new CounterRepository(ownProps.serverUrl))
});

export const CounterPage = connect(mapStateToProps, mapDispatchToProps)(
  CounterPageComponent
);
