import React from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';

const ItemTitle = styled.h2`
  font-size: 1.25rem;
`;

const Speaker = styled.span`
  margin-right: 1rem;
`;

export default function Day({ items = [] }) {
  return (
    <table>
      <thead />
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{format(item.startDate, 'HH:mm')}</td>
            <td>
              <ItemTitle>{item.title}</ItemTitle>
              {item.speakers &&
                item.speakers.map(speaker => (
                  <Speaker key={speaker.id}>{speaker.name}</Speaker>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
