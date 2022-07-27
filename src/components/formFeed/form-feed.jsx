import React from 'react';
import styles from './formFeed.module.css';
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

  render() {
    return (
      <div className={styles.box}>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        <h2>Statistics</h2>
        <div className={styles.state}>
          <span>good: {this.state.good}</span>
          <span>neutral: {this.state.neutral}</span>
          <span>bad: {this.state.bad}</span>
          <span>
            total:
            {this.state.good + this.state.neutral + this.state.bad}
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
