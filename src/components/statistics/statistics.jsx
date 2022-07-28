import React from 'react';
import styles from '../../css/formFeed.module.css';

const Statistics = ({ sGood, sNeutral, sBad }) => (
  <div className={styles.state}>
    <span>good: {sGood}</span>
    <span>neutral: {sNeutral}</span>
    <span>bad: {sBad}</span>
    <span>total: {sGood + sNeutral + sBad}</span>
    <span>
      positive feedback: {Math.round((100 / (sGood + sNeutral + sBad)) * sGood)}
      %
    </span>
  </div>
);
export default Statistics;
