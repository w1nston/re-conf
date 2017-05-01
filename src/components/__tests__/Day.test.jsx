import React from 'react';
import { shallow } from 'enzyme';
import Day from '../Day';

describe('<Day/>', () => {
  it('renders', () => {
    const component = shallow(<Day />);
    expect(component).toMatchSnapshot();
  });
});
