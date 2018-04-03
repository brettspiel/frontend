import * as React from "react";
import * as io from "socket.io-client";
import { connect } from "react-redux";
import { State } from "../state";
import { ReduxState } from "../store";

export interface Props {
  server: State["server"];
}

export const withSocket = (
  render: (socketManager: SocketIOClient.Manager) => React.ReactNode,
  fallbackRender: () => React.ReactNode = () => null
) => {
  class WithSocket extends React.Component<Props> {
    render() {
      const { server } = this.props;
      if (!server) {
        return fallbackRender();
      }

      const manager = io.Manager(
        `${server.protocol}//${server.host}:${server.port}`
      );
      return render(manager);
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    server: state.app.server
  });

  return React.createElement(connect(mapStateToProps)(WithSocket));
};
