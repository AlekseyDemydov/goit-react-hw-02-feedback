import React from 'react';
import Controls from '../controls/controls';
import Statistics from '../statistics/statistics';
import styles from '../../css/formFeed.module.css';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };
  // show = () => {
  //   this.setState({ visible: true });
  // };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        visible: true,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        visible: true,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        visible: true,
      };
    });
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
        {this.state.visible ? (
          <div>
            <Statistics
              sGood={this.state.good}
              sNeutral={this.state.neutral}
              sBad={this.state.bad}
            />
          </div>
        ) : (
          'There is no feedback'
        )}
        {/* {this.state.visible && (
          <div>
            <Statistics
              sGood={this.state.good}
              sNeutral={this.state.neutral}
              sBad={this.state.bad}
            />
          </div>
        )} */}
      </div>
    );
  }
}

export default Feedback;
