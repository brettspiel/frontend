import * as React from "react";
import * as io from "socket.io-client";
import { connect } from "react-redux";
import {StoreState} from "../modules";
import {ServerState} from "../modules/server";

export interface Props {
  server: ServerState;
}

export const withSocket = (
  render: (socketManager: SocketIOClient.Manager) => React.ReactNode,
  fallbackRender: () => React.ReactNode = () => null,
) => {
  class WithSocket extends React.Component<Props> {
    render() {
      const {server} = this.props;
      if (!server.host || !server.port || !server.protocol) return fallbackRender();

      const manager = io.Manager(
        `${server.protocol}//${server.host}:${server.port}`
      )
      return render(manager);
    }
  }

  const mapStateToProps = (state: StoreState) => ({
    server: state.server
  });

  return React.createElement(connect(mapStateToProps)(WithSocket));
}
