import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Day from './Day';

const DAY = {
  0: 'May 16',
  1: 'May 17',
  2: 'May 18',
  3: 'May 19',
  4: 'May 20',
};

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: DAY[0],
    };
  }

  changeTitle = index => this.setState(() => ({ title: DAY[index] }));

  render() {
    const { schedule = {} } = this.props;
    return (
      <section>
        <h1>{this.state.title}</h1>
        <SwipeableViews onChangeIndex={this.changeTitle}>
          <Day events={schedule[16]} />
          <Day events={schedule[17]} />
          <Day events={schedule[18]} />
          <Day events={schedule[19]} />
          <Day events={schedule[20]} />
        </SwipeableViews>
      </section>
    );
  }
}
