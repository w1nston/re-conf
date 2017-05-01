import { compose, mapProps } from 'recompose';
import addHours from 'date-fns/add_hours';
import parse from 'date-fns/parse';
import getDate from 'date-fns/get_date';
import compareAsc from 'date-fns/compare_asc';
import Schedule from '../components/Schedule';

const extractEvents = props => {
  const { data, ...rest } = props;
  const { events } = data;
  return {
    events,
    ...rest,
  };
};

const extractScheduleObject = props => {
  const { events, ...rest } = props;
  const [schedule] = events;
  return {
    schedule,
    ...rest,
  };
};

const extractSchedule = props => {
  const { schedule } = props.schedule;
  return {
    ...props,
    schedule,
  };
};

const transformSchedule = props => {
  const weekSchedule = props.schedule.reduce((acc, event) => {
    const date = addHours(parse(event.startDate), 2);
    const day = getDate(date);
    const e = {
      ...event,
      startDate: date,
    };

    if (acc[day]) {
      acc[day].push(e);
    } else {
      acc[day] = [e];
    }

    return acc;
  }, {});

  return {
    ...props,
    schedule: weekSchedule,
  };
};

const sortSchedule = props => {
  const ascending = (x, y) => compareAsc(x.startDate, y.startDate);
  const { schedule } = props;
  Object.keys(schedule).forEach(day => schedule[day].sort(ascending));
  return {
    ...props,
    schedule,
  };
};

export default compose(
  mapProps(extractEvents),
  mapProps(extractScheduleObject),
  mapProps(extractSchedule),
  mapProps(transformSchedule),
  mapProps(sortSchedule)
)(Schedule);
