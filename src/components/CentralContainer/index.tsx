import * as React from "react";
import * as styles from "./styles.css";

export class CentralContainer extends React.Component {
  render() {
    return (
      <div className={styles.verticalCenter}>
        <div className={styles.horizontalCenter}>{this.props.children}</div>
      </div>
    );
  }
}
