import React from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFedback = e => {
    e.preventDefault();

    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };
  render() {
    const options = ['good', 'neutral', 'bad'];
    return (
      <div className={styles.main}>
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleLeaveFedback}
            />
          </Section>
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
