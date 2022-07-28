import React from 'react';
import styles from '../../css/formFeed.module.css';

const Statistics = ({ sGood, sNeutral, sBad, total, posProc }) => (
  <div className={styles.state}>
    <span>good: {sGood}</span>
    <span>neutral: {sNeutral}</span>
    <span>bad: {sBad}</span>
    <span>total: {total}</span>
    <span>positive feedback: {Math.round(posProc)}%</span>
  </div>
);
export default Statistics;
