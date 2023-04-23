import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        <button onClick={() => onLeaveFeedback(1)}>Good</button>
        <button onClick={() => onLeaveFeedback(0)}>Neutral</button>
        <button onClick={() => onLeaveFeedback(-1)}>Bad</button>
      </div>
    );
  }
}
