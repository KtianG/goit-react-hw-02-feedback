import React, { Component } from 'react';
import css from './App.module.css';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      const percentage = Math.round(
        (100 * this.state.good) / this.countTotalFeedback()
      );
      return percentage;
    }
  };

  onLeaveFeedback = value => {
    switch (value) {
      case 1:
        this.setState({ good: this.state.good + 1 });
        break;

      case 0:
        this.setState({ neutral: this.state.neutral + 1 });
        break;

      case -1:
        this.setState({ bad: this.state.bad + 1 });
        break;

      default:
        console.log('error in handleFeedback value');
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
