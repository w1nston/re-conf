import React from 'react';
import { branch, compose, mapProps, renderComponent } from 'recompose';
import { gql, graphql } from 'react-apollo';
import Loading from '../components/Loading';
import Schedule from '../components/Schedule';
import parse from 'date-fns/parse';
import getDate from 'date-fns/get_date';
import addHours from 'date-fns/add_hours';

const withLoading = branch(
  props => props.data.loading,
  renderComponent(Loading)
);

const query = gql`
  query conferenceSchedule {
    events(slug: "reacteurope-2017") {
      schedule {
        id,
        title
        description
        startDate
        type
        length
        speakers {
          id,
          name
          avatarUrl
          twitter,
        }
      }
    }
  }
`;

const extractEvents = mapProps(props => ({ events: props.data.events }));
const extractSchedule = mapProps(props => ({
  schedule: props.events[0].schedule,
}));
const transformSchedule = mapProps(props => ({
  schedule: props.schedule.reduce((acc, event) => {
    const day = getDate(addHours(parse(event.startDate), 2));
    if (acc[day]) {
      acc[day].push(event);
    } else {
      acc[day] = [event];
    }
    return acc;
  }, {}),
}));

const ascending = (x, y) => {
  if (x.startDate < y.startDate) return -1;
  if (x.startDate > y.startDate) return 1;
  return 0;
};

const sortSchedule = mapProps(props => ({
  schedule: Object.keys(props.schedule).reduce((acc, day) => {
    acc[day] = props.schedule[day].sort(ascending);
    return acc;
  }, {}),
}));

const App = ({ schedule }) => <Schedule schedule={schedule} />;

export default compose(
  graphql(query),
  withLoading,
  extractEvents,
  extractSchedule,
  transformSchedule,
  sortSchedule
)(App);
