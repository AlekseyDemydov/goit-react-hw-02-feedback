import React from 'react';
import Controls from '../controls/controls';
import Statistics from '../statistics/statistics';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };
  render() {
    return (
      <div className={styles.box}>
        <h1>Please leave feedback</h1>
        <div>
          <Controls
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </div>

        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <div>
            <Statistics
              posProc={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
              sGood={this.state.good}
              sNeutral={this.state.neutral}
              sBad={this.state.bad}
            />
          </div>
        ) : (
          'There is no feedback'
        )}
      </div>
    );
  }
}

export default Feedback;
