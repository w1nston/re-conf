import React from 'react';
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'
import './Day.css';

export default function Day({ events = [] }) {
  return (
    <table className="day__table">
      <thead>
        <tr className="day__header-row">
          <th>When</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr className="day__row"  key={event.id}>
            <td className="day__cell">{format(event.startDate, 'HH:mm', { locale: frLocale })}</td>
            <td className="day__cell">{event.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
