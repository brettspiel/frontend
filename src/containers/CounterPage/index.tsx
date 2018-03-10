import { connect } from "react-redux";
import { CounterPageComponent } from "./CounterPageComponent";
import { StoreState } from "../../modules";
import { CounterActionDispatcher } from "./CounterActionDispatcher";
import { Dispatch } from "redux";

export interface OwnProps {
  initialCount: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => ({
  count: ownProps.initialCount + state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  counterActionDispatcher: new CounterActionDispatcher(dispatch)
});

export const CounterPage = connect(mapStateToProps, mapDispatchToProps)(
  CounterPageComponent
);
