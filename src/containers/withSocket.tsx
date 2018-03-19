import * as React from "react";
import * as io from "socket.io-client";
import { connect } from "react-redux";
import {StoreState} from "../modules";
import {ServerState} from "../modules/server";

export interface Props {
  server: ServerState;
}

export const withSocket = <P extends object>(render: (socketManager: SocketIOClient.Manager) => React.ReactElement<P>) => {
  class WithSocket extends React.Component<Props> {
    render() {
      const { server } = this.props;

      const manager = io.Manager(
        `${server.protocol}//${server.host}:${server.port}`
      )
      return render(manager);
    }
  }

  const mapStateToProps = (state: StoreState) => ({
    server: state.server
  });

  return connect(mapStateToProps)(WithSocket);
}
