import React from 'react';

class StateHandler extends React.Component {
  state = this.props.defaultState;

  updateState = newState => {
    this.setState(newState);
  };

  render() {
    return this.props.children({
      setState: this.updateState,
      state: this.state,
    });
  }
}

export default StateHandler;
