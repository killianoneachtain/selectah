import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <code>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </code>
    );
  }
}
