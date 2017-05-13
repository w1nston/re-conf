import React from 'react';
import { shallow } from 'enzyme';
import Schedule, { Title } from '../Schedule';

describe('<Schedule/>', () => {
  it('renders a title', () => {
    const component = shallow(<Schedule />);
    expect(component.find(Title).length).toBe(1);
  });
});
