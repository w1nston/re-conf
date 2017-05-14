import React, { Component } from 'react';
import SwipeableView from 'react-swipeable-views';
import styled from 'styled-components';
import Day from './Day';

export const Title = styled.h1`
  font-family: 'Love Ya Like A Sister', 'Arial', 'sans-serif';
  font-size: 34px;
`;

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.days = props.schedule ? Object.keys(props.schedule) : [];
    this.state = {
      title: this.days[0],
    };
  }

  changeTitle = newIndex =>
    this.setState(() => ({ title: this.days[newIndex] }));

  render() {
    return (
      <section>
        <Title>May {this.state.title}</Title>
        <SwipeableView onChangeIndex={this.changeTitle}>
          {this.days.map(day => (
            <Day key={day} items={this.props.schedule[day]} />
          ))}
        </SwipeableView>
      </section>
    );
  }
}
