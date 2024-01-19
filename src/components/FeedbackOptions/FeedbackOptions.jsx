import css from './FeedbackOptions.module.css';
import React from 'react';

class FeedbackOptions extends React.Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  increment() {
    this.setState({
      good: this.state.good + 1,
    });
  }

  render() {
    return (
      <div className={css.btn}>
        <button className={css.btn_good} onClick={() => this.increment}>
          Good
        </button>
        <button className={css.btn_neutral}>Neutral</button>
        <button className={css.btn_bad}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
