import React, { Component } from 'react';

import Container from './components/Container';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';



class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good === 0 ? 0 : Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (

      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is not feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
        </Container>
      
    );
  }
}

export default App;