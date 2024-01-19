import React from 'react';

class Statistics extends React.Component {
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
      <div>
        <button onClick={() => this.increment()}>Good</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total:</li>
          <li>Positive feedback:</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
