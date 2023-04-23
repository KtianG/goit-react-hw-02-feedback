import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
