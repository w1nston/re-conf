import React from 'react';
import { shallow } from 'enzyme';
import Schedule from '../Schedule';

describe('<Schedule/>', () => {
  it('renders', () => {
    const component = shallow(<Schedule />);
    expect(component).toMatchSnapshot();
  });
});
